import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date()
    };
  }

  tick(){
    this.setState({time: new Date()});

  }



  componentDidMount() {
    this.tickID = setInterval(()=>{this.tick();}, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.tickID);
  }


  render () {
    console.log(this.state);
    return (
      <div class="clock-component">
        <h1>Clock</h1>
        <div class="clock-wrapper">
          <h2 class="time-string">{this.state.time.toTimeString()}</h2>
        </div>
      </div>
    );
  }
}


export default Clock;
