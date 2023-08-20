const Redux= require('redux')
const createConfig= Redux.legacy_createStore
const bind = Redux.bindActionCreators

const CakeOrdered= 'CAKE_ORDERED'
const CakeRestored= 'CAKE_RESTORED'
const IceCreamOrd= 'ICECREAM_ORDERED'
const IceCreamRes= 'ICECREAM_RESTORED'

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

const IceFun= (qty=1)=>{
    return{
        type:IceCreamOrd,
        payload:qty
    }
}
const IceRest= (qty=1)=>{
    return {
        type:IceCreamRes,
        payload:qty

    }
}

const initialCakeState={
    noOfCakes:10,
}
const initialIceState={
    noOfIceCreams:20,
}

const reducerCake =(state=initialCakeState,action)=>{   
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
const reducerIce = (state=initialIceState,action)=>{
    switch(action.type){
        case "ICECREAM_ORDERED":
            return {
                ...state,
                noOfIceCreams: state.noOfIceCreams -1
            }
        case "ICECREAM_RESTORED":
            return{
                ...state,
                noOfIceCreams: state.noOfIceCreams + action.payload
            }
        default:
            return state
    }
}

const storeCake= createConfig(reducerCake)
const storeIce= createConfig(reducerIce)
console.log('Initial state',storeCake.getState())
console.log('Initial state',storeIce.getState())

const unsubscribe=storeCake.subscribe(()=>console.log('update state',storeCake.getState()))
const unsubscribeI=storeIce.subscribe(()=>console.log('update state',storeIce.getState()))

// store.dispatch(cakeFun())
// store.dispatch(cakeFun())
// store.dispatch(cakeFun())
// store.dispatch(CakeRestor(3))
const actionsCake = bind({cakeFun,CakeRestor},storeCake.dispatch)
const actionsIce  = bind({IceFun,IceRest},storeIce.dispatch)
actionsCake.cakeFun()
actionsCake.cakeFun()
actionsCake.cakeFun()
actionsCake.CakeRestor(3)
actionsIce.IceFun()
actionsIce.IceFun()
actionsIce.IceFun()
actionsIce.IceRest(3)

unsubscribe()
unsubscribeI()
