import React from 'react';
import Form from 'react-bootstrap/Form'

class Header extends React.Component {
  handleFilter = event => this.props.filterGallery(event.target.value === 'no-filter'? 0 : parseInt(event.target.value));

  render() {
    return (
      <header>
        <h1>Gallery of Horns</h1>
        <Form>
          <Form.Group onChange={this.handleFilter}>
            <Form.Label>Filter Gallery Display</Form.Label>
            <Form.Select>
              <option value="no-filter">no filter...</option>
              <option value="1">one horn</option>
              <option value="2">two horns</option>
              <option value="3">three horns</option>
              <option value="100">one-hundred horns</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </header>
    );
  }
}

export default Header;
