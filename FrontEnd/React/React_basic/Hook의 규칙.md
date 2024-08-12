#### `Hook`의 규칙

##### 1. '최상위' 에서만 Hook을 호출해야 한다.

- React 함수의 최상위 Level에서만 Hook을 호출해야 한다.
- 반복문, 조건문 혹은 중첩된 함수 내에서 Hook을 호출해선 안된다.
- Hook은 Component가 Rendering될 때마다 매번 같은 순서로 호출되어야 한다.

``` jsx
//잘못된 Hook 사용 예시

function UserData(){
	const [name, setName] = useState("John");

	if (name !== ""){
		useEffect(() => {
			console.log(name);
		});
	}

	const ChangeText = () => {
		setName("");
	}

	return (
		<div>
			<h4>이름: {name}</h4>
			<button onClick={ChangeText}>Delete</button>
		</div>
	);
}
```

- 처음 Component가 Rendering될 때  `useState() → useEffect()` 순서로 호출되고 <br/>
	이를 바탕으로 React는 특정 `state`가 어떤 `useState`에 해당하는 지를 파악한다.
- 버튼을 클릭하면 `UserData` Component가 Re-rendering된다. <br/>
	(버튼 클릭 시 `ChangeText()` 함수 실행, `name`의 값을 `""` 변경)
- `name !== ""` 조건이 `false`가 되므로 `useEffect()`는 호출되지 않는다.
- 이때 호출되지 않은 `useEffect()` 다음에 호출되는 Hook의 순서가 밀리면서
- 치명적인 버그가 발생될 수 있기 때문에 Hook 호출 시에는
- 조건문, 반복문, 중첩된 함수 내에서 호출하지 말고
- Component 최상위 Level에서 호출해야 한다.

---
##### 2. Hook은 React 함수 내에서만 호출해야 한다.

- 일반적인 `JavaScript` 함수에서 Hook을 호출해선 안된다.
- 대신 함수 Component나 혹은 Custom Hook에서 Hook을 호출하면 된다.

