# CloudFront distribution for static assets
resource "aws_cloudfront_distribution" "static_assets" {
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  
  aliases = [var.domain_name]
  
  origin {
    domain_name = var.static_assets_bucket_regional_domain_name
    origin_id   = "S3-${var.static_assets_bucket_name}"
    
    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.static_assets.cloudfront_access_identity_path
    }
  }
  
  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-${var.static_assets_bucket_name}"
    
    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
    
    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }
  
  # Cache behavior for blog content
  ordered_cache_behavior {
    path_pattern     = "/blog/*"
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-${var.blog_content_bucket_name}"
    
    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
    
    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }
  
  # Error pages
  custom_error_response {
    error_code         = 404
    response_code      = "200"
    response_page_path = "/index.html"
  }
  
  custom_error_response {
    error_code         = 403
    response_code      = "200"
    response_page_path = "/index.html"
  }
  
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
  
  viewer_certificate {
    cloudfront_default_certificate = true
    # 나중에 ACM 인증서 사용 시 주석 해제
    # acm_certificate_arn = var.acm_certificate_arn
    # ssl_support_method  = "sni-only"
  }
  
  tags = merge(var.tags, {
    Name = "${var.project_name}-${var.environment}-cloudfront"
  })
}

# CloudFront Origin Access Identity for static assets
resource "aws_cloudfront_origin_access_identity" "static_assets" {
  comment = "OAI for ${var.project_name}-${var.environment} static assets"
}

# CloudFront Origin Access Identity for blog content
resource "aws_cloudfront_origin_access_identity" "blog_content" {
  comment = "OAI for ${var.project_name}-${var.environment} blog content"
}
