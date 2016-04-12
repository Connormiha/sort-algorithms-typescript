'use strict';

module.exports = {
	entry: './src/app.ts',
	output: {
		path: `${__dirname}/build`,
		filename: 'test/sort.ts'
	},
	resolve: {
		modulesDirectories: ['node_modules'],
		extensions:         ['', '.js', '.ts']
	},
	module: {
		loaders: [
			{
				test: /\.ts$/,
				loader: 'ts',
				exclude: /node_modules/
			}
		],
	},
	devServer: {
		host: 'localhost',
		post: 8080
	}
};
