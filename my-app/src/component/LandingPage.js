import React, { Component } from 'react';

import Banner from './Banner';
import Cards from './Cards';
import Search from './Search';
import Logos from './Logos';

class LandingPage extends Component {
    render() {
        return (
            <div>
            <Banner/>
            <Cards/>
            <Search/>
            <Logos/>
            </div>
        );
    }
}

export default LandingPage;