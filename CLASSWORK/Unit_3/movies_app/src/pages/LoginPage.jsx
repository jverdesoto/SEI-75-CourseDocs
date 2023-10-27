import { useState } from "react"

export default function LoginPage({setUser}) {
  const [pickedValue, setPickedValue] = useState('')
  function onChange (e) {
    setPickedValue(e.target.value)
  }
  function onSubmit () {
    setUser(pickedValue)
  }
  return (
    <div>
      <h2>PLEASE CHOOSE AN USERNAME TO SIGN UP</h2>
      <div>
        <input type="text" onChange={onChange}></input>
        <button onClick={onSubmit}>SUBMIT</button>
      </div>
    </div>
  )
}
