import { useDispatch } from "react-redux"
import { decrement } from "../action";

export const DecrementBtn = ()=>{
    const dispatch = useDispatch();
    const handleClick = (e)=>{
        dispatch(decrement())
    }


    return(
        <button onClick={handleClick}>decrement</button>
    )
}