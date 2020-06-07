import React, { Component } from 'react';
import Panels from './components/Panels';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      server: {},
      loading: true,
      error: '',
    };
    this.updateData = this.updateData.bind(this);
    this.cockpitError = this.cockpitError.bind(this);
  }

  componentDidMount() {
    this.fetchData();
    this.interval = setInterval(() => this.fetchData(), 1000);
  }

  fetchData() {
    window.cockpitSpawn(this.updateData, this.cockpitError);
  }
  updateData(data) {
    const jsonData = JSON.parse(data);
    this.setState({
      loading: false,
      server: jsonData,
      error: ""
    });
  }

  cockpitError(error) {
    console.error('error', error);
    this.setState({
      error: error.message,
    });
  }

  render() {
    return (
      <div className="App">
        {!this.state.loading && <Panels server={this.state.server} />}
        {this.state.error && <div className="error">Error fetching data: {this.state.error}</div>}
      </div>
    );
  }
}

export default App;
