module.exports = {
    ident: 'postcss',
    plugins: [
        require("postcss-import"),
        require("tailwindcss")("./tailwind.config.js"), 
        require("autoprefixer"), 
        require("cssnext")
    ],
};