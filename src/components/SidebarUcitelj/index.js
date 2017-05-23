import React, { Component } from 'react';
import classNames from 'classnames';
import history from '../../core/history';

class SidebarUcitelj extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      samplePagesCollapsed: true,
    };
  }

  render() {
    return (
      <div className="navbar-default sidebar" style={{ marginLeft: '-20px' }} role="navigation">
        <div className="sidebar-nav navbar-collapse collapse">
          <ul className="nav in" id="side-menu">
            

            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/notification'); }} >
                <i className="fa fa-dashboard fa-fw" /> &nbsp;Dashboard
              </a>
            </li>

            <li className={classNames({ active: !this.state.chartsElementsCollapsed })}>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({ chartsElementsCollapsed: !this.state.chartsElementsCollapsed });
                  return false;
                }}
              >
                <i className="fa fa-bar-chart-o fa-fw" /> &nbsp;Kursevi
                <span className="fa arrow" />
              </a>
              <ul
                className={
                  classNames({
                    'nav nav-second-level': true,
                    collapse: this.state.chartsElementsCollapsed,
                  })
              }
              >
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); history.push('/dashboarducitelja'); }} >
                   Moje lekcije, termini i testovi 
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    onClick={(e) => { e.preventDefault(); history.push('/dodavanjeterminaforma'); }}
                  > Dodaj termin
                    
                  </a>
                </li>
                 <li>
                  <a
                    href=""
                    onClick={(e) => { e.preventDefault(); history.push('/dodavanjetestaforma'); }}
                  > Dodaj test
                    
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    onClick={(e) => { e.preventDefault(); history.push('/dodavanjelekcijeforma'); }}
                  > Dodaj novu lekciju
                    
                  </a>
                </li>
              </ul>
            </li>



            
            
           
          </ul>
        </div>
      </div>
    );
  }
}


export default SidebarUcitelj;
