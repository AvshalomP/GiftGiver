import React, { Component } from 'react';
import styles from '../styles/Gift.module.css';

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
        const { handleRemove, gift } = this.props;
        return (

                <div className={styles.container}>
                <form className={styles.formContainer}>
                    <label htmlFor="person">Person</label>
                    <input type="text" className="input-person" name="person"
                           onChange={this.handleChange}/>
                    <label htmlFor="present">Present</label>
                    <input type="text" className="input-present" name="present"
                           onChange={this.handleChange}
                    />
                </form>
                <button id="removeBtn" className={styles.btn}
                        onClick={handleRemove.bind(this, gift.id)}
                >
                    Remove Gift
                </button>
            </div>
        )
    }
}


export default Gift;