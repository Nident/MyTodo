import React from 'react'
import PropTypes from 'prop-types'


function Inputer({onCreate}) {

    const styles ={
        form: {
            marginBottom: '10px',
            flexDirection: "row"
        },
        input : {
            width: "60%",
            height: "30px",
            border: "2px solid green",
            borderRadius: '10px',
            background: '#90EE90',
            fontSize: '1rem',
            fontWeight: '600',
            textDecoration: 'blink',
            paddingLeft: '10px'
        }
    }

const [inp, setInp] = React.useState('')


function submitHandler(e) {
    e.preventDefault()

    if (inp.trim()) {
        onCreate(inp)
        setInp("")
    }

}

    return(
        <form style={styles.form} onSubmit={submitHandler}>
            <input style={styles.input}
            value={inp}
            onChange={e => setInp(e.target.value)}
             type="text"/>
            <button 
            type="submit" className="Accept">Add</button>
        </form>
    )
}

Inputer.propTypes = {
 onCreate: PropTypes.func.isRequired
}


export default Inputer


