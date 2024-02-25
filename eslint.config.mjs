/* eslint-disable import/no-extraneous-dependencies */
// @ts-nocheck

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
	{
		// config with just ignores is the replacement for `.eslintignore`
		ignores: [
			"**/build/**",
			"**/dist/**",
			".next/**",
			"postcss.config.js",
			"prettier.config.js",
			"node_modules/**",
			"eslint.config.mjs",
		],
	},
	eslint.configs.recommended,
	{
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				project: true,
			},
		},
		plugins: {
			"@typescript-eslint": tseslint.plugin,
		},
		rules: {
			"@typescript-eslint/no-unsafe-argument": "error",
			"@typescript-eslint/no-unsafe-assignment": "error",
			"@typescript-eslint/no-unsafe-call": "error",
			"@typescript-eslint/no-unsafe-member-access": "error",
			"@typescript-eslint/no-unsafe-return": "error",
		},
	},
	{
		// disable type-aware linting on JS files
		files: ["**/*.js", "**/*.jsx"],
		...tseslint.configs.disableTypeChecked,
	},
);
