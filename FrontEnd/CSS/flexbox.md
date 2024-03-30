
### `flexbox`

- 요소 간 공간 배분, 정렬 기능을 제공하기 위한 1D Layout Model
- Layout 다룰 때 한 번에 하나의 차원 (행 row or 열 column) 만을 다루는 특성 <br/>
	▶ **"`flex box` == 1 차원 모델"** 이라고 부른다.
- `flexbox` == `flex Container` (내부에 하위 요소를 포함하기 때문)
- `Container Element`에 `display: flex` 적용해야 한다.
- Default Value = row (행) 방향으로 하위 요소 배치함 (가로 배치)

``` html
<style>
	.Container {
		display: flex; 
		/*
			Container 요소에 flexbox 적용
			Container의 하위 요소 전체가 row(행) 방향으로 배치된다.
			적용 전: 세로 / 적용 후: 가로
		*/
	}
</style>

<div class="Container">
	<div class="item">One</div>
	<div class="item">Two</div>
	<div class="item">Three</div>
</div>
```

- `Container Element`에 `display: flex` 적용되면
- 하위 요소가 가진 기본 `margin value` 무시하고, 지정한 방향대로 요소를 배치함.
---

### `flexbox` - `main-axis` & `cross-axis`


![flexbox의 main-axis, cross-axis](/FrontEnd/CSS/ref_img/flexbox.png)


- 사용자가 목적에 따라 `main-axis`와 `cross-axis` 바꿀 수 있다.
- 위의 이미지에서 `flexbox`의 Default 값은 `row (행) 방향`이므로 <br/>
	`main-axis` 또한 `row (행)`, x축 방향으로 설정된 상태이다.
- `flexbox`의 기본 방향을 `column (열)` 방향으로 지정하면 <br/>
	`main-axis` 또한 `column (열)`, y축 방향으로 바뀌게 되고 <br/>
	이때 `cross-axis`는 `row (행)`, x축 방향이 된다.
- `main-axis`에 따라 `flexbox`의 하위 요소들의 배치 방향도 달라진다.

---
### `flex-direction`

- `flexbox` 하위 `Element` 배치할 때 `main-axis` 지정할 수 있는 속성
- `Element` 배치할 방향을 정하는 속성 (가로 / 세로, 정방향 / 역방향)
- **사용할 수 있는 속성 값**
	- `row`: 기본 값, 하위 요소를 가로 방향으로 배치 
	- `row-reverse`: 하위 요소를 가로로 배치하되, 콘텐츠 방향과 반대로 배치
	- `column`: 하위 요소를 세로 방향으로 배치
	- `column-reverse`: 하위 요소를 세로로 배치하되, 콘텐츠 방향과 반대로 배치
	
``` html
<style>
	.Container {
		display: flex;
		
		/*New*/
		flex-direction: row; 
		/*기본 값, 요소 가로로 배치*/
		
		flex-direction: row-reverse; 
		/*요소 가로로, 콘텐츠 진행방향의 역방향으로 배치*/
		
		flex-direction: column; 
		/*요소 세로로 배치*/
		
		flex-direction: column-reverse;
		/*요소 세로로, 콘텐츠 진행방향의 역방향으로 배치*/
	}
</style>

<div class="Container">
	<div class="item">One</div>
	<div class="item">Two</div>
	<div class="item">Three</div>
</div>
```

---

#### 📔 Reference

- **[입문자를 위한 CSS 기초 강의 / Inflearn 유노코딩](https://inf.run/xAnx)**
- **[공식 문서 / CSS](https://developer.mozilla.org/ko/docs/Web/CSS/flex)**

