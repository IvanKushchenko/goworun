const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
	entry: {
		app: ['./assets/js/index.js', './assets/scss/index.scss']
	},
	output: {
		filename: 'js/script.js',
		path: path.resolve(__dirname, 'public')
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': path.join(__dirname, 'assets'),
			'~': path.join(__dirname, 'node_modules')
		}
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/style.css'
		}),
		new HtmlWebpackPlugin({
			template: './assets/pug/index.pug',
			minify: false,
			hash: true
		}),
		new HtmlWebpackPlugin({
			filename: 'programs.html',
			template: './assets/pug/programs.pug',
			minify: false,
			hash: true
		}),
		new HtmlWebpackPlugin({
			filename: 'events.html',
			template: './assets/pug/events.pug',
			minify: false,
			hash: true
		}),
		new HtmlWebpackPlugin({
			filename: 'about.html',
			template: './assets/pug/about.pug',
			minify: false,
			hash: true
		}),
		new HtmlWebpackPlugin({
			filename: 'corp-training.html',
			template: './assets/pug/corp-training.pug',
			minify: false,
			hash: true
		}),
		new HtmlWebpackPlugin({
			filename: 'online-courses.html',
			template: './assets/pug/online-courses.pug',
			minify: false,
			hash: true
		}),
		new VueLoaderPlugin(),
		/* Other pages */
		// new HtmlWebpackPlugin({
		// 	filename: 'contacts.html',
		// 	template: './assets/pug/contacts.pug'
		// }),
		new FileManagerPlugin({
			onEnd: {
				copy: [
					{source: 'public', destination: 'docs'}
				]
			}
		})
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				include: [
				    path.resolve(__dirname, "assets/scss")
				],
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: "../"
						}
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							url: true
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							outputStyle: 'expanded'
						}
					}
				]
			},
			{
				test: /\.pug$/,
				use: [{
					loader: 'pug-loader',
					options: {
						pretty: true
					}
				}]
			},
			{
				test: /\.(svg|png|jpe?g|gif)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: 'img/[name].[ext]'
					}
				}],
			},
			{
				test: /\.(woff2?|eot|ttf|otf)$/,
				use: [ {
					loader: 'file-loader',
					options:{
						name: 'fonts/[name].[ext]'
					}
				}],

			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'

			}
			
		]
	}
}