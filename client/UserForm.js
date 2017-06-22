import React, {Component} from 'react';
import styles from './css/UserForm.css';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};
        }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onUserSubmit(this.state.name);
    }

    handlechange(e) {
        this.setState({name: e.target.value});
    }

    render() {
        return(
            <form className={styles.USerForm} onSubmit={e => this.handleSubmit(e)}>
                <input
                    className={styles.UserInput}
                    placeholder='Write your nickname and press enter'
                    onChange={e => this.handlechange(e)}
                    value={this.state.name}
                />
            </form>
        );
    }
}

export default UserForm;
