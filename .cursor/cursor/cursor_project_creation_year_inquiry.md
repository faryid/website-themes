# Project creation year inquiry
_Exported on 4/5/2026 at 11:47:07 GMT+7 from Cursor (3.0.9)_

---

**User**

Inspect @website-themes/2019/portfolio/avana/vanilla and explain to me whether this project is created in 2015 or 2018

---

**Cursor**


Searching the vanilla project for copyright dates, README notes, and other clues about when it was created.




Here is what the `vanilla` tree actually shows versus picking **2015** or **2018**.

## What the repo says

- **No file claims 2015 or 2018** as the project’s birth year. The WordPress-style header in `css/style.css` only has `Version: 1.0` and empty author/URI fields.
- **Footers** on the HTML pages say `© 2019 avana LLC` (for example in `index.html`), which matches living under `2019/portfolio/…` and is almost certainly a **collection/customization year**, not the original template date.
- **Placeholder content** uses **2016** (e.g. blog dates like “July 2016”, “January 26, 2016” in `blog.html` / `blog-details.html`), which is demo text, not proof of build year.

## What the dependencies imply

- **Bootstrap 3** and **jQuery 1.11.3** carry copyrights like **2011–2015** / **2015** — that’s the **vendor** timeline, not “when Avana was authored.”
- **Font Awesome 4.6.3** in `css/font-awesome.min.css` is a **2016**-era line (query string `v=4.6.3`), so the bundle as shipped is **not** a pure “everything frozen in 2015” snapshot.

So the stack is **mid-2010s**, not something that clearly pins to **2018**.

## External listing (same “Avana” / ThemeWagon / Design Stub lineage)

ThemeWagon’s page for this template lists **Release Date: 10 years ago** (relative to the page date). With your context date in **2026**, that reads as roughly **~2016**, not 2015 or 2018.

## Direct answer to “2015 or 2018?”

- **Neither year is stated in the vanilla project files** as the creation date.
- Evidence from **dependencies + a typical distributor listing** points to **around 2016 (sometimes cited as 2017)** — **between** your two options, **slightly closer to 2015** than to **2018** for a “first release” guess, but **2018 is a poor fit** for when this template was originally put together as a Bootstrap 3 / jQuery 1.11 package.

If you need a hard year for documentation, **~2016** (or **2017** if you trust a single third-party “June 2017” line from other sites) is more consistent than forcing **2015** or **2018**.

