import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render() {
    return (
      <main>
          <Row  xs={1} md={2} lg={3}>
            {this.props.data.map((beast, index) => (
                <Col>
                  <HornedBeast                    
                    key={index}
                    title={beast.title}
                    index={index}
                    imageURL={beast.image_url}
                    description={beast.description}
                    keyword={beast.keyword}
                    horns={beast.horns}
                    handleSelectBeast={this.props.handleSelectBeast}
                  />
                </Col>
              )
            )}
          </Row>
      </main>
    );
  }
}

export default Main;
