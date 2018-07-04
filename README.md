[![Build Status](https://travis-ci.org/rwoloszyn/simplehide.js.svg?branch=master)](https://travis-ci.org/rwoloszyn/simplehide.js)

# simplehide.js plugin development template 
It's lightweight and super simple JQuery plugin for showing/hiding any HTML DOM elements using [jquery.hide()](http://api.jquery.com/hide/) function.

# DEMO
[HERE](https://jsfiddle.net/wrafal/jb1kxf5z/19/)

![Demo gif](https://raw.githubusercontent.com/rwoloszyn/simplehide.js/master/doc/simplehide-demo.gif)

# Install
Install ***simplehide.js*** with npm:

```
$ npm install simplehide-js
```
Then include it in your HTML:
```
<script src="/node_modules/simplehide-js/simplehide.min.js"></script>
```

or with ***Webpack***:
```
require('simplehide-js');
```

# Use
```
$('#someIndex').simplehide();

$('customHTMLTag').simplehide();

$('.customClass').simplehide();
```
As I mentioned is super simple. Now those elements will be hidden and (by default) ***Show....*** link will
be displayed instead.  You can change link text by calling ***simplehide()*** with options:
```
$('#someIndex').simplehide({
  lessLink: 'showLink: '<a href="#">Versions...</a>''
});

```
# Contributing

Feel free to post any pull request.

# Building
Run 
```
$ npm run build
```
or 
```
$ gulp compress
```
to build minified, unglified file.

# Testing
Run 
```
$ npm run test
```
to test all possibile functions.


## Licence 

```
MIT. © Rafal Woloszyn
```
Please see ***LICENSE*** file in ***master*** branch.
