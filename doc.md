# TS+React 框架搭建

## dotfiles

### init

```bash
mkdir project-name && cd project-name

git init
```

### .gitignore

```bash

```

### .editorconfig

```bash

```

### LICENSE

### package.json

```bash
yarn init -y
```

```json
{
  "name": "ts-react-frame",
  "version": "1.0.0",
  "main": "index.js",
  "author": "Martin-Shao <shaogucheng@hotmail.com>",
  "license": "MIT"
}
```

```json
{
  "name": "ts-react-frame",
  "version": "1.0.0",
  "main": "index.js",
  "author": {
    "name": "Martin Shaw",
    "url": "https://github/Martin-Shao",
    "email": "shaogucheng@hotmail.com"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/Martin-Shao/ts-react-frame"
  },
  "license": "MIT",
  "scripts": {}
}
```

### setting.json

### .travis.yml

```yml
language: node_js
cache:
  - yarn
install:
  - yarn
script:
  - yarn test
```

### first commit

```bash
# 添加远程仓库地址
git remote add github git@github.com:Martin-Shao/ts-react-frame.git
# 添加所有修改到暂存区
git add -A
# 提交，使用 :tada: emoji
git commit -m ":tada: first commit, add some dotfiles"
# 推送到 github，关联 github 远程仓库和 master 分支，下次还是 master 分支就可以直接 git push 了
git push github -u master
```

## linters & formatter

### eslint

```bash
yarn add eslint -D

npx eslint --init
```

> How would you like to use ESLint? ...
> To check syntax only
> To check syntax and find problems
> To check syntax, find problems, and enforce code style
> What type of modules does your project use? ...
> JavaScript modules (import/export)
> CommonJS (require/exports)
> None of these
> Which framework does your project use? ...
> React
> Vue.js
> None of these
> Does your project use TypeScript? » No / Yes
> Where does your code run? ... (Press <space> to select, <a> to toggle all, <i> to invert selection)
> Browser
> Node
> How would you like to define a style for your project? ...
> Use a popular style guide
> Answer questions about your style
> Inspect your JavaScript file(s)
> Which style guide do you want to follow? ...
> Airbnb: https://github.com/airbnb/javascript
> Standard: https://github.com/standard/standard
> Google: https://github.com/google/eslint-config-google
> What format do you want your config file to be in? ...
> JavaScript
> YAML
> JSON
> Would you like to install them now with npm? » No / Yes

```bash
# 删除lock文件，node_modules文件，重新安装
yarn
yarn upgrade --latest
```

eslint.json 配置的优化

```json
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
  },
};
```

优化后的配置

```json
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb/hooks',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {},
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', 'tsx', '.js', '.json'],
      },
    },
  },
};
```

typescript 相关的配置

```bash
yarn add eslint-import-resolver-typescript -D
yarn add eslint-plugin-eslint-comments eslint-plugin-promise eslint-plugin-unicorn -D
```

### stylelint

```bash
yarn add stylelint stylelint-config-standard stylelint-config-rational-order stylelint-config-prettier stylelint-order stylelint-declaration-block-no-ignored-properties stylelint-scss -D
```

```json
{
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-rational-order",
    "stylelint-config-prettier"
  ],
  "plugins": [
    "stylelint-order",
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-scss"
  ],
  "rules": {
    "comment-empty-line-before": null,
    "declaration-empty-line-before": null,
    "function-name-case": "lower",
    "no-descending-specificity": null,
    "no-invalid-double-slash-comments": null
  },
  "ignoreFiles": [
    "node_modules/**/*",
    "src/assets/**/*",
    "dist/**/*",
    "**/typings/**/*"
  ]
}
```

### prettier

```bash
yarn add prettier -D
```

```json
{
  "trailingComma": "all",
  "tabWidth": 4,
  "semi": true,
  "singleQuote": true,
  "endOfLine": "auto",
  "printWidth": 100,
  "overrides": [
    {
      "files": "*.md",
      "options": {
        "tabWidth": 2
      }
    }
  ]
}
```

### linters 和 prettier 冲突解决

### lint-stage

```bash
yarn add husky lint-staged -D
```

### commitlint



## 第三方库集成和优化

### 实现基本的打包功能

#### 配置入口文件

``` bash
# 本地安装开发依赖 typescript
yarn add typescript -D

# src ts单独配置
cd src && npx tsc --init && cd ..

# scripts ts单独配置
cd ./scripts && npx tsc --init && cd ..
```

#### 编译 TypeScript

三种方案我们选择第一种
1. babel + @babel/preset-typescript
2. ts-loader
3. awesome-typescript-loader

``` bash
yarn add babel-loader @babel/core @babel/preset-typescript -D
yarn add @babel/preset-env -D
```

#### webpack 配置和安装

``` bash
# history webpack4
yarn add webpack webpack-merge @types/webpack @types/webpack-merge -D

# webpack5
yarn add webpack-cli webpack webpack-merge -D
```

#### express 开发 devServe

``` bash
yarn add webpack-dev-middleware webpack-hot-middleware @types/webpack-dev-middleware @types/webpack-hot-middleware -D
yarn add express  @types/express -D
```

启动脚本需要的工具库

> * cors -> 解决跨越问题
> * open -> Open stuff like URLs, files, executables. Cross-platform.
> * yargs -> Yargs be a node.js library fer hearties tryin' ter parse optstrings
> * chalk -> Terminal string styling done right
> * get-port -> Get an available TCP port
> * log-symbols -> Colored symbols for various log levels
> * connect-history-api-fallback -> Middleware to proxy requests through a specified index page, useful for Single Page Applications that utilise the HTML5 History API.

``` bash
yarn add @types/cors -D
yarn add @types/yargs -D
yarn add @types/connect-history-api-fallback -D

yarn add cors open yargs chalk get-port log-symbols connect-history-api-fallback -D

yarn add http-proxy-middleware -D
yarn add webpack-open-browser -D
yarn add fork-ts-checker-webpack-plugin -D
```

#### 启动服务

``` bash
yarn add ts-node cross-env -D
```