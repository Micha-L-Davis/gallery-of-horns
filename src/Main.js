import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';
import HornedBeast from './HornedBeast';
import data from './data.json';



class Main extends React.Component {
  render() {
    return (
      <main>
          <Row  xs={1} md={2} lg={3}>
            {data.map((beast, index) => (
                <Col>
                  <HornedBeast
                    title={beast.title}
                    key={index}
                    imageURL={beast.image_url}
                    description={beast.description}
                    keyword={beast.keyword}
                    horns={beast.horns}
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
