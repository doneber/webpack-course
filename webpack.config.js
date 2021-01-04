const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		index: path.resolve(__dirname, 'src','js','index.js'),
		greetings: path.resolve(__dirname, 'src','js','greetings.js'),
	},
	mode: "development",
    devServer: {
	    open: true,
	    port: 8080,
  	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					'css-loader', 
				],
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].css'
		})
	],

}