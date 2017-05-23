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

const title = 'DodavanjeLekcijeForma';


function displayForms(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>Dodaj učitelja</PageHeader>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <Panel header={<span>Unesite novog ucitelja</span>} >
            <div className="row">
              <div className="col-lg-6">
                <Form>
                  
                 
                  <FormGroup controlId="formBasicText2">
                    <ControlLabel>Naziv lekcije</ControlLabel>
                    <FormControl
                      type="text"
                      placeholder="Enter Text"
                    />
                    <HelpBlock></HelpBlock>
                     
                    <FormControlFeedback />
                  </FormGroup>

                

                  <FormGroup
                    controlId="formBasicFile"
                  >
                    <ControlLabel>Uploaduj lekciju</ControlLabel>
                    <FormControl
                      type="file"
                    />
                    <FormControlFeedback />
                  </FormGroup>                           
                  <FormGroup>
                    <Button type="submit">Dodaj lekciju</Button>
                    {'  '}
                    <Button type="reset">Resetuj: </Button>
                  </FormGroup>
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
