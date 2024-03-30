
### 여는 말

``` js

const obj = {
	1: "1 입니다.",
	true : "참"
};

Object.keys(obj); //['1', 'true']
```

지금까지 객체 Property의 Key는 문자형으로 만들었다.
`Object.keys()` 함수를 통해 확인하면 인자로 전달된 obj 객체의
key 값을 number, boolean 값으로 입력하더라도 string으로 return되는 것을 알 수 있다.

대괄호 표기법으로 객체 Property로 접근할 때, Key 값을 string으로 입력해도
문제 없이 해당 Key 값을 가진 Property의 value가 출력되는 것을 확인할 수 있다.
``` js
const obj = {
	1: "1 입니다.",
	true: "참"
};

console.log(obj['1']); //"1 입니다."
console.log(obj['true']); //"참"
```

---

# Symbol 형

- `const a = Symbol();`
- 위와 같은 형식으로 선언해준다.
- Symbol은 유일한 식별자를 만들 때 주로 활용된다.

``` js
const A = Symbol();
const B = Symbol();

console.log(A); //Symbol()
console.log(B); //Symbol()
console.log(A == B); //false
console.log(A === B); //false
```

- Symbol은 유일성이 보장되는 자료형
- Symbol을 할당받은 변수 두 개를 Console에 출력하면 똑같이 Symbol이 나오지만
   `==`, `===` 연산자로 두 변수를 비교하면 `false`가 return된다.
   