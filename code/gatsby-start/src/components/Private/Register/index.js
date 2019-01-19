import React, { Component } from "react";
import { navigate } from "gatsby";
import styles from "./styles.module.css";

class RegisterForm extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    message: "Enter your information",
    invalid: false
  };

  handleUsername = event => this.setState({ username: event.target.value });
  handlePassword = event => this.setState({ password: event.target.value });
  handleEmail = event => this.setState({email: event.target.value});
  handleSubmit = event => {
    event.preventDefault();

    const status = this.props.handleLogin(this.state);

    let { message, invalid } = this.state;
    if (status.error) {
      message = status.message;
      invalid = true;
      return this.setState({ username: "", password: "", message, invalid });
    }

    navigate(this.props.private);
  };

  render() {
    const style = this.state.invalid
      ? { color: "var(--color-gold, red)" }
      : { color: "var(--color-gatsby)" };

    return (
      <form className={styles.RegisterForm}>
        <label style={style}>{this.state.message}</label>

        <input
          autoFocus
          type="text"
          className={styles.RegisterForm__input}
          placeholder="Username"
          onChange={this.handleUsername}
          value={this.state.username}
        />

        <input
          type="password"
          className={styles.RegisterForm__input}
          placeholder="Password"
          onChange={this.handlePassword}
          value={this.state.password}
        />
        <input
          type="text"
          className={styles.RegisterForm__input}
          placeholder="Email"
          onChange={this.handleEmail}
          value={this.state.email}
        />

        <input
          type="submit"
          className={styles.RegisterForm__button}
          value={"Register"}
        />
      </form>
    );
  }
}

export default RegisterForm;