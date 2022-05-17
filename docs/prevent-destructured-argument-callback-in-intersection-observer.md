# prevent-destructured-argument-callback-in-intersection-observer
> IntersectionObserver's callback should not destructure argument. Callback's `entries` argument can have multi value even observe only one element.

## Concept
- IntersectionObserver 생성자 인자로 들어가는 콜백은 배열 구조 분해를 통해 인자를 받을 수 없습니다.

## Logic
1. NewExpression을 통해 IntersectionObserver를 생성하고, 그 첫번째 argument인 함수의 첫 파라미터가 ArrayPattern인지 확인합니다.
    - 만약 그렇다면 ```IntersectionObserver's callback should not destructure argument. Callback's `entries` argument can have multi value even observe only one element.```를 표시합니다.

## Known-issue
- 다른 곳에서 선언된 함수를 handler로 사용할 경우 배열 구조 분해를 통해 인자를 받고 있더라도 감지할 수 없습니다.
