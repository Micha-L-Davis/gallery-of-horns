import React from 'react';

class HornedBeast extends React.Component {
    render(){
        return (
            <div class="beast">
                <h2>{this.props.title}</h2>
                <img src={this.props.imageURL} alt={this.props.description} class="beast-image" />
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default HornedBeast;
