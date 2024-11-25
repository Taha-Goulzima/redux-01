import { useDispatch } from "react-redux"
import { increment } from "../action";


export const IncrementBtn = ()=>{
    const dispatch = useDispatch();
    const handleClick = (e) => {
        dispatch(increment())
    }

    return (
        <button onClick={handleClick}>
            Increment
        </button>
    )
}