module.exports = {
  mode: "production",
  module: {
    rules: [{
      test: /\.css/,
      use: ["style-loader", "css-loader", "postcss-loader"],
    }],
  },
  plugins: [
    new (require("html-webpack-plugin"))({ template: "./src/index.html" }),
    new (require("html-inline-script-webpack-plugin"))(),
  ],
}
