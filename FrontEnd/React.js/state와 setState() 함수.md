
## `state`와 `setState()` 함수

- 지금까지 `React`를 배우면서, `setState()` 함수에 의해 `state` 값이 변화하면
- 해당 `state`와 연결된 `Component`가 Re-rendering된다는 것을 알았다.
- 이때는 `state` 변동에 인한 Re-rendering이 개별적으로 처리된다고 생각했지만
- 실제로는 그렇지 않고, 오히려 일괄 적으로 처리된다는 것이다.
- 일단 이걸 알게 된 계기부터 설명을 할 필요가 있을 것 같다.

---

## Trigger

``` jsx
function App(){
	const [ToDo, setToDo] = React.useState("");
	const [ToDos, setToDos] = React.useState([]); 

	const onChange = (event) => setToDo(event.target.value);

	const onSubmit = (event) => {
		event.preventDefault();

		if(ToDo === ""){
			return;
		}

		//setToDos((currentArray) => [...currentArray, ToDo]);
		setToDos([...currentArray, ToDo]);
		setToDo("");
	};

	return (
		<div>
			<h3>To Do List</h3>
			<h4>현재 일정 개수 : {ToDos.length}</h4>
			<form onSubmit={onSubmit}>
				<input
					onChange={onChange}
					value={ToDo}
					type='text'
					placeholder="일정을 입력해주세요."
				/>
				<button className="AddToDo">추가</button>
			</form>
			<hr/>
			{ToDos.map((ToDoItem, ToDoIndex) => {
				return (
					<div>
						<input type="checkbox" key={ToDoIndex}/>
						{ToDoItem}
					</div>
				);
			})}
		</div>
	);
}
```

- `React` 기본 이론을 배우고 나서 개발한 `To Do List` App이다.
- 사실은 `Spread Syntax, 전개 구문`에 대해 정리하기 위해서 코드를 읽다가
	문득 `ToDos` state를 Update하는 `setToDos()` 함수에 눈이 가버렸다.
- "`setToDos(/*function*/)`이 아니라 `setToDos([...ToDos, ToDo])`로 작성하면 어떻게 될까?"
- 아주 간단한 의문이었고, 즉각적으로 코드를 수정하고 `React App`을 실행해봤다.
- `React App`이 `Error`가 날 것 같다고 예상을 했지만
	실제로는 전혀 문제 없이 `To Do List`가 실행이 됐다.

- 그리고 이를 통해서 또 다른 의문이 생겼는데
- 강의에서는 왜 `setToDos([...ToDos, ToDo])`가 아닌 `setToDos(/*function*/)`으로
	코드를 작성했을까?
- 나와 비슷한 의문을 가진 사람이 있을까 싶어서 강의 페이지에 달린 댓글을 읽어봤지만
- 이러한 의문을 가진 사람은 없던 것 같다.
- 물론 이전 내용, `React` 이론 Part에서 이러한 이유에 대해 다뤘을 수도 있고
	아닐 수도 있다. 예전 강의 `state` Part로 넘어가서 확인해보는 것도 하나의 방법이지만
	나는 이 방법을 택하지 않고, `구글링을 한다` 쪽을 택했다.
---
- [컴포넌트 state / React 공식 문서](https://ko.legacy.reactjs.org/docs/faq-state.html)

- 일단 공식 문서를 읽어보기는 했지만, 아직 모르는 게 너무나 많아서 그런지는 모르겠지만
- 아무튼 내용을 이해하는데 상당히 오랜 시간이 걸렸다.

- 아직 완전히 다 이해하지는 못했지만 그래도 대략 3할 정도는 이해했다고 생각해서
	지금 이해한 내용을 까먹지 않기 위해서, 더 나아가서 나 같은 고민을 하는 다른 누군가에게
	조금이라도 도움을 주고 싶어서 이 글을 남겨둔다.
---

## `setState()`

- `ReactJS`로 개발한 App에서 `setState()` 함수에 의해, `state` 값에 변화가 생기면
- 해당 `state`와 연결된 `Component` (하위 `Component` 포함)에 `Re-rendering`이 발생한다.

- 다만 `setState()` 함수는 개별적으로 처리되지 않고
	Browser Event가 끝나는 시점에서 일괄 적으로 처리된다.

- 이때 `setState()` 함수에 인자로 전달된 값에 따라서 처리 우선 순위가 달라질 수 있다.
- 아래 두 가지 case를 준비해놨다.
- 하나는 인자로 `Array Object`를, 다른 하나는 `Callback Function`을 전달한 것이다.

``` js
setToDos([...ToDos, ToDo]);
setToDos((currentArray) => [...currentArray, ToDo]);
```

- 둘 다 동일한 결과를 `return`하기 때문에 당장은 전자 쪽이 더 좋을 것 같지만
- 장기적으로 생각해봤을 때 후자, `setState(function)` 쪽이 더 좋은 방법이다.
- 왜 후자 쪽이 더 좋은, 효율적인 방법이라는 것일까?

- 예를 들어서, 부모 `Component`와 자식 `Component`에서 `click event` 발생하면
- `setState()` 함수를 호출한다고 가정해보자.
- 이때 자식 `Component`는 두 번 `Rendering`되지 않고, 한 번만 `Rendering`된다.
- 왜냐하면 `ReactJS`는 Browser Event가 끝나는 시점에서 
	`state`를 동시에 갱신하기 때문에 자식 `Component`는 한 번만 `Rendering`된다.

``` js
setToDos([...ToDos, ToDo]);
setToDos((currentArray) => [...currentArray, ToDo]);
```

- 위의 두 가지 예시를 준비 해봤다.
- 하나는 `Object`, 다른 하나는 `Callback function`을 인자로 가지고 있다.

---
### `setToDos([...ToDos, ToDo])`

- 위의 경우는 `state`가 동기적으로 처리된다고 해도
	`props`는 부모 `Component`가 `Re-rendering`되기 전까지 확인할 수 없으며
	`props`를 동기 처리하려고 하면, `Component`가 웹 브라우저 화면 밖에 배치되는 등의
	문제가 발생하게 된다.

- `React` 구성 요소 (`state`, `props`, ...)가 내부적으로 일관성을 가지는 데
- 위와 같이 작성하면 이러한 일관성을 해치게 된다.
- 즉, `React` App을 `Debugging`하는 데 방해 요소로 작용할 수 있으며
	`React App`에 새로운 기능을 구현하는 데 애로 사항이 될 수도 있다.


---

### `setToDos((currentArray) => [...currentArray, ToDo])`

- `Function` 전달된 경우에는 `state`와 `props`의 값이 최신 값이라는 보장이 생긴다.
- 여기서 `Callback Function`은 해당 함수 내부에서 이전 `state` 값에 접근할 수 있다.

- 둘 다 같은 결과를 Rendering하지만
	전자의 경우에는 새로운 값이 반영되지 않을 수 있다는 위험 요소가 있지만
	후자의 경우에는 항상 새로운, `state`의 새로운 값이 반영된다.

---

### 마치며

공식 문서를 참고해서 최대한 정리해봤지만
오히려 모르는 게 더 늘어난 것 같다.
3할 정도를 이해했다고 생각했지만 실제로는 1할도 이해하지 못한 느낌이다.

결론은 "`setState()` 함수의 인자로 `function` 전달한 쪽이 더 효율적이다." 
간단하게 결론을 내고 일단 넘어가는 편이 더 좋을 것 같다.
더 깊게 파고 들려고 한다면, 머리가 터질 가능성도 무시할 수는 없으니 말이다.

아직 배우는 단계에서 왜 여기에 대해서 다루지 않았는지
아주 조금 알 것 같은 느낌이 들었다.


