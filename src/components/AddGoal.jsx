import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';
import * as moment from 'moment';

class AddGoal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            date: moment().format()
        }
    }

    addGoal() {
        // console.log('this', this);
        const { title, date } =  this.state;
        const { email } = this.props.user;
        goalRef.push({email, title, date});
    }

    render() {
        return (
            <div className="form-inline">
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="add a goal"
                        className="form-control"
                        style={{ marginRight: '5px' }}
                        onChange={event => this.setState({ title: event.target.value })} 
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                this.addGoal()
                            }
                        }}/>
                    <button
                        className="btn btn-success"
                        type="button"
                        onClick={() => this.addGoal()}>
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    const { user } = state;
    return {
        user
    }
}
export default connect(mapStateToProps, null)(AddGoal);