import React from "react";

class Form extends React.Component{
<<<<<<< HEAD
  constructor(props){
    super(props);
=======
  state ={value: "default"};

  handleLogin(event){
    this.setState({value: event.target.value});
  }

  handleCreate(event){
    this.setState({value: event.target.value});
>>>>>>> c447add9ffd1e75f2db1a87e39d1b9ea437aeeac
  }

  render(){
    return(
      <form onSubmit={this.props.getLoginInfo}>
<<<<<<< HEAD
        <input type="text" name="username" placeholder="Username" onChange={this.props.updateUsername} value={this.props.username}/>
        <input type="password" name="password" placeholder="Password" onChange={this.props.updatePassword} value={this.props.password}/>
        <br/><button name="submit" value="Sign-in" onClick={this.props.signIn}>Sign-in</button>
        <br/><button name="submit" value="Sign-up" onClick={this.props.signUp}>Sign-up</button>
=======
        <input type="text" name="username" placeholder="Username"/>
        <input type="password" name="password" placeholder="Password"/>
        <br/><button onClick={this.handleLogin.bind(this)}>Sign-in</button>
        <br/><button onClick={this.handleCreate.bind(this)}>Sign-up</button>
>>>>>>> c447add9ffd1e75f2db1a87e39d1b9ea437aeeac
      </form>
    );
  }
}

export default Form;
