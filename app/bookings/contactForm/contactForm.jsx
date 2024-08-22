'use client'

import { useReducer } from 'react'
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
    loading: false,
    fieldWithError: {
        fullName: "",
        postcode: "",
        address: "",
        city: "",
        phoneNumber: "",
        email: "",
    }
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
        case "ERROR":
            return {
                ...state,
                error: true,
                loading: false
            }
        case "ERROR_WITH_FIELD":
            return {
                ...state,
                fieldWithError: {
                    ...state.fieldWithError,
                    [action.payload.fieldName]: [action.payload.errorMessage]
                }
            }
        case "FORM_SUBMITTING":
            return {
                ...state,
                loading: true,
                error: false,
                fieldWithError: {
                    fullName: "",
                    postcode: "",
                    address: "",
                    city: "",
                    phoneNumber: "",
                    email: "",
                }
            }
        case "FORM_SUBMITTED":
            return {
                ...state,
                loading: false,
                error: false
            }
        default:
            return state
    }
}

export default function ContactForm() {

    const [state, dispatch] = useReducer(reducer, initialState);

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

        dispatch({
            type: "FORM_SUBMITTING"
        })

        if (!state.data.fullName) {
            dispatch({
                type: "ERROR_WITH_FIELD",
                payload: {
                    fieldName: "fullName",
                    errorMessage: "This field is required."
                }
            })
        }
        if (!state.data.postcode) {
            dispatch({
                type: "ERROR_WITH_FIELD",
                payload: {
                    fieldName: "postcode",
                    errorMessage: "This field is required."
                }
            })
        }
        if (!state.data.address) {
            dispatch({
                type: "ERROR_WITH_FIELD",
                payload: {
                    fieldName: "address",
                    errorMessage: "This field is required."
                }
            })
        }
        if (!state.data.city) {
            dispatch({
                type: "ERROR_WITH_FIELD",
                payload: {
                    fieldName: "city",
                    errorMessage: "This field is required."
                }
            })
        }
        if (!state.data.phoneNumber) {
            dispatch({
                type: "ERROR_WITH_FIELD",
                payload: {
                    fieldName: "phoneNumber",
                    errorMessage: "This field is required."
                }
            })
        }
        if (!state.data.email) {
            dispatch({
                type: "ERROR_WITH_FIELD",
                payload: {
                    fieldName: "email",
                    errorMessage: "This field is required."
                }
            })
        }

        if (!state.data.fullName || !state.data.postcode || !state.data.address || !state.data.city || !state.data.phoneNumber || !state.data.email) {
            dispatch({
                type: "ERROR"
            })
            return
        }

        setTimeout(() => {

            dispatch({
                type: "FORM_SUBMITTED"
            })

        }, 2000)
            
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>

            <fieldset className={styles.group}>

                <legend className={styles.groupTitle}>Personal Information:</legend>

                <ul>

                    <li className={styles.inputGroup}>
                        <label htmlFor="fullName">Full name*</label>
                        <input className={styles.input} type="text" name="fullName" value={state.data.fullName} onChange={handleChange}></input>
                        <p>{state.fieldWithError.fullName ? state.fieldWithError.fullName : ""}</p>
                    </li>


                    <li className={styles.inputGroup}>
                        <label htmlFor="postcode">Postcode*</label>
                        <input className={styles.input} type="text" name="postcode" value={state.data.postcode} onChange={handleChange}></input>
                        <p>{state.fieldWithError.postcode ? state.fieldWithError.postcode : ""}</p>
                    </li>

                    <li className={styles.inputGroup}>
                        <label htmlFor="address">House/Flat Number and Street Name*</label>
                        <input className={styles.input} type="text" name="address" value={state.data.address} onChange={handleChange}></input>
                        <p>{state.fieldWithError.address ? state.fieldWithError.address : ""}</p>
                    </li>

                    <li className={styles.inputGroup}>
                        <label htmlFor="city">City*</label>
                        <input className={styles.input} type="text" name="city" value={state.data.city} onChange={handleChange}></input>
                        <p>{state.fieldWithError.city ? state.fieldWithError.city : ""}</p>
                    </li>


                </ul>

            
            </fieldset>

            <fieldset className={styles.group}>

                <legend className={styles.groupTitle}>Contact Information:</legend>

                <ul>

                    <li className={styles.inputGroup}>
                        <label htmlFor="phoneNumber">Phone number*</label>
                        <input className={styles.input} type="text" name="phoneNumber" value={state.data.phoneNumber} onChange={handleChange}></input> {/* changed type from number to text so we could do our own error/validation*/}
                        <p>{state.fieldWithError.phoneNumber ? state.fieldWithError.phoneNumber : ""}</p>
                    </li>

                    <li className={styles.inputGroup}>
                        <label htmlFor="email">Email address*</label>
                        <input className={styles.input} type="text" name="email" value={state.data.email} onChange={handleChange}></input> {/* changed type from email to text so we could do our own error/validation*/}
                        <p>{state.fieldWithError.email ? state.fieldWithError.email : ""}</p>
                    </li>
                </ul>

            </fieldset>

            <div>(* marks a mandatory field)</div>

            {state.error && <div className={styles.error}>Error all fields are required - some missing.</div>}

            <button className={styles.button} type="submit">{!state.loading ? "Request Design Consultation" : "Requesting..."}</button>

        </form>
    )
}