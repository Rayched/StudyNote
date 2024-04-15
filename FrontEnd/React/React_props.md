
### `props`

- Property의 약어, "속성", "재산"이라는 의미를 가지고 있음.
- `React`에서 `props`는 `React Component`의 속성을 의미한다.
- `React Component`에 전달할 다양한 정보를 담고 있는 `JS` 객체
- `React Component`라고 하는 함수가 가지고 있는 일종의 매개변수라고 할 수 있다.

---
### `props`의 특징

#### `props`는 읽기 전용이다.

``` js
function sum(a, b){
	return a + b;
}
```

- 위와 같이 자신의 입력 값을 바꾸지 않고 같은 입력 값에 대해서는 <br/>
	항상 동일한 결과를 반환하는 함수를 순수 함수라고 한다.

``` js
function Cal(a, b){
	a += b;
}
```

- 위의 함수 `Cal`은 `a`, `b`라는 입력 값을 받고
- `a`의 현재 값과 `b`의 값을 더한 결과 값을 입력 값 `a`에 할당하는 함수이다.
- 즉, 자신의 입력 값을 변경하기 때문에 순수 함수라고 할 수 없다.

- 예를 들어서 이름과 나이를 입력 받고 이를 표시하는 App을 만든다고 가정해보자.

```
이름: 홍길동
나이: 25

이름: 홍길순
나이: 23

이름: John
나이: 30
```

``` jsx
function People(props){
	return (
		<div>
			<h4>이름: {props.name}</h4>
			<h4>나이: {props.age}</h4>
		</div>
	);
}

function Container(){
	return (
		<div>
			<People name="홍길동" age="25" />
			<People name="홍길순" age="23" />
			<People name="John" age="30" />
		</div>
	);
}
```

-  People이라는 Component를 만들고, 이후에 해당 Component 호출 시에 <br/>
	이름과 나이 항목에 전달될 값을 입력해주면 된다.
- 즉, 입력 받은 값이 동일할 때 항상 같은 React Element를 호출하기 때문에
- 위의 People Component는 순수 함수라고 해도 무방하다.

- 이제 여기서 People Component에서 name과 age를 임의의 값으로 지정해보자.

``` jsx
function People(props){
	props.name = "Null";
	props.age = "01010101";
	
	return (
		<div>
			<h4>이름: {props.name}</h4>
			<h4>나이: {props.age}</h4>
		</div>
	);
}

function Container(){
	return (
		<div>
			<People name="홍길동" age="25" />
			<People name="홍길순" age="23" />
			<People name="John" age="30" />
		</div>
	);
}
```

- People Component에서 `props.name`, `props.age`를 임의의 값으로 지정했기 때문에 <br/>
	우리가 원하는 형태의 `React Element`를 결과 값으로 받을 수 없다.

- 이처럼 입력 값인 `props`의 값을 Component에서 임의로 변경했을 경우에는 <br/>
	예기치 못한 결과가 나올 수도 있기 때문에 Component에서 `props`를 다룰 때는 <br/>
	입력 값을 변경하지 않는 순수 함수처럼 다뤄야 한다.
	(공식 문서에서 이렇게 정해져 있다.)

---

### `props` 사용법

- 기본적으로 `props`에 값을 전달할 때는 문자열로 전달한다.

``` jsx
function Exam(props){
	return <h4>이름: {props.name} / 나이: {props.age}</h4>
}

function Container(){
	const ages = (a, b) => {
		return a * b;
	}
	
	return (
		<div>
			<Exam name="홍길동" age="25" />
			<Exam name="홍길순" age={ages(6, 5)} />
		</div>
	);
}
```

- `props`에는 문자열 외에도 `JavaScript` 코드를 전달할 수 있다.
- `props`에 `JavaScript` 코드를 추가할 때는 `{중괄호}`로 감싸서 전달한다.

- 그리고 `props`는 `JavaScript` 객체이다.
- `console.log(props)`를 통해 두 Element에 전달된 props는 아래와 같이 나온다.

``` js
{
	"name": "홍길동",
	"age": "25"
}

{
	"name": "홍길순",
	"age": 25
}
```

- 앞에서 말했던 것처럼 `props`는 `JavaScript` 객체이기 때문에
- 일반적인 객체와 같은 형식으로도 작성할 수 있다.

``` jsx
function People({name, age}){
	return <h4>이름: {name} / 나이: {age}</h4>
}
```



