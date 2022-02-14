import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
    render() {
        return (
            <main>
                <HornedBeast 
                    title = 'Beast 1' 
                    imageURL = 'https://images.unsplash.com/photo-1601393977410-65950a43f1b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1959&q=80'
                    description = 'Beast 1'
                />
                <HornedBeast 
                    title = 'Beast 2' 
                    imageURL = 'https://images.unsplash.com/photo-1549471013-3364d7220b75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    description = 'Beast 2'
                />
            </main>
        );
    }
}

export default Main;
