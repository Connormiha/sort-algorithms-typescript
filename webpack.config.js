'use strict';

module.exports = {
	entry: './test/sort.ts',
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
	}
};
