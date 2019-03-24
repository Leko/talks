---
name: "new-slide"
description: "Create new slide"
message: "Please enter slide slug."
root: "."
output: "**/*"
ignore: []
---

# `{{ input }}.mdx`

```md
import { Head } from "mdx-deck";
import { Split } from "mdx-deck/layouts";
import { CodeSurfer } from "mdx-deck-code-surfer";
import vsDarkPlus from "prism-react-renderer/themes/vsDarkPlus";
import { Meta } from "./Meta";
export { default as theme } from "./theme";

<Head>
  <Meta
    title="TODO: Title"
    description="TODO: 勉強会名"
    slug="{{ input }}"
    publishedAt={new Date(TODO: 勉強会の日付)}
  />
  <link
    href="https://fonts.googleapis.com/earlyaccess/notosansjapanese.css"
    rel="stylesheet"
  />
</Head>

# TODO: Title

[TODO: 勉強会名](TODO: 勉強会 URL)  
Leko

---

## Leko

<img src="/assets/self_avatar.png" height="250" />
<img src="/assets/self_bio.png" height="250" />
<img src="/assets/self_contributions.png" height="250" />

Node.js, React, React Native  
言語の中身読んだり AST 解析で遊ぶのが好き

---

## 話すこと

TBA

---

# おわり
```
