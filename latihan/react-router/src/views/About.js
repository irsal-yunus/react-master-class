import React from 'react'
import MainLayout from '../layouts/MainLayout'

const About = () => {
    return(
        <MainLayout>           
            <div style={container}>
                <h1>About Page</h1>
                <p>
                Lorem ipsum refers to the most common type of placeholder or dummy text used in digital 
                and graphic layouts including books, reports, and websites. Long or short portions of the 
                Lorem ipsum text provided above can be used. One simply repeats (or “loops”) the full amount 
                of text to take up the required design space. Lorem ipsum placeholder text is drawn from a commonly
                used passage of somewhat scrambled Latin.
                </p>
            </div>            
        </MainLayout>
    )
}

export default About

const container = {
    padding: "0 6rem"
}