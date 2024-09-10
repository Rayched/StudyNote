
## `Recoil Project`, `To Do List`

### 초기 개발 환경 설정 (`#6.5 To Do Setup`)

- 강의에서는 `Crypto-Tracker`에서 초기 환경을 설정했지만
- 기존에 만들어둔 것을 삭제하고 싶지는 않기 때문에
- `npx create-react-app`, 새로운 React 프로젝트를 만들었다.

```
프로젝트 기본 세팅
- TypeScript (CRA 할 때 같이 설치 진행)
- styled-components
- react-router-dom
- react-query
- recoil
```

- `ToDoList.tsx` 파일을 만들고, `React form` 복습 용으로
- 일정 입력 form 간단하게 만들어 봤다.

``` tsx
import styled from "styled-components";

const ToDoWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding: 50px 0px;
`;

function ToDoList(){
	const [ToDo, setToDo] = useState("");

	const onChange = (event: React.FormEvent<HTMLInputElement>) => {
		const {currentTarget: {value}} = event;
		setToDo(value);
	};

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(ToDo);
		setToDo("");
	}
	
	return (
		<ToDoWrapper>
			<form onSubmit={onSubmit}>
				<input 
					value={ToDo} 
					onChange={onChange} 
					placeholder="일정을 입력해주세요."
				/>
				<button>추가</button>
			</form>
		</ToDoWrapper>
	);
}
```

- `<input />`의 `value (입력 값)`를 `state` 관리하고
- `onChange` event 통해서 입력 값의 업데이트를 진행한다.
- 위의 예제에서 `<input /> form` 의 개수가 더 늘어난다면 <br/>
	그에 비례해서 `onChange, onSubmit` 같은 함수의 개수도 늘어나게 된다.
- `React Hook Form` Library 사용하면 이러한 불편 요소들을 개선할 수 있다.

- 그나저나 오랜만에 `React`에서  `form` 다뤄서 그런지 조금 낯선 느낌이 든다...