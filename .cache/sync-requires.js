const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\Arseniy\\Projects\\gatsby\\gatsby-crash-course\\src\\pages\\404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("C:\\Users\\Arseniy\\Projects\\gatsby\\gatsby-crash-course\\src\\pages\\about.js"))),
  "component---src-pages-contact-tsx": hot(preferDefault(require("C:\\Users\\Arseniy\\Projects\\gatsby\\gatsby-crash-course\\src\\pages\\contact.tsx"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\Arseniy\\Projects\\gatsby\\gatsby-crash-course\\src\\pages\\index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("C:\\Users\\Arseniy\\Projects\\gatsby\\gatsby-crash-course\\src\\pages\\page-2.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("C:\\Users\\Arseniy\\Projects\\gatsby\\gatsby-crash-course\\src\\pages\\using-typescript.tsx")))
}

