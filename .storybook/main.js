const path = require("path");

module.exports = {
    stories: ["../packages/core/src/**/*.stories.@(tsx|ts|jsx|js|mdx)"],
    // Add any Storybook addons you want here: https://storybook.js.org/addons/
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-a11y',
        '@storybook/addons'
    ],
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"],
            include: path.resolve(__dirname, "../")
        });

        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            loader: require.resolve("babel-loader"),
            options: {
                presets: [["react-app", { flow: false, typescript: true }]]
            }
        });
        config.resolve.extensions.push(".ts", ".tsx");
        /*config.resolve.push({
            extensions: ['.ts', '.tsx'],
            /!*alias: {
                '@tresdoce-ui/brand': path.resolve(__dirname,'../','packages/brand/src')
            },*!/
        })*/

        return config;
    }
};
