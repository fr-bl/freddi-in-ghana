import atImport from "postcss-import";
import cssVariables from "postcss-css-variables";
import autoprefixer from "autoprefixer";
import nesting from "postcss-nesting";
import cssnano from "cssnano";

export default {
  plugins: [atImport, cssVariables, autoprefixer, nesting, cssnano],
};
