# browserify

## 在`index.html`文件中引用jquery的一般方法：

- 使用`cdn`或者在`jquery`官网下载jquery文件
- 在`index.html`中引入jquery
  ```
  <script src="jquery.js"></script>
  ```
依赖一旦变得更多，就难以控制。
使用`nodejs`中引入模块的方式更加容易控制
```bash
yarn add jquery browserify -D
```

在app.js中输入：
```
var $ = require('jquery');
```

在`package.json`中加入：
```
"scripts": {
    "build": "browserify app.js -o bundle.js"
  },
```
在终端运行：
```
yarn run build
```
在`index.html`文件中引用：
```
<script src="bundle.js"></script>
```
jquery已经可以正常使用了