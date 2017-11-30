import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';
import { setGoals } from '../actions';
import GoalItem from './GoalItem';

class GoalList extends Component {

    componentDidMount() {
        goalRef.on('value', snap => {
            let goals = [];
            snap.forEach(goal => {
                const { email, title, date } = goal.val()
                const serverKey =  goal.key;
                goals.push({ email, title, serverKey, date });
                // console.log('goal', goal);
            })
            // console.log('goals', goals);
            this.props.setGoals(goals)
        })
    }

    render() {
        // console.log('this.props.goals', this.props.goals);
        return (
            <div>
                {
                    this.props.goals.map((goal, k) => {
                        return (
                            <GoalItem key={k} goal={goal} />
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { goals } = state;
    return {
        goals
    }
}
export default connect(mapStateToProps, { setGoals })(GoalList);