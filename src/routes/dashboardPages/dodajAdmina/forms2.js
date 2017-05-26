import React, { PropTypes } from 'react';
import {
  Panel,
  Button,
  Col,
  PageHeader,
  ControlLabel,
  FormControl,
  HelpBlock,
  FormGroup,
  Checkbox,
  Form,
  Radio,
  InputGroup,
  Glyphicon } from 'react-bootstrap';

import FormControlFeedback from 'react-bootstrap/lib/FormControlFeedback';
import FormControlStatic from 'react-bootstrap/lib/FormControlStatic';
import InputGroupAddon from 'react-bootstrap/lib/InputGroupAddon';
import axios from 'axios';


const title = 'DodajAdmina';


function submitHandler(e) {
  e.preventDefault();
  //history.push('/');

  var username = document.getElementById("iUsername").value;
  var email = document.getElementById("iEmail").value;
  var pass = document.getElementById("iPassword").value;
  var passConfirm = document.getElementById("iPasswordConfirm").value;

  if (pass != passConfirm) {
    alert("Šifra za potvrdu mora biti jednaka orginalnoj šifri.");
  } else {
    axios.post('http://localhost:8080/administratori', {
    korisnickoIme: username,
    sifra: pass,
    email: email,
    adresaBoravista: document.getElementById("iAdresaBoravista").value,
    datumRodjenja: document.getElementById("iDatumRodjenja").value,
    ime: document.getElementById("iIme").value,
    jmbg: document.getElementById("iJmbg").value,
    mjestoRodjenja: document.getElementById("iMjestoRodjenja").value,
    prezime: document.getElementById("iPrezime").value,
    
  })
  .then(function (response) {
    console.log("Register response", response.data.isSuccess);
    alert("Uspješno ste se registrovali. Sada se možete logovati sa registrovanim podacima.");   
  })
  .catch(function (error) {
    console.error("Register error", error);
    alert("Došlo je do greške prilikom registrovanja.");         
  });
  }
}

function displayForms(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>Dodaj administratora</PageHeader>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <Panel header={<span>Unesite novog admina</span>} >
            <div className="row">
              <div className="col-lg-6">
                <Form role="form" onSubmit={(e) => { submitHandler(e); }}>
                 <fieldset>
            <div className="form-group">
              <FormControl
                type="text"
                className="form-control"
                placeholder="Username"
                name="name"
                id="iUsername"
              />
            </div>

            <div className="form-group">
              <FormControl
                type="text"
                className="form-control"
                placeholder="E-mail"
                name="email"
                id="iEmail"
              />
            </div>


            <div className="form-group">
              <FormControl
                className="form-control"
                placeholder="Password"
                type="password"
                name="password"
                id="iPassword"
              />
            </div>

            <div className="form-group">
              <FormControl
                className="form-control"
                placeholder="Confirm Password"
                type="password"
                name="password"
                id="iPasswordConfirm"
              />
            </div>

            <div className="form-group">
              <FormControl
                type="text"
                className="form-control"
                placeholder="Adresa boravista"
                name="adresaBoravista"
                id="iAdresaBoravista"
              />
            </div>

            <div className="form-group">
              <FormControl
                type="date"
                className="form-control"
                placeholder="Datum rođenja"
                name="datumRodjenja"
                id="iDatumRodjenja"
              />
            </div>

            <div className="form-group">
              <FormControl
                type="text"
                className="form-control"
                placeholder="Ime"
                name="ime"
                id="iIme"
              />
            </div>

            <div className="form-group">
              <FormControl
                type="text"
                className="form-control"
                placeholder="JMBG"
                name="jmbg"
                id="iJmbg"
              />
            </div>

            <div className="form-group">
              <FormControl
                type="text"
                className="form-control"
                placeholder="Mjesto rođenja"
                name="mjestoRodjenja"
                id="iMjestoRodjenja"
              />
            </div>

            <div className="form-group">
              <FormControl
                type="text"
                className="form-control"
                placeholder="Prezime"
                name="prezime"
                id="iPrezime"
              />
            </div>


<Button type="submit" bsSize="large" bsStyle="success" block>registruj novog admina</Button>


        
          </fieldset>


                </Form>
              </div>  
              </div>           
          </Panel>
        </div>
      </div>
    </div>
  );
}

displayForms.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayForms;
