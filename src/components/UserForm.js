import React, { Component } from "react";
import UserAdress from "./UserAdress";
import CustomerDetails from "./CustomerDetails";
import Date from "./Date";
import Success from "./Success";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "../App.css";

export class UserForm extends Component {
  state = {
    step: 1,
    logo: "",
    name: "",
    number: "",
    street: "",
    zip: "",
    city: "",
    country: "",
    kvk: "",
    btw: "",
    nameCustomer: "",
    streetCustomer: "",
    numberCustomer: "",
    zipCustomer: "",
    cityCustomer: "",
    countryCustomer: "",
    date: ""
  };

  // handle date change
  handleDateChange = date => {
    this.setState({ date: date });
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  getSteps = () => {
    return ["Select campaign settings", "Create an ad group", "Create an ad"];
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;

    const {
      logo,
      name,
      number,
      street,
      zip,
      city,
      country,
      kvk,
      btw,
      nameCustomer,
      streetCustomer,
      numberCustomer,
      zipCustomer,
      cityCustomer,
      countryCustomer,
      date
    } = this.state;
    const values = {
      step,
      logo,
      name,
      number,
      street,
      zip,
      city,
      country,
      kvk,
      btw,
      nameCustomer,
      streetCustomer,
      numberCustomer,
      zipCustomer,
      cityCustomer,
      countryCustomer,
      date
    };

    switch (step) {
      case 1:
        return (
          <UserAdress
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <CustomerDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Date
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            handleDateChange={this.handleDateChange}
          />
        );
      case 4:
        return <Success />;
    }
  }
}

export default UserForm;
