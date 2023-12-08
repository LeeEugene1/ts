패키지 만들기
```yarn init -y```

ts설치
```yarn add typescript ts-node```

tsconfig.json 자동설정
```yarn run tsc --init```


ts -> js컴파일
```yarn run tsc```
config에 outdir을 설정하면 원하는곳에 컴파일시킬수있음.

컴파일하지않고 ts-node로 ts바로실행
```yarn run ts-node ./src/practive.ts```