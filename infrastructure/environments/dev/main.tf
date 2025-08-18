# 개발 환경 설정
terraform {
  required_version = ">= 1.0"
  
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
  
  # 개발 환경용 설정 (실제 연결 시 제거)
  skip_credentials_validation = true
  skip_metadata_api_check     = true
  skip_requesting_account_id  = true
}

# 스토리지 모듈
module "storage" {
  source = "../../modules/storage"
  
  project_name = var.project_name
  environment  = var.environment
  tags         = var.tags
}

# CDN 모듈 (나중에 스토리지 모듈 완성 후 주석 해제)
# module "cdn" {
#   source = "../../modules/cdn"
#   
#   project_name                                    = var.project_name
#   environment                                     = var.environment
#   domain_name                                     = var.domain_name
#   static_assets_bucket_name                       = module.storage.static_assets_bucket_name
#   static_assets_bucket_regional_domain_name       = module.storage.static_assets_bucket_regional_domain_name
#   blog_content_bucket_name                        = module.storage.blog_content_bucket_name
#   blog_content_bucket_regional_domain_name        = module.storage.blog_content_bucket_regional_domain_name
#   tags                                            = var.tags
# }
