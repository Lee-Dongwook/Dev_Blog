output "static_assets_bucket_name" {
  description = "Name of the S3 bucket for static assets"
  value       = aws_s3_bucket.static_assets.bucket
}

output "static_assets_bucket_arn" {
  description = "ARN of the S3 bucket for static assets"
  value       = aws_s3_bucket.static_assets.arn
}

output "blog_content_bucket_name" {
  description = "Name of the S3 bucket for blog content"
  value       = aws_s3_bucket.blog_content.bucket
}

output "blog_content_bucket_arn" {
  description = "ARN of the S3 bucket for blog content"
  value       = aws_s3_bucket.blog_content.arn
}

output "static_assets_bucket_regional_domain_name" {
  description = "Regional domain name of the S3 bucket for static assets"
  value       = aws_s3_bucket.static_assets.bucket_regional_domain_name
}

output "blog_content_bucket_regional_domain_name" {
  description = "Regional domain name of the S3 bucket for blog content"
  value       = aws_s3_bucket.blog_content.bucket_regional_domain_name
}
