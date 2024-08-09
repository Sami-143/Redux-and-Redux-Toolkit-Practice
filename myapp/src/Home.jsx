import React from 'react'
import { useDispatch,useSelector } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  
  const addBtn =()=>{
    dispatch({
      type : "increment",
    })
  }

  const addBtnByValue =()=>{
    dispatch({
      type : "incrementByValue",
      payload : 25,
    })
  }

  const subBtn = ()=>{
    dispatch({
      type : "decrement",
    })
  }
  const {c} = useSelector((state)=>state.custom);
  return (
    
    <div>
        <h2>{c}</h2>
        <button onClick={addBtn}>Increment</button>
        <button onClick={addBtnByValue}>Increment By 25</button>
        <button onClick={subBtn}>Decrement</button>
    </div>
  )
}

export default Home
