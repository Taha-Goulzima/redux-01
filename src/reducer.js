const initialState ={
    counter:0,
}

export default function counterReducer(
    state = initialState,
    action
){
    const {type,payload}=action;
    switch(type){
        case 'INCREMENT':
            return{
                ...state,
                counter:state.counter+1
            }
            case"DECREMENT":
            return{
                ...state,
                counter:state.counter-1
            }
            case "ADD":
                return{
                    ...state,
                    counter:state.counter + payload
                }
                default:
                    return state;
    }
}