
- `React` 16.8 버전부터 추가된 React 요소

```
function Component
- state 사용 불가
- Lifecycle에 따른 기능 구현 불가

class Component
- 생성자(Constructor)에서 state 정의
- setState() 함수를 통해 state의 값 업데이트
- Lifecycle methods 제공
```

- class Component만 사용할 수 있던 `state`와 그 외 다른 React 기능들을 <br/>
	function Component에서도 사용할 수 있게 해주는 기능
- `useState()`, `useEffect()` 등이 여기에 해당된다.
---
#### `useState()`
- `state`를 함수 Component 안에서 사용할 수 있게 해주는 Hook
- `state`와 `setState()`가 담긴 배열을 return하는 React 함수

``` js
const [Name, setName] = useState("초기값");
```

- 구조 분해 할당 기법을 활용, `useState()`의 return 값인 <br/>
	`state`와 `setState()`를 각 변수에 할당한다.
- `useState()`의 인자로 임의의 값을 전달하면, 해당 값이 `state`의 초기 값이 된다.

---
#### `useEffect()`

``` js
useEfffect(() => {
	//effect function
}, [/*state*/])
```
- Component가 Rendering될 때마다 특정 작업을 실행할 수 있게 해주는 Hook
- `class Component`에서 제공하는 Lifecycle과 관련된 함수들 <br/>
	`componentDidMount`, `componentDidUpdate`, `componentDidUnmount` 함수들과 동일한 기능을 통합해서 제공한다.
	
- 첫 번째 인자로는 특정 작업을 실행하는 함수, `effect function`이 전달된다. <br/>
	이때 전달된 함수는 React Component가 Rendering이 완료된 후에 실행된다.

- 두 번째 인자로는 배열을 전달하는데, 해당 배열에 `state` 변수를 추가하면 <br/>
	해당 변수가 참조하는 `state` 값이 변경되면 `effect function`이 실행된다. <br/>
	(`effect function` => `useEffect()` 인자로 전달한 함수)
- 두 번째 인자인 배열을 정의하지 않는다면, Component가 Re-rendering될 때마다 <br/>
	`useEffect()`의 `effect function`이 실행된다.
---
