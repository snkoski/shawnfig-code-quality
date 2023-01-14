module.exports = {
	root: true,
	extends: [
		"eslint:recommended",
		"plugin:import/errors",
		"plugin:react/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:react-hooks/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"prettier"
	],
	plugins: [
		"react",
		"import",
		"jsx-a11y",
		"@typescript-eslint"
	],
	parserOptions: {
		"project": "./tsconfig.json",
		"ecmaVersion": 2022,
		"parser": "@typescript-eslint/parser",
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true
		}
	},
	rules: {
		"react/prop-types": 0,
		"react/react-in-jsx-scope": 0,
		"@typescript-eslint/no-empty-functions": 0,
	},
	env: {
		"es6": true,
		"browser": true,
		"node": true
	},
	settings: {
		"react": {
			"version": "detect"
		},
		"import/parsers": {
			"@typescript-eslint/parser": [
				".ts",
				".tsx"
			]
		},
		"import/resolver": {
			"typescript": {
				"alwaysTryTypes": true
			}
		}
	}
}