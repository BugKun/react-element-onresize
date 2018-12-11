# React element resize observer

A simple React mixin who handle element resize detection from your React components.

## Installation

```bash
npm install react-element-onresize --save
```

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
   return (
      // Your element here...
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
    return (
      // Your element here...
    )
  }
}

export default ElementResize()(App);
```
---- Polyfill Usage ----
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
   return (
      // Your element here...
    )
  }
}

export default App;
```