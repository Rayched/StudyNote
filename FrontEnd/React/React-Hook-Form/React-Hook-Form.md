
### `React Hook Form`이란?

- `React App`에서 `form` 요소의 `상태 (state)`와 유효성 검사를 처리하기 위한 <br/>
	간편한 방법을 제공해주는 Library
- 아래 명령어를 통해 `React-Hook-Form` 설치한다.

``` shell
npm install react-hook-form
```

---

### `useForm()`

- `React-Hook-Form` 사용한다면 알아둬야 하는 Hook
- `React`에서 `form` 요소를 관리하기 쉽게 해주는 Custom Hook
- `object` 하나를 인자로 전달 받는데, 필수는 아니다. (`optional`)

``` ts
import {useForm} from "react-hook-form";

function App(){
	const {
		register, 
		watch, 
		handleSubmit,
		formState
	} = useForm();
	//이번 글에서 다룰 useForm
}
```

---
#### `register`

- `useForm()`이 return하는 함수 중 하나
- `name`, `onChange`, `onClick`, `ref` 등을 return하는 함수
- 기존 `input`, `select` 요소의 값에 대응하는 `state`와 `onChange` event의 <br/>
	`event handler`를 자체적으로 제공해주기 때문에 <br/>
	`register` 함수를 사용하면 만들 필요가 없어진다.

``` tsx
import {useForm} from "react-hook-form";

function App(){
	const { register } = useForm();

	return (
		<div>
			<form>
				<input 
					type="text" 
					placeholder="일정을 입력해주세요."
					{...register("ToDo")}
				/>
				<input
					type="text"
					placeholder="시작 시간을 입력해주세요."
					{...register("Start_Time")}	
				/>
			</form>
		</div>
	);
};
```

- `... (전개 구문)` 문법을 통해서 `register` 함수의 `return` 값을 <br/>
	`input` 요소에 추가할 수 있다.

#### `register(), option's`

- `register` 함수의 `option`은 다음과 같은 형태로 전달한다.

``` tsx
function App(){
	const {register} = useForm();
	
	return (
		<div>
			<form>
				<input 
					type="text"
					placeholder="금 일 일정"
					{...register("ToDo", {
						/*
							register option
							* object로 묶어서 전달한다.
						*/
						required: true, 
						minLength: 2,
						maxLength: 10
						//...
					})}
				/>
			</form>
		</div>
	);
}
```

- **`required`**
	- 해당 `input` 요소를 `required`, 무조건 값을 입력해야 하는 상태로 <br/>
		설정해주는 `register` 함수의 `option` 중 하나
	- `required`의 값으로 `true` 대신 임의의 문자열도 전달하는 것이 가능하다.

- **`minLength` / `maxLength`**
	- `input` 요소에 입력되는 문자열의 최소 / 최대 길이를 설정 가능

---
#### `watch`

- `useForm()`이 return하는 함수 중 하나
- `form` 입력 값의 변화를 관찰(watch)할 수 있게 해주는 함수
- `register` 함수를 통해 `input` 요소의 값을 입력할 수 있게 했으면 <br/>
	`watch` 함수는 입력한 값을 말 그대로 볼 수 있게 해주는 함수

``` tsx
function App(){
	const { register, watch } = useForm();
	console.log(watch());
	
	return (
		<div>
			<form>
				<input 
					type="text" 
					placeholder="일정을 입력해주세요."
					{...register("ToDo")}
				/>
				<input
					type="text"
					placeholder="시작 시간을 입력해주세요."
					{...register("Start_Time")}
				/>
				<button>일정 추가</button>
			</form>
		</div>
	);
};
```

---

#### `handleSubmit`

---

#### `formState`

