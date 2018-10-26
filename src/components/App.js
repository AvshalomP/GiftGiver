import React, { Component } from 'react';
import Gift from './Gift';
import { maxNumber } from '../helper';


class App extends Component {
    constructor(props){
        super(props);

        this.state = { gifts: [] }
    }

    handleAddGift = () => {
        const { gifts } = this.state;
        const ids = gifts.map( gift => gift.id);

        gifts.push({ id: maxNumber(ids)+1});
        this.setState({ gifts });
    };

    removeGift = (id) => {
        const gifts = this.state.gifts.filter( gift => gift.id!==id );

        this.setState({ gifts });
    };

    render(){
        const giftsList = this.state.gifts.map( gift => {
           return ( <Gift key={gift.id} gift={gift}
                          handleRemove={this.removeGift}
           />)
        });

        return(
            <div>
                <h2>Gift Giver</h2>
                <div className="gift-list">{giftsList}</div>
                <button className="btn-add" onClick={this.handleAddGift}>Add Gift</button>
            </div>
        )
    }
}

export default App;