# hooks-deps-element-newline
> Enforce line breaks between deps array elements

## Concept
- 여러 개의 deps 배열은 줄 바꿈을 합니다.
- 하나의 요소만 있는 deps 배열은 줄바꿈 하지 않습니다.

## Logic
1. CallExpression 에서, `useEffect`, `useLayoutEffect`, `useCallback`, `useMemo`, `useImperativeHandle` 중 하나가 함수의 이름이고, 인자의 수가 2개 이상이라면
1. 가장 마지막 인자를 deps 인자로 판단합니다.
1. deps 인자가 ArrayExpression 일 경우
1. 해당 deps array의 length가 1 이고, deps array의 시작 line과 끝 line이 다르다면
    1. `There should be no linebreak here.` 를 표시합니다.
    1. fix option을 사용할 경우 `[${deps[0]}]` 으로 deps 인자 텍스트를 변경합니다.
1. 해당 deps array의 length가 2 이상 n 이라면
    1. 0번째 요소가 deps array 시작 line과 동일한 line에 있는지 확인합니다.
    1. i (i = 1 ~ n) 번째 요소와 i - 1 번째 요소가 동일한 line에 있는지 확인합니다.
    1. 마지막 요소는 deps array 끝 line과 동일한 line에 있는지 확인합니다.
    - 위 조건들에 해당할 경우 각각 `There should be a linebreak after this element.` 를 표시합니다.
    - fix option을 사용할 경우 오류 발생 위치의 앞에 `\n`를 붙입니다. 단, 3번째 조건은 예외로 뒤에 `,\n`를 붙입니다. (Trailing comma 적용)
- auto fix는 들여쓰기 적용이나 trailing space 삭제는 하지 않습니다.

### Inspired by
- https://github.com/facebook/react/blob/eb58c3909aa19fb6ffbed27b9c9dba4aada3cb8e/packages/eslint-plugin-react-hooks/src/ExhaustiveDeps.js
- https://github.com/eslint/eslint/blob/e59d77536bd8db57e8a75cd5245f6f320aa699f8/lib/rules/array-element-newline.js
