import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";

import { auth, SignInWithGoogle } from "../../firebase/firebase.util";
class SignIn extends React.Component {
  state = { email: "", password: "" };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            label="Email"
            handleChange={this.handleChange}
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="Password"
            handleChange={this.handleChange}
            required
          />
          <div className="button">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
