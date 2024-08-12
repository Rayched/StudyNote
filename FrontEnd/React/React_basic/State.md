
### `State`

- **"상태"**
- `React Component`의 상태를 가리킨다.
- 여기서 '상태'는 **`React Component`의 변경 가능한 데이터** 의미한다.
- `state`에 할당되는 값은 Rendering이나 데이터 흐름에 사용되는 값 <br/>
	변경해도 문제가 없는 값만 할당을 시켜야 한다.
- `state`의 값이 바뀌면 Re-rendering이 발생하기 때문에 <br/>
	변경해선 안되는 값을 `state`에 할당하면 Error가 발생할 수 있다.
- `state` == `JavaScript Object`
---
### `state` 생성

#### `class` Component

``` js
class LikeButton extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			//LikeButton Component의 state를 정의하는 Part
			liked: false
		};
	}
}
```

- `class` Component는 `State`를 `생성자 (constructor)`에서 정의한다.

---
#### `function` Component

``` jsx
function Exam(){
	const [Sample, setSample] = useState("Hello");

	setSample("Change");
	
	return (
		<div>
			<h4>State : {Sample}</h4>
		</div>
	);
}
```

- `function` Component는 `useState()` 함수를 통해 `State`를 정의할 수 있다.
- `useState()` => `state`, `setState()` return
- `State`에 할당한 값은 직접적으로 수정해선 안된다.

---
### `LifeCycle`

- `Component`는 계속 존재하는 것이 아니라, 시간의 흐름에 따라 <br/>
	생성되고, 업데이트 되다가 사라지는 일종의 LifeCycle (생명 주기) 가지고 있다.

---
### 📔 Reference

- **[처음 만난 리액트 (React)]()**
- **[`State`와 LifeCycle](https://ko.legacy.reactjs.org/docs/state-and-lifecycle.html)**
