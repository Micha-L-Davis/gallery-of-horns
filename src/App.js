import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import SelectedBeast from './SelectedBeast'
import 'bootstrap/dist/css/bootstrap.min.css'
import data from './data.json';
import Modal from 'react-bootstrap/Modal';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedBeast: 'none',
      showModal: false,
      filteredData: data
    }
  }

  handleSelectBeast = (beastIndex) => {
    this.setState({ selectedBeast: data[beastIndex] });
    this.setState({ showModal: true });
  };

  handleCloseModal = () => this.setState({ showModal: false });

  filterGallery = numHorns => numHorns === 0? this.setState({ filteredData: data }) 
    : this.setState({ filteredData: data.filter(beast => beast.horns === numHorns)});

  render(){
    return (
      <>
        <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
          <SelectedBeast 
            title={this.state.selectedBeast.title}
            imageURL={this.state.selectedBeast.image_url}
            description={this.state.selectedBeast.description}
          />
        </Modal>

        <Header filterGallery={this.filterGallery}/>
        <Main data={this.state.filteredData} handleSelectBeast={this.handleSelectBeast}/>
        <Footer />
      </>
    );
  }
}

export default App;
