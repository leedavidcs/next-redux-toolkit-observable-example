const withPlugins = require("next-compose-plugins");
const withLinaria = require("next-linaria");

const config = {
	target: "experimental-serverless-trace",
	webpack: (config) => {
		return config;
	}
};


module.exports = withPlugins([
	withLinaria
], config);
