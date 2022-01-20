---
layout: default.njk
title: Nunjucks Components from a Design System
---

# {{ title }}

This repository contains a demo of a simple [Eleventy](https://www.11ty.dev/) powered website, using [Nujucks](https://mozilla.github.io/nunjucks/) and [Sass](https://sass-lang.com/), and exploiting a Design System exposing their components in Nunjucks.

It uses the [‹div›RIOTS' Nunjucks Tech Sample Starter kit](https://github.com/divriots/starter-nunjucks) as a Design System.

## Getting Started

Run the project locally:

1. Clone the project:

   ```sh
   $ git clone https://github.com/divriots/demo-nunjucks-eleventy.git
   $ cd demo-nunjucks-eleventy
   ```

2. Install the NPM dependencies

   ```sh
   $ npm install
   ```

3. Run the app in *development* mode task so you can live-reload it during development:

   ```sh
   $ npm start
   ```

4. Point your browser at [http://localhost:8080/README](http://localhost:8080/README). You'll get access to this very page, in wrapped in the [default Nunjucks layout](https://github.com/divriots/demo-nunjucks-eleventy/blob/main/_includes/default.njk).

## How it works?

This project uses Nunjucks templates. To be able to import Design System resources and components, it declares in the `.eleventy.js` js config an import path for Nunjucks pointing to the Design System in the `node_modules` folder:

```js
new Nunjucks.FileSystemLoader([
  "_includes",
  "node_modules/@backlight-dev/divriots.starter-nunjucks/",
])
```

This way, you can `import`/`include` any component from the Design System as any regular Nunjucks files:

<!--
  We use raw Nunjucks instruction here, so the snippet is rendered by
  the 11ty app; but we also wrap it in HTML comments, so Github won't
  render it in the README preview.
-->
<!-- {% raw %} -->
```njk
{% import "button/src/button.njk" as Button %}
{{ Button.btn('Hello Rioters 🤘 !') }}
```
<!-- {% endraw %} -->

## Resources

- [Live Coding Session implementing this Demo](https://youtu.be/OQOv0ugW05o)
- [Nunjucks Start kit in Backlight](https://backlight.dev/doc/G9KcHezG3XVGa3tjILJI/readme/doc/index.njk?p=doc)

---

The button below 👇 comes from the Design System and is embedded by the default layout, as well as the theme. Click it!
