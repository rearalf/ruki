const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
	entry: [ 'react-hot-loader/patch', './src/index.js' ],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	},
	resolve: {
		extensions: [ '.js', '.jsx' ],
		alias: {
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@services': path.resolve(__dirname, 'src/services'),
			'@static': path.resolve(__dirname, 'src/assets/static'),
			'@styles': path.resolve(__dirname, 'src/assets/styles'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@hooks': path.resolve(__dirname, 'src/hooks'),
			'react-dom': '@hot-loader/react-dom'
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(s[ac]ss|css)$/i,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				loader: 'file-loader',
				options: {
					outputPath: 'assets/img',
					name: '[name].[ext]',
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: 'index.html',
			favicon: './public/favicon.ico',
		}),
		new CleanWebpackPlugin(),
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		historyApiFallback: true,
		open: true,
	},
};
