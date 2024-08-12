
``` tsx
//App.tsx
function App(){
	const [theme, setTheme] = useState(false);
	
	const onToggle = () => {
	  setTheme((isTheme) => !isTheme);
	}
	
	return (
	<>
	  <ThemeProvider theme={theme ? Theme.DarkTheme : Theme.LightTheme}>
		<GlobalStyle />
		<Router isTheme={theme} onToggle={onToggle}/>
		<ReactQueryDevtools initialIsOpen={false}/>
	  </ThemeProvider>
	</>
	);
}
```

- `Recoil` 설치하기 전, `App - Router - Coin - Chart/Price` 순으로
- `props` 사용해, `theme`의 상태를 순서대로 전달한 코드이다.

- 프로젝트에서 `Theme`과 관련된 모든 코드를 전부 지우고
- `index.tsx`에서 아래와 같이 `App` Component를 `<RecoilRoot>`로 감싸주자.

``` tsx
//index.tsx

root.render(
	<React.StrictMode>
		<RecoilRoot>
		  <QueryClientProvider client={queryClient}>
			  <App />
		  </QueryClientProvider>
		</RecoilRoot>
	</React.StrictMode>
);
```

- `<RecoilRoot>`로 `<App/>` 감싸준 후, `atoms.ts` 파일을 생성한다.

``` ts
export const isDarkAtom = atom({
	key: "isDark",
	default: false
})
```

- `Atom`에는 `key` 값과 `default` 값을 명시해줘야 한다.
- `key`의 값은 중복되지 않는 고유의 값이고, `default`는 말 그대로 기본 값이다.
- 이렇게 만든 `Atom`을 다른 Component에서 참조하기 위해서 사용하는 `Hook`이
- `useRecoilValue()` Hook이다.

``` tsx
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from './atoms';

function App(){
	//New
	const isDark = useRecoilValue(isDarkAtom);

	return (
		<>
			<ThemeProvider theme={isDark ? DarkTheme : LightTheme}>
				<GlobalStyle />
					<Router />
				<ReactQueryDevtools initialIsOpen={false}/>
			</ThemeProvider>
		</>
	);
}
```

- 위와 같이 코드를 업데이트하고
- `Atoms.ts`로 돌아와서 `isDarkAtom`의 값(`default`)을 `false → true` 바꾸면
- 이에 맞춰서 웹 페이지의 테마가 바뀐다. (Light → Dark)

- `props` 통해서 `Theme`의 상태를 하위 컴포넌트에 전달할 필요 없이
- `isDarkAtom`의 값을 바꾸는 것으로 웹 페이지의 테마가 일괄적으로 바뀐다.

- 방금 사용한 `useRecoilValue()`는 `Atom`의 값을 가져오는 Hook으로
- `Atom`의 값을 수정하는 기능을 가지고 있지 않다.

- 이제 `atom`의 값을 수정하는 방법을 알아보자.

---
#### `useSetRecoilState()`

- `useSetRecoilState()` Hook을 통해서 `Atom`의 값을 변경할 수 있다.
- 테마를 `Light/Dark` 전환하는 `<ToggleBtn />`의 코드를 업데이트를 진행

``` tsx
//ToggleBtn
//테마를 Light/Dark 전환하는 Toggle Button Component

const ToggleButton = styled.div``;

/*
* 기존 코드 (props 통해 순차적으로 state 전달했던 버전)
interface theme {
	isTheme: boolean|undefined;
	onToggle: Function;
}

function ToggleBtn({isTheme, onToggle}: theme){
	//isTheme => App 선언한 state: Theme (boolean)
	//onToggle => setTheme();

	const onClick = () => onToggle();

	return (
		<ToggleButton onClick={onClick}>
			{
				isTheme ? "Dark" : "Light"
			}
		</ToggleButton>
	);
}*/

//Recoil Install, use Atoms
function ToggleBtn(){
	const isDark = useRecoilValue(isDarkAtom);
	//isDarkAtom의 Recoil state 값을 반환
	//이를 변수 isDark 저장한다.
	
	const setDark = useSetRecoilState(isDarkAtom);
	//isDarkAtom의 state 변경하는 setDark 함수

	const onClick = () => {
		setDark((themes) => !themes);
	};

	return (
		<ToggleButton onClick={onClick}>
			{
				isDark ? "Dark" : "Light"
			}
		</ToggleButton>
	);
}
```

- 예전에 했던 것처럼 `App - Router - Coins/Coin - ToggleBtn` 순으로 <br/>
	`props` 통해 `theme`의 `state` 값을 전달 받을 필요 없이 
- `state`를 `Atom`에 보관해두고 이를 직접적으로 참조할 수 있다.
- 즉, 상위 Component (`App, Router, Coins/Coin`)를 거칠 필요가 없다는 것이다.

#### `useRecoilValue(state)`

- `useRecoilValue(state)` 함수는 `Recoil state` 반환하는 Hook으로
- Component가 `state`를 읽을 수만 있게 하고 싶을 때 추천되는 Hook이다.

- 해당 Hook을 통해서 컴포넌트에서 `state` 참조하는 모습은 <br/>
	어떻게 보면 `Recoil state`, `atom`을 구독한다고 볼 수 있다.

- 여기서 `atom`의 값이 변하게 되면, 이를 구독하는 모든 컴포넌트에서
- Re-rendering이 발생하게 된다. <br/>
	(`state` 값 변하면 Re-render되는 것과 같다...)

---

#### `useSetRecoilState(state)`

- `useSetRecoilState()` 함수는 `Recoil state`의 값을 업데이트하는 <br/>
	`setter` 함수, `setState()` 함수를 반환하는 Hook이다.
	
- 인자로 Callback 전달 받는데, 이를 통해서 `Recoil state, atom`의 값을 갱신한다.

``` ts
const setDark = useSetRecoilState(isDarkAtom);

const onClick = () => {
	setDark((themes) => !themes);
}
```


- `useRecoilValue()`, `useSetRecoilState()` Hook 통해서
- `Recoil state`를 읽기와 쓰기 작업을 개별적으로 수행했다면
- `useRecoilState()` Hook을 통해서 위의 두 작업을 한 번에 처리할 수 있다.

---

#### `useRecoilState(state)`

- `React`에서 `useState()` 비슷한 기능을 하는 Hook
- `state`가 Component 간에 공유될 수 있다는 차이점이 존재한다.

``` tsx
function ToggleButton(){
	const [isDark, setDark] = useRecoilState(isDarkAtom);

	const onClick = () => {
		setDark(!isDark);
	};

	return (
		<ToggleButton onClick={isDark}>
			{isDark ? "Dark" : "Light"}
		</ToggleButton>
	);
};
```

- `Toggle Button` 클릭하면 `isDarkAtom`의 값이 `false → true` 바뀌고
- 이를 구독하는 다른 컴포넌트(`<App/>...`)에서도 똑같이 변화가 발생된다.

- `<App/>` => `isDarkAtom` 값에 따라 `DarkTheme` 혹은 `LightTheme`  <br/>
	하위 컴포넌트에게 제공한다.
- 그리고 제공받은 `theme`에 맞춰서 배경색, 글자색 등이 변화된다.

- `props` 통해서 상위에서 하위 순으로 `state` 전달할 필요 없이
- `Theme state`가 필요한 Component에서만 `state, atom` 구독, 사용하고
- `isDarkAtom` 사용하는 다른 컴포넌트의 테마도 같이 변화된다.
---

