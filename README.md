# Reactive Mobx State

> Micro reactive state management solution on top of RxJS Mobx and Immer. 

Exposes one function : [getReactiveState](https://rakannimer.github.io/reactive-mobx-state/modules/_index_.html#getreactivestate-1)


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
## API

```javascript
import getReactiveState from 'reactive-mobx-state'
// OR
const getReactiveState = require('reactive-mobx-state').default
```

## Install

This is a micro library, and as such, does very little. It provides a React like abstraction on top of the following libraries : 

 - [mobx](https://mobxjs.github.io)
 - [mobx-utils](https://mobxjs.github.io)
 - [rxjs](https://reactivex.io/rxjs/)
 - [immer](https://github.com/mweststrate/immer)

#### If you don't use any of these libraries in your code already

This might not be the library for you. (But check them out !)

If you want to go on anyway, install the following dependencies : 

```
yarn add mobx mobx-utils rxjs immer
```

Then 

```
yarn add reactive-mobx-state
```
or 

```
npm i -S reactive-mobx-state
```


## License

MIT

