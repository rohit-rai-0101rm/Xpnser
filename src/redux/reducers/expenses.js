import { ADD_EXPENSE } from "../action-types/expenses"

const initialState={
    expenseList:[]   // if u use = it will throw "SHORT HAND INITIALIZATION ERROR"

}
export const expenseReducer=(state=initialState,action)=>{
switch(action.type){
    case ADD_EXPENSE:{
        return{
            ...state,
            expenseList:[...state.expenseList,action.data]
        }
        
    }
    default:
        return state
}
}