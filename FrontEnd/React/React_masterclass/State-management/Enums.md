
### 이전 작업 내용 요약

```
1. 기존에 한 페이지에 `To-Do/Doing/Done` 카테고리에 포함된
   일정들을 띄워놓은 상태였다.
2. 'To Do'에서 누른 버튼에 따라 Doing/Done으로 To Do가 옮겨지도록 구현
3. 이제 기존 코드에서 'To-Do/Doing/Done' 구분하기 위해 만든 
	To Do Header 부분을 <select> 로 대체하고
4. select한 option(To-Do/Doing/Done)에 따라
   category가 일치하는 To Do만 Rendering하도록 업데이트를 진행하였다.
```

---

### 개요

- 기존 `To Do List App`에서 `To Do`를 새로 추가하면 <br/>
	해당 `To Do`의 기본적인 `category`는 `To-Do`이다.

- 이제 `To Do`, 일정을 추가할 때 `category`도 선택할 수 있게 해보자.
- 정확히 말하자면 새로 추가한 `To Do`의 `category`가 <br/>
	화면 상단의 `To Do Header, <select>`를 따라가게 하는 것이다.

- `To Do` 입력 `form` return하는 `createToDo` 함수에서
- `categoryState`를 import하고, `setToDos()`로 전달하는 <br/>
	`To Do` 객체의 `category prop`의 값을 `currentCategory` 수정하였다.

``` tsx
//수정한 부분만 발췌

function CreateToDo(){
	/* Update Start */
	const currentCategory = useRecoilValue(categoryState);
	const AddToDo = ({ToDo}: I_ToDo) => {
		setToDos((Old_ToDos) => [
			...Old_ToDos,
			{
				id: Date.now(),
				text: ToDo,
				//category: "To-Do"
				category: currentCategory //Error
			}
		]);
		setValue("ToDo", "");
	}
	/*Update End*/
}
```

- `interface I_ToDo`의 `category`의 값을 `To-Do/Doing/Done`으로 제한했기 때문에 <br/>
	`category: currentCategory` 부분에서 Error가 발생한다.

-  `categoryState`의 타입을 `"To-Do"|"Doing"|"Done"`으로 설정하였다.
- 아니면 `categories`라는 임의의 `type` 만들고 <br/>
	해당 `type`의 값으로 `category type` 값을 전달, 우회하는 것도 가능하다.

``` ts
//사용자가 선택한 category를 기억해두는 state
/* 기존 코드
export const categoryState = atom({
	key: "category",
	default: "To-Do"
});
*/

//version 1
export const categoryState = atom<"To-Do"|"Doing"|"Done">({
	key: "category",
	default: "To-Do"
})

//version 2
type categories = "To-Do"|"Doing"|"Done";

export const categoryState = atom<categorys>({
	key: "category",
	default: "To-Do"
});
```

- 이제 `categoryState` 참조하는 `To Do Header`, `<select>` 요소에도 문제가 생겼다.
- 정확히 말하자면 `<select>`의 `onInput Event Listener`인 `onInput` 함수에서
- `categoryState`에 전달하는 값과 `categoryState`의 타입이 충돌이 발생하는 <br/>
	이슈가 발생하였다.

---

### `Enums`

- `Enums (열거형)`, `TypeScript`에서 제공되는 기능 중 하나
- 이름이 있는 상수들의 집합을 정의하는 것이 가능하다.
- `enum, 열거형` 사용하면 의도(`intent`)를 문서화 하거나 <br/>
	혹은 구분되는 사례 집합을 쉽게 만드는 것이 가능하다.
- `TypeScript`에선 숫자와 문자열 기반의 `Enum 열거형` 제공한다.

``` ts
//숫자 열거형 Numeric enums
enum NumDirection {
	Up = 1,
	Down,
	Left,
	Right
}

//문자열 열거형 String enums
enum Direction {
	Up = "UP",
	Down = "DOWN",
	Left = "LEFT",
	Right = "RIGHT"
}
```

- **[Enums / TypeScript HandBook](https://www.typescriptlang.org/docs/handbook/enums.html)**

---

### `Enums` 활용, `category` 관련 코드 개선

