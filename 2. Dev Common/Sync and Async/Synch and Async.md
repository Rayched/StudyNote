
```
1. 동기 Synchronous
2. 비동기 Asynchronous
3. Blocking
4. Non - Blocking
```

---

### 동기 & 비동기 Synchronous & Asynchronous

#### 동기 Synchronous

- **"기다리는 것"**
- 하나의 작업이 진행되는 동안, 다른 작업을 동시에 진행하지 않는 방식
- `Hoisting` 완료된 이후, 코드가 순차적으로 동작하는 방식

#### 비동기 Asynchronous
- **"기다리지 않는 것"**
- 하나의 작업이 진행되는 동안, 다른 작업을 동시에 진행하는 방식
- 여러 작업을 동시에 처리하기 때문에, 코드 실행 시점을 예측할 수 없음.
- 동기 / 비동기는 요청한 작업에 대해 완료 여부를 신경 써서 <br/>
	작업을 순차적으로 수행할 지 아닌 지에 대한 관점 <br/>
	동기: 완료 여부 신경 O
	비동기: 완료 여부 신경 X
---
#### 동기, 비동기 예제

``` js
//동기식
//작성한 순서대로 코드가 실행된다.

console.log("1");
console.log("2");
console.log("3");

//Output
// '1' → '2' → '3'
```

``` js
//비동기식
//코드가 작성한 순서대로 동작하지 않음
console.log("1");
setTimeout(() => console.log("2"), 1000); //비동기적으로 동작하는 함수
//지정한 시간이 지나면, 콜백 함수를 실행하는 함수
//비동기적으로 동작하는 함수
console.log("3");

//Output
// '1' →'3' (1s 후) → '2'
/**
	* Console에 숫자 1 출력
	* 바로 다음 줄인 setTimeout()은 비동기 함수이다.
	* 그렇기 때문에 setTimeout()의 실행 완료를 확인하지 않고
	* 바로 아래 줄의 코드를 실행한다. (숫자 3 출력)
	* 이후 정해진 시간 (1초)이 지난 다음
	* 숫자 2가 출력된다.
*/
```


### 동기, 비동기 Callback Function 사용하기

``` js
console.log("1");

function Test(Func){
	Func();
}

function Test2(Func, Time){
	setTimeout(Func, Time);
}

Test(() => console.log("동기식 콜백"));
Test2(() => console.log("비동기식 콜백"), 1000);
console.log("3");

/*
	1
	동기식 콜백
	3
	비동기식 콜백
*/
```

---

#### Callback 지옥

``` js
const UserStorage {
	UserLogin(id, pw, onSuccess, onError){
		setTimeout(() => {
			if(
				(id === "John" && pw === "John01")
				|| (id === "James" && pw === "james02")
			){
				onSuccess(id);
			} else {
				onError(new Error("아이디와 비밀번호를 확인해주세요."))
			}
		}, 1000);
	}

	UserRole(name, onSuccess, onError){
		setTimeout(() => {
			if (name === "John"){
				onSuccess({name: "John", role: "일반 회원"});
			} else {
				onError(new Error("등록되지 않은 회원입니다."));
			}
		}, 1000);
	}
}

const userStorage = new UserStorage();
const ID = prompt("아이디를 입력해주세요.");
const PW = prompt("비밀번호를 입력해주세요.");

userStorage.UserLogin(
	ID, 
	PW,
	(user) => {
		userStorage.UserRole(
			user,
			(userRole) => alert(`환영합니다. ${userRole.name}(${userRole.role})`);
			(error) => console.log(error)
		);
	},
	(error) => console.log(error)
);
```

- 웹 사이트의 로그인 기능을 위와 같이 구현하였다.
- ID, PW를 입력 받고 로그인 성공을 하면 **"환영합니다. (이름) / (역할)"** 출력하고
- 로그인 실패 시, Error Message를 Console에 출력한다.

- 다량의 Callback Function 사용해서 코드를 읽기가 좀 버겁게 느껴지고
	각 코드가 어떤 식으로 연계가 되는 지를 한 눈에 파악하기 힘들다.
- 이런 식으로 가독성이 떨어지는 코드는 유지 보수하기 쉽지 않다.

---

### 📔 Reference

- **[완벽히 이해하는 동기/비동기 & 블로킹/논블로킹](https://inpa.tistory.com/entry/%F0%9F%91%A9%E2%80%8D%F0%9F%92%BB-%EB%8F%99%EA%B8%B0%EB%B9%84%EB%8F%99%EA%B8%B0-%EB%B8%94%EB%A1%9C%ED%82%B9%EB%85%BC%EB%B8%94%EB%A1%9C%ED%82%B9-%EA%B0%9C%EB%85%90-%EC%A0%95%EB%A6%AC)**
- **[동기식 / 비동기식이란?](https://tlsdnjs12.tistory.com/12)**
- **[동기 Synchronous는 정확히 무엇을 의미하는걸까?](https://evan-moon.github.io/2019/09/19/sync-async-blocking-non-blocking/)**



