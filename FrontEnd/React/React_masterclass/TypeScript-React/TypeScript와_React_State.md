
## TypeScript와 `state`

- `React State`는 `useState` Hook을 통해서 생성할 수 있다.
- 이렇게 생성한 `state`의 값은 `setState()` 함수를 통해서 수정할 수 있고 <br/>
	`useState()` Hook으로 `state` 생성할 때 초기 값을 전달할 수 있다.
- `state` 생성 단계에서 초기 값을 설정하면 <br/>
	`state`의 `type`도 전달한 값의 타입을 따라간다.

``` jsx
function Sample(){
	const [Test, setTest] = useState("");
	//Test에 마우스를 갖다대면
	//해당 state가 string type이란 걸 알 수 있다.

	setTest(10);
	setTest(false);
	
	return (
		<div>Hello World</div>
	);
}
```

- 여기서 그냥 `JavaScript`를 사용하고 있다면
- `string` 타입인 `state`에 `number`, `boolean` 값을 `setTest` 함수를 통해서 <br/>
	전달해도 Error가 발생하지 않는다. (Dynamic Typing)

- 하지만 `TypeScript`를 사용하고 있다면, Error가 발생한다.

``` tsx
function Sample(){
	const [Test, setTest] = useState("");
	//type => string

	setTest(10); //Error
	setTest(false) //Error
	//'number' 형식의 인수는 'SetStateAction<string>' 형식의 
	//매개 변수에 할당될 수 없습니다.
	
	return (
		<div>Hello World</div>
	);
}
```

- `state` 생성할 때, Data Type은 초기 값과 동일한 `Type`을 따라가고 <br/>
	`TypeScript`는 강타입 언어이기 때문에, `state`와 다른 타입의 값을 전달 시 <br/>
	위와 같이 `Error Message`가 발생하는 것을 확인할 수 있다.
- 이를 통해서 `state` 생성 시 지정한 `type`이 계속 고정된다는 것을 파악할 수 있다.

---

### `state` 타입 지정 / `useState<Type>();`

- 위의 방식은 `TypeScript`의 타입 추론 기능에 의한 것으로 <br/>
	`state` 생성 시 전달한 초기 값의 타입을 통해, `state`의 타입을 추론한다.

- 물론 이 방식 외에도 `useState`로 `state`를 생성할 때 타입을 지정하는 것도 가능하다.

- `useState`뒤에 `<>`  추가하는 것으로 데이터 타입의 지정이 가능하다.

``` tsx
import { useState } from "react";

function Sample(){
	const [Test, setTest] = useState<number>();
	setTest(10);
	setTest("10"); //Error
	
	return (
		<div>Hello World</div>
	);
}
```

- `<>` 통해서 `state`의 타입을 지정할 때, 2개 이상의 타입을 지정하는 것도 가능하다.

``` tsx
import { useState } from "react";

function Sample(){
	const [Test, setTest] = useState<number|string>();
	setTest(10);
	setTest("10");
	//state의 타입이 number, string으로 지정됐기에
	//이번엔 Error가 발생하지 않는다.

	setTest(true); //Error
	//물론 지정하지 않는 타입 값을 전달하면 Error가 발생한다
	
	return (
		<div>Hello World</div>
	);
}
```




