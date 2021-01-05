const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	entry: {
		index: path.resolve(__dirname, 'src','js','index.js'),
		contacts: path.resolve(__dirname, 'src','js','contacts.js'),
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
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader', 
					'sass-loader'
				],
			},
			{
				test: /\.styl$/,
				use: [
					'style-loader',
					'css-loader', 
					'stylus-loader'
				],
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader', 
					'less-loader'
				],
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
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
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: 'New React App',
			template: path.resolve(__dirname,'index.html'),
		}),
	],
	optimization: {
		splitChunks: {
			chunks: 'all',
			minSize: 0, // el tamaño minimo que tenga que tener los archivos a agrupar
			 name: 'commons', // el modulo donde agrupara el código que se repite en todas las paginas
		}
	}

}