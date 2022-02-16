import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css'
import data from './data.json';

class App extends React.Component {
  render(){
    return (
      <>
        <Header />
        <Main data={data}/>
        <Footer />
      </>
    );
  }
}

export default App;
