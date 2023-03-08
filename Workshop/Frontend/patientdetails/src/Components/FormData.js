import React, { Component } from 'react';
import axios from 'axios';
import './form.css';
import { Link } from 'react-router-dom';


class Patientform extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      age: '',
      address: '',
      weight: '',
      mobile: ''
     
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }); 
}
  
  handleSubmit(event) {
    event.preventDefault();
    const Data = {
      id: this.state.id,
      name: this.state.name,
      age: this.state.age,
      address: this.state.address,
      weight: this.state.weight,
     mobile:this.state.mobile
    };
    
    console.log(Data)
    axios.post('http://localhost:8080/add', Data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

      alert("Patient Details added");
  };
  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Patient Details</h2>
        
        
        <input
          placeholder='Enter Patient name'
          type="text"
          name="name"
          
          onChange={this.handleChange}
        />
        <input
          placeholder='Enter age'
          type="text"
          name="age"
         
          onChange={this.handleChange}
        />
        <input
          placeholder='Enter Address'
          type="text"
          name="address"
       
          onChange={this.handleChange}
        />
         <input
          placeholder='Enter Weight'
          type="text"
          name="weight"
       
          onChange={this.handleChange}
        />
        <input
          placeholder='Enter Mobile No'
          type="NumberInput"
          name="mobile"
       
          onChange={this.handleChange}
        />
         
       

         
        
       
                <button>Add</button>
                <Link to="/getdetail"><button>Show Details</button></Link>
            </form>
        );
    }
}
export default Patientform;