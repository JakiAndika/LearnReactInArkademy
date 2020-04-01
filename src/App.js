import React, { Component } from 'react';
import logo from './logo.svg';
import ComponentName from './ComponentName';
import './App.css';
import Componentkelas from './ComponentKelas';


class App extends Component {
  state = {
    header: 'Learn',
    nama: '',
    kelas: '',
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        header: 'Learn To React'
      })
    }, 1000)
  }

  render() {
    return (
      <div>
        <img src={logo} alt="Logo" style={{ width: 50 }} />
        <br/>
        Study : {this.state.header}
        <ComponentName
          nama={this.state.nama}
        />
        <ComponentContent
          content={this.state.kelas}
        />
      </div>
    )
  }
}
export default App;
