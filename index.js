const Redux= require('redux')
const createConfig= Redux.legacy_createStore

const CakeOrdered= 'CAKE_ORDERED'

const cakeFun= ()=>{
    return {
        type:CakeOrdered,
        quantity:1
    }
}

const initialState={
    noOfCakes:10,
}

const reducer =(state=initialState,action)=>{   
    switch(action.type){
        case 'CAKE_ORDERED':
            return {
                noOfCakes: state.noOfCakes-1
            }
        default:
            return state
    }
}

const store= createConfig(reducer)
console.log('Initial state',store.getState())

const unsubscribe=store.subscribe(()=>console.log('update state',store.getState()))

store.dispatch(cakeFun())
store.dispatch(cakeFun())
store.dispatch(cakeFun())

store.unsubscribe
