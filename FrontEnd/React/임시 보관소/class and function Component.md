
### `class` Component와 `function` Component

- Nomad Coder의 무료 React 강의를 통해 React를 배웠을 때는
- `function` Component 밖에 몰랐고, 이후 나중에 `State`의 LifeCycle에 대해 알고 싶어서
- React 공식 문서를 읽다가 `class` Component라는 것이 있다는 것을 알게 됐다.

- 공식 문서를 읽어 보니 예전에는 `function` Component는 `state`를 사용할 수 없었다고
- 하는 것 같다.
- 아직 수박 겉핡기 식으로만 안 것이라 정확하지는 않지만
- 이와 관련된 문서들 (공식 문서나 아니면 블로그 글 등)을 읽고
- 내 나름대로 정리한 내용이다.

---

``` jsx
function Welcome(props){
	return <h4>Hello, {props.name}</h4>;
}

const root = ReactDO
```