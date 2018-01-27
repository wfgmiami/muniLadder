const path = require('path');
const webpack = require('webpack');

module.exports = {
		entry: "./src/main/js/browser/react/index.js",
		output: {
			path:__dirname,
			filename:"./src/main/resources/static/build/bundle.js",
			publicPath: '/dev'
		},
		devtool:"source-map",
		resolve:{
			alias: {
				'stompjs': path.join(__dirname, '/node_modules/stompjs/lib/stomp.js'),
			}
		},
		module: {
			  loaders: [
	              { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
	              { test: /\.css$/, loader: 'style-loader!css-loader' }
	          ]
		},
		plugins: [
		    new webpack.optimize.OccurrenceOrderPlugin(),
		    new webpack.HotModuleReplacementPlugin(),
		    new webpack.NoEmitOnErrorsPlugin(),
		  
		  ],
};