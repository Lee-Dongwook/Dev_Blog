# S3 Bucket for static assets
resource "aws_s3_bucket" "static_assets" {
  bucket = "${var.project_name}-${var.environment}-static-assets"
  
  tags = merge(var.tags, {
    Name = "${var.project_name}-${var.environment}-static-assets"
  })
}

# S3 Bucket for blog content
resource "aws_s3_bucket" "blog_content" {
  bucket = "${var.project_name}-${var.environment}-blog-content"
  
  tags = merge(var.tags, {
    Name = "${var.project_name}-${var.environment}-blog-content"
  })
}

# S3 Bucket versioning
resource "aws_s3_bucket_versioning" "static_assets" {
  bucket = aws_s3_bucket.static_assets.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_versioning" "blog_content" {
  bucket = aws_s3_bucket.blog_content.id
  versioning_configuration {
    status = "Enabled"
  }
}

# S3 Bucket public access block
resource "aws_s3_bucket_public_access_block" "static_assets" {
  bucket = aws_s3_bucket.static_assets.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_public_access_block" "blog_content" {
  bucket = aws_s3_bucket.blog_content.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# S3 Bucket policy for static assets (public read)
resource "aws_s3_bucket_policy" "static_assets" {
  bucket = aws_s3_bucket.static_assets.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.static_assets.arn}/*"
      },
    ]
  })
}
