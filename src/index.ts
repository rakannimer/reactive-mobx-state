import { Subject, Observable } from "rxjs";
import { toStream } from "mobx-utils";
import { observable } from "mobx";
import produce from "immer";
import { ObservableMap } from "mobx/lib/types/observablemap";

const rootState: ObservableMap<ObservableMap<any>> = observable.map({});

export const createState = (key: string, state: {}) => {
  if (rootState.has(key)) {
    return rootState.get(key);
  }
  rootState.set(key, observable.map(state));
  return rootState.get(key);
};

export const getState = (key = ""): {} => {
  if (rootState.has(key)) {
    const state = rootState.get(key) as ObservableMap<any>;
    return state.toJS();
  }
  return {};
};

export const setState = (key = "", stateMutator = state => {}) => {
  if (!rootState.has(key)) {
    createState(key, produce({}, stateMutator));
    return;
  }
  const newState = produce(getState(key), stateMutator);
  const state = rootState.get(key) as ObservableMap<any>;
  state.replace(newState);
  return;
};

export type AnyState = any;
export type StateMutator = (state: AnyState) => void;

export type ReactiveState = {
  destroy$: Subject<any>;
  destroy: () => void;
  setState: (StateMutator) => void;
  getState: () => AnyState;
  state$: Observable<AnyState>;
};
export type GetReactiveState = (key: string, state: AnyState) => ReactiveState;

export const getReactiveState: GetReactiveState = (key, initialState) => {
  const destroy$ = new Subject();
  const destroy = () => {
    destroy$.next();
  };
  createState(key, initialState);
  const setReactiveState = mutator => {
    setState(key, mutator);
  };
  const getReactiveState = () => {
    return getState(key);
  };
  const state$ = Observable.from(toStream(() => getState()));
  return {
    destroy,
    destroy$,
    getState: getReactiveState,
    setState: setReactiveState,
    state$
  };
};

export default getReactiveState;
