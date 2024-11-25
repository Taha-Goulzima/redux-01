import { useState } from "react";
import { useDispatch } from "react-redux"
import { add } from "../action";



export const AddAmountForm = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(add(value))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="number"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <input type="submit" value='ajouter' />
            </form>
        </div>
    )
}