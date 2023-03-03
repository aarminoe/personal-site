import React from "react";

function AboutMe() {
    return (
        <div>
            <h1 className="about-me-header">
                About Me
            </h1>
            <div className="about-me-paragraph">
                Hello! My name is Aaron Noe and I am a Software Engineer currently living in the Greater Chicago Area. I started learning software engineering and computer science on my own for a few months before taking the plunge and attending Flat Iron Software Engineering Bootcamp. While there, I became proficient in JavaScript, React, and Ruby on Rails. I achieved a total of 525 clocked hours working through various labs, challenges, and projects. After graduating from Flat Iron, I wanted to start learning as much as I could about different technologies, frameworks, coding languages, etc. I began exploring the nuances of Java to the point where I was soon using it primarily to study Data Structures and Algorithms. After feeling comfortable with I began learning more about the cloud and how it could help my not only deploy my applications and software, but expand their availability and efficiency. This is where AWS comes in. I took many courses through my AWS journey starting off with getting the Certified Practitioner Certification and shortly after achieving both the Solutions Architect Associate and Developer Associate Certifications. (Currently working on my SysOps Certification!). I created a completely Serverless application using many different AWS resources together along with React.js on the front end! I am very passionate about every technology that I know and I especially excited for everything I will learn in the future! 
            </div>
            <div >
                <p className="currently-on-about">Currently Working On:</p>
                <p>The Cloud Resume Challenge</p>
                <p className="currently-on-about">Currently Learning:</p>
                <p>Terraform and Docker</p>
            </div>
        </div>

    )
}

export default AboutMe;


