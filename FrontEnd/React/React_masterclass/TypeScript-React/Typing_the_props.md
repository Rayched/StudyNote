## `TypeScript` 사용해서 `props`에 `required` 설정하기

``` tsx
//Circle.tsx
import styled from "styled-components";

const Container = styled.div``;

function Circle(){
	return (
		<Container></Container>
	);
}

export default Circle;
```

- 위와 같이 `Circle`이라는 React Component를 만들고 <br/>
	이를 `App.tsx`에서 해당 컴포넌트를 호출하였다.

- 이제 여기서 `<Circle>` Component에게 `bgColor`라는 `prop`을 추가하고 <br/>
	해당 `prop`에 무조건 데이터를 전달하게끔 설정하려고 한다.
	
- 지금까지 배웠던 React 관련 지식을 활용하면 <br/>
	`prop-types` 활용, `bgColor`를 `required`로 설정하는 것으로 해결할 수 있다.

- 물론 꼭 `prop-types` 활용할 필요는 없다.
- `TypeScript`를 통해서 `bgColor` prop을 `required`로 설정할 수 있기 때문이다.

---

- `prop-types` 통해서 특정 `prop`에 데이터가 전달됐는지 유무를 판별할 수 있다.
- 다만 그 유무를 코드 실행 전이 아니라, 코드가 실행되는 상태에서 <br/>
	브라우저의 Console에서 확인하는 형태이다.
- `TypeScript` 사용하지 않는다면 상관 없는 이야기이겠지만 <br/>
	`TypeScript` 사용한다면 상관 없는 이야기가 아니다.

- `TypeScript`는 코드가 실행되기 전에 Error를 확인할 수 있기 때문에 <br/>
	굳이 코드 실행 후에 Error를 알려주는 `prop-types`를 쓸 필요가 없다.

- 자체 기능 만으로도 `prop-types`과 유사한 기능을 구현할 수 있다.

- 예제 코드를 보면서 확인해보자.

``` tsx
//Circle.tsx
import styled from "styled-components";

const Container = styled.div``;

interface CircleProp {
	bgColor: string;
};

function Circle({bgColor} : CircleProp){
	return (
		<Container></Container>
	);
}

export default Circle;

/**
	* 'bgColor' prop 추가, App.tsx에서
	* 'bgColor' prop에 "blue", "yellow" 전달함 (색상)

	* 여기서 bgColor prop의 타입과 관련된 경고 발생함.
	  ('any' 타입일 수도 있다는 경고)

	* TypeScript에서 객체의 타입을 지정할 때
	* 'type'이나 'interface' 키워드를 이용해서
	* 사용자 정의 타입을 만들고, 이를 객체의 타입으로 지정한다.
	* 이때 객체 property의 타입도 지정하는 것이 가능하고
	* 타입이 지정된 property는 무조건 데이터를 전달해줘야 한다.

	* CircleProp이라는 인터페이스, 사용자 정의 타입을 만들고
	* bgColor라는 prop의 타입을 string으로 지정했다.

	* 이후 Circle Component의 인자로 전달한 객체의 타입을
	* CircleProp으로 지정하면 bgColor의 type과 관련된 경고가 사라진다.
*/

//App.tsx
//<Circle bgColor="blue"/>
//<Circle bgColor="yellow"/>

//Circle Component 두 번 호출,
//bgColor prop에 'blue', 'yellow'를 전달함.
```

- 여기서 `CircleProps` Interface에 임의의 `prop`을 추가하면 <br/>
	`App.tsx`에서 해당 `prop`에 데이터를 전달하지 않았다는 경고가 발생한다.

``` tsx
import styled from "styled-components";

const Container = styled.div``;

interface CircleProp {
	bgColor: string;
	//New
	TestProps: number;
};

function Circle({bgColor} : CircleProp){
	return (
		<Container></Container>
	);
}

export default Circle;

/*
	App.tsx

	function App(){
		return (
			<div>
				<Circle bgColor="blue"/>
				<Circle bgColor="yellow"/>
				//Error
				//Circle Component에서 객체의 타입으로 CircleProp을 지정
				//CircleProp의 bgColor, TestProps 두 개의 property에
				//값을 전달해줘야만 한다.
			</div>
		);
	}
*/
```

---

- 이제 `Container` Component에 `bgColor` props의 값을 전달하고 <br/>
	전달한 값을 `background-color` 속성의 값으로 설정해보자.

``` tsx
import styled from "styled-components";

const Container = styled.div`
	width: 100px;
	height: 100px;
	border-radius: 50px;
	
	background-color: ${(props) => props.bgColor};
`;

interface CircleProp {
	bgColor: string;
};

function Circle({bgColor} : CircleProp){
	return (
		//<Container/>
		<Container bgColor={bgColor}/>
	);
}

export default Circle;
```

- 물론 `<div>` 요소에는 `bgColor` 속성이 존재하지 않기 때문에 Error가 발생한다.
- 이를 위해서 임의로 `ContainerProps`라는 Interface를 만들어주자.

- 아래와 같은 형식으로 `interface`를 `styled-components`의 타입으로 지정할 수 있다.
- `const Exam = styled.div'<interface> or <type>'`

``` tsx
//Circle.tsx

type ContainerProps = {
	bgColor: string
}

const Container = styled.div<ContainerProps>`
	width: 100px;
	height: 100px;
	border-radius: 50px;
	
	background-color: ${(props) => props.bgColor};
`;
```

-  `Container`의 타입을 `ContainerProps`로 지정하면 <br/>
	해당 `type`에는 `bgColor` 속성이 존재하므로 Error가 발생하지 않는다.

- 여기서 `interface`에 중복되는 `prop`은 `상속 extends` 통해서 <br/>
	중복을 줄일 수 있다.

- 위의 예제에서 `ContainerProps`와 `CircleProp`은 이름만 다르고 <br/>
	알맹이는 같은, 사실상 동일한 `interface`이므로 둘 중 하나를 삭제하고 <br/>
	Component의 타입을 통일해도 문제가 발생하지 않는다.

``` tsx
import styled from "styled-components";

interface CircleProps {
	bgColor: string;
}

const Container = styled.div<CircleProps>`
	width: 100px;
	height: 100px;
	border-radius: 50px;
	background-color: ${(props) => props.bgColor};
`;

function Circle({bgColor}: CircleProps){
	return (
		<Container bgColor={bgColor}/>
	);
};

export default Circle;
```

<img src="refImgs/Circle_Component.png">

**▲ Circle Component 예제 실행 중...**

---
