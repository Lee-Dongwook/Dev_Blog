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

# 나중에 실제 리소스 생성 시 추가할 출력값들
# output "s3_bucket_name" {
#   description = "S3 bucket name for static assets"
#   value       = module.storage.s3_bucket_name
# }

# output "cloudfront_distribution_id" {
#   description = "CloudFront distribution ID"
#   value       = module.cdn.cloudfront_distribution_id
# }

# output "domain_name" {
#   description = "Domain name"
#   value       = var.domain_name
# }
