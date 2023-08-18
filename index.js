const Redux= require('redux')
const createConfig= Redux.legacy_createStore

const CakeOrdered= 'CAKE_ORDERED'
const CakeRestored= 'CAKE_RESTORED'

const cakeFun= ()=>{
    return {
        type:CakeOrdered,
        payload:1
    }
}
const CakeRestor= (qty=1)=>{
    return {
        type:CakeRestored,
        payload:qty
    }
}

const initialState={
    noOfCakes:10,
}

const reducer =(state=initialState,action)=>{   
    switch(action.type){
        case 'CAKE_ORDERED':
            return {
                ...state,
                noOfCakes: state.noOfCakes-1
            }
        case 'CAKE_RESTORED':
            return {
                ...state,
                noOfCakes: state.noOfCakes + action.payload
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
store.dispatch(CakeRestor(3))

unsubscribe()
