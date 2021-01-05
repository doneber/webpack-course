const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

module.exports = {
	entry: {
		index: path.resolve(__dirname, 'src','js','index.js'),
		contacts: path.resolve(__dirname, 'src','js','contacts.js'),
	},
	mode: "production",
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
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader', 
					'sass-loader'
				],
			},
			{
				test: /\.styl$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader', 
					'stylus-loader'
				],
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader', 
					'less-loader'
				],
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						},
					},
					'postcss-loader',
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
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
			chunkFilename: 'css/[id].css'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: 'New React App',
			template: path.resolve(__dirname,'index.html'),
		}),
		new webpack.DllReferencePlugin({
			manifest: require('./modules-manifest.json')
		})
	],
}