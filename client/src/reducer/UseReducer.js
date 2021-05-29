export const initialState = {token:null}; 
export const reducer = (state = initialState, action)=>{
    if(action.type === "USER")
        return {...state, token:action.payload};
    return state;
} 