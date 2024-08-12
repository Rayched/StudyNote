
- 예전에 배웠던 `react-router-dom` 복습하는 느낌으로 정리한 글
- `React` App에서 `router` 구현한 예제 (`react-router-dom ver6` 기준) 

``` tsx
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./routes/Home";
import About from "./routes/About";

function Router(){
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/about" element={<About />}/>
			</Routes>
		</BrowserRouter>
	);
}
```

---
### `browserRouter`

- `browserRouter`는 React App에서 Client Side Routing을 구현하기 위해서 사용되는 요소
- `HTML5`의 `History API`를 사용하여 UI를 업데이트한다.
- `router` 구현할 때 사용하는 `Routes`, `Route`, `Link` 등의 <br/>
	`react-router-dom` Component들을 감싸는 최상위 Component이다.



