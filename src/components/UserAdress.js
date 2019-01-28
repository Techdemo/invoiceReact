import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class UserAdress extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Stap 1 / 8" color="primary" />
          <div className="content">
            <h1>Factuur exporteren naar pdf</h1>
            <p className="intro">Vul de onderstaande formulieren in</p>
            <h3>Upload je logo</h3>
            <TextField
              hintText="Upload hier je logo"
              floatingLabelText="Logo"
              onChange={handleChange("logo")}
              defaultValue={values.logo}
            />
            <br />
            <h3>Adres gegevens</h3>
            <TextField
              hintText="Vul hier je naam van het bedrijf in"
              floatingLabelText="naam van je bedrijf"
              onChange={handleChange("name")}
              defaultValue={values.name}
            />
            <br />
            <TextField
              hintText="Straat"
              floatingLabelText="straat"
              onChange={handleChange("street")}
              defaultValue={values.street}
            />
            <br />
            <TextField
              hintText="Postcode"
              floatingLabelText="postcode van je handelsonderneming"
              onChange={handleChange("zip")}
              defaultValue={values.zip}
            />
            <br />
            <TextField
              hintText="Huisnummer"
              floatingLabelText="huisnummer van je handelsonderneming"
              onChange={handleChange("number")}
              defaultValue={values.number}
            />
            <br />
            <TextField
              hintText="stad"
              floatingLabelText="stad"
              onChange={handleChange("city")}
              defaultValue={values.city}
            />
            <br />
            <TextField
              hintText="land"
              floatingLabelText="land"
              onChange={handleChange("country")}
              defaultValue={values.country}
            />
            <br />
            <RaisedButton
              label="Volgende stap"
              primary={true}
              style={styles.button}
              onClick={this.continue}
            />
            <br />
            <TextField
              hintText="kvk"
              floatingLabelText="kvk nummer"
              onChange={handleChange("kvk")}
              defaultValue={values.kvk}
            />
            <br />
            <TextField
              hintText="btw"
              floatingLabelText="je btw nummer"
              onChange={handleChange("btw")}
              defaultValue={values.btw}
            />
            <br />
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

export default UserAdress;
