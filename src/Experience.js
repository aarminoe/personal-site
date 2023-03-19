import React from "react";
import { Card } from "@mui/material";
import { Link } from "react-router-dom";

function Experience() {
    return(
        <div>
            <div className="aaron-title">
                Aaron Noe
            </div>
            <Card className="exp-card">
                <h2>Procom</h2>
                <p>March 2022 - Current</p>
                <p>Elk Grove, IL</p>
                <h3>IT Technician</h3>
                <div>
                    <h3>Responsibilites:</h3>
                    <p>
                    • Project manager for multiple technicians, provide technical support, mentorship, and accountability.
                    </p>
                    <p>
                    • Skillfully support multiple customers per day, providing detailed explanations regarding equipment.
                    </p>
                </div>
            </Card>
            <Card className="exp-card">
                <h2>Modern Media Tech</h2>
                <p>June 2019 - March 2022</p>
                <p>Lake Bluff, IL</p>
                <h3>IT Technician</h3>
                <div>
                    <h3>Responsibilites:</h3>
                    <p>
                    • Hired and trained new employees growing from a team of 4 to 15 technicians.
                    </p>
                    <p>
                    • Installed and managed networks and cameras for many commercial companies and school districts
                    </p>
                </div>
            </Card>
            <div className="education">
                <h1 className="education-title">Education</h1>
                <div>
                    <h3>Flatiron Software Engineering Bootcamp</h3>
                    <p>
                        Graduated with 525 clocked hours - 09/2022
                        <p>
                            <Link to='https://aaron-noe-personal-site.s3.amazonaws.com/Online+September+2022+Grad_Part1.pdf'>Certificate</Link>
                        </p>
                    </p>
                </div>
                <div>
                    <h3>Lakes Community High School</h3>
                    <p>
                        High School Diploma - 2009 - 2013 
                    </p>
                </div>
            </div>
            <div className="completed-courses">
                <h1 className="completed-courses-title">Completed Courses</h1>
                <p>CodeCademy Learn Python 3 - <Link to='https://aaron-noe-personal-site.s3.amazonaws.com/python+cert.pdf'>Certificate of Completion</Link></p>
                <p>CodeCademy Learn Intermediate Python 3 - <Link to='https://aaron-noe-personal-site.s3.amazonaws.com/intermediate+python+cert.pdf'>Certificate of Completion</Link></p>
                <p>CodeCademy Learn C# - <Link to='https://aaron-noe-personal-site.s3.amazonaws.com/learn+c%23+cert.pdf'>Certificate of Completion</Link></p> 
                <p>CodeCademy Learn Java - <Link to='https://aaron-noe-personal-site.s3.amazonaws.com/learn+java+cert.pdf'>Certificate of Completion</Link></p>
                <p>CodeCademy Create REST APIs with Spring and Java - <Link to='https://aaron-noe-personal-site.s3.amazonaws.com/rest+api+spring+codecademy+cert.pdf'>Certificate of Completion</Link></p> 
                <p>CodeCademy Learn SQL - <Link to='https://aaron-noe-personal-site.s3.amazonaws.com/learn+sql+codecademy+cert.pdf'>Certificate of Completion</Link></p>      
            </div>
        </div>
    )
}

export default Experience