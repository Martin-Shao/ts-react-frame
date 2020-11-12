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

## linters & formatter

## 第三方库集成和优化
