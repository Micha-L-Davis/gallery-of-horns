import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
    render() {
        return (
            <main>
                <HornedBeast 
                    title = 'Beast 1' 
                    imageURL = 'img/beast1.png'
                    description = 'Beast 1'
                />
                <HornedBeast 
                    title = 'Beast 2' 
                    imageURL = 'img/beast2.png'
                    description = 'Beast 2'
                />
            </main>
        );
    }
}

export default Main;
