import React, { Component } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import TeamBoard from "./components/TeamBoard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddTeam from "./components/Team/AddTeam";
import { Provider } from "react-redux";
import store from "./store";
import UpdateTeam from "./components/Team/UpdateTeam";
import PositionBoard from "./components/PositionBoard";
import AddPosition from "./components/Position/AddPosition";
import UpdatePosition from "./components/Position/UpdatePosition";
import DocumentTypeBoard from "./components/DocumentTypeBoard";
import AddDocumentType from "./components/DocumentType/AddDocumentType";
import UpdateDocumentType from "./components/DocumentType/UpdateDocumentType";
import ClientTypeBoard from "./components/ClientTypeBoard";
import AddClientType from "./components/ClientType/AddClientType";
import UpdateClientType from "./components/ClientType/UpdateClientType";
import PaymentTypeBoard from "./components/PaymentTypeBoard";
import AddPaymentType from "./components/PaymentType/AddPaymentType";
import UpdatePaymentType from "./components/PaymentType/UpdatePaymentType";
import StatusBoard from "./components/StatusBoard";
import AddStatus from "./components/Status/AddStatus";
import UpdateStatus from "./components/Status/UpdateStatus";
import TypeOfSecurityBoard from "./components/TypeOfSecurityBoard";
import AddTypeOfSecurity from "./components/TypeOfSecurity/AddTypeOfSecurity";
import UpdateTypeOfSecurity from "./components/TypeOfSecurity/UpdateTypeOfSecurity";
import ProductBoard from "./components/ProductBoard";
import AddProduct from "./components/Product/AddProduct";
import UpdateProduct from "./components/Product/UpdateProduct";
import EmployeeBoard from "./components/EmployeeBoard";
import AddEmployee from "./components/Employee/AddEmployee";
import UpdateEmployee from "./components/Employee/UpdateEmployee";
import ClientBoard from "./components/ClientBoard";
import AddClient from "./components/Client/AddClient";
import DocumentBoard from "./components/DocumentBoard";
import AddDocument from "./components/Document/AddDocument";
import ContractBoard from "./components/ContractBoard";
import AddContract from "./components/Contract/AddContract";
import UpdateClient from "./components/Client/UpdateClient";
import UpdateDocument from "./components/Document/UpdateDocument";
import UpdateContract from "./components/Contract/UpdateContract";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";

import { history } from './helpers/history';

class App extends Component {
  render(){
    return (
      <Provider store = {store}>
        <Router history={history}>

          <Navbar />

            <div className="container mt-3">
              <Switch>
                <Route exact path={["/", "/home"]} component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/profile" component={Profile} />
                <Route path="/user" component={BoardUser} />
                <Route path="/mod" component={BoardModerator} />
                <Route path="/admin" component={BoardAdmin} />

                <Route exact path="/team" component={TeamBoard} />
                <Route exact path="/team/addTeam" component={AddTeam} />
                <Route exact path="/team/updateTeam/:team_id" component={UpdateTeam} />

                <Route exact path="/employee" component={EmployeeBoard} />
                <Route exact path="/employee/addEmployee" component={AddEmployee} />
                <Route exact path="/employee/updateEmployee/:employee_id" component={UpdateEmployee} />

                <Route exact path="/position" component={PositionBoard} />
                <Route exact path="/position/addPosition" component={AddPosition} />
                <Route exact path="/position/updatePosition/:position_id" component={UpdatePosition} />

                <Route exact path="/document_type" component={DocumentTypeBoard} />
                <Route exact path="/document_type/addDocumentType" component={AddDocumentType} />
                <Route exact path="/document_type/updateDocumentType/:document_type_id" component={UpdateDocumentType} />

                <Route exact path="/document" component={DocumentBoard} />
                <Route exact path="/document/addDocument" component={AddDocument} />
                <Route exact path="/document/updateDocument/:document_id" component={UpdateDocument} />
                
                <Route exact path="/client_type" component={ClientTypeBoard} />
                <Route exact path="/client_type/addClientType" component={AddClientType} />
                <Route exact path="/client_type/updateClientType/:client_type_id" component={UpdateClientType} />

                <Route exact path="/payment_type" component={PaymentTypeBoard} />
                <Route exact path="/payment_type/addPaymentType" component={AddPaymentType} />
                <Route exact path="/payment_type/updatePaymentType/:payment_type_id" component={UpdatePaymentType} />

                <Route exact path="/client" component={ClientBoard} />
                <Route exact path="/client/addClient" component={AddClient} />
                <Route exact path="/client/updateClient/:client_id" component={UpdateClient} />

                <Route exact path="/status" component={StatusBoard} />
                <Route exact path="/status/addStatus" component={AddStatus} />
                <Route exact path="/status/updateStatus/:status_id" component={UpdateStatus} />

                <Route exact path="/type_of_security" component={TypeOfSecurityBoard} />
                <Route exact path="/type_of_security/addTypeOfSecurity" component={AddTypeOfSecurity} />
                <Route exact path="/type_of_security/updateTypeOfSecurity/:type_of_security_id" component={UpdateTypeOfSecurity} />

                <Route exact path="/contract" component={ContractBoard} />
                <Route exact path="/contract/addContract" component={AddContract} />
                <Route exact path="/contract/updateContract/:contract_id" component={UpdateContract} />

                <Route exact path="/product" component={ProductBoard} />
                <Route exact path="/product/addProduct" component={AddProduct} />
                <Route exact path="/product/updateProduct/:product_id" component={UpdateProduct} />
              </Switch>
            </div>
        </Router>
      </Provider>
    );
  }  
}

export default App;
