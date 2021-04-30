import React,{useState, useEffect} from 'react'
import {Divider, Input} from 'antd'

const {Search} = Input

export default function Searchbar({onQueryChanged}) {
    const [query, setQuery] = useState('')

    useEffect(() => {
        onQueryChanged(query)
    }, [query,onQueryChanged])

    const txtSearch_Changed = e => {
        setQuery(e.target.value)
    }

    const txtSearch_KeyUp = function(e){
        if(e.keyCode === 27){
            setQuery('')
        }
    }

    return (
        <>
            <Divider orientation="left">Search to do items 🔎</Divider>
            <Search placeholder="input search (by name)" enterButton value={query} onKeyUp={txtSearch_KeyUp} onChange={txtSearch_Changed}></Search>
        </>
    )
}
