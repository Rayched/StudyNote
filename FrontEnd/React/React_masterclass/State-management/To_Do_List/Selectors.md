
### 개요

- `To Do`의 `category` 변경하는 버튼을 만들고
- 클릭한 버튼에 따라 해당 `To Do`의 `category`를 변경하는 로직을 구현하였다.

- 기존 `To Do List`에서 `To do`는 `category`에 상관 없이 <br/>
	`ToDo_State`에 저장되고 있는 상태이다.

- 이제 `Recoil`의 `Selector` 통해서 `category` 별로 `To Do`가 저장되게 할 것이다.

---

### `Selectors`

- `Selector`는 **파생된 `state` (derived state)** 의 일부를 나타낸다.
- 여기서 **`derived state`** 기존 `state`를 새로운 값을 도출하는 <br/>
	함수에게 전달한 결과라고 볼 수 있다.
- 이렇게 만든 `derived state`는 다른 데이터에 의존하는 <br/>
	동적인 데이터를 만들 수 있기 때문에 강력한 개념이다.

- `Selector`는 기존 `state`를 가져다가, 다른 `state`를 만들 수 있다.
- `atom`의 `output`을 변형시키는 도구, recoil function이다.

``` tsx
import {atom, selector} from "recoil";

export interface I_ToDos {
	id: number;
	text: string;
	category: "To-Do"|"Doing"|"Done";
}

const ToDo_State = atom<I_ToDos>({
	key: "ToDos",
	default: []
});

const ToDo_Selector = selector({
	key: "ToDoSelector",
	get: ({get}) => {
		const toDos = get(ToDo_State);
		return toDos.length;
	}
});

function App(){
	const ToDoSelector = useRecoilValue(selector);
	console.log(ToDoSelector);
	//ToDo_State 배열의 현재 길이를 return한다.

	return <div>Hello World</div>
};
```

- `key`와 `get` 두 가지를 `parameter`로 전달 받는다.