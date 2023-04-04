//When pushing to github run command (git filter-branch -f --index-filter 'git rm --cached -r --ignore-unmatch .terraform/')
//after you must run terraform init again in order for terraform apply to work


terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

# Configure the AWS Provider
provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "aaron-noe-portfolio-site-personal" {
  bucket = "aaron-noe-portfolio-site-personal"
  website {
    index_document = "index.html"
  }
  policy = jsonencode({
    "Statement": [
        {
          "Effect": "Allow",
          "Principal": "*",
          "Action": "s3:GetObject",
          "Resource": "arn:aws:s3:::aaron-noe-portfolio-site-personal/*"
        }
    ]
  })
}

resource "aws_s3_bucket_acl" "aaron-noe-portfolio-site-personal-acl" {
  bucket = aws_s3_bucket.aaron-noe-portfolio-site-personal.id   
  acl = "public-read"
}

resource "aws_s3_bucket_object" "object1" {
  bucket = aws_s3_bucket.aaron-noe-portfolio-site-personal.id
  key = "obj-test"
  acl = "public-read"
  source = "C:\\Users\\aarmi\\Downloads\\favicon.ico"
  etag = filemd5("C:\\Users\\aarmi\\Downloads\\favicon.ico")
}