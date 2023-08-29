const logger = (store)=> (next)=> (action)=> {
const currentState = store.getState();
console.log('CurrentState' ,currentState);

next(action);
};

export default logger;