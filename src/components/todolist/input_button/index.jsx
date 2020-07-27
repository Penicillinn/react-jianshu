import React, { useState } from 'react';
import { Input,Button } from 'antd';
import { connect } from 'react-redux';
import action from '../../../store/todo_list/action';
const InputButton = (props) => {
    const [value,setValue] = useState('');
    const handleAdd = () => {
        const { addTodo,data } = props;
        addTodo({
            id: data.length,
            name: value,
            isDone: false
        })
        setValue('');
    }
    return (
        <div style={{display: 'flex',justifyContent: 'space-between'}}>
            <Input style={{marginRight: '10px'}} value={value} onChange={e => setValue(e.target.value)}></Input>
            <Button type='primary' onClick={e => handleAdd()}>添加</Button>
        </div>
    )
}

export default connect((state) => ({data: state.todoReducer.todoList}),action)(InputButton);