export const initialState = {
    basket: [],
    user:null,
    price:[],

}
const reducer=(state,action)=>{
    // console.log(state)
    // console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {...state,
                basket:[...state.basket,action.item],price:[...state.price,action.item.price]}
           
            case 'REMOVE_FROM_BASKET':
            //logic for removing
                let newBasket = [...state.basket]//cloned the basket
let newPrice =[...state.price]
                const index = state.basket.findIndex(  (basketItem)=>(basketItem.id ===action.id)) //console for action
                if(index >=0){
// if item is there remove it
console.log(index)
newBasket.splice(index,1)
newPrice.splice(index,1)


                }
                else{
                    console.log('item doesnt exist')
                }
                return {...state,basket:newBasket,price:newPrice}
               
                default:
                    return state;
    }
}
export default reducer;