const path = require('path')
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
				test: /\.js$/,
				use: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader', 
				],
			},
			{
				test: /\.jpg|png|gif|svg|mp4|webm$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 90000,
					},
				},

			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: 'New React App',
			template: path.resolve(__dirname,'index.html'),
		}),
	],

}