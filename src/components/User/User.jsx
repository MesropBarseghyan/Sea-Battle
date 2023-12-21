import "./user.style.scss"
import { useRef,useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {setUserName} from "./userSlice"

const User = () => {
    const inputRef = useRef(null)
    const dispatch = useDispatch()
    const {userName} = useSelector(({userName})=> userName)
  return (
    <div className="against-container">
    <input ref={inputRef} onChange={(e)=> e.target.value} type="text" placeholder='Write Your Name' />
    <button onClick={()=> {
        dispatch(setUserName(inputRef.current.value))
        inputRef.current.value = ''
    }}>Accept</button>
    <div className="against">
        <h2>{userName}</h2>
        <span>VS</span>
        <h2>Ai</h2>
    </div>
</div>
  )
}

export default User