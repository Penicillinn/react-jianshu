import React from 'react';
import { List,Button } from 'antd';
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
const ListItem = (props) => {
    const data = props.data.filter(item => item.isDone === true);
    const handleDelete = (id) => {
        const { deleteItem } = props;
        deleteItem(id)
    }
    return (
        <div>
            <List
                bordered
                dataSource={data}
                renderItem={item => (
                    <List.Item style={{display: 'flex',justifyContent: 'space-between'}}>
                        {item.name}
                        <Button type="link" onClick={e => handleDelete(item.id)}>
                            delete
                        </Button>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default connect(state => ({ data: state.todoReducer.todoList }),action)(ListItem);