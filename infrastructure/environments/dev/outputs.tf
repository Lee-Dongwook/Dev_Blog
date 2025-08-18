output "project_name" {
  description = "Project name"
  value       = var.project_name
}

output "environment" {
  description = "Environment name"
  value       = var.environment
}

output "aws_region" {
  description = "AWS region"
  value       = var.aws_region
}

# 스토리지 모듈 출력
output "static_assets_bucket_name" {
  description = "Name of the S3 bucket for static assets"
  value       = module.storage.static_assets_bucket_name
}

output "blog_content_bucket_name" {
  description = "Name of the S3 bucket for blog content"
  value       = module.storage.blog_content_bucket_name
}

# 나중에 CDN 모듈 활성화 시 추가할 출력값들
# output "cloudfront_distribution_id" {
#   description = "CloudFront distribution ID"
#   value       = module.cdn.cloudfront_distribution_id
# }

# output "cloudfront_distribution_domain_name" {
#   description = "CloudFront distribution domain name"
#   value       = module.cdn.cloudfront_distribution_domain_name
# }
