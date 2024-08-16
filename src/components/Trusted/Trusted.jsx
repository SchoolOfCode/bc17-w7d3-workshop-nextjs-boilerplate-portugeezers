"use client";
import { useState, useEffect } from 'react';

export default function Trusted(){
    
const [ selectedCountry, setSelectedCountry ] = useState(null) //default status: no country is selected

const [ trustedData, setTrustedData ] = useState(null); //no data yet, setTrustedData is used to update trustedData with the data fetched from the server.


useEffect(() => {
if (selectedCountry) {
//fetch data
fetch(`https://seal-app-336e8.ondigitalocean.app/reviews?country=${selectedCountry}`)
    //.then(response => response.json()) this was in Tom's eg but didnt work
    //.then(data => setTrustedData(data)); this was in Tom's eg but didnt work
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not OK");
        }
        // Parse the JSON data here
            return response.json();
    })
    .then(data => setTrustedData(data)) //update the state with the fetched data
    .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
    }
    );
   
}
}, [selectedCountry])//“Run this code only when selectedCountry changes.”

    function selectCountry(name) {
        setSelectedCountry(name);
    }

    return (
    <>
<h3>Trusted.</h3>
<p>We've got thousands of happy customers all over the UK. Chose your country to see the latest review:</p>
    <button onClick={() => selectCountry("England")}>England</button>
    <button onClick={() => selectCountry("Wales")}>Wales</button>
    <button onClick={() => selectCountry("Scotland")}>Scotland</button>

{/* Display the fetched data */}
      {trustedData && (
        <div>
          <p>{trustedData.text}</p> {/* Display the review's text */}
          <p>{trustedData.author} - {trustedData.location}</p> {/* Display the author and location */}
        </div>
      )}
    </>
    )
}
