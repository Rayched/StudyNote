
#### `Promise`

- 비동기 작업을 처리할 때 `Callback` 대신 유용하게 활용할 수 있는 `JavaScript` 객체
- 비동기 작업을 수행하고나서 성공 혹은 실패 여부와 그 결과 값을 나타낸다.
- 물론 실제로 결과 값을 반환하는 것이 아니라, 근 미래에 특정 시점에서 <br/>
	작업을 처리한 결과 값을 제공한다는 약속 (Promise)을 반환하는 것이다.
- `Promise`는 `new Promise()` 키워드를 통해 생성할 수 있다.

``` js
const Prom = new Promise((resolve, reject) => {});
```

- `new Promise()` 연산자로 `Promise` 객체를 생성할 때 <br/>
	전달한 함수를 `executor (실행자, 실행 함수)`라고 한다.
- `executor` 함수는 `Promise` 객체가 생성될 때 자동으로 실행되는 함수이다.
- 이때 `executor` 함수는 `resolve`, `rejected` 두 가지 Callback 함수를 인자로 받는다.
- `resolve` : 비동기 작업이 성공적으로 끝나면 호출되는 Callback
- `reject` : 비동기 작업 수행 중 Error가 발생, 작업에 실패했을 경우에 <br/>
		 호출되는 Callback

---
#### `Promise` 객체의 내부 `Prop`

- `new Promise()` 키워드를 통해 생성된 <br/>
  `Promise` 객체는 아래와 같은 내부 `Property` 가지고 있다.
  
``` js
Promise {
	state: "Pending",
	result: undefined
}
```

- 처음 생성된 `Promise` 객체는 `Pending (대기)` 상태이다.
- 그리고 이 상태에서 `executor`, 실행 함수가 작업을 처리하고 <br/>
	그 결과에 따라 `Promise` 객체의 `state`, `result`는 각기 다른 값을 가지게 된다.

- 작업이 성공적으로 끝났을 경우, `executor`의 `resolve`라는 Callback이 호출된다.
- 이때 `Promise` 객체의 상태는 `Pending`에서 `fulfilled`로 바뀌고 <br/>
	결과 값, `result`는 `undefined`에서 `value`로 바뀐다. <br/>
	(`value` : `resolve(value)`, `resolve()` 호출 시 전달한 값을 가리킨다. )

- 작업을 처리하는 도중에 `Error`가 발생하게 된다면 <br/>
	`executor`의 Callback인 `reject`가 호출된다.
- `reject(error)` 함수가 호출됐다면, `Promise`의 `state`는 `undefined`에서 <br/>
	`rejected`로 바뀌게 되고, 최종 결과에 해당하는 `result`는 `error`로 변한다.

---

#### `.then()`

- `Promise`는 "미래에 특정 시점에서 작업을 처리한 결과 값을 반환하겠다."라는 <br/>
	약속 (Promise)를 반환하는 것일 뿐이다.
- 즉, 우리가 처리한 결과를 `Promise`로부터 받아와야 한다는 것이다.
- 이를 받아올 때 사용하는 메서드로는 `.then()` 메서드가 있다.
- `.then()` 메서드는 아래 예시처럼 총 두 개의 인자를 전달 받는다.

``` js
promise.then(
	function (result){}, //결과 (result)를 다룬다. <= resolve(value) 대응
	function (error){} //에러 (error)를 다룬다. <= reject(error) 대응
);
```

- `.then()` 메서드의 첫 번째 인자는 `Promise`의 작업이 성공적으로 끝났을 때 <br/>
	실행되는 함수 (`resolve(value)`)로 실행 결과 값, `value`를 전달 받는다.
- 두 번째 인자는 `Promise` 작업이 실패했을 경우에 실행되는 <br/>
	함수 (`reject(error)`)로 `error`를 전달 받는다.
---

