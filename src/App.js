import React, { useState } from 'react'

function App() {
const [result, setResult] = useState("")
const clickHandle = (event) =>{
  setResult(result.concat(event.target.value))
}
const Clear = (e) =>{
setResult("")
}
const calculate = () =>{
setResult(eval(result).toString())
}
  return(
<div className='calc'>
  <input type='text' placeholder='0' id='answer' value={result}/>
  <input type='button' value={"9"} className='button' onClick={clickHandle}/>
  <input type='button' value={"8"}className='button'onClick={clickHandle} />
  <input type='button' value={"7"} className='button' onClick={clickHandle}/>
  <input type='button' value={"6"} className='button' onClick={clickHandle}/>
  <input type='button' value={"5"} className='button' onClick={clickHandle}/>
  <input type='button' value={"4"} className='button' onClick={clickHandle}/>
  <input type='button' value={"3"} className='button' onClick={clickHandle}/>
  <input type='button' value={"2"} className='button' onClick={clickHandle}/>
  <input type='button' value={"1"} className='button' onClick={clickHandle}/>
  <input type='button' value={"0"} className='button' onClick={clickHandle}/>
  <input type='button' value={"."} className='button' onClick={clickHandle}/>
  <input type='button' value={"+"} className='button' onClick={clickHandle}/>
  <input type='button' value= {"-"} className='button' onClick={clickHandle}/>
  <input type='button' value={"*"} className='button' onClick={clickHandle}/>
  <input type='button' value={"/"} className='button' onClick={clickHandle}/>
  <input type='button' value={"%"} className='button' onClick={clickHandle}/>
  <input type='button' value={"DEL"} className='button button1'onClick={Clear} />
  <input type='button' value={"="} className='button button1'onClick={calculate} />










  
</div>
  )
    
  
}
export default App