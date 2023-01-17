module.exports = {
    tabWidth: 2,
    printWidth: 80,
    endOfLine: 'auto',
    arrowParens: 'avoid',
    trailingComma: 'none',
    semi: true,
    useTabs: false,
    singleQuote: true,
    bracketSpacing: true,
    plugins: [require('prettier-plugin-tailwindcss')],
    tailwindConfig: './tailwind.config.js',
};