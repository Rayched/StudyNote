### `Next.js` 개발 환경 설정 (수동 설치)

#### `npm` 설치

``` shell
npm init -y
# Project 패키지 내부에 package.json 추가
# 'npm init'만 입력하면 아래 양식에 매번 입력을 해줘야함.
# '-y' 추가하면, 이런 과정을 거치지 않고
# empty 값을 가진 package.json이 생성됨
```

- `npm` : `Node Pakage Manager`의 약어
	- `Node Package` 관리해주는 틀
	- 관리하는 파일 == `package.json`
- 위의 명령어를 입력했다면, `package.json` 파일이 생성된다.
- 해당 파일에서 `license`를 아래와 같이 수정 (ISC → MIT)

``` js
{
  "name": "exam",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "MIT"
  /**
  "license": "ISC" 
  'license'를 ISC에서 MIT로 수정
  */
}
```

---
#### `React`, `ReactDOM`, `NextJS` 설치

``` shell
npm install react@latest react-dom@latest next@latest
```

- 현재 프로젝트 패키지 폴더에 `React`, `ReactDOM`, `Next` 설치 <br/>
	(설치 완료 여부는 `/node_modules` 확인 가능)
- `package.json`의 `"script"`에 아래 코드를 추가한다.

``` js
"script": {
	//"test" : "echo \"Error: no test specified\" && exit 1"
	"dev": "next dev"
},
```

- `next dev` :  `Next.js` Project 개발 모드 (Development mode) 실행
- `npm run dev` 명령어를 입력하면 `Next.js` Project가 개발 모드로 실행된다.

---

#### `Next.js` 테스트 코드 실행

- `Project` 폴더 내부에 `/app` 폴더 생성하고 <br/>
	해당 폴더 내부에 `page.jsx (page.tsx)` 파일을 생성한다.
- 아래와 같이 임의의 `react-component` 생성한 다음 <br/>
	`npm run dev` 명령어를 입력해서 `Next.js` Project 실행해보자. 

``` jsx
export default function Test(){
	return <h3>Hello World</h3>;
}
```

- 잠깐의 시간이 지나면, `Next.js` Project가 실행된다.
- 처음 웹 페이지로 들어갈 때, `layout.js` 파일이 없다면 <br/>
	해당 파일을 생성했다는 메시지를 Console에서 확인할 수 있다.
- 별도로 `react`, `react-dom` import하지 않은 상태 임에도 <br/>
	프로젝트가 실행되는 것을 확인 할 수 있다.
	
- `next.js` Project 실행 과정 정리 (Test Code 기준)

```
1. `npm run dev (next dev)` 명령어를 입력, next.js 프로젝트가 실행된다.
2. `next.js`는 '/app' 폴더 내부의 'page.jsx'라는 이름의 파일을 찾는다.
3. 해당 파일을 찾으면, 파일 내부의 export default 키워드가 붙은
	react-component를 찾아서 해당 Component를 Rendering한다.
4. 이때 /app 폴더 내부에 'layout.js' 파일이 없으면
	해당 파일도 같이 생성한다.
```

