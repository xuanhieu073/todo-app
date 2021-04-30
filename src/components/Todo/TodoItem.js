import React from 'react'
import {List, Button} from 'antd'

export default function Todoitem({item, onDoneItem}) {
    
    const btnDone_Clicked = () => {
        onDoneItem(item.id)
    }

    return (
        <List.Item className="todo-item">
            <label className={item.done ? 'todo-item-done': ''}>{item.title}</label>
            {!item.done && <Button type="primary" onClick={btnDone_Clicked}>Done</Button>}
        </List.Item>
    )
}
