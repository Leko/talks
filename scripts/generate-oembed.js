const [dir] = process.argv.slice(2);
const oEmbed = {
  type: "rich",
  version: "1.0",
  provider_name: "talks.leko.jp",
  provider_url: "https://talks.leko.jp",
  title: "",
  width: 658,
  height: 408,
  html: `<iframe style="width: 100%; overflow: hidden;" src="https://talks.leko.jp/${dir}/index.html" width="658" height="408" frameborder="0" scrolling="no" ></iframe>`
};

console.log(JSON.stringify(oEmbed));
