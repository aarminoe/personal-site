import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@mui/material";

function Projects() {
    return(
        <div className="projects-page">
            <div className="aaron-title">
                Aaron Noe
            </div>
            <Card className="single-project">
                <h1>Jobber</h1>
                <p>The Tech field is tough! Organize and manage all your desired jobs here!</p>
                <a href='https://github.com/aarminoe/job-tracker-project' target="_blank">GitHub</a> | <a href='https://d3je8aqsjg37uh.cloudfront.net' target="_blank">Link</a>
                <div>
                    <div>
                        <p>• Implemented AWS Cognito to allow users to manage their own personalized job board.</p>
                        <p>• Utilized API Gateway and AWS Lambda to input job data into DynamoDB.</p>
                        <p>• Deployed through a AWS CloudFront distribution to accelerate static website delivery.</p>
                    </div>
                    <div>Technologies: AWS S3, AWS CloudFront, AWS Cognito, AWS API Gateway, AWS Lambda, AWS DynamoDB, AWS IAM, React, JavaScript, HTML/CSS</div>
                </div>
            </Card>
            <Card className="single-project">
                <h1>Safe Space</h1>
                <p>Fully Serverless anonymous blogging website using AWS</p>
                <a href='https://github.com/aarminoe/fully-serverless-app-aws' target="_blank">GitHub</a> | <a href='https://main.d2n54e2sdil7ey.amplifyapp.com/' target="_blank">Link</a>
                <div>
                    <div>
                        <p>• Utilized AWS Cognito and Lambda to authorize new users and confirm them in User Pool on sign up</p>
                        <p>• Client data from React triggers a Lambda Function through API Gateway to upload to DynamoDB</p>
                        <p>• Deployed through AWS Amplify to implement CI/CD practices</p>
                    </div>
                    <div>Technologies: AWS Amplify, AWS Cognito, AWS API Gateway, AWS Lambda, AWS DynamoDB, AWS IAM, React, JavaScript, HTML/CSS</div>
                </div>
            </Card>
            <Card className="single-project">
                <h1>Snapper</h1>
                <p>Full Stack Instagram-like social media application</p>
                <a href='https://github.com/aarminoe/Snapper' target="_blank">GitHub</a> | <a href='https://www.youtube.com/watch?v=Izm94TtfT1w' target="_blank">Demo</a>
                <div>
                    <div>
                        <p>• Implemented features including messaging, follow/followers, posting, commenting, etc.</p>
                        <p>• Developed in TypeScript to ensure minimal errors and better efficiency as application grows.</p>
                        <p>• Added a Rails backend with multiple many-to-many relationships and models.</p>
                    </div>
                    <div> Technologies: TypeScript, JavaScript, Ruby on Rails, Firebase, Ruby, React, PostgreSQL, Active Record, HTML/CSS</div>
                </div>
            </Card>
            <Card className="single-project">
                <h1>My Clique</h1>
                <p>Full Stack Facebook-like social media application</p>
                <a href='https://github.com/aarminoe/phase-4-project' target="_blank">GitHub</a> | <a href='https://www.youtube.com/watch?v=RhvL89a6cm8' target="_blank">Demo</a>
                <div>
                    <div>
                        <p>• Implemented features including posting, comments, messaging, adding friends, subscribing to groups, likes, etc.</p>
                        <p>• Utilized Ruby on Rails back end with multiple many-to-many relationships enabling user interaction.</p>
                    </div>
                    <div> Technologies: JavaScript, React, Ruby, Ruby on Rails, PostgreSQL, Active Record, HTML/CSS</div>
                </div>
            </Card>
        </div>
    )
}

export default Projects