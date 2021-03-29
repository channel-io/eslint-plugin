# pascal-case-type-name
> First charactor of type name must be upper case

## Concept
- Type의 첫번째 문자는 무조건 대문자여야 합니다.

## Logic
1. TSTypeAliasDeclaration 에서 id.name이 `^[a-z]` 인지 확인합니다.
    - 만약 그렇다면 `Type's first charactor must be upper case.`를 표시합니다.
    - fix option을 사용할 경우 TSTypeAliasDeclaration id의 첫번째 문자를 대문자로 변경합니다.

## TODO
- Type의 멤버는 camel case를 사용하도록 변경해야 합니다.
