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
}

resource "aws_s3_bucket_acl" "aaron-noe-portfolio-site-personal-acl" {
  bucket = aws_s3_bucket.aaron-noe-portfolio-site-personal.id   
  acl = "public-read"
}