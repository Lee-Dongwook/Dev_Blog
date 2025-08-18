output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID"
  value       = aws_cloudfront_distribution.static_assets.id
}

output "cloudfront_distribution_domain_name" {
  description = "CloudFront distribution domain name"
  value       = aws_cloudfront_distribution.static_assets.domain_name
}

output "static_assets_oai" {
  description = "CloudFront Origin Access Identity for static assets"
  value       = aws_cloudfront_origin_access_identity.static_assets.cloudfront_access_identity_path
}

output "blog_content_oai" {
  description = "CloudFront Origin Access Identity for blog content"
  value       = aws_cloudfront_origin_access_identity.blog_content.cloudfront_access_identity_path
}
