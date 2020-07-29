import React,{ Component } from 'react';
import { homeAction } from '../../../store/home';
import { connect } from 'react-redux';
import { HomeListItem } from './homeList.js';

class HomeList extends Component {
    componentDidMount() {
        const { getList } = this.props;
        getList();
    }
    render() {
        const { list } = this.props;
        return (
            <div style={{display: 'flex',flexWrap: 'wrap',marginTop: '20px',borderBottom: '1px solid #eee'}}>
                {
                    list.map(item => {
                        return (
                            <HomeListItem key={item.id}>
                                <img src={item.imgUrl} alt='' />
                                <span>{item.title}</span>
                            </HomeListItem>
                        )
                    })
                }
            </div>
        )
    }
}

export default connect(state => ({...state.homeReducer}),homeAction)(HomeList);