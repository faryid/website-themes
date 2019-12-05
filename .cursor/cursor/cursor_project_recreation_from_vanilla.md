# Project recreation from vanilla to React
_Exported on 4/5/2026 at 11:48:02 GMT+7 from Cursor (3.0.9)_

---

**User**

Plan a project recreate from @website-themes/2019/portfolio/avana/vanilla to @website-themes/2019/portfolio/avana/react-project using React with cra, assume the project is created in 2019 using react 2019 standard and best practices

---

**Cursor**


Exploring the vanilla portfolio and target `react-project` layout to draft an accurate migration plan.




Checking vanilla page count and `blog-details` / `works-details` structure:




Noting `react-project` doesn't exist; `react/js` is a partial CRA 3 + React 16.8 scaffold with placeholder `App.js` and assets copied from the theme. Creating a migration plan targeting the new folder and 2019-era conventions.



---

**User**

Implement the plan as specified, it is attached for your reference. Do NOT edit the plan file itself.

To-do's from the plan have already been created. Do not create them again. Mark them as in_progress as you work, starting with the first one. Don't stop until you have completed all the to-dos.

---

**Cursor**


Implementing the Avana → `react-project` migration: starting with scaffolding CRA and working through the remaining todos.




Replacing the modern CRA scaffold with the plan's React 16.8 + react-scripts 3 + react-router-dom v5 stack and implementing the full app.




Marking scaffold complete and migrating assets. Reading vanilla HTML files to build page components.




Creating core utilities, layout, pages, and updating entry files. Adding `src/components/Header.css` for the mobile nav overlay.




Here’s what was implemented for **Avana vanilla → `react-project`** (CRA 2019-style).

### Stack ([`react-project/package.json`](2019/portfolio/avana/react-project/package.json))
- **React 16.14**, **react-scripts 3.4.1**, **react-router-dom 5.3.4**
- Entry uses **`ReactDOM.render`** in [`src/index.js`](2019/portfolio/avana/react-project/src/index.js)

### Assets
- **`public/images`**, **`public/fonts`**, **`public/favicon.ico`**, **`public/js/**`** (jQuery, Bootstrap, Codrops effects) copied from vanilla
- Theme CSS under **`src/assets/styles/`** (including `effects/`), imported once from `index.js`
- Font Awesome resolves via **`src/assets/fonts/`** (webpack `url()` paths)
- Vanilla’s missing **`fonts.css`** is avoided by importing the real styles in JS (no broken `fonts.css` link)

### App structure
- **[`src/App.js`](2019/portfolio/avana/react-project/src/App.js)** — `BrowserRouter` (`basename={process.env.PUBLIC_URL || ''}`), `Switch`, `ScrollToTop`
- **[`src/components/Layout.js`](2019/portfolio/avana/react-project/src/components/Layout.js)** + **`Header`** / **`Footer`**
- **Header** — mobile nav with React state (`.is-open` + `#menu-button.open`); **`NavLink`** + **`activeClassName`**; Blog uses **`isActive`** so **`/blog/post`** highlights Blog

### Routes
| Path | Page |
|------|------|
| `/` | Home |
| `/blog` | Blog |
| `/blog/post` | Blog details |
| `/about` | About |
| `/contact` | Contact |
| `/work` | Work details |

### Behaviors
- **[`useAnimOnScroll`](2019/portfolio/avana/react-project/src/hooks/useAnimOnScroll.js)** — loads legacy scripts from `public/js` and runs **`AnimOnScroll`** on the first **`#grid`** (Home, Blog, Work)
- **[`Contact`](2019/portfolio/avana/react-project/src/pages/Contact.js)** — **`fetch`** POST (same fields as jQuery), **`id="submit"`** on the submit control; PHP sample at **`public/php/contactfrom.php`**
- **[`useGoogleMap`](2019/portfolio/avana/react-project/src/hooks/useGoogleMap.js)** — loads Maps JS with **`REACT_APP_GOOGLE_MAPS_API_KEY`**, styled map like vanilla **`maps.js`**

### Config
- **[`.env.example`](2019/portfolio/avana/react-project/.env.example)** — documents **`REACT_APP_GOOGLE_MAPS_API_KEY`** and **`REACT_APP_CONTACT_ENDPOINT`**
- **`.gitignore`** — includes **`.env`**

### Cleanup
- Removed default **`reportWebVitals`**, **`setupTests`**, **`index.css`**, **`logo.svg`**

**Note:** Terminal **`npm install` / `npm run build`** was skipped in this environment, so you should run locally:

```bash
cd 2019/portfolio/avana/react-project && npm install && npm run build
```

The lockfile already targets React 16 and `react-scripts` 3.4.1. For the map and PHP mail in dev, set the env vars from `.env.example` (CRA does not execute PHP; point **`REACT_APP_CONTACT_ENDPOINT`** at a real PHP host if needed).

