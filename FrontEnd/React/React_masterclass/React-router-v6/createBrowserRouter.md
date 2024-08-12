
### `createBrowserRouter`

- 모든 React Router Web Project에 권장되는 Router
- `DOM History API` 사용해서 URL을 업데이트하고, 기록 Stack을 관리한다.
- 아래와 같은 문법을 사용해서 Router 구현할 수 있다.

``` tsx
import {createBrowserRouter} from "react-router-dom";

const Router = createBrowserRouter([
	path: "/",
	element: <Home />,
	children: [
		{
			path: "about",
			element: <About />
		},
		{
			path: "exam",
			element: <Exam />
		}
	]
]);
//react-route에게 router를 배열 객체로 묶어서 전달한다.
//path, element에 URL과 URL 입력 시 Rendering할 Component 명시한다.
//이외에도 'children' property가 존재하는데
//앞에서 지정한 Component의 하위 Component를 지정할 수 있다.
//이때 하위 component의 개수가 여러개라면 배열로 묶어서 전달한다.

//여기서 "/"는 일종의 부모 URL로
//children에 전달한 하위 component의 path, url 값을 자식 URL로 갖는다.
//그리고 부모 URL인 "/" 뒤에 붙는 url과 
//일치하는 path 값을 가진 자식 element를 rendering한다.
```


``` tsx
//Router.tsx
import {createBrowserRouter} from "react=-router-dom";

const Router = createBrowserRouter([
	path: "/",
	element: <Root />,
	children: [
		{
			path: "",
			element: <Home />
		},
		{
			path: "about",
			element: <About />
		}
	]
]);

export default Router;
```

- 여기서 `path: "/"`은 일종의 부모 URL이고
- `children`에 전달한 `path: "about"`은 자식 URL이라고 보면 된다.

- 처음 웹 페이지가 Rendering되면 `<Root />`가 Rendering이 된다.
- 이제 URL `about` 입력하면 `<About />` Component가 Rendering되도록 하고 싶다.
- `Root` Component 내부에 아래와 같이 `<Outlet />` Component를 추가하자.

``` tsx
//The_Root.tsx

import {Outlet} from "react-router-dom";

function Root(){
	return (
		<div>
			<Outlet />
		</div>
	);
}
```

- `<Outlet />`은 `<Root />`가 Rendering될 때, 입력된 URL 값에 따라 <br/>
	`Root`의 자식 요소 (`<Home />`, `<About />`) 등을 Rendering하는 <br/>
	`react-router-dom` Component이다.

- 웹 페이지에 접속 시, 제일 먼저 `<Root />`가 Rendering이 되는데
- 이때 `"/"` 뒤의 값이 `""`이므로 `<Home />`이 Rendering이 된다.
- 여기서 `/about` URL을 입력하면, `path` 값이 `"about"`인 자식 요소인 <br/>
	`<About />` Component가 Rendering된다.

- 쉽게 이야기 하자면, `<Outlet />` Component는 Root의 URL 값에 따라 <br/>
	동일한 URL 값, `path` 값을 가진 자식 요소로 대체된다고 보면 된다.

- 부모 `URL`인 `"/"`에 붙여진 URL이 없으면 (`""`) <br/>
	`<Outlet/>`은 Root의 자식 요소인 `<Home />` 대체된다. <br/>
	따라서 처음 웹 페이지 접속 시, `<Home />`이 Rendering이 된다.
	
- 그리고 부모 URL `"/"`에 `"about"`이 붙여지면, (`"/about"`) <br/>
	`<Outlet />`은 Root의 자식 요소인 `<About />` 대체된다.

---

