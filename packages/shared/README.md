# Shared UI Components

이 패키지는 프로젝트에서 공통으로 사용할 수 있는 shadcn/ui 기반 컴포넌트들을 포함합니다.

## 설치

```bash
pnpm install
```

## 사용법

### 기본 사용

```tsx
import { Button, Card, Input, Badge, Label } from "shared";

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>제목</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Label htmlFor="name">이름</Label>
          <Input id="name" placeholder="이름을 입력하세요" />
        </div>
        <Button>제출</Button>
      </CardContent>
    </Card>
  );
}
```

### 스타일 import

```tsx
import "shared/styles.css";
```

## 포함된 컴포넌트

### Button
- 다양한 variant: `default`, `secondary`, `destructive`, `outline`, `ghost`, `link`
- 다양한 size: `sm`, `default`, `lg`, `icon`
- `asChild` prop 지원

```tsx
<Button variant="default" size="lg">
  클릭하세요
</Button>
```

### Card
- `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`

```tsx
<Card>
  <CardHeader>
    <CardTitle>카드 제목</CardTitle>
    <CardDescription>카드 설명</CardDescription>
  </CardHeader>
  <CardContent>
    카드 내용
  </CardContent>
  <CardFooter>
    <Button>액션</Button>
  </CardFooter>
</Card>
```

### Input
- 모든 HTML input 속성 지원
- 접근성 고려

```tsx
<Input type="email" placeholder="이메일을 입력하세요" />
```

### Badge
- 다양한 variant: `default`, `secondary`, `destructive`, `outline`

```tsx
<Badge variant="secondary">태그</Badge>
```

### Label
- Radix UI 기반
- 접근성 고려

```tsx
<Label htmlFor="email">이메일</Label>
<Input id="email" type="email" />
```

## 테마

이 패키지는 CSS 변수를 사용한 다크/라이트 테마를 지원합니다. 테마는 `globals.css`에서 정의되어 있습니다.

## 개발

### 새 컴포넌트 추가

1. `src/components/ui/` 디렉토리에 새 컴포넌트 파일 생성
2. `src/index.ts`에 export 추가
3. 필요한 의존성을 `package.json`에 추가

### 빌드

```bash
pnpm build
```

## 의존성

- React 19+
- Tailwind CSS
- Radix UI (일부 컴포넌트)
- class-variance-authority
- clsx
- tailwind-merge
