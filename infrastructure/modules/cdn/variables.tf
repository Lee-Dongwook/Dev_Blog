variable "project_name" {
  description = "Project name"
  type        = string
}

variable "environment" {
  description = "Environment name"
  type        = string
}

variable "domain_name" {
  description = "Domain name for the CloudFront distribution"
  type        = string
}

variable "static_assets_bucket_name" {
  description = "Name of the S3 bucket for static assets"
  type        = string
}

variable "static_assets_bucket_regional_domain_name" {
  description = "Regional domain name of the S3 bucket for static assets"
  type        = string
}

variable "blog_content_bucket_name" {
  description = "Name of the S3 bucket for blog content"
  type        = string
}

variable "blog_content_bucket_regional_domain_name" {
  description = "Regional domain name of the S3 bucket for blog content"
  type        = string
}

variable "tags" {
  description = "Common tags for all resources"
  type        = map(string)
  default     = {}
}
