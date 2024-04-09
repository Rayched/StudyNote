
### `Promise`

- 비동기 작업을 처리할 때 `Callback` 대신 유용하게 활용할 수 있는 `JavaScript` 객체
- 비동기 작업을 수행하고나서 성공 혹은 실패 여부와 그 결과 값을 나타낸다.
- `new Promise()` 연산자를 통해 `Promise` 객체를 생성할 수 있다.

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

### `Promise` 상태

- 