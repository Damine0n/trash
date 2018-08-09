import React from "react";

class Form extends React.Component{
  state ={value: "default"};

  handleChange(event){
    this.setState({value: event.target.value});
  }

  render(){
    return(
      <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="City..."/>
        <input type="text" name="country" placeholder="Country..."/>
        <button>Get Weather</button>
        <input type="text" name="first" value={this.state.value} />
        <input type="text" name="second" onChange={this.handleChange.bind(this)}/>
      </form>
    );
  }
}

export default Form;
