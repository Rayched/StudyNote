
#### `Promise`

- `Async` 작업을 더 편리하게 할 수 있도록 도와주는 `JavaScript Object`
- `Promise` 객체는 아래와 같은 형태로 생성할 수 있다.

``` js
let promise = new Promise(function (resolve, reject){
	//executor, 결과를 최종적으로 만들어내는 제작 코드
});
```

- `Promise` 객체는 `executor`라는 함수를 인자로 전달 받는다.

``` js
function executor(resolve, reject){

}
```

- `executor` 함수는 `resolve`, `reject` 두 가지 인자를 가지고 있다.
- `Promise`를 활용해서 3초 뒤에 문장이 출력되는 코드를 구현해보자.

``` js
const executor = (/*resolve, reject*/) => {
	setTimeout(() => {
		console.log("코드 실행 후 3초 뒤에 출력되는 문장입니다.");
	}, 3000);
}

const prom = new Promise(executor);
```

- 코드를 실행하면 약 3초 뒤에 위의 문장이 출력되는 것을 확인할 수 있다.
- `Promise` 객체에 전달되는 `executor` 함수는, 객체 생성과 동시에 실행되는 실행 함수이다

``` js
const prom = new Promise((resolve, reject) => {
	//executor => Promise 객체 생성과 동시에 실행되는 함수
	/*
		resolve => 비동기 처리에 성공 시 호출되는 Callback
		reject => 비동기 처리에 실패 시 호출되는 Callback
	*/
});
```

---

``` js
const executor = (resolve, reject) => {
	setTimeout(() => {
		resolve("성공");
	}, 3000)
}

const Prom = new Promise(executor);

Prom.then((res) => {
	console.log(res);
});
```

- `resolve`에 전달된 값은 `Promise.then` 메서드를 통해서 사용할 수 있다.
- `Promise.then` 메서드는 `executor`에서 전달한 값이 인자로 전달된다.

```
1. new Promise() 통해서 Promise 객체 생성됨
2. 그와 동시에 인자로 전달한 executor 함수가 실행된다.
3. executor 함수는 resolve callback 호출
4. Promise 객체의 state가 Pending(대기) 상태에서 fulfilled(성공) 상태로 전환
5. 이후 Promise.then 메서드를 통해 전달된 값을 console에 출력한다.
```

``` js
const executor = (resolve, reject) => {
	setTimeout(() => {
		reject("실패");
	}, 3000);
}

const Prom = new Promise(executor);

Prom.then((res) => {
	console.log(res);
}).catch((error) => {
	console.log(error);
});
```

- `then`은 작업에 성공했을 때 실행되는 메서드로
- `reject` 호출 시에는 `Promise.catch()` 메서드를 사용해야한다.
- 