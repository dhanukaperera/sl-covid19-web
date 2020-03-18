const { override, addDecoratorsLegacy, useEslintRc } = require("customize-cra");

/* config-overrides.js */
module.exports = override(addDecoratorsLegacy(), useEslintRc());
