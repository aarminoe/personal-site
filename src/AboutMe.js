import React from "react";
import { Card } from "@mui/material";

function AboutMe() {
    return (
        <div className="about-me-page">
            <Card className="currently-on-section">
                <p className="currently-on-about">Currently Working On:</p>
                <p>AWS SysOps Associate Certification</p>
                <p className="currently-on-about">Currently Learning:</p>
                <p>Terraform and Docker</p>
            </Card>
            <div className="about-me-paragraph">
                Hello! My name is Aaron Noe and I am a Software Engineer currently living in the Greater Chicago Area. I started learning software engineering and computer science on my own for a few months before taking the plunge and attending Flat Iron Software Engineering Bootcamp. While there, I became proficient in JavaScript, React, and Ruby on Rails. I achieved a total of 525 clocked hours working through various labs, challenges, and projects. After graduating from Flat Iron, I wanted to start learning as much as I could about different technologies, frameworks, coding languages, etc. I began exploring the nuances of Java to the point where I was soon using it primarily to study Data Structures and Algorithms. After feeling comfortable with I began learning more about the cloud and how it could help my not only deploy my applications and software, but expand their availability and efficiency. This is where AWS comes in. I took many courses through my AWS journey starting off with getting the Certified Practitioner Certification and shortly after achieving both the Solutions Architect Associate and Developer Associate Certifications. (Currently working on my SysOps Certification!). I created a completely Serverless application using many different AWS resources together along with React.js on the front end! I am very passionate about every technology that I know and I am especially excited for everything I will learn in the future! 
            </div>
        </div>

    )
}

export default AboutMe;


