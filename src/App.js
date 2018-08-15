import React from "react";

import Titles from "./components/Titles";

import Form from "./components/Form";

<<<<<<< HEAD
import Message from "./components/Message";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      error: undefined
    };
    this.updateLogin=this.updateLogin.bind(this);
    //this.getLoginInfo=this.getLoginInfo.bind(this);
  }


  updateLogin(u, p) {
    console.log(u+p);
    this.setState({
      username: u,
      password: p
    });
  }
  signIn = async (e) => {
    e.preventDefault();
    //console.log(e.target.value);
    const username = this.state.username;
    const password = this.state.password;
    console.log(`htrd`+username);
    console.log(password);
    if ("" === "Sign-in"){
      console.log(`htrd ${username}`);
      console.log(password);
      const user = await fetch(`http://localhost:8080/login?username=${username}&password=${password}`);
      console.log(user);
      const data = await user.json();
      console.log(data);
      if(username){
        if(data){
          this.setState({
            error: "I have logged in!"
          });
        }else{
          this.setState({
            error: "Login information is incorrect."
          });
        }
      } else{
        this.setState ({
          error: "Please enter a Username"
        });
      }
=======
import Weather from "./components/Weather";

import Client from "./components/Client";

const API_KEY = "896b489b6630e668023fc637406ff867";

class App extends React.Component {

  state = {
    temparture: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
    getLoginInfo = async (e) => {
      e.preventDefault();
      const username = e.target.elements.username.value;
      const password = e.target.elements.password.value;
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${username},${password}&appid=${API_KEY}&units=metric`);
      const user = await fetch('http:"//localhost:8080/login?username=${username}&password=${password}');
      const data = await api_call.json();
      console.log(data);
      console.log(user);
      if(username && password){
        this.setState({
          temparture: 'aewrt',
          city: 'wetrq',
          country: 'qtre',
          humidity: 'wer',
          description: 'aerg',
          error: ""
        });
      } else {
        this.setState ({
          //temparture: undefined,
          //city: undefined,
          //country: undefined,
          //humidity: undefined,
          //description: undefined,
          error: "Please enter a Username"
        });
      }
    };

    render(){
        return (
            <div>
                <Titles />
                <Form getLoginInfo={this.getLoginInfo}/>
                <Weather
                  temparture={this.state.temparture}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                />
            </div>
        );
>>>>>>> c447add9ffd1e75f2db1a87e39d1b9ea437aeeac
    }
  }

  signUp = async (e) => {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    console.log(username);
    console.log(password);
    const stringy = JSON.stringify({"username":username,"password":password});
    const user = await fetch(`http://localhost:8080/signup`, {
      method: 'POST',
      body: stringy,
      headers: {
          'Content-Type': 'application/json'
      }
    });
    const data =  await user.json();
    console.log(data);
  }

  updateUsername = (event) =>{
    this.setState({
      username: event.target.value
    });
  }
  updatePassword = (event) => {
    this.setState({
      password: event.target.value
    });
  }

  handleLogin = (event) =>  {
    event.preventDefault();
    this.props.setLogin(this.state.username,this.state.password);
    this.props.getLoginInfo();
  }

  render(){
      return (
          <div>
              <Titles />
              <Form
                updateUsername={this.updateUsername}
                updatePassword={this.updatePassword}
                signIn={this.signIn}
                signUp={this.signUp}/>
              <Message
                error={this.state.error} />
          </div>
      );
  }
}

export default App;
