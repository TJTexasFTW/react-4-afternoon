import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
// import ClassList from ''

export default class Student extends Component {
  constructor() {
    super()

    this.state = {
      studentInfo: {},
      test: ""
    };
    this.returnToClass = this.returnToClass.bind( this );
  }

componentDidMount () {
    axios
    .get(`http://localhost:3005/students/${this.props.match.params.id}`)
    // .get(
    //   `http://localhost:3005/students?id=${this.props.match.params.id}`)
    .then(results => {
      this.setState({
        studentInfo: results.data,
        test: "we are here"
      });
    });
  }

returnToClass() {
  // <Link to="/Contact/Contact" className="links"></Link>
  // <Link to = "/ClassList/ClassList/${this.state.studentInfo.class}"></Link>;

    window.location.assign(`/ClassList/${this.state.studentInfo.class}#/classlist/${this.state.studentInfo.class}`)
    //http://localhost:3000/ClassList/ClassList/$%7Bthis.state.studentInfo.class%7D#/
    //http://localhost:3000/ClassList/$%7Bthis.state.studentInfo.class%7D#/
    //http://localhost:3000/ClassList/$%7Bthis.state.studentInfo.class%7D/classlist/#/
    //http://localhost:3000/ClassList/$%7Bthis.state.studentInfo.class%7D/classlist/#/

    //want to:
    //http://localhost:3000/ClassList/$%7Bthis.state.studentInfo.class%7D#/classlist/MATH1010
    //http://localhost:3000/ClassList/$%7Bthis.state.studentInfo.class%7D#/classlist/ENG2010
  
}

  render() {

    console.log("Params: ", this.props.match.params.id);
    console.log("Test: ", this.state.test);

    return (
      <div className="box">
        <h1>Student:</h1>
        <h1>{this.state.studentInfo.first_name} {this.state.studentInfo.last_name}</h1>
        <h3>Grade: {this.state.studentInfo.grade}</h3>
        <h3>Email: {this.state.studentInfo.email}</h3>

        {/* <button onClick={ this.createPost }>Compose</button> */}
        {/* <button onclick="window.location.assign(/ClassList/ClassList/${this.state.studentInfo.class})">Class List</button> */}
        {/* <button onclick="window.location.href = 'https://w3docs.com';">Click Here</button> */}


        <button onClick={this.returnToClass}>Back to Class List</button>
        </div>

    );
  }
}