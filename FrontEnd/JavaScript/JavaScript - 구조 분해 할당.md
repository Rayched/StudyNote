
## 구조 분해 할당 Destructing Assignment

- 배열의 요소 및 객체 Property 분해해서, 그 값을 변수에 각각 할당하는 표현 식
- 개발을 하면서 객체나 배열에 저장된 데이터 중 
	일부만 필요한 경우에 활용할 수 있는 기법
---
#### 배열 구조 분해 할당

``` js
//기존 방법

let arr = [1, 2, 3];

let a1 = arr[0];
let a2 = arr[1];
let a3 = arr[2];

console.log(a1); //1
console.log(a2); //2
console.log(a3); //3 
```

``` js
//구조 분해 할당 - 배열

let arr = [1, 2, 3];
let [a1, a2, a3] = arr;

//좀 더 축약해서 작성 가능
let [a4, a5, a6] = [5, 6, 7];
```

---
#### 객체 - 구조 분해 할당

``` js
const Numbers = {
	n1 : 1,
	n2 : 2,
	n3 : 3
};

//기존에 하던 방식
let num1 = Numbers.n1;
let num2 = Numbers.n2;
let num3 = Numbers.n3;
console.log(num1, num2, num3); //1, 2, 3

//구조 분해 할당 활용해서
//Numbers 객체의 Property 각 변수에 할당하기

let {n1, n2, n3} = Numbers;
console.log(n1, n2, n3);

//객체 생성 및 분해 할당 동시 처리
let {c1, c2, c3} = {
	cl: "Red",
	c2: "Green",
	c3: "Blue"
};
```

- 객체 Property 분해해서 각 변수에 할당할 때
	Property Key와 다른 이름의 변수에 할당하고자 하면 아래와 같이 작성해야 한다.

``` js
let {/*Property: 변수 명*/} = Object;
```

``` js
let {c1: color1, c2: color2, c3, c4: color3} = {
	c1 : "Red",
	c2 : "Green",
	c3 : "Blue",
	c4 : "Yellow"
};
//객체 Property 'c1'을 변수 'color1'에, 'c2' => 'color2'
//'c4' => 'color3'에 각각 저장되고
//c4 Property는 Key 값과 동일한 이름의 변수인 c3에 저장된다.

console.log(color1, color2, color3, c3);
//Red, Green, Yellow, Blue
```


#### 구조 분해 할당 != 기존 배열, 객체 삭제


- 배열의 요소나 객체 Property 분해해서 각 변수에 할당한다고 해도
	그것이 기존 배열, 객체의 삭제는 아니다.

``` js
const arr = [1, 2, 3];
let [a1, a2, a3] = arr;

console.log(a1, a2, a3); //1 2 3
console.log(arr); //[1, 2, 3]
```

- 배열 `arr`의 각 요소를 변수 `a1`, `a2`, `a3`에 각각 분해해서 할당을 한다.
- 이때 기존 배열 `arr`의 각 요소를 **복사**해서 각각의 변수에 할당을 하기 때문에
	기존 배열 `arr`의 요소를 `console.log(arr)` 통해서 확인해봐도
	문제 없이 존재한다는 것을 알 수 있다.

---

#### 구조 분해 할당 중 필요 없는 요소 무시하기

- 배열의 데이터를 분해해서 각 변수에 할당할 때
	변수의 이름을 명시하지 않으면, 필요하지 않은 요소를 무시할 수 있다.

``` js
const colors = ["Red", "Green", "Blue"];
let [c1, ,c3] = colors;

console.log(c1, c3);
```

- `colors` 배열의 요소 중 `Green`이 할당될 변수를 명시하지 않았기에
	해당 값의 할당이 생략되고, 바로 다음 값인 `Blue`가 세 번째 변수인 `c3`에 할당된다.
