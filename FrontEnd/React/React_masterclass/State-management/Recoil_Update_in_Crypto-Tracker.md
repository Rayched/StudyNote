
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
- 


