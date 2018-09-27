import React from "react";

export const Meta = ({
  title,
  description,
  locale = "ja_JP",
  publishedAt,
  slug
}) => (
  <React.Fragment>
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
    <title>{title}</title>
  </React.Fragment>
);
