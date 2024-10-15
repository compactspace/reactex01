// 클래스형 컴포넌트 기술방법


import React, {Component} from 'react'

class Counter extends Component {
 
    
    //컴포넌트에서 state를 설정할 때는 다음과 같이
    //constructor 메서드를 작성하여 설정한다. 
    //constructor는 클래스형 컴포넌트의 생성자 메서드인데,
    //이 때 반드시 super(props)를 호출해 주어야 한다. 
    constructor(props) {
     
        //현재 클래스형 컴포넌트가 상속받고 있는 
        //리액트의 Component 클래스가 지닌 생성자 함수를 호출해 준다.
        super(props);
        //state의 초깃값 설정하기 
        console.log(this)
        this.state = {
            increaseNum : 0,
            decreaseNum : 100
        };
    }

    render(){   
       
        const {increaseNum, decreaseNum} = this.state;
        return(
            <div>
                <h1>증가하는 값 : {increaseNum}</h1>
                <h2>감소하는 값 : {decreaseNum}</h2>
                <button
                    onClick={()=>{
                        //this.setState를 사용하여
                        //state에 새로운 값을 넣을 수 있다. 
                        this.setState({
                            increaseNum : increaseNum + 1,
                            decreaseNum : decreaseNum - 1
                        });
                    }}
                >
                    Increase / Decrease
                </button>
            </div>
        );
    }
}

export default Counter;