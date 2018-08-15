import React from "react";

import Titles from "./components/Titles";

import Form from "./components/Form";

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
    }
}

export default App;
