module.exports = {
	parser: "babel-eslint",
	extends: "react-app",
	settings: {
		react: {
			version: "detect"
		}
	},
	plugins: ["prettier"],
	rules: {
		"prettier/prettier": "error",
		"no-debugger": "warn",
		"no-console": "warn"
	}
};
