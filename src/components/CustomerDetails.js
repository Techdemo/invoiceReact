import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class CustomerDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Stap 2 / 8" color="primary" />
          <div className="content">
            <h1>Factuur exporteren naar pdf</h1>
            <p className="intro">Adresgegevens van de klant</p>
            <TextField
              hintText="naam van de klant"
              floatingLabelText="klantnaam"
              onChange={handleChange("nameCustomer")}
              defaultValue={values.nameCustomer}
            />
            <br />
            <TextField
              hintText="Straat naam"
              floatingLabelText="straat"
              onChange={handleChange("streetCustomer")}
              defaultValue={values.streetCustomer}
            />
            <br />
            <TextField
              hintText="huisnummer klant"
              floatingLabelText=""
              onChange={handleChange("numberCustomer")}
              defaultValue={values.numberCustomer}
            />
            <br />
            <TextField
              hintText="Postcode"
              floatingLabelText="postcode van van de klant"
              onChange={handleChange("zipCustomer")}
              defaultValue={values.zipCustomer}
            />
            <br />
            <TextField
              hintText="Stad of regio"
              floatingLabelText="woonplaats van de klant"
              onChange={handleChange("number")}
              defaultValue={values.cityCustomer}
            />
            <br />
            <TextField
              hintText="land"
              floatingLabelText="land van de klant"
              onChange={handleChange("countryCustomer")}
              defaultValue={values.countryCustomer}
            />
            <br />
            <RaisedButton
              label="Volgende stap"
              primary={true}
              style={styles.button}
              onClick={this.continue}
            />
            <RaisedButton
              label="Stap terug"
              primary={false}
              style={styles.button}
              onClick={this.back}
            />
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default CustomerDetails;
