import React, { useRef } from 'react'
import "./battleField.style.scss"

let target = null

const BattleField = () => {
    const playerRef = useRef(null)
    const shipRef = useRef(null)
  return <div className="container">
         <div className='battleField-container'>
           <div ref={playerRef} className='playerField-container' >
                {new Array(100).fill(null).map(()=>{
                    return <div onDragOver={e => e.preventDefault()} onDrop={(e)=>{
                      e.target.appendChild(target)
                        if(shipRef.current.children.length == 0){
                            shipRef.current.style.display = 'none'
                        }
                    }} className='playerField' key={Math.random()} ></div>
                   
                })}
                    <h3>Right click to change ship direction</h3>
                    <div ref={shipRef}  onDragStart={(e) => {
                        target = e.target 
                    }} className="ships">
                        <div onContextMenu={(e)=>{
                           e.preventDefault()
                           e.currentTarget.classList.toggle('rotate') 
                    }} draggable='true' className="biggest-ship">
                            <div></div> <div></div> <div></div> <div></div> 
                        </div>
                        <div onContextMenu={(e)=>{
                           e.preventDefault()
                           e.currentTarget.classList.toggle('rotateForMiddle') 
                    }} draggable='true' className="middle-ship">
                            <div></div><div></div><div></div>
                        </div>
                        <div onContextMenu={(e)=>{
                           e.preventDefault()
                           e.currentTarget.classList.toggle('rotateForMiddle') 
                    }} draggable='true' className="middle-ship">
                            <div></div><div></div><div></div>
                        </div>
                        <div onContextMenu={(e)=>{
                           e.preventDefault()
                           e.currentTarget.classList.toggle('rotate') 
                    }} draggable='true' className="small-ship">
                            <div></div><div></div>
                        </div>
                        <div onContextMenu={(e)=>{
                           e.preventDefault()
                           e.currentTarget.classList.toggle('rotate') 
                    }} draggable='true' className="small-ship">
                            <div></div><div></div>
                        </div>
                        <div onContextMenu={(e)=>{
                           e.preventDefault()
                           e.currentTarget.classList.toggle('rotate') 
                    }} draggable='true' className="small-ship">
                            <div></div><div></div>
                        </div>
                        <div draggable='true' className="smallest-ship"></div>
                        <div draggable='true' className="smallest-ship"></div>
                        <div draggable='true' className="smallest-ship"></div>
                        <div draggable='true' className="smallest-ship"></div>
                    </div>
                
           </div>

           <div  className='aiField-container' onClick={(e)=> {
            if(e.target === e.currentTarget || e.target.className != 'aifield')return
            if(e.target.className == 'black')return
            let current = e.currentTarget
            let playerField = playerRef.current.children[Math.floor(Math.random()* 99)]
             e.target.className = 'black'
             current.style.pointerEvents = 'none'
             setTimeout(()=>{
                playerField.className = 'lightblack'
                current.style.pointerEvents = 'fill'
             },1500)
           }} >
            
                {new Array(100).fill(null).map(()=>{
                    return <div className='aifield' key={Math.random()}></div>
                })}
                <div onClick={(e)=> {
                    e.target.style.backgroundColor = 'red'
                   if(e.currentTarget.children[0].style.backgroundColor == 'red' && e.currentTarget.children[3].style.backgroundColor == 'red'){
                    e.currentTarget.style.cssText = "padding:15px 20px;background-color:rgb(28, 28, 28);width:250px;height:100px"
                   }
                }} className="big-ship">
                    { new Array(4).fill(null).map(()=>{
                        return <div key={Math.random()}></div>
                    })}
                </div>
                <div onClick={(e)=> {
                       e.target.style.backgroundColor = 'red'
                       if(e.currentTarget.children[0].style.backgroundColor == 'red' && e.currentTarget.children[2].style.backgroundColor == 'red'){
                        e.currentTarget.style.cssText = "padding:15px 20px;background-color:rgb(28, 28, 28);width:200px;height:100px"
                    }
                }} className="middle-ship1">
                    <div></div><div></div><div></div>
                </div>
                <div onClick={(e)=> {
                       e.target.style.backgroundColor = 'red'
                       if(e.currentTarget.children[0].style.backgroundColor == 'red' && e.currentTarget.children[2].style.backgroundColor == 'red'){
                        e.currentTarget.style.cssText = "padding:15px 20px;background-color:rgb(28, 28, 28);width:200px;height:100px"
                    }
                }} className="middle-ship2">
                    <div></div><div></div><div></div>
                </div>
                <div onClick={e => {
                     e.target.style.backgroundColor = 'red'
                     if(e.currentTarget.children[0].style.backgroundColor == 'red' && e.currentTarget.children[1].style.backgroundColor == 'red'){
                        e.currentTarget.style.cssText = "padding:20px 25px;background-color:rgb(28, 28, 28);width:150px;height:100px"
                    }
                }} className="small-ship1"><div></div> <div></div>
                </div>
                <div onClick={e => {
                      e.target.style.backgroundColor = 'red'
                      if(e.currentTarget.children[0].style.backgroundColor == 'red' && e.currentTarget.children[1].style.backgroundColor == 'red'){
                         e.currentTarget.style.cssText = "padding:20px 25px;background-color:rgb(28, 28, 28);width:150px;height:100px"
                     }
                }} className="small-ship2"><div></div> <div></div>
                </div>
                <div onClick={e => {
                      e.target.style.backgroundColor = 'red'
                      if(e.currentTarget.children[0].style.backgroundColor == 'red' && e.currentTarget.children[1].style.backgroundColor == 'red'){
                         e.currentTarget.style.cssText = "padding:20px 25px;background-color:rgb(28, 28, 28);width:150px;height:100px"
                     }
                }} className="small-ship3">
                    <div></div> <div></div>
                 </div>
          </div>
    </div>
  </div>
}

export default BattleField