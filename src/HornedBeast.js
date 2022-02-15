import React from 'react';
import Card from 'react-bootstrap/Card';
import './HornedBeast.css';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heartCount: 0
    }
  }

  handleClick = () => this.setState({ heartCount: this.state.heartCount + 1 })

  render() {
    return (
      <Card className="beast">
        <Card.Img
          variant="top"
          src={this.props.imageURL}
          alt={this.props.description}
          onClick={this.handleClick}
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Subtitle>💖 {this.state.heartCount}</Card.Subtitle>
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;
