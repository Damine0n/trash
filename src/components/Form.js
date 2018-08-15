import React from "react";

class Form extends React.Component{
  state ={value: "default"};

  handleLogin(event){
    this.setState({value: event.target.value});
  }

  handleCreate(event){
    this.setState({value: event.target.value});
  }

  render(){
    return(
      <form onSubmit={this.props.getLoginInfo}>
        <input type="text" name="username" placeholder="Username"/>
        <input type="password" name="password" placeholder="Password"/>
        <br/><button onClick={this.handleLogin.bind(this)}>Sign-in</button>
        <br/><button onClick={this.handleCreate.bind(this)}>Sign-up</button>
      </form>
    );
  }
}

export default Form;
