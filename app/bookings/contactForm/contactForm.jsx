'use client'

import { useState } from 'react'
import styles from "./contactForm.module.css"; 

export default function ContactForm() {

    const [ fullName, setFullName ] = useState("");
    const [ postcode, setPostcode] = useState("");
    const [ address, setAddress] = useState("");
    const [ city, setCity] = useState("");
    const [ phoneNumber, setPhoneNumber ] = useState("");
    const [ email, setEmail] = useState("");

    const [ error, setError ] = useState(false)

    function handleChange(e) {
        switch (e.target.name) {
            case "fullName":
                setFullName(e.target.value)
                break
            case "postcode":
                setPostcode(e.target.value)
                break
            case "address":
                setAddress(e.target.value)
                break
            case "city":
                setCity(e.target.value)
                break
            case "phoneNumber":
                setPhoneNumber(e.target.value)
                break
            case "email":
                setEmail(e.target.value)
                break
            default:
                break
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!(fullName && address && city && postcode && phoneNumber && email)) {
            setError(true)
            return
        } else {
            setError(false)
            console.log(fullName)
            console.log(postcode)
            console.log(address)
            console.log(city)
            console.log(phoneNumber)
            console.log(email)
        }
    }


    return (
        <form className={styles.form}>

            <fieldset className={styles.group}>

                <legend className={styles.groupTitle}>Personal Information:</legend>

                <ul>

                    <li className={styles.inputGroup}>
                    <label htmlFor="fullName">Full name</label>
                    <input className={styles.input} type="text" name="fullName" value={fullName} onChange={handleChange}></input>
                    </li>

                    <li className={styles.inputGroup}>
                    <label htmlFor="postcode">Postcode</label>
                    <input className={styles.input} type="text" name="postcode" value={postcode} onChange={handleChange}></input>
                    </li>

                    <li className={styles.inputGroup}>
                    <label htmlFor="address">House/Flat Number and Street Name</label>
                    <input className={styles.input} type="text" name="address" value={address} onChange={handleChange}></input>
                    </li>

                    <li className={styles.inputGroup}>
                    <label htmlFor="city">City</label>
                    <input className={styles.input} type="text" name="city" value={city} onChange={handleChange}></input>
                    </li>

                </ul>

            
            </fieldset>
            
            <fieldset className={styles.group}>

                <legend className={styles.groupTitle}>Contact Information:</legend>

                <ul>

                    <li className={styles.inputGroup}>
                    <label htmlFor="phoneNumber">Phone number</label>
                    <input className={styles.input} type="number" name="phoneNumber" value={phoneNumber} onChange={handleChange}></input>
                    </li>

                    <li className={styles.inputGroup}>
                    <label htmlFor="email">Email address</label>
                    <input className={styles.input} type="email" name="email" value={email} onChange={handleChange}></input>
                    </li>
                </ul>

            </fieldset>

            {error && <div className={styles.error}>Error all fields are required - some missing.</div>}

            <button className={styles.button} type="submit" onClick={handleSubmit}>Submit</button>

        </form>
    )
}