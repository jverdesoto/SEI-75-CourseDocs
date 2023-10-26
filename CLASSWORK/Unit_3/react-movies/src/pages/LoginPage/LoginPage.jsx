import { useState } from "react"

export default function LoginPage({ setUser }) {
    const [userForm, setUserForm] = useState('')

    function handleSubmit(e) {
      e.preventDefault()
      if (userForm) setUser(userForm)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                <input value={userForm} onChange={e => setUserForm(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
