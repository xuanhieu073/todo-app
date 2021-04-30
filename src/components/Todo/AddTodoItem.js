import React, {useState} from 'react'
import {Divider, Input} from 'antd'

const {Search} = Input

export default function Addtodoitem({onAddItem}) {

    const [itemTitle, setItemTitle] = useState('')

    const txtItemTitle_Changed = e => {
        setItemTitle(e.target.value)
    }
    
    const btnAdd_Clicked = () => {
        const newItem = {id: Math.random(), title: itemTitle, done: false}
        console.log(newItem)
        onAddItem(newItem)
    }

    const txtItemTitle_KeyUp = e => {
        if(e.keyCode === 27){
            setItemTitle('')
        }
    }

    return (
        <>
            <Divider orientation="left">Add item ➕</Divider>
            <Search placeholder="Add todo" enterButton="Add" value={itemTitle} onChange={txtItemTitle_Changed} onKeyUp={txtItemTitle_KeyUp} onSearch={btnAdd_Clicked}/>
        </>
    )
}
