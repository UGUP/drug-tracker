import React from "react";
import history from "./../history";

class Login extends React.Component {
  constructor(props) {
    super();
    this.state = {
      role: "admin",
    };
  }

  handleSignIn() {
    switch (this.state.role) {
      case "admin":
        history.push("/admin");
        break;
      case "manufacturer":
        history.push("/manufacturer");
        break;
      case "distributor":
        history.push("/distributor");
        break;
      case "retailer":
        history.push("/retailer");
        break;
      case "transporter":
        history.push("/transporter");
        break;
    }
  }

  handleRoleSelection(e) {
    this.setState({
      role: e.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSignIn.bind(this)}>
        <h3>Login in</h3>
        <label for="cars">Choose Role:</label>
        <select
          name="cars"
          id="cars"
          onChange={this.handleRoleSelection.bind(this)}
        >
          <option value="admin">Admin</option>
          <option value="manufacturer">Manufacturer</option>
          <option value="distributor">Distributor</option>
          <option value="retailer">Retailer</option>
          <option value="transporter">Transporter</option>
        </select>
        <input type="text" ref="username" placeholder="Username" />
        <input type="password" ref="password" placeholder="Password" />
        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default Login;
