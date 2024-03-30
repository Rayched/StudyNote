
# JavaScript - 배열 Array

### 배열
- 순서가 있는 요소들의 집합
- 여러 개의 항목들이 모여있는 list
- 요소를 순서대로 저장해야 할 때 사용하는 자료 구조

### 배열 생성법

- **배열 생성자**
	``` js
	let arr = new Array(1, 2, 3);
	```

- **배열 리터럴**
	``` js
	let arr = [true, "Hello", 3];
	```

JavaScript는 동적 타입을 가진 언어로, 배열에 각기 다른 타입의 값을 저장할 수 있다.

### 배열 요소 접근법

- 각 배열 요소에는 0부터 시작하는 숫자가 매겨져 있다.
- 이를 `index`라고 하며, 해당 숫자들은 배열 요소의 순서를 의미한다.
- 배열에 저장된 특정 요소에 접근하려면, 아래와 같이 입력해서 접근한다.
	`'배열 명[index]'`

``` js
let arr = [true, "Hello", 3];

//"Hello"라는 요소를 출력하려고 한다.
console.log(arr[1]); //Hello
```

- 위와 같은 방식을 통해, 배열 요소를 수정할 수 있다.

``` js
let arr = [1, "2", 3, true];

//arr에 저장된 값 "2"를 "test"로 수정하려고 한다.
arr[1] = "hello";
console.log(arr);
```

- 배열 이름 (배열을 참조하는 변수) 뒤에 `.length`를 붙이면 배열의 길이를 확인 가능

``` js
let arr = [1, 2, 3, 4];

console.log(arr.length); //4
//arr 배열은 총 4개의 요소를 가진 배열이다. (0, 1, 2, 3)
```

---
# 배열 method

### 1. 배열 요소 추가

-  `array.push(value)`

``` js
let arr = [1, 2, 3];

//arr 배열 맨 뒤에 숫자 4를 추가
arr.push(4);

console.log(arr); //[1, 2, 3, 4]
```

 `배열명.push(value)`로 입력하면, 인자로 전달한 값이 해당 배열 맨 뒤에 추가된다.

---

- `array.unshift(value)`

``` js
let arr = [2, 3, 4];

//arr 배열 맨 앞에 숫자 1을 추가
arr.unshift(1);

console.log(arr); //[1, 2, 3, 4]
```

   `배열명.unshift(value)`로 입력하면, 인자로 전달한 값을
	해당 배열의 맨 앞 요소로 추가한다.

---

### 2. 배열 요소 삭제

- `array.pop()`

``` js
let arr = [1, 2, 3, 4];

//arr 배열에서 숫자 4를 삭제하려고 한다.

arr.pop();

console.log(arr); //[1, 2, 3]
```

`pop()` method는 배열의 마지막 index 요소를 삭제하는 함수이다.
위의 예제에서 배열 내장 함수인 `pop()` 함수를 호출하면
arr 배열에서 맨 마지막 index 요소인 숫자 4가 삭제되는 것을 알 수 있다.

---

- `array.shift()`

``` js
let arr = ["D", "A", "B", "C"];

//arr 배열에서 첫번째 index 요소인 "D"를 삭제하려고 한다.
arr.shift();

console.log(arr); //['A', 'B', 'C']
```

배열 내장 함수인 `shift()` 함수는 배열의 첫 번째 index 요소를 삭제하는 함수이다.
위의 예제에서 arr 배열의 0번 index 요소인 "D"를 `shift()` 함수를 통해서 삭제하고
이후 console에 `arr` 배열을 출력하는 것을 통해서 첫번째 index 요소인
문자열 "D"가 삭제된 것을 확인할 수 있다.

---

