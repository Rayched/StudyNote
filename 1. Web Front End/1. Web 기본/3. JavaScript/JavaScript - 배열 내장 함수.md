
#### 💻 정리 순서

- <a href="https://inf.run/EoSw">인프런 JS 강의</a> 내용을 뼈대로, MDN JS 참고서에 나와있는 내용으로 살을 붙인다.

---

#### `Array.forEach()`

- 해당 메서드를 호출한 배열 요소를 순회하는 자체 메서드
- 각 배열 요소에 대해, 인자로 전달된 함수 (Callback 함수)를 한 번씩 실행하는 함수
- 매개 변수에 `function`을 전달해야 한다.
	- Callback - 매개 변수
	- `element`, `elm` => 현재 배열에서 처리 중인 요소를 인자로 전달 받는다.
	- `index`, `idx` => 현재 배열에서 처리 중인 요소의 `index`를 인자로 전달 받는다.
	- `array`, `arr` => `forEach()` 메서드를 호출한 배열을 인자로 전달 받는다.
- `forEach()`는 각 배열 요소에 대해 `Parameter` 제공 받은 
   함수 (`Callback Function`)를 오름차순으로 한 번씩 호출한다.
``` js
let NumArr = [1, 2, 3, 4];

//NumArr의 요소를 순차적으로 출력하고 싶다.
//for문 활용해서 출력할 수도 있지만
//forEach() 메서드를 활용하면, 더 간편하게 NumArr의 요소를 출력할 수 있다.

//before
for(let i = 0; i < NumArr.length; i++){
	console.log(`arr[${i}] = ${NumArr[i]}`);
}
/* Before Output
	arr[0] = 1
	arr[1] = 2
	arr[2] = 3
	arr[3] = 4
*/

//after
NumArr.forEach(function(elm, idx, array){
	console.log(`arr[${idx}] = ${elm}`);
	console.log(array);
});

/* After Output
	arr[0] = 1
	(4) [1, 2, 3, 4]
	arr[1] = 2
	(4) [1, 2, 3, 4]
	arr[2] = 3
	(4) [1, 2, 3, 4]
	arr[3] = 4
	(4) [1, 2, 3, 4]
*/
```

---

#### `Array.map()`

- 기존 코드
	- for 문을 활용해서 빈 배열인 NewArr에  arr 배열의 각 요소에 10을 곱한 값을
	   차례대로 배치하는 코드

``` js
let arr = [1, 2, 3, 4];

let NewArr = [];

for(let i = 0; i < arr.length; i++){
	NewArr.push(arr[i] * 10);
}

console.log(NewArr);
```

``` js
Array.map(function (currentValue, index, array){ /**/ });
```

- 배열의 각 요소에서 인자로 전달된 함수 (Callback 함수)를 차례대로
   실행하고, Callback 함수를 실행한 결과 값을 모아서 새로운 배열로 반환하는
   배열 내장 함수

- **매개변수 목록**
	- **Callback Function** : 배열 각 요소에서 실행할 함수
		- **currentValue** : 현재 함수가 처리 중인 배열 요소
		- **index** : 현재 함수가 처리 중인 배열 요소의 `index`
		- **array** : `map()` 함수를 호출한 배열

**- `Array.map()` 예제**

``` js
//numArr 배열에서 홀수는 5를 곱해주고, 짝수면 10을 곱해주는 코드

let numArr = [1, 2, 3, 4, 5, 6];

let Answer = numArr.map((elm) => {
	if (elm % 2 === 1){
		return elm * 5;
	} else {
		return elm * 10;
	}
});

console.log(Answer);
//[5, 20, 15, 40, 25, 60]
```

---


배열 내장 함수 정리 순서

1. `forEach()`, `map()`
2. `at()`, `find()`, `includes()`, `findIndex()`, `indexOf()`
3.  `concat()`, `filter()`, `slice()`, `join()`
4.  `reduce()`, `sort()`, `isArray()`
