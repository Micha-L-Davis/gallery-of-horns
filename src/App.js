import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css'
import data from './data.json';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedBeast: 'none',
    }
  }

  handleSelectBeast = (beast) => this.setState({ selectedBeast: beast });

  render(){
    return (
      <>
        <Header />
        <Main data={data} handleSelectBeast={this.handleSelectBeast}/>
        <Footer />
      </>
    );
  }
}

export default App;
