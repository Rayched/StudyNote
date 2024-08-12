
#### `routing in React`

- 기존 방식, `React-router` 사용해서 `React App`에서 `routing` 구현함.
- URL 지정하고, 특정 Component Rendering 요청하는 방식

``` jsx
<Router>
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/movie/:id" element={<MovieDetail />}/>
	</Routes>
</Router>
```

- URL 주소 뒤에 `:id` 붙여서, 동적으로 해당되는 Component Rendering <br/>
	=> Dynamic URL

- 기존 방식은 'A' URL에는 `<A />`, 'B' URL에는 `<B />` Rendering하도록 지정하였음.
- 수동적인 방식으로 Routing 구현하였음.
- `Next.js`에선 위의 방식으로 Routing 구현하지 않음.

---
#### `Routing in NextJS`

```
/app
 - layout.js
 - page.jsx
```

- **`root segment`** : 사용자가 제일 먼저 보게 될 페이지에 해당된다.

- `/app` 내부에 새로 만들 페이지를 담아둘 폴더 생성 (`/app/about-us`)
- `Next.js`에게 방금 생성한 폴더가 새로운 페이지가 될 수 있다고 알려주는 것
- `/about-us` 폴더 내부에 `page.jsx` 파일 생성
- 페이지 폴더에는 `page.jsx / page.tsx` 파일과 같이 웹 화면에 Render할 <br/>
	페이지에 해당되는 파일이 존재해야만 한다.
- 만약 페이지 폴더 내부에 Rendering할 파일이 없다면 아래와 같은 Error 발생함.

```
404 / This page could not be found.
```

- URL 입력 시, Rendering할 `page` 파일이 존재하지 않아서 발생하는 Error

---

#### 정리

- `Next.js`는 입력한 URL에 따라 특정 Component Rendering하라고 <br/>
	수동으로 명시할 필요가 없음.
- 페이지 폴더를 만들고, 해당 폴더 내부에 웹 페이지 화면에 <br/>
	Rendering할  `page` 파일만 만들어두면 된다.
- 사용자가 URL 입력 시, 입력한 URL에 맞는 <br/>
	Page Folder 내부의 `page` 파일을 Rendering해서 보여준다.
