export default function LoginPage({user, setUser}) {

function handleSubmit(evt) {
    evt.preventDefault()
    setUser(evt.target.name.value)
}

  return (
    <>
      <div>LoginPage</div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={user}
            required
          />
          <button type="submit">
            SIGN UP
          </button>
        </form>
      </div>
    </>
  );
}
