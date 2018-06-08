import React, { Component } from 'react'
import Panels from './../components/Panels'
import './Home.scss';

class Home extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="col-xs-12">
                    <button className="btn bt-primary">
                        <i className="ion-plus-round"/> New Panel
                    </button>
                </div>
                <div>
                    <Panels 
                        panels={[]}
                    />
                </div>
            </div>
        )
    }
}

export default Home