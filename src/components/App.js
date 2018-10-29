import React, { Component } from 'react';
import styles from '../styles/App.module.css';
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
           return ( <Gift key={gift.id} gift={gift} handleRemove={this.removeGift}/> )
        });

        return(
            <div className={styles.container}>
                <h1>Gift Giver</h1>
                <div className="gift-list">
                    {giftsList}
                </div>
                <a id="addBtn" href="#addBtn" className={styles.btn} onClick={this.handleAddGift}>Add Gift</a>
            </div>
        )
    }
}

export default App;