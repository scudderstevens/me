const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {
    // Add a filter using the Config API
    //eleventyConfig.addFilter( "myFilter", function() {});

    // https://www.11ty.io/docs/quicktips/inline-css/
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    // https://www.11ty.io/docs/quicktips/inline-css/
    eleventyConfig.addFilter("cssmin", function(code) {
        return new CleanCSS({}).minify(code).styles;
    });
    // You can return your Config object (optional).
    return {
        markdownTemplateEngine: "liquid",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        passthroughFileCopy: true,
        dir: {
            input: "blog",
            output: "_site",
            data: "_data"
        }
    }
};