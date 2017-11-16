# Requirements

## npm

[install npm(including nodejs)](https://www.npmjs.com/get-npm?utm_source=house&utm_medium=homepage&utm_campaign=free%20orgs&utm_term=Install%20npm) 

### check out if npm is installed successfully  

open cmd on Windows

``` bash
node -v
npm -v
```

## vue

``` bash
npm install vue
```

## Create A Project

``` bash
# 全局安装 vue-cli
npm install --global vue-cli
git clone https://github.com/WhirlFourEye/newuser.git "git url"
# 创建一个基于 webpack 模板的新项目
vue init webpack my-project "project_name"
# 安装依赖，走你
cd my-project "project_name"
npm install
npm run dev
```

# newuser

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Code Structure

───────────  
&emsp;│  
&emsp;│──index.html -> 所有页面的共同header  
&emsp;│  
&emsp;│──static -> 图片等静态文件  
&emsp;│  
&emsp;│──src  
&emsp;│&emsp;│  
&emsp;│&emsp;│──assets -> 外链用js、css  
&emsp;│&emsp;│  
&emsp;│&emsp;│──components  
&emsp;│&emsp;│&emsp;│  
&emsp;│&emsp;│&emsp;│──components -> 各种公用components  
&emsp;│&emsp;│&emsp;│  
&emsp;│&emsp;│&emsp;│──Good -> Good app视图  
&emsp;│&emsp;│&emsp;│  
&emsp;│&emsp;│&emsp;│──User -> User app视图  
&emsp;│&emsp;│&emsp;│  
&emsp;│&emsp;│&emsp;│... ...  
&emsp;│&emsp;│  
&emsp;│&emsp;│──router  
&emsp;│&emsp;│&emsp;│  
&emsp;│&emsp;│&emsp;│──index.js -> 主路由  
&emsp;│&emsp;│&emsp;│  
&emsp;│&emsp;│&emsp;│──Good -> Good app路由  
&emsp;│&emsp;│&emsp;│  
&emsp;│&emsp;│&emsp;│──User -> User app路由  
&emsp;│&emsp;│&emsp;│  
&emsp;│&emsp;│&emsp;│... ...  
&emsp;│&emsp;│  
&emsp;│&emsp;│──App.vue -> 根module  
&emsp;│&emsp;│  
&emsp;│&emsp;│──main.js

## Vue Structure & Some Usage

```html
<template>
    html code
</template>

<script>
/*some import code*/ 
export default {
  name: 'bot-nav', /*module name,你可以在注册过该component的地方直接使用module eg.<bot-nav></bot-nav>*/
  data () {        /*return data to html code above*/
    return {
      home: 'on',
      news: '',
      trend: '',
      cart: '',
      personal: ''
    }
  },
  components: {
    /*some imported components to register*/
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /*css code*/
</style>
```

```html
<router-link :to="{ name: 'Index' }"></router-link> <!-- the name in router-->
```