const path = require('path')

module.exports = {
	entry: {
		index: path.resolve(__dirname, 'src','js','index.js'),
		greetings: path.resolve(__dirname, 'src','js','greetings.js'),
	},
	mode: "development",
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
	}

}