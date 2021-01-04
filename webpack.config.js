const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	entry: {
		index: path.resolve(__dirname, 'src','js','index.js'),
	},
	mode: "development",
     devServer: {
	    open: true,
	    hot: true,
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
					'style-loader',
					'css-loader', 
				],
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].css'
		})
	],

}