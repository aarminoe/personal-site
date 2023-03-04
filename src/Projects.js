import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@mui/material";

function Projects() {
    return(
        <div className="projects-page">
            <Card className="single-project">
                <h1>Safe Space</h1>
                <p>Fully Serverless anonymous blogging website using AWS</p>
                <Link to='https://github.com/aarminoe/fully-serverless-app-aws'>GitHub</Link> | <Link to ='https://main.d2n54e2sdil7ey.amplifyapp.com/'>Link</Link>
                <div>
                    <div>
                        <p>• Utilized AWS Cognito and Lambda to authorize new users and confirm them in User Pool on sign up</p>
                        <p>• Client data from React triggers a Lambda Function through API Gateway to upload to DynamoDB</p>
                        <p>• Deployed through AWS Amplify to implement CI/CD practices</p>
                    </div>
                    <div>Technologies: AWS Amplify, AWS Cognito, AWS API Gateway, AWS Lambda, AWS DynamoDB, AWS IAM, React, JavaScript</div>
                </div>
            </Card>
            <Card className="single-project">
                <h1>aarminoe.com</h1>
                <p>Personal site including relevant job experience, projects, etc.</p>
                <Link to='https://github.com/aarminoe/personal-site'>GitHub</Link> | <Link to ='https://main.d2n54e2sdil7ey.amplifyapp.com/'>Link</Link>
                <div>
                    <div>
                        <p>• Utilized an AWS CloudFront Distribution to point to a static S3 website endpoint
</p>
                        <p>• Tracks site visitors through a call to a custom API, triggering a Lambda function to DynamoDB</p>
                        <p>• Custom domain name through Route 53, using a hosted zone of an S3 bucket</p>
                    </div>
                    <div>Technologies: AWS S3, AWS CloudFront, AWS Route 53, DynamoDB, AWS API Gateway, AWS Lambda, JavaScript, React, HTML/CSS</div>
                </div>
            </Card>
            <Card className="single-project">
                <h1>Snapper</h1>
                <p>Full Stack Instagram-like social media application</p>
                <Link to='https://github.com/aarminoe/Snapper'>GitHub</Link> | <Link to ='https://www.youtube.com/watch?v=Izm94TtfT1w'>Demo</Link>
                <div>
                    <div>
                        <p>• Implemented features including messaging, follow/followers, posting, commenting, etc.</p>
                        <p>• Developed in TypeScript to ensure minimal errors and better efficiency as application grows.</p>
                        <p>• Added a Rails backend with multiple many-to-many relationships and models.</p>
                    </div>
                    <div> Technologies: TypeScript, JavaScript, Ruby on Rails, Firebase, Ruby, React, PostgreSQL, Active Record</div>
                </div>
            </Card>
        </div>
    )
}

export default Projects