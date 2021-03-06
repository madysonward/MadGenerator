module.exports = {
	dev-tool: "source-map",
	entry: [
		"./src/index.js"
	],
	output: {
		path: __dirname,
		publicPath: "/",
		output: "bundle.js"
	},
	module: {
		loaders: [{
			exclude: /node_modules/,
			loader: "babel",
			query: {
				presets: ["react", "es2015", "stage-1"]
			}
		}]
	},
	resolve: {
		extensions: ["", ".js", ".jsx"]
	},
	devServer: {
		historyApiFallback: true,
		contentBase: "/"
	}
};