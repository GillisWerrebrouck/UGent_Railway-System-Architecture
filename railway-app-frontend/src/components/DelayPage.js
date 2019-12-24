import React, { Component } from 'react';
import endpoints from '../api/endpoints';

export default class DelayPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Delay: {
	timetableId: null,
        routeId: null,
        startStationId: null,
        delayInMinutes: null,
        reasonForDelay: null,
      },
      createErrorResponse: "",
    };
  }

  componentDidMount() {
    //endpoints.getTrains()
      //.then((result) => {
        //this.setState({ trains: result.data, isLoading: false });
      //});
  }

  createDelayFormChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    let delay = {...this.state.Delay};
    delay[name] = value;
    this.setState({ delay });
  }

  createDelay = (event) => {
    event.preventDefault();
    endpoints.postDelay(this.state.Delay)
      .then(result => { 
        if(typeof result.data === "string") {
          this.setState({ createErrorResponse: result.data });
	  console.log(result.data); 
        } else {
	  console.log("gelukt!"); 
          window.location.reload();
        }
      });
  }

  render() {
    return (
      <div>
        <h3>Notify delay</h3>
        <form onSubmit={this.createDelay}>
          <label>Timetable ID: </label>
          <input
            type='number'
            name='timetableId'
            onChange={this.createDelayFormChangeHandler}
          />
          <br />

	  <label>Route ID: </label>
          <input
            type='number'
            name='routeId'
            onChange={this.createDelayFormChangeHandler}
          />
          <br />

	  <label>Start Station ID: </label>
          <input
            type='number'
            name='startStationId'
            onChange={this.createDelayFormChangeHandler}
          />
          <br />

	  <label>Delay in minutes: </label>
          <input
            type='number'
            name='delayInMinutes'
            onChange={this.createDelayFormChangeHandler}
          />
          <br />

          <label>Reason for delay: </label>
          <input
            type='text'
            name='reasonForDelay'
            onChange={this.createDelayFormChangeHandler}
          />
          <br />

          <input
            type='submit'
            value='Notify'
          />
        </form>

        <p>{this.state.createErrorResponse}</p>
      </div>
    );
  }
}
