# Reactive Mobx State

> Micro reactive state management solution on top of RxJS Mobx and Immer. 

Exposes one function : ```getRxState``` 

## Usage

```js
import getReactiveState from 'reactive-mobx-state'
const const {
  getState,
  setState,
  state$,
  destroy,
  destroy$
} = getRxState("counter", {
  tick: 0
});

```

outputs

```
hello warld
```

## API

```javascript
import getReactiveState from 'reactive-mobx-state'
// OR
const getReactiveState = require('reactive-mobx-state').default
```

## Install

With [yarn](https://yarnpkg.com/en/) installed, run

```
$ yarn add reactive-mobx-state
```

or 

```
npm i -S reactive-mobx-state
```


## License

MIT

