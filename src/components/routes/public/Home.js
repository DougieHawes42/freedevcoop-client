import { PublicRoute } from "../../utils/routes";

import { Form1 } from "../../utils/forms";
import { Input1, Input2 } from "../../utils/inputs";
import { useState } from "react";
import { Button1 } from "../../utils/button";

const Home = () => {
  const [signUp, setSignUp] = useState(true);

  const SignUpFormContent = (
    <>
      <Input1 label="username" />
      <Input1 label="email" />
      <Input2 label="password" />
      <Input2 label="confirm password" />
      <Button1 text="submit" />
    </>
  );

  const SignInFormContent = (
    <>
      <Input1 label="email" />
      <Input2 label="password" />
      <Button1 text="submit" />
    </>
  );

  const Content = () => (
    <div className="home">
      <div children="home-form-container">
        {signUp ? (
          <Form1 title="sign up" content={SignUpFormContent} />
        ) : (
          <Form1 title="sign in" content={SignInFormContent} />
        )}
      </div>
      <div className="home-sign-up-toggle">
        <p
          className="home-sign-up-toggle-text"
          onClick={() => setSignUp(!signUp)}
        >
          {signUp
            ? "already a member? sign up here"
            : "not yet a member? sign in here"}
        </p>
      </div>
    </div>
  );

  return <PublicRoute content={<Content />} />;
};

export default Home;
