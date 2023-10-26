import React, { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function LoginPage({ setUser }) {
  const [credentials, setCredentials] = useState();
  const userRef = useRef();

  function handleLogin(e) {
    e.preventDefault();
    console.log(userRef.current.value);
    setUser(userRef.current.value);
  }
  return (
    <>
      <div
        className="container d-flex flex-column align-items-center justify-content-center mt-5"
        style={{ height: "90vh" }}
      >
        <Form onSubmit={handleLogin}>
          <Form.Control type="text" ref={userRef} />
          <Button className="m-3" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </>
  );
}
