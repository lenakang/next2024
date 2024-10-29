# Next.js 14 2024

## Form

Next.js 14에서는 `react-dom`의 새로운 API를 사용하여 폼 상태 관리를 간소화할 수 있습니다.

- **`useFormStatus`**  
  `react-hook-form` 대신 `react-dom`의 `useFormStatus` 훅을 활용해, 폼 제출 시 버튼의 pending 상태를 효과적으로 구현합니다.
  이 훅은 반드시 `form`의 자식 컴포넌트에서 사용해야 합니다.

- **`useActionState`**  
  (`useFormState`에서 이름 변경)  
  이 훅은 컴포넌트의 최상위 레벨에서 호출되어, 폼 액션이 실행될 때 상태를 업데이트합니다. 이를 통해 폼 제출 중 상태 변화를 간편하게 관리할 수 있습니다.
