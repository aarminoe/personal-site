import React from "react";
import AboutMe from "./AboutMe";
import { Link } from "react-router-dom";

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
                    <Link to='https://www.credly.com/badges/239524d0-4c68-464a-bbb8-300e2845a15e'>Verify</Link>
                    <img src="https://aaron-noe-personal-site.s3.amazonaws.com/aws-certified-developer-associate+(1).png"/>
                    <Link to='https://www.credly.com/badges/6b0f0cea-3ecb-4319-9ddc-66a24eb65aea'>Verify</Link>
                    <img src="https://aaron-noe-personal-site.s3.amazonaws.com/aws-certified-cloud-practitioner+(1).png"/>
                    <Link to='https://www.credly.com/badges/0a745b40-a5c4-4b11-9200-8e8c525ebdd5'>Verify</Link>
                </div>
            </div>
        </div>
    )
}

export default Home