'use client'

import { useState, useReducer } from 'react'
import styles from "./contactForm.module.css"; 

const initialState = {
    data: {
        fullName: "",
        postcode: "",
        address: "",
        city: "",
        phoneNumber: "",
        email: "",

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
        case "CHECK_ERROR":
            return {

            }
                
        default:
            return state
    }
}

export default function ContactForm() {

    const [state, dispatch] = useReducer(reducer, initialState);

    const [ error, setError ] = useState(false)

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

        if (!state.data.fullName || !state.data.postcode || !state.data.address || !state.data.city || !state.data.phoneNumber || !state.data.email) {
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


                    <li className={styles.inputGroup}>
                    <label htmlFor="postcode">Postcode</label>
                    <input className={styles.input} type="text" name="postcode" value={state.data.postcode} onChange={handleChange}></input>
                    </li>

                    <li className={styles.inputGroup}>
                    <label htmlFor="address">House/Flat Number and Street Name</label>
                    <input className={styles.input} type="text" name="address" value={state.data.address} onChange={handleChange}></input>
                    </li>

                    <li className={styles.inputGroup}>
                    <label htmlFor="city">City</label>
                    <input className={styles.input} type="text" name="city" value={state.data.city} onChange={handleChange}></input>
                    </li>


                </ul>

            
            </fieldset>

            <fieldset className={styles.group}>

                <legend className={styles.groupTitle}>Contact Information:</legend>

                <ul>

                    <li className={styles.inputGroup}>
                    <label htmlFor="phoneNumber">Phone number</label>
                    <input className={styles.input} type="text" name="phoneNumber" value={state.data.phoneNumber} onChange={handleChange}></input> {/* changed type from number to text so we could do our own error/validation*/}
                    </li>

                    <li className={styles.inputGroup}>
                    <label htmlFor="email">Email address</label>
                    <input className={styles.input} type="text" name="email" value={state.data.email} onChange={handleChange}></input> {/* changed type from email to text so we could do our own error/validation*/}
                    </li>
                </ul>

            </fieldset>

            {error && <div className={styles.error}>Error all fields are required - some missing.</div>}

            <button className={styles.button} type="submit">Submit</button>

        </form>
    )
}