'use client'

import { useState, useReducer } from 'react'
import styles from "./contactForm.module.css"; 

const initialState = {
    data: {
        fullName: "",
    },
    error: false,
}

function reducer(state, action) {
    switch (action.type) {
        case "INPUT_CHANGE":
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.payload.fieldName]: action.payload.fieldValue
                },
            }
        default:
            return state
    }
}

export default function ContactForm() {

    const [state, dispatch] = useReducer(reducer, initialState);

    const [ error, setError ] = useState(false)

    console.log(state)

    function handleChange(e) {
        dispatch({ 
            type: "INPUT_CHANGE",
            payload: {
                fieldName: e.target.name,
                fieldValue: e.target.value
            }
         })
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!(state.data.fullName)) {
            setError(true)
            return
        } else {
            setError(false)
            console.log(state)
        }
    }


    return (
        <form className={styles.form} onSubmit={handleSubmit}>

            <fieldset className={styles.group}>

                <legend className={styles.groupTitle}>Personal Information:</legend>

                <ul>

                    <li className={styles.inputGroup}>
                        <label htmlFor="fullName">Full name</label>
                        <input className={styles.input} type="text" name="fullName" value={state.data.fullName} onChange={handleChange}></input>
                    </li>

                </ul>

            
            </fieldset>

            {error && <div className={styles.error}>Error all fields are required - some missing.</div>}

            <button className={styles.button} type="submit">Submit</button>

        </form>
    )
}