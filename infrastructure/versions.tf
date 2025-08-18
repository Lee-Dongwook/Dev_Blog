terraform {
  required_version = ">= 1.0"
  
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  
  # 나중에 Terraform Cloud나 S3 백엔드로 변경 가능
  # backend "s3" {
  #   bucket = "devblog-terraform-state"
  #   key    = "dev/terraform.tfstate"
  #   region = "ap-northeast-2"
  # }
}

provider "aws" {
  region = var.aws_region
  
  # 나중에 실제 AWS 계정 연결 시 주석 해제
  # profile = "default"
  
  # 개발 환경용 설정 (실제 연결 시 제거)
  skip_credentials_validation = true
  skip_metadata_api_check     = true
  skip_requesting_account_id  = true
  
  # LocalStack 사용 시
  # endpoints {
  #   s3  = "http://localhost:4566"
  #   ec2 = "http://localhost:4566"
  # }
}
