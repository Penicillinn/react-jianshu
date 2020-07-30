import React, { Component } from 'react';
import { action } from '../../store/detail';
import { connect } from 'react-redux';
class Detail extends Component {

    componentDidMount() {
        this.props.getData();
    }

    render() {
        const { data } = this.props;
        return (
            <div>
                <h2>{data.title}</h2>
                <p>{data.content}</p>
            </div>
        )
    }
}

export default connect(state => ({ ...state.detailReducer }),action)(Detail);