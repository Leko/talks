import React from "react";

export const Meta = ({
  title,
  description,
  locale = "ja_JP",
  publishedAt,
  slug
}) => (
  <React.Fragment>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-34171537-5"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-34171537-5');
        `
      }}
    />
    <meta property="og:locale" content={locale} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="article" />
    <meta property="og:url" content={`https://talks.leko.jp/${slug}/`} />
    <meta property="og:image" content={`https://talks.leko.jp/${slug}.png`} />
    <meta
      property="article:published_time"
      content={publishedAt.toISOString()}
    />
    <meta property="article:author" content="Leko" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta
      name="twitter:image:src"
      content={`https://talks.leko.jp/${slug}.png`}
    />
    <meta name="twitter:url" content={`https://talks.leko.jp/${slug}/`} />
    <meta name="viewport" content="width=1400" />
    <link
      rel="alternate"
      type="application/json+oembed"
      href={`https://talks.leko.jp/${slug}/oembed.json`}
      title={title}
    />
    <title>{title}</title>
  </React.Fragment>
);
