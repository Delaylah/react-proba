
import React, { PropTypes } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import Pagination from 'react-bootstrap/lib/Pagination';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Well from 'react-bootstrap/lib/Well';
import axios from 'axios'

const title = 'Table';
//context.setTitle(title);


function submitHandler(sifra){

  //history.push('/');
  
    axios.post('http://localhost:8080//obrisiPredavaca/{id}', {
 id : sifra
  })

  .then(function (response) {
    console.log("Register response", response.data.isSuccess);
    alert("Uspješno ste se obrisalikorisnika");   
  })
  .catch(function (error) {
    console.error("Register error", error);
    alert("Došlo je do greške prilikom brisanja.");         
  });
  }

//function displayTable(props, context) {
var displayTable =  React.createClass({


  getInitialState: function() {
      return {
        users: []
      }
    },

    componentDidMount: function() {
      var _this = this;
      axios
        .get("http://localhost:8080/predavaci")
        .then(function(result) {    
          _this.setState({
            users: result.data
          

          });
        });
    },







  
  render: function() {
    return (
      
      <div>
      <div className="col-lg-12">
        <PageHeader>Edituj listu korisnika -tip -Preadavci</PageHeader>
      </div>    
        <div className="col-lg-6">
          <Panel header={<span>Predavaci</span>} >
            <div className="table-responsive">
              <table className="table table-striped table-bordered table-hover">
                <thead>
                  <tr>                 
                    <th>Ime</th>
                    <th>Prezime </th>                 
                    <th>Izbrisi korisnika</th>

                  </tr>
                </thead>
                <tbody>                 

                  {this.state.users.map(function(user) {
                  return (
                    <tr key="{user.id}">                
                    <td>{user.ime}</td>
                    <td>{user.prezime}</td>                              
                 <td><button type="button" onClick ={(event)=>{submitHandler("{user.id}");}}>Izbrisi</button></td>
                       </tr>
                  );
                })}
                 
                  
                </tbody>
              </table>
            </div>
          </Panel>             
      </div>



         
      
    </div>);

  }
});


//displayTable.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayTable;
