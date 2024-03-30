
- `ReactJS`의 기본적인 이론들을 (`Component`, `state`, `props`, ...) 배우고 나서
- `React` 활용해서 `To Do List` 개발하기 시작했다.
- 이 과정에서 `...`이라는 처음 보는 `JavaScript` 문법을 발견했다.

``` jsx
function App(){
	const [ToDo, setToDo] = React.useState(""); //일정 
	const [ToDos, setToDos] = React.useState([]); //일정 저장해 둘 배열

	const onChange = (event) => setToDo(event.target.value);

	const onSubmit = (event) => {
		event.preventDefault();

		if(ToDo === ""){
			return;
			//ToDo가 비어있으면
			//일정을 입력하지 않은 상태로
			//'추가' 버튼을 클릭했을 경우 함수 실행을 종료하는 코드
		}

		setToDos((currentArray) => [...currentArray, ToDo]);
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

- `ToDos` state의 초기 값은 `[]`, 비어있는 배열이다.
- 여기에 