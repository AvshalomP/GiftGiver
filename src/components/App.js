import React, { Component } from 'react';


class App extends Component {
    constructor(props){
        super(props);

        this.state = { gifts: [] }
    }

    handleAddGift = () => {
        const { gifts } = this.state;
        const ids = gifts.map( gift => gift.id);
        const maxId = ids.length > 0 ? Math.max(...ids) : 0;

        gifts.push({ id: maxId+1});
        this.setState({ gifts });
    };

    render(){
        return(
            <div>
                <h2>Gift Giver</h2>
                <button className="btn-add" onClick={this.handleAddGift}>Add Gift</button>
            </div>
        )
    }
}

export default App;