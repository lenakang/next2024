# Next.js 14 2024

## Form

Next.js 14에서 제공하는 새로운 `react-dom` API를 사용하여 폼 상태를 관리합니다.

- **`useFormStatus`**  
  `react-hook-form` 라이브러리 대신 `react-dom`의 `useFormStatus` 훅을 사용하여, 폼 제출 시 버튼의 pending 상태를 효과적으로 구현할 수 있습니다.

- **`useActionState`**  
  (구 `useFormState`)  
  이 훅은 컴포넌트의 최상위 레벨에서 호출되며, 폼 액션이 실행될 때 업데이트되는 상태를 생성합니다. 이를 통해 폼 제출 시 상태 변화를 관리할 수 있습니다.
