# pascal-case-interface-name
> First charactor of interface name must be upper case

## Concept
- Interface의 첫번째 문자는 무조건 대문자여야 합니다.
- `I` Prefix를 붙일 필요가 없습니다.

## Logic
1. TSInterfaceDeclaration 에서 id.name이 `^[a-z]` 인지 확인합니다.
    - 만약 그렇다면 `Interface's first charactor must be upper case.`를 표시합니다.
    - fix option을 사용할 경우 TSInterfaceDeclaration id의 첫번째 문자를 대문자로 변경합니다.
1. TSInterfaceDeclaration 에서 id.name이 `^I[A-Z]` 인지 확인합니다.
    - 만약 그렇다면 `There should be no 'I' prefix.`를 표시합니다.
    - fix option을 사용할 경우 TSInterfaceDeclaration id의 첫번째 문자를 삭제합니다.
