const path = require("path");

const GraphData = require("dependency-builder-sprinklr/statsGeneratorPlugin");

module.exports = {
  entry: "./components/Editors/MultilineEditor.js",

  mode: "development",

  output: {
    path: path.join(__dirname, "/dist"),

    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.css$/,

        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(png | jpe?g | svg | gif)$/,

        use: [
          {
            loader: "file-loader",
          },
        ],
      },

      {
        test: /\.?js$/,

        exclude: /node_modules/,

        use: {
          loader: "babel-loader",

          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },

      {
        test: /\.s[ac]ss$/i,

        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  plugins: [new GraphData()],
};
