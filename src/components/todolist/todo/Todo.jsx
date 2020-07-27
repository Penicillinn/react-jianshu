import React from 'react';
import { List,Checkbox } from 'antd';
import { connect } from 'react-redux';
import action from '../../../store/todo_list/action';
// const data = [
//     {
//         name: 'kobe',
//         id: 0
//     },
//     {
//         name: 'wade',
//         id: 1
//     },
//     {
//         name: 'james',
//         id: 2
//     },
// ]
const Todo = (props) => {
    const data = props.data.filter(item => item.isDone === false);
    const { changeStatus } = props;
    const handleChange = (e,id) => {
        changeStatus({
            id,
            status: e.target.checked
        })
    }
    return (
        <div>
            <List
                bordered
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <Checkbox style={{marginRight: '10px'}} onChange={e => handleChange(e,item.id)} checked={item.isDone}/>
                        {item.name}
                    </List.Item>
                )}
            />
        </div>
    )
}

export default connect(state => ({ data: state.todoReducer.todoList }),action)(Todo);