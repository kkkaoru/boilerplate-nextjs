/** @type import('stylelint').Configuration */
module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-recess-order', 'stylelint-config-prettier'],
  plugins: ['stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'plugin/declaration-block-no-ignored-properties': true,
  },
};
