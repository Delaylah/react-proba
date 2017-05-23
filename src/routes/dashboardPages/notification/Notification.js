import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Alert from 'react-bootstrap/lib/Alert';
import Button from 'react-bootstrap/lib/Button';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import Popover from 'react-bootstrap/lib/Popover';
import Modal, { Footer, Header, Title, Body } from 'react-bootstrap/lib/Modal';
import PageHeader from 'react-bootstrap/lib/PageHeader';


class Notification extends Component {

  constructor(props) {
    super(props);
    this.state = {
      alertVisibleA: true,
      alertVisibleB: true,
      alertVisibleC: true,
      alertVisibleD: true,
      showModal: false,
    };
    this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }
  handleAlertDismiss(option) {
    switch (option) {
      case 'A':
        this.setState({ alertVisibleA: false });
        break;
      case 'B':
        this.setState({ alertVisibleB: false });
        break;
      case 'C':
        this.setState({ alertVisibleC: false });
        break;
      case 'D':
        this.setState({ alertVisibleD: false });
        break;
      default: this.setState({
        alertVisibleA: false,
        alertVisibleB: false,
        alertVisibleC: false,
        alertVisibleD: false,
      });
    }
  }

  render() {
    return (
      <div>

        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Novosti: </PageHeader>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <Panel header={<span>Alert Styles</span>} >
              <Alert bsStyle="success">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <a
                  href=""
                  onClick={(e) => { e.preventDefault(); }}
                  className="alert-link"
                >Alert Link</a>.
              </Alert>
              <Alert bsStyle="info">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <a
                  href=""
                  onClick={(e) => { e.preventDefault(); }}
                  className="alert-link"
                >Alert Link</a>.
              </Alert>
              <Alert bsStyle="warning">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <a
                  href=""
                  onClick={(e) => { e.preventDefault(); }}
                  className="alert-link"
                >Alert Link</a>.
              </Alert>
              <Alert bsStyle="danger">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <a
                  href=""
                  onClick={(e) => { e.preventDefault(); }}
                  className="alert-link"
                >Alert Link</a>.
              </Alert>
            </Panel>
          </div>

          
          
        </div>
      </div>

    );
  }
}

export default Notification;
