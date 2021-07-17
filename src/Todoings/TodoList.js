import React from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

export default function TodoList(props) {

    const styles={
        ul: {
            listStyle: "none",
            margin: 0,
            padding: 0
        }
    }
    return(
        <div>
            <ul style={styles.ul}>
                {props.list.map((todo , index) => {
                    return <TodoItem
                        Michel={todo}
                        index={index}
                        key={todo.id}
                        tick={props.Stalker} 
                         />
                })}
            </ul>
        </div>
    )
}


TodoList.protoTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    Stalker: PropTypes.func.isRequired
}