import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const LoginForm = ({ loginUser, toggle }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const successLogin = () => {
    toggle();
    setUsername("");
    setPassword("");
  };

  const handleSubmit = e => {
    e.preventDefault();
    loginUser(username, password, successLogin);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Username</Label>
          <Input
            type="text"
            placeholder=""
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            placeholder=""
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button outline color="primary">
          Login
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
