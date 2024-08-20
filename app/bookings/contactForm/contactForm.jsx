'use client'

import { useState } from 'react'

export default function ContactForm() {

    const [ fullName, setFullName ] = useState('')

    function handleChange(e) {
        switch (e.target.name) {
            case "fullName":
                setFullName(e.target.value)
                break
            default:
                break
        }
    }


    return (
        <form>

            <fieldset>

                <legend>Personal Information:</legend>

                <ul>

                    <li>
                    <label htmlFor="fullName">Full name</label>
                    <input type="text" name="fullName" value={fullName} onChange={handleChange}></input>
                    </li>

                    <li>
                    <label htmlFor="postcode">Postcode</label>
                    <input type="text" name="postcode" ></input>
                    </li>

                    <li>
                    <label htmlFor="address">House/Flat Number and Street Name</label>
                    <input type="text" name="address"></input>
                    </li>

                    <li>
                    <label htmlFor="city">City</label>
                    <input type="text" name="city"></input>
                    </li>

                </ul>

            
            </fieldset>
            
            <fieldset>

                <legend>Contact Information:</legend>

                <ul>

                    <li>
                    <label>Phone number</label>
                    <input></input>
                    </li>

                    <li>
                    <label>Email address</label>
                    <input></input>
                    </li>
                </ul>

            </fieldset>

            <div>Error message to conditionally render if information is missing</div>

            <button>Submit</button>

        </form>
    )
}