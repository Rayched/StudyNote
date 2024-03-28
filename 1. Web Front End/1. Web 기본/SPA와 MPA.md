
### Single Page Application, SPA

- '**하나의 페이지 Single Page**'로 구성된 Application
- SPA는 Client Side Rendering, 통칭 CSR 방식으로 Rendering된다.
- 처음 웹 페이지에 접속하면, 딱 한번만 `HTML`, `CSS`, `JavaScript`와 같은 Resource
	로딩하고 이후에 데이터를 받아올 때만 서버와 통신을 한다.
- 첫 요청(Request) 시 딱 한 페이지만 불러오고, 페이지 이동 시
	기존 페이지의 내부를 수정해서 보여주는 방식
- `Github`, `Facebook`, `Netflix` (SPA 예시)
- SPA는 전체 페이지를 새로고침 하지 않고, 기존 페이지에서 필요한 부분만
	수정해서 자연스러운 페이지 이동을 사용자 경험(UX)으로 제공한다.
- 다만, SPA는 초기 구동 시 필요한 `JavaScript` 파일을 Bundling해서
	한 번에 받기 때문에 초기 구동 속도가 느린 편이다.
	
- `검색 엔진 최적화 (Search Engine Optimization, SEO)`가 어렵다.
	- `Client Side Rendering` 방식으로 개발된 SPA의 소스는
		검색 엔진 입장에서 아래와 같이 보인다.
		
``` html
<html>
	<head>
		<link href="app.css" type="text/css" rel="stylesheet"/>
		<title>SPA Example</title>
	</head>
	<body>
		<div id="app"></div>
		<script src="app.js"></script>
	</body>
</html>
```

- 이런 식의 구조를 가지고 있기 때문에 검색 엔진이 색인을 할 만한 콘텐츠가
	존재하지 않기에 검색 엔진 최적화가 힘들어진다.
- 이러한 문제점은 CSR 방식이 아닌, Server Side Rendering 방식으로
	SPA 개발하면 해결할 수 있다.

---

### Multiple Page Application

- 여러 개의 페이지로 구성된 Application
- MPA는 Server Side Rendering, SSR 방식으로 Rendering된다.
- 처음 웹 페이지에 접속했을 때, 서버로부터 이미 Rendering이 완료된 페이지
	완성된 형태의 HTML 파일을 받아와서 바로 웹 페이지 화면에 표시하기 때문에
	초기 구동 속도가 빠른 편이다.
- 새로운 페이지를 요청하면 서버에서 Rendering된 Resource 받아온 다음
	웹 페이지 화면을 Re-rendering해서 요청 받은 페이지를 표시한다.
	(새로운 페이지 요청 시마다 Re-loading 발생한다.)
- `SPA`  전에 만들어진 웹 페이지들이 MPA에 해당된다.
- 페이지 로딩 시, 서버로부터 완성된 형태의 `HTML` 파일을 전달 받는데
	이렇게 전달 받은 페이지는 검색엔진이 Crawling하기 적합하다.
	즉, 검색 엔진 최적화가 쉽다는 것이다.

```
Crawling 크롤링

웹 상의 정보들을 탐색하고 수집하는 작업
개인 혹은 단체에서 필요한 데이터가 있는 웹 페이지의 구조를 분석 및 파악해서
그대로 긁어오는, 가져오는 것을 말한다.
```

```
Search Engine Optimization 검색 엔진 최적화

검색 창에 임의의 키워드를 검색했을 때, 해당 웹 페이지의 검색 엔진이
입력한 키워드와 관련된 자료를 수집하고 관련된 내용을 가진 
웹 사이트나 웹 페이지를 상위 검색 결과로 노출하는 과정

검색 결과가 더 잘 보이도록 최적화하는 과정
```

---

### 📔 Reference

- [SPA vs MPA와 SSR vs CSR 장단점 뜻정리](https://hanamon.kr/spa-mpa-ssr-csr-%EC%9E%A5%EB%8B%A8%EC%A0%90-%EB%9C%BB%EC%A0%95%EB%A6%AC/)
- [아하 프론트 개발기(1) — SPA와 SSR의 장단점 그리고 Nuxt.js](https://medium.com/aha-official/%EC%95%84%ED%95%98-%ED%94%84%EB%A1%A0%ED%8A%B8-%EA%B0%9C%EB%B0%9C%EA%B8%B0-1-spa%EC%99%80-ssr%EC%9D%98-%EC%9E%A5%EB%8B%A8%EC%A0%90-%EA%B7%B8%EB%A6%AC%EA%B3%A0-nuxt-js-cafdc3ac2053)
- [SPA(single page application) vs MPA(multiple page application)](https://blog.naver.com/sthwin/221214109560)

- **후속 편 == "`Client Side Rendering` & `Server Side Rendering`"**
---
