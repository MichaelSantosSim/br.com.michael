import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap/css/bootstrap.css';



class Body extends React.Component {
  render() {
    return (
      <div>
        <Header headerText="Hi, i'm the header!" />
        <Form name="Michael"
          email="ricardo@outlook.com"
          address="Rua Mário, 184" />
      </div>
    );
  }
}


class Header extends React.Component {

  render() {
    return (
      <div class="header">
        {this.props.headerText}
      </div>
    );
  }
}


class Form extends React.Component {
  render() {
    return (
      <div>
        <form class="container border rounded">
          <div class="form-group col-md-5 order-md-1">
            <h4 class="mb-3">Formulário</h4>
          </div>
          <div class="form-group col-md-12">
            <div class="alert alert-danger" role="alert">
              Incorrect data
						</div>
          </div>
          <div class="form-inline form-group">
            <div class="input-group col-md-5">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon3">Name</span>
              </div>
              <input type="text" value={this.props.name} class="form-control" id="basic-url" aria-describedby="basic-addon3" />
            </div>
            <div class="input-group col-md-5">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon3">Email</span>
              </div>
              <input type="text" value={this.props.email} class="form-control" id="basic-url" aria-describedby="basic-addon3" />
            </div>
          </div>
          <div class="form-group">
            <div class="input-group col-md-10">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon3">Address</span>
              </div>
              <input type="text" value={this.props.address} class="form-control" id="basic-url" aria-describedby="basic-addon3" />
            </div>
          </div>
          <div class="form-group">
            <div class="dropdown-divider col-md-10"></div>
          </div>
          <div class="form-group">
            <div class="input-group col-md-5">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Options</label>
              </div>
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div class="form-group col-md-6">
            <div class="dropdown-divider"></div>
            <button type="submit" class="btn btn-primary col-md-4">Submit</button>
          </div>
        </form>
      </div>
    )
      ;
  }
}

// ========================================

ReactDOM.render(
  <Body />,
  document.getElementById('root')
);

