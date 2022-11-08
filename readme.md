## Attensions

### Install

- 安装新的 npm package 之后，需执行 pnpm install 建立正确的软链接
- 安装完成之后需执行`./node_modules/.bin/deepkit-type-install`
- `@rollup/plugin-typescript@8.5.0`与`typescript@4.7.4`是有效搭配，`type-compiler`未适配高版本的`typescript`

### Coding

- 所有字段皆以范型`Type`修饰，否则会解析失败
- 禁止使用`Array<T>`，该用法将会导致`type-compiler`无法识别，使用`T[]`
- type functions 禁止使用匿名函数和箭头函数，否则`type-compiler`无法识别
