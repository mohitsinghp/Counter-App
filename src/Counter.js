import React, { useContext } from 'react'
import { CountContext } from './Context'

const Counter = () => {
    const [value, setValue] = useContext(CountContext);

    const addCount = () => {
        setValue({
            count: +value.count + 1
        });
    }
    const minusCount = () => {
        setValue({
            count: +value.count - 1
        });
    }

    const changeCount = (e) => {
        console.log(e.target.value)
        setValue({ count: e.target.value })
    }

    const mystyle = {
        button: {
            fontSize: "20px",
            color: "brown",
            background: "none",
            height: "50px",
            width: '50px',
            padding: "0",
            border: "none",
        },
        container: {
            border: "1px solid brown",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center"
        },
        input: {
            fontSize: "20px",
            border: "none",
            color: "brown",
            backgroundColor: "#e6bb9e",
            borderColor: "brown",
            width: '50px',
            height: "51px",
            textAlign: "center",
            padding: "0"
        }
    }

    return (
        <div style={mystyle.container}>
            <button style={mystyle.button}
                onClick={minusCount}>-</button>
            <input type="text"
                style={mystyle.input}
                name="count"
                value={value.count}
                placeholder={value.count}
                onChange={changeCount} />
            <button style={mystyle.button}
                onClick={addCount}>+</button>
        </div>
    )
}

export default Counter
