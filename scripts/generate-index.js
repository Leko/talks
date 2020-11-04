const fs = require("fs");
const path = require("path");
const sortBy = require("lodash/sortBy");
const chunk = require("lodash/chunk");
const cheerio = require("cheerio");

const slides = fs
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split(" ")
  .map(slug => {
    const thumbnailUrl = `/${slug}.png`;
    const pdfUrl = `/${slug}.pdf`;
    const htmlUrl = `/${slug}/`;
    const htmlPath = path.join(__dirname, "..", "dist", slug, "index.html");
    const html = fs.readFileSync(htmlPath, "utf8");
    const $ = cheerio.load(html);
    const title = $("title").text();
    const subtitle = $('meta[property="og:description"]').attr("content");
    const publishedTime = new Date(
      $('meta[property="article:published_time"]').attr("content")
    );

    return {
      thumbnailUrl,
      pdfUrl,
      htmlUrl,
      title,
      subtitle,
      publishedTime
    };
  });

const slidesHTML = chunk(
  sortBy(slides, slide => -slide.publishedTime.getTime()),
  3
).map(
  slides =>
    '<div class="columns">' +
    slides
      .map(
        ({ thumbnailUrl, pdfUrl, htmlUrl, title, subtitle, publishedTime }) => {
          return `
            <a href="${htmlUrl}" title="${title}" class="column is-one-third">
              <div class="card">
                <div class="card-image">
                  <figure class="image">
                    <img src="${thumbnailUrl}" alt="${title}">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">${title}</p>
                      <p class="subtitle is-6">${subtitle}</p>
                    </div>
                  </div>
                  <div class="content">
                    <time datetime="${publishedTime.getFullYear()}-${publishedTime.getMonth() +
            1}-${publishedTime.getDate()}">${publishedTime.toLocaleDateString()}</time>
                  </div>
                </div>
              </div>
            </a>
          `;
        }
      )
      .join("\n") +
    "</div>"
);

const template = fs.readFileSync(
  path.join(__dirname, "..", "src", "assets", "index.html"),
  "utf8"
);

fs.writeFileSync(
  path.join(__dirname, "..", "dist", "talks.json"),
  JSON.stringify(slides),
  "utf8"
);

fs.writeFileSync(
  path.join(__dirname, "..", "dist", "index.html"),
  template.replace("{%REPLACE_ME%}", slidesHTML.join("\n")),
  "utf8"
);
