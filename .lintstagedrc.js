module.exports = {
  '*.{ts,tsx}': ['eslint --max-warnings=0 --fix', 'prettier -cw', 'jest --passWithNoTests --findRelatedTests'],
  '*.{css,scss}': ['stylelint --max-warnings=0 --fix', 'prettier -cw'],
  '*.js': ['prettier -cw'],
};
