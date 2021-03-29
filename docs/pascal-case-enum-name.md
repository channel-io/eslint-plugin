# pascal-case-enum-name
> Enum name and member\'s name must be pascal case

## Concept
- Enum의 첫번째 문자는 무조건 대문자여야 합니다.

## Logic
1. TSEnumDeclaration 에서 id.name이 `^[a-z]` 인지 확인합니다.
    - 만약 그렇다면 `Enum's first charactor must be upper case.`를 표시합니다.
    - fix option을 사용할 경우 TSEnumDeclaration id의 첫번째 문자를 대문자로 변경합니다.
1. TSEnumDeclaration 에서 members의 각각 id.name이 `^[a-z]` 인지 확인합니다.
    - 만약 그렇다면 `Enum member's first charactor must be upper case.`를 표시합니다.
    - fix option을 사용할 경우 해당 member의 첫번째 문자를 대문자로 변경합니다.
1. TSEnumDeclaration 에서 members의 각각 id.name이 `^[A-Z0-9_]+$` 인지 확인합니다.
    - 만약 그렇다면 `Enum member name must be pascal case.`를 표시합니다.
    - fix option을 사용할 경우 해당 member의 첫번째 문자 외에 전부 소문자로 변경합니다. `_` 뒤에 있는 문자는 `_`를 삭제하고 대문자로 변경합니다.
