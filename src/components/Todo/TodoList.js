import React from 'react'
import {Divider, List} from 'antd'
import Todoitem from './TodoItem'

export default function Todolist({items,query,onDoneItem}) {
    

    return (
        <>
            <Divider orientation="left">To do list ✔</Divider>
            <List
                bordered>
                {items.filter(item => item.title.toLowerCase().includes(query.toLowerCase())).map(item => <Todoitem key={item.id} item={item} onDoneItem={onDoneItem}/>)}
            </List>
        </>
    )
}
