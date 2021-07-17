import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

const styles={
    li:{ 
        display: "flex",
        justifyContent: 'space-between',
        alignItems:'center',
        padding: '.5rem 1rem',
        border: '1px solid #006400',
        borderRadius: '5px',
        background: '#3CB371',
        marginBottom: '15px'    
    },
    input: {
        marginRight: '10px',
    },
    span: {
        
    }
}

export default function TodoItem({Michel, index, tick}) {

    const {removeTodo} = useContext(Context)

    const classes = []

    if (Michel.completed) {
        classes.push('done')
    }

    return (

        <li style={styles.li}>
                 <span className={classes.join('  ')}>
                <input type="checkbox" 
                    style={styles.input}
                    checked={Michel.completed}
                    onChange={() => tick(Michel.id)}/>
                <strong style={styles.strong}>
                    {index + 1}
                </strong>
                &nbsp;
                {Michel.title}
                </span>
                <button
                 className="rm"
                 onClick ={removeTodo.bind(null, Michel.id )}
                 >
                    &times;
                </button>
            </li>
    )
}

TodoItem.propTypes = {
    Michel:PropTypes.object.isRequired ,
    index: PropTypes.number.isRequired,
    tick: PropTypes.func.isRequired,
 
}