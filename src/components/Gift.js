import React, { Component } from 'react';

class Gift extends Component {
    constructor(props){
        super(props);

        this.state = { person: "", present: "" };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render(){
        return (
            <form>
                <label htmlFor="person">Person:</label>
                <input type="text" className="input-person" name="person"
                       onChange={this.handleChange}/>
                <label htmlFor="present">Present:</label>
                <input type="text" className="input-present" name="present"
                       onChange={this.handleChange}
                />
            </form>
        )
    }
}


export default Gift;