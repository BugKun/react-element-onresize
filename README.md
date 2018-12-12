# React element resize observer

A simple React Higher-Order Component who handle element resize detection from your React Components.

## Installation

```bash
npm install react-element-onresize --save-dev
```

## Browser Support
---- With [ResizeObserver Polyfill](https://github.com/que-etc/resize-observer-polyfill) ----

[![Build Status](https://saucelabs.com/browser-matrix/que-etc.svg)](https://saucelabs.com/beta/builds/303f5344a7214ba5b62bc7079a15d376)

**NOTE:** Internet Explorer 8 and its earlier versions are not supported.

---- Without any Polyfill ----

![Without any Polyfill](https://raw.githubusercontent.com/BugKun/react-element-onresize/master/Browser-Support-Without-Polyfill.png)


## Usage
---- ESNext syntax with decorators ----
```javascript
import React, { Component } from 'react';
import ElementResize from 'react-element-onresize';

@ElementResize()
class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const { elemResize } = this.props;

    return (
      <div>
        <p>width: {(elemResize.contentRect)? elemResize.contentRect.width : 0} px</p>
        <p>height: {(elemResize.contentRect)? elemResize.contentRect.height : 0} px</p>
      </div>
    )
  }
}

export default App;
```
---- ES6 syntax ----
```javascript
import React, { Component } from 'react';
import ElementResize from 'react-element-onresize';

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const { elemResize } = this.props;

    return (
      <div>
        <p>width: {(elemResize.contentRect)? elemResize.contentRect.width : 0} px</p>
        <p>height: {(elemResize.contentRect)? elemResize.contentRect.height : 0} px</p>
      </div>
    )
  }
}

export default ElementResize()(App);
```
---- Polyfill usage ----
```javascript
import React, { Component } from 'react';
import ElementResize from 'react-element-onresize';
import resizeObserver from "resize-observer-polyfill";

@ElementResize(resizeObserver)
class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const { elemResize } = this.props;

    return (
      <div>
        <p>width: {(elemResize.contentRect)? elemResize.contentRect.width : 0} px</p>
        <p>height: {(elemResize.contentRect)? elemResize.contentRect.height : 0} px</p>
      </div>
    )
  }
}

export default App;
```