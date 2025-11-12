import atImport from "postcss-import";
import nesting from "postcss-nesting";
import cssVariables from "postcss-css-variables";
import customMedia from "postcss-custom-media";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

export default {
  plugins: [atImport, nesting, cssVariables({
    preserve: (declaration) => declaration.value.includes("--font"),
  }), customMedia, autoprefixer, cssnano],
};
