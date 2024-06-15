import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [hours, sethours] = useState(0)
  const [minutes, setminutes] = useState(0)
  const [seconds, setseconds] = useState(0)
  const [isstart, setIsStart] =useState(false)
  const [timerId, setTimerId]=useState()
  const [Ispaused, setIsPaused] =useState()

  const handleStart=() =>{
    if(hours<0 || minutes<0 || seconds<0){
      alert("invalid Input")
      return;
    }
    setIsStart(true)
    // console.log(e.target.value);

  }

  const handleinput=(e)=>{
      console.log(e.target.value);
      const value=parseInt(e.target.value)
      if(e.target.id === "hours"){
        sethours(value)
      }
      if(e.target.id === "minutes"){
        setminutes(value)
      }
      if(e.target.id === "hours"){
        setseconds(value)
      }
      console.log(hours);
  }

  const handlePause = () => {
    setIsPaused(true);
    clearInterval(timerId);
  }

  const handleReset = () => {
    setIsStart(false);
    resetTimer();
  }

  const resetTimer=() =>{
    sethours(0);
    setminutes(0);
    setseconds(0);
    clearInterval(timerId);
  }

  const runTimer=(hr,min,sec,tid)=>{
    if(sec > 0) {
      setseconds((s) => s-1);
    }else if ( sec ===0 && min>0){
      setminutes((m)=> m-1);
      setseconds(59);
    } else if(min===0){
      sethours((h)=>h-1);
      setminutes(59);
      setseconds(59);
    }
    console.log(seconds);
  if (sec === 0 && min === 0 && hr === 0) {
    // resetTimer();
    handleReset();
    alert('Timer is finished');
    clearInterval(tid);
    return
  }
  }

  useEffect(() => {
    if(isstart){
    var tid=setInterval(() => {
      runTimer(hours,minutes,seconds,tid)

    }, 1000)
    setTimerId(tid) 
  }

  return () =>{
    clearInterval(tid);
  }
}
  , [isstart,hours,minutes,seconds])

  

  return (
    <>
    
    <h1>CountDown Timer</h1>

    {
      !isstart &&
      <div className="input timer">

      <div className='input-box'>
        <input 
        onChange={handleinput}
        placeholder='HH'
        id="hours"
        />
        <input 
        onChange={handleinput}
        placeholder='MM'
        id="minutes"
        />
        <input 
        onChange={handleinput}
        placeholder='SS'
        id="Seconds"
        />
        </div>
        <div className="button">
          <button onClick={handleStart}>Start</button>
        </div>
        </div>
    }
    {
      isstart&&
      <div>
       <div id="hours">`{hours}` :</div>
       <div id="hours">`{minutes}` :</div>
       <div id="hours">`{seconds}` :</div>
       <button onClick={handlePause}>pause</button>
       <button onClick={handleReset}>Reset</button>

     </div>
   
    }
      
        
    </>
  );
}

export default App
