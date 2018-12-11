# React element resize observer

A simple React Higher-Order Components who handle element resize detection from your React Components.

## Installation

```bash
npm install react-element-onresize --save-dev
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