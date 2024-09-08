
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

- 그나저나 오랜만에 `React form` 다뤄서 그런지 조금 낯선 느낌이 든다...

---

### `React Hook Form`

#### 개요

- `React Form` 예제에서 일정 입력 `form`에 일정을 입력하지 않은 상태에서
- `[추가]` 버튼을 눌렀을 때 Error 메시지를 출력하는
- `Form Error` 검증 코드를 아래와 같이 추가하였다.

``` tsx
const [ToDoError, setToDoError] = useState("");

const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
	event.preventDefault();
	if(ToDo.length < 2){
		setToDoError("입력하신 일정을 확인해주세요. (최소 두 글자 이상)")
		setToDo("");
	} else {
		console.log(`Submit / 추가한 일정: ${ToDo}`);
	}
};

return (
	/*기존 코드..*/
	<div>
		{ToDo == "" ? ToDoError : null}
	</div>
);
```

- 일정 입력 `Form`에 관한 `Error` 여부를 관리할 `state`를 추가하였다.
- 지금은 `input form`의 개수가 적어서 큰 문제는 없는 것 같다.

- 예를 들어서 어느 웹 사이트의 회원 가입 `form` 만든다고 가정해보자.
- `이름`, `생년월일`, `전화번호`, `이메일` 등 여러가지 사용자 데이터를 입력받고
- 이를 `state`로 관리한다고 치면, 벌써 4개의 `state`가 필요하다.

- 물론 입력 `form`에 정보를 기입하지 않았을 때 발생할 `Error` 검증 코드도
- 각 `form` 별로 직접 작성을 해둬야 한다..

- 위에서 예시로 든 상황처럼 입력 `form`을 여러 개 사용하는 경우에
- 사용하기 좋은 외부 라이브러리로 `React Hook form`이 존재한다.

- 아래 명령어를 입력해서 `React Hook form` 설치할 수 있다.

``` shell
npm install react-hook-form
```

---

#### `React Hook Form`

``` ts
import { useForm } from "react-hook-form";

const {register, watch} = useForm();
```

- `register`
	- 처음 예제에서 추가한 `<input>`의 `onChange` event Handler와
	- `<input>`의 `props (value, onChange..)`, `setState()` 등을 대체한다.
