import React from "react";
import AboutMe from "./AboutMe";

function Home() {
    return(
        <div className="home-page">
            <div>
                <h1 className="aaron-title">
                    Aaron Noe
                </h1>
                <h2>

                </h2>
                <div>
                    <AboutMe />
                </div>
                <div>
                    <h3>Technical Certifications</h3>
                    <img src="https://aaron-noe-personal-site.s3.amazonaws.com/aws-certified-solutions-architect-associate.png"/>
                    <img src="https://aaron-noe-personal-site.s3.amazonaws.com/aws-certified-developer-associate+(1).png"/>
                    <img src="https://aaron-noe-personal-site.s3.amazonaws.com/aws-certified-cloud-practitioner+(1).png"/>
                </div>
            </div>
        </div>
    )
}

export default Home