import React, {useState} from 'react'
import Addtodoitem from './AddTodoItem'
import Searchbar from './Searchbar'
import Todolist from './TodoList'

export default function Todo(props) {
    const [items, setItems] = useState([
        {id: 1, title: 'vue js', done: false},
        {id: 2, title: 'react js', done: false},
        {id: 3, title: 'angular js', done: true}
    ])

    const [query, setQuery] = useState('')

    const onQueryChanged = query => {
        setQuery(query)
    }

    const onDoneItem = id => {
        setItems(items.map(item => item.id === id ? {...item, done: true} : item))
    }

    const onAddItem = item => {
        setItems([...items,item])
    }

    return (
        <>
            <Searchbar onQueryChanged={onQueryChanged}/>
            <Todolist items={items} query={query} onDoneItem={onDoneItem}/>
            <Addtodoitem onAddItem={onAddItem}/>
        </>
    )
}
