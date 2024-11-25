export function increment(){
    return{
        type:"INCREMENT",
    }
}

export function decrement(){
    return{
        type:"DECREMENT",
    }
}

export function add(amount){
    return{
    type:"ADD",
    payload:Number(amount),
    }
}