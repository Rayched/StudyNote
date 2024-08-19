
## 개요

- `React`에서 `state`는 기본적으로 `Local state`이다.
- 즉, `state` 선언한 Component에서만 사용할 수 있고
- 다른 컴포넌트에서 `state` 사용하려면 `props` 통해서 `state` 전달해줘야 했었다.

- 상위 컴포넌트에서 하위 컴포넌트로 `props` 통해서 `state` 전달하는 과정에서
- 중간에 다른 컴포넌트도 거쳐야 한다.
- 전달하는 `state` 값을 중간에 걸친 컴포넌트에서 사용하지 않는다고 해도 말이다.
- 

``` jsx
//App
import {LightTheme, DarkTheme} from "themes";
import {useState} from "react";

function App(){
	const [isDark, setDark] = useState(false);
	
	return (
		<ThemeProvider theme={isDark ? DarkTheme : LightTheme}>
			<Home isDark={isDark} setDark={setDark}/>
		</ThemeProvider>
	);
};
```

- 위의 예제에서 `theme` 상태를 관리하는 `isDark state` 만들고
- `state`의 값에 따라 `LightTheme/DarkTheme` 둘 중 하나를 적용한다.
- 그리고 해당 `state` 값을 `props` 통해서 `<Home />`에게 전달한다.

``` jsx
//Home
import styled from "styled-components";

const Container = styled.div`
	color: ${(props) => props.theme.textColor};
	background-color: ${(props) => props.theme.bgColor};
	font-weight: bold;
`;

function Home({isDark, setDark}){
	return (
		<Container>
			<h2>Before use Recoil Exam</h2>
			<p>Recoil 사용하기 전 예제</p>
			<p>props 통해서 isDark state 값을 전달받음</p>
			<ToggleBtn isDark={isDark} setDark={setDark} />
		</Container>
	);
};
```

- `<App/>`을 통해서 `props: isDark, setDark` 전달 받고
- 이를 다시 `<ToggleBtn/>`에게 `props`로 전달한다.

``` jsx
import styled from "styled-components";

const Buttons = styled.button`
	width: 100px;
	height: 50px
	border: 2px solid ${(props) => props.theme.textColor};
	color: inherit;
	background-color: inherit;

	font-weight: bold;
`;

function ToggleBtn({isDark, setDark}){
	const onToggle = () => {
		setDark(!isDark);
	}
	
	return (
		<div>
			<Buttons onClick={onToggle}>
				{isDark ? "Dark" : "Light"}
			</Buttons>
		</div>
	);
}
```

- `props` 통해서 `isDark, setDark` 전달 받은 `<ToggleBtn />`에서
- 버튼을 클릭하면, `isDark`의 값을 변경한다. (`false - true`)
- 그리고 `isDark state`의 값이 바뀜에 따라 `theme`도 바뀌게 된다.

- 토글 버튼을 통해서 테마를 `Light/Dark` 전환하는 간단한 예제이다.

- 위의 예제에서 `'isDark' state` 사용하는 것은 `<App/>`과 `<ToggleBtn/>`
- 두 개 뿐이고 중간에 껴있는 `<Home/>`에서는 해당 `state` 사용하지 않는다.

- `state` 값이 `props` 통해서 `App - Home - ToggleBtn`순으로 전달됐는데
- `state` 사용하지 않지만 중간에 껴있다는 이유로
- 관련 없는 컴포넌트에서도 `props`로 `state` 값을 하위 컴포넌트에게 전달해줘야 한다.

- 이제 위의 예제에서 `Recoil` 설치하고, 이에 맞춰서 코드를 업데이트 해보자.

---

### `Recoil install and Code Update`

``` shell
npm install recoil
```

- 위의 명령어를 입력해서 `recoil`을 현재 Project에 설치해준다.
- 그리고 최상위 Component를 `<RecoilRoot>`로 감싸준다.
- 이를 통해서 `recoil`을 사용할 수 있다.

- `atoms.ts` 파일을 만들고, 아래와 같이 `isDarkAtom` 변수를 생성한다.

``` ts
//atoms.ts
const isDarkAtom = atoms({
	key: "isDark",
	default: false
});
```

