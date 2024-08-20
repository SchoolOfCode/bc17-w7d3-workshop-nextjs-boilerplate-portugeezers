'use client'

import { useState } from 'react'

export default function ContactForm() {

    const [ fullName, setFullName ] = useState('');
    const [ postcode, setPostcode] = useState("");
    const [ address, setAddress] = useState("");
    const [ city, setCity] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [ email, setEmail] = useState("");

    function handleChange(e) {
        console.log(e.target.value);
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
                    <input type="text" name="postcode" value={postcode} onChange={handleChange}></input>
                    </li>

                    <li>
                    <label htmlFor="address">House/Flat Number and Street Name</label>
                    <input type="text" name="address" value={address} onChange={handleChange}></input>
                    </li>

                    <li>
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" value={city} onChange={handleChange}></input>
                    </li>

                </ul>

            
            </fieldset>
            
            <fieldset>

                <legend>Contact Information:</legend>

                <ul>

                    <li>
                    <label htmlFor="phoneNumber">Phone number</label>
                    <input type="number" name="phoneNumber" value={phoneNumber} onChange={handleChange}></input>
                    </li>

                    <li>
                    <label htmlFor="email">Email address</label>
                    <input type="email" name="email" value={email} onChange={handleChange}></input>
                    </li>
                </ul>

            </fieldset>

            <div>Error message to conditionally render if information is missing</div>

            <button>Submit</button>

        </form>
    )
}