








// 온체인지 함수로 인풋창에 입력한걸 가져와보는 연습임
export const InputeEx01 =()=>{

return(<>

<h1>인풋창테스트</h1>

{/* 이것도 자주 헷갈리는데 이벤트 함수를 얼때는 반드시 매개변수 자리에 e 또는 아무거나  넣어줘야함. */}
{/* this 는 바인딩 않됨!! */}
<input onChange={(e)=>{
console.log(e)
console.log(e.target)
console.log(e.target.value)

}}></input>
</>);


}