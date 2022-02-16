import React from 'react';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heartCount: 0
    }
  }

  increaseHearts = () => this.setState({ heartCount: this.state.heartCount + 1 })

  selectBeast = (beastIndex) => this.props.handleSelectBeast(beastIndex);

  handleClick = (event) => {
    event.preventDefault();

    this.increaseHearts();
    this.selectBeast(this.props.index);
  }

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
