
### `Component`

- `JavaScript`의 함수처럼 `props`라는 입력을 받고 <br/>
	이를 화면에 어떻게 표시할 지를 정해둔 `React Element`를 반환하는 것
- `React Component` == `JavaScript Function`
- `React Element`라는 객체를 만드는 틀, `class`에 가깝기도 하다.
- `class Component`, `function Component` 두 가지로 나뉘어 진다.

- 이번 페이지에서 `props`에 대한 것은 다루지 않는다.
- `props`에 대해 알고 싶다면 아래 링크를 참고하길 바란다.
- **[`props`](props.md)**

---
### `function Component`

``` jsx
function People(props){
	return <h4>이름 : {props.name}</h4>;
}
```

- `People` 함수는 `props`라는 객체를 전달 받고, `[이름 : 홍길동]`이라는 형식의 <br/>
	`React Element`를 결과 값으로 반환하기 때문에 `React Component`이다.
- 여기서 `People`은 `function`, 함수의 형태로 작성됐기 때문에 <br/>
	`function Component`, `함수 컴포넌트`이다.
	
---
### `class Component`

``` jsx
class People extends React.Component {
	render(){
		return <h4>이름 : {this.props.name}</h4>;
	}
}
```

- `ES6`에서 추가된 문법인 `class`를 활용해서 만들어지는 `React Component`
- `React.Component`로부터 상속 받아서 만들어지는 Component이다.
- 바로 앞에서 다룬 함수 Component보다 조금 복잡한 형태를 가지고 있다.

- `React.Component`로부터 상속 받아서, `class Component`를 만들 때에는 <br/>
	`render()` 함수를 반드시 정의를 해줘야 한다. (공식 문서 曰)

---
