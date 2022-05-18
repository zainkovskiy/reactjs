export function logger (store){
  return function wrapDispatch(next){
    return function dispatchAndLog (action){
      console.log('Action', action);
      console.log('prevState', store.getState());

      const result = next(action);
      console.log('nextStore', store.getState());

      return result;
    }
  }
}