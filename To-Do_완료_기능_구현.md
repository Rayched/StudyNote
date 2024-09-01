
### 이전 작업 내용 요약

``` tsx
import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";
import styled from "styled-components";

//Type's
interface ToDo_Types {
	ToDo: string;
};

interface I_ToDos {
	id: number;
	text: string;
	category: "To_Do"|"Doing"|"Done";  
};

  

//styled-components
const ToDoWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px 0px;
    flex-direction: column;
  
    form {
        display: block;
        flex-direction: row;
        margin-bottom: 10px;
    }
`;

const ToDoState = atom<I_ToDos[]>({
    key: "ToDo",
    default: [],
});

function ToDoList(){
	const { register, handleSubmit, setValue,  } = useForm<ToDo_Types>();
	
	const [ToDos, setToDos] = useRecoilState(ToDoState);
	
	const AddToDo = ({ToDo}: ToDo_Types) => {
		setToDos((Old_ToDos) => [{
			text: ToDo, 
			id: Date.now(), 
			category: "To_Do"
		}, ...Old_ToDos]);
		setValue("ToDo", "");
	}
	
	console.log(ToDos);
	
	return (
	<>
		<ToDoWrapper>
		<h2>To Do List</h2>
			<form onSubmit={handleSubmit(AddToDo)}>
				<input {
					...register("ToDo" ,{ required: "일정을 입력해주세요."})}
					placeholder="오늘 일정을 적어주세요."
				/>
				<button>추가</button>
			</form>
			<div>
				<h3>추가된 일정</h3>
				<ul>
					{
						ToDos.map((toDo) => {
							return <li key={toDo.id}>{toDo.text}</li>
						})
					}
				</ul>
			</div>
		</ToDoWrapper>
	</>
	);
} 

export default ToDoList;
```

- 기존 `To Do List` 소스코드에서 `form`과 관련된 코드를
- `React Hook Form` 사용한 형태로 업데이트를 진행하였다.
- `onChange, onSubmit` 함수를 별도로 생성해둘 필요 없이
- `useForm()` Hook이 return하는 자체 함수를 통해서 <br/>
	기존 `form`과 관련된 코드를 모두 대체한다.

- 일정을 입력하고 추가 버튼을 클릭하면
- 입력했던 일정이 `Recoil state(atom), array`에 저장되고
- `array.map()` 함수를 통해서 `atom`에 저장된 일정 들을
- 일정 입력 `form` 하단의 '추가된 일정' Component에서 출력한다.

<img src="ref/To-Do_remind.png"/>


---

### `To Do`, `Category` 전환 기능 구현하기

- 이제 `To Do List`의 일정을 `To-Do` 상태에서 `Done (완료)` 상태로 <br/>
	전환하는 기능을 구현해보도록 하겠다.

- 그 전에 먼저 일정을 입력하는 `To Do form`과 추가한 일정을 보여주는 <br/>
	`To do list`, 총 두 개의 Component's의 분리 작업을 아래와 같이 진행하였다.

<img src="ref/ToDoList2.png"/>


- 