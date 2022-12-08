module.exports = {
  'src/!(openapi)/**/*.{js,jsx,ts,tsx}': [
    'eslint . --ext .js,.jsx,.ts,.tsx --color --max-warnings=0',
    'yarn test --bail --watchAll=false --findRelatedTests --passWithNoTests',
    'detect-secrets-launcher',
    () => 'yarn build'
  ],
  '*.{js,jsx,ts,tsx,json,css,js}': ['prettier --write']
}
