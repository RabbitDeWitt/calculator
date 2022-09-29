import { useState } from 'react'


function App() {
  const [calc, setCalc] = useState("")
  const [res, setRes] = useState("0")

  const ops = ['/', '*', '+', '-', '.']

  const updateCalc = (value) => {
    if(
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ){
      return
    }
    setCalc(calc + value)
    
    if(!ops.includes(value)){
      setRes(eval(calc + value).toString())
    }
  }


  const createDigits = () => {
    let digits = []
    for(let i = 9; i > 0; i--){
      digits.push(
        <button key={i} onClick={() => updateCalc(i.toString())}>{i}</button>
      )
    }
    return digits
  }

  const calculate = () => {
    setCalc(eval(calc).toString())
  }

  const deleteLast = () => {
    if (calc == '') {
      return
    }

    const value = calc.slice(0, -1)
    setCalc(value)
    setRes(value)

    }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {(calc || 0)}
          <br/>{res ? <span>{res}</span> : '0'}          
        </div>

        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>

          <button onClick={deleteLast}>DEL</button>
        </div>

        <div className="digits">
          {createDigits()}
        <button onClick={calculate}>=</button>
        <button key={0} onClick={() => updateCalc('0')}>{0}</button>
        <button onClick={() => updateCalc('.')}>.</button>
        </div>
      </div>
    </div>
  );
}

export default App;
