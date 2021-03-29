# no-classnames-with-one-argument
> Detect useless call classnames

## Concept
- 인자가 1개인 classname 라이브러리의 default export function를 사용할 필요가 없습니다.

## Logic
1. ImportDeclaration 에서 source가 `classnames`인 import를 찾아냅니다. (`from 'classnames'`)
1. 해당 import 구문에서 import되는 specifiers를 확인해 변수에 집어넣습니다.
1. 해당 specifiers로 호출되는 CallExpression를 발견한다면
1. CallExpression의 arguments length가 1이고 그 argument는 ObjectExpression가 아닌지 확인합니다.
1. 맞다면 `Do not call classnames with only one argument.`를 표시합니다.
1. fix option을 사용할 경우 CallExpression 전체를 해당 인자로 replace합니다.
