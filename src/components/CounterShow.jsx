import React from 'react'
import { useSelector } from 'react-redux'

export const CounterShow = () => {
    const counter = useSelector(state => state.counter);
  return (
    <div>
        {counter}
    </div>
  )
}
