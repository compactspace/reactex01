
// --------------------------- 클래스형 컴포넌트 ver --------------------------- //
// class Example01 extends React.Component {
//   state = {
//     text: "",
//   };

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <input name="text" onChange={this.handleChange}></input>
//         <button>전송</button>
//         <h3>{this.state.text}</h3>
//       </div>
//     );
//   }
// }

// --------------------------- 함수형 컴포넌트 ver --------------------------- //
import React, { useState } from "react";
function Example01() {

    const [state, setState] = useState({ text: "" });


     console.log("재랜더링확인")

    const handleChange = (e) => {
        setState({ [e.target.name]: e.target.value, });
    }




    const onClick = () => {
        const textbox = {
            inText: state.text,
        }

        const x = fetch("http://localhost:4000/text", {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(textbox),
        })
        x.then((res) => {
            console.log(res)
           let x=res.json();
           console.log(x);
           return x
          

        })
        .then((x) => {
            console.log(x);

            setState({
                text: x.text,
            });
        })
    }
    return (
        <div>
            <input name="text" onChange={handleChange}></input>
            <button onClick={onClick}>전송</button>
            <h3>{state.text}</h3>
        </div>
    );
}

export default Example01;