import React from "react";
import AboutMe from "./AboutMe";
import { Link } from "react-router-dom";
import { Card } from "@mui/material";
import Skills from "./Skills";

function Home() {
    return(
        <div className="home-page">
            <div>
                <div className="aaron-title">
                    Aaron Noe
                </div>
                <h2>
                    AWS/Software Engineer
                </h2>
                <div>
                    <Skills />
                </div>
                <div>
                    <AboutMe />
                </div>
                <Card className="tech-certificate-section">
                    <h3>Technical Certifications</h3>
                    <img src="https://aaron-noe-personal-site.s3.amazonaws.com/aws-certified-solutions-architect-associate.png"/>

                    <img src="https://aaron-noe-personal-site.s3.amazonaws.com/aws-certified-developer-associate+(1).png"/>

                    <img src="https://aaron-noe-personal-site.s3.amazonaws.com/aws-certified-cloud-practitioner+(1).png"/>

                    <div>
                        <p>
                            <Link className="verify-badge"   to='https://www.credly.com/badges/239524d0-4c68-464a-bbb8-300e2845a15e'>Verify</Link>
                            <Link className="verify-badge"  to='https://www.credly.com/badges/6b0f0cea-3ecb-4319-9ddc-66a24eb65aea'>Verify</Link>
                            <Link className="verify-badge" to='https://www.credly.com/badges/0a745b40-a5c4-4b11-9200-8e8c525ebdd5'>Verify</Link>
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Home