import typescriptEslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'path';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    ...compat.extends(
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier'
    ),
    {
        plugins: {
            '@typescript-eslint': typescriptEslint,
            prettier,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },

            parser: tsParser,
            ecmaVersion: 2020,
            sourceType: 'module',
        },

        rules: {
            'no-debugger': 'off',
            'no-console': 0,
            'class-methods-use-this': 'off',
        },
    },
];
