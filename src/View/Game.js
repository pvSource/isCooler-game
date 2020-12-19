import React from 'react';
import Gamefield from './Gamefield.js';
import Header from './Header.js';
import Footer from './Footer.js';

export default class Game extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Gamefield />
                <Footer />
            </div>
        )
    }
}