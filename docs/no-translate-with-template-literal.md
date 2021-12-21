# no-translate-with-template-literal
> Restrict template literal argument for translation method

## Concept
- 번역 함수의 인자에는 template literal 문법의 문자열을 사용할 수 없습니다.

## Options
- `translateFuncNames: string[]` (기본값 `['translate']`): 번역 함수의 이름을 지정합니다.

## Logic
1. CallExpression 에서 함수의 이름이 `translateFuncName`인지 여부를 확인합니다.
2. 함수의 인자가 template literal 인지 확인합니다.
