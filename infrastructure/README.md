# DevBlog Infrastructure

이 프로젝트는 DevBlog의 인프라를 Terraform으로 관리합니다.

## 구조

```
infrastructure/
├── modules/                    # 재사용 가능한 Terraform 모듈
│   ├── storage/               # S3 스토리지 모듈
│   └── cdn/                   # CloudFront CDN 모듈
├── environments/              # 환경별 설정
│   └── dev/                   # 개발 환경
└── README.md                  # 이 파일
```

## 모듈

### Storage Module (`modules/storage/`)

- **S3 Bucket for Static Assets**: 정적 파일 (CSS, JS, 이미지 등) 저장
- **S3 Bucket for Blog Content**: 블로그 콘텐츠 저장
- 버전 관리 및 보안 설정 포함

### CDN Module (`modules/cdn/`)

- **CloudFront Distribution**: 글로벌 CDN 설정
- 정적 자산과 블로그 콘텐츠에 대한 캐싱 정책
- 커스텀 도메인 지원 (나중에 활성화)

## 사용법

### 1. 개발 환경 설정

```bash
cd infrastructure/environments/dev
terraform init
terraform plan
```

### 2. 실제 AWS 연결 시

1. AWS CLI 설정:

```bash
aws configure
```

2. `versions.tf`에서 개발용 설정 제거:

```hcl
provider "aws" {
  region = var.aws_region
  # skip_credentials_validation = true  # 제거
  # skip_metadata_api_check     = true  # 제거
  # skip_requesting_account_id  = true  # 제거
}
```

3. 백엔드 설정 (선택사항):

```hcl
terraform {
  backend "s3" {
    bucket = "devblog-terraform-state"
    key    = "dev/terraform.tfstate"
    region = "ap-northeast-2"
  }
}
```

### 3. LocalStack 사용 시

1. LocalStack 설치:

```bash
pip install localstack
```

2. LocalStack 실행:

```bash
localstack start
```

3. `versions.tf`에서 LocalStack 엔드포인트 활성화:

```hcl
provider "aws" {
  region = var.aws_region

  endpoints {
    s3  = "http://localhost:4566"
    ec2 = "http://localhost:4566"
  }
}
```

## 비용 최적화

현재 설정은 비용이 발생하지 않도록 구성되어 있습니다:

1. **S3**: 저장된 데이터에 대해서만 비용 발생 (매우 저렴)
2. **CloudFront**: 전송된 데이터에 대해서만 비용 발생
3. **도메인**: 커스텀 도메인 사용 시 Route 53 비용 발생

## 다음 단계

1. **실제 AWS 계정 연결**
2. **커스텀 도메인 설정**
3. **SSL 인증서 설정**
4. **CI/CD 파이프라인 구성**
5. **모니터링 및 로깅 설정**

## 주의사항

- 현재는 개발 환경용 설정으로 되어 있어 실제 AWS 리소스가 생성되지 않습니다
- 실제 배포 전에 보안 설정을 검토하세요
- 비용 모니터링을 설정하여 예상치 못한 비용을 방지하세요
