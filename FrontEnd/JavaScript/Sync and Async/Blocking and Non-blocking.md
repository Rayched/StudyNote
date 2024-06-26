
- **먼저 알아둬야 할 개념**
	- **`제어권`** 
		- 함수의 내용을 실행시킬 수 있는 권리
		- `제어권` 넘겨준 함수는 `Block (대기, 차단)` 처리된다.
	- **`결과 값`**
		- 함수의 return 값

---

#### Blocking and Non-Blocking

- 현재 작업이 Block, Non-Block에 따라 다른 작업을 수행할 수 있는 지에 대한 관점
- 전체적인 작업의 흐름을 막으면 `Blocking`, 막지 않으면 `Non-Blocking`

---

#### Blocking

- 현재 작업 실행 중에 다른 작업의 요청이 들어오면 <br/>
	현재 작업을 Block(대기) 처리하고, 다른 작업을 시행하는 방식
- 다른 함수를 호출할 때, `제어권` 같이 넘겨주고 다른 함수의 작업이 끝난 후 돌려받는 방식

``` js
function A(){}
function B(){
	A();
}
```

- 임의의 함수 A, B가 있다고 가정해보자.
- B 함수가 A 함수를 호출, A에게 `제어권` 넘긴다.
- B는 A에게 `제어권` 넘겨줬기 때문에 함수 실행을 잠시 멈춘다.
- 그리고 A 함수의 실행이 종료되면, A는 B에게 `제어권` 반환
- 이를 반환 받은 B 함수의 실행 재개된다.

---

#### Non-Blocking

- 현재 작업 실행 중에 다른 작업의 요청이 들어와도 <br/>
	별도의 Block 처리 없이, 현재 작업과 다른 작업을 같이 실행하는 방식
- 다른 함수를 호출할 때, `제어권` 넘겨주지만 바로 돌려받고 <br/>
	현재 함수와 다른 함수가 같이 실행된다.

``` js
//Non-Blocking 동작이라고 가정
function A(){
	B();
}

function B(){}
```

- A 함수가 B 함수를 호출, A는 B에게 `제어권` 넘겨준다.
- `제어권` 넘겨 받은 B는 바로 A에게 `제어권` 반환한다.
- `제어권` 돌려 받은 A 작업 마저 실행한다.
- A 함수에서 B 호출한 뒤에도 Block 없이 계속해서 A 함수가 실행된다.

---
