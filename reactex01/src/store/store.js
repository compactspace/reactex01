
import { createSlice, configureStore } from '@reduxjs/toolkit'

let test = createSlice({
    name: 'state이름~~',
    initialState: '개병신',
})

let cart = createSlice({
    name: 'cart',
    initialState: [
        { id: 1, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 }
    ]

})


let user = createSlice({
    name: 'user',
    initialState: 1,
    //state 수정해주는 함수 만들자.
    // 매개변수 state 는 기존의 state 를 의미하게 된다.
    reducers: {
        changeName(state) {
            return 1 + state;
        },
    }

});

//아마 user.actions 의 리턴값이 객체 형식으로
// {key : 내가 만든 함수 형식}
// 인데 구조분해 뭐시기로 가져오는듯??
export const { changeName } = user.actions;

let authtoken = createSlice({
    name: 'authtoken',
    initialState: false,   
    reducers: {
        changeauthtoken(state,action) {
        // console.log(action.payload)
            return action.payload;
        },
    }

});
export const {changeauthtoken} =authtoken.actions;


// 만약 스테이트가 배열인경우의 state변경은 우찌하냐?
// state를 직접 수정하는 문법을 사용해도 잘 변경되는 이유는
// Immer.js 라이브러리가 state 사본을 하나 더 생성해준 덕분인데
// Redux 설치하면 같이 설치되기 때문

//즉 깊은복사 쌩쇼 할필요없다는 말인듯하다.
let arr = createSlice({
    name: 'arr',
    initialState: [1, 2, 3, 4, 5],

    reducers: {
        changearr(state) {
            return ['5', '4', '3', '2', '1'];
        },
    }

});

export const { changearr } = arr.actions;

// 만약 스테이트가 배열인경우의 state변경은 우찌하냐?
// state를 직접 수정하는 문법을 사용해도 잘 변경되는 이유는
// Immer.js 라이브러리가 state 사본을 하나 더 생성해준 덕분인데
// Redux 설치하면 같이 설치되기 때문

//즉 깊은복사 쌩쇼 할필요없다는 말인듯하다.

//또한편 그냥 reduc가 아니고

// 💡 Redux-Toolkit애서 Reducer와 Action
// 원래 Redux에서는 Action과 Reducer를 개별적으로 분리하여 사용하지만 
// Redux-Toolkit에서는 

// 아래처럼 createSlice를 사용하여 reducer와 action을 함께 정의한다.

// 코드가 간결해지고 유지보수성을 향상시킨다.




let obj = createSlice({
    name: 'arr',
    initialState: { x1: "씨발1", x2: "씨발2" },

    reducers: {
        //changeobj 에
        // 마우스 오버해보면 state 는 대충 스트링 스트링
        // action 는 객체로 playod 라는 속성과, type속성 을 가지는 객체임
        //또 자체적으로 뭐 하는듯
        changeobj(state, action) {
            console.log(action.payload);
            // console.log(action.type);
            return { x1: "개병신", x2: "상병신" }
        },
    }

});




let mycart = createSlice({
    name: "mycart",
    initialState: [{ 이름: "신발1", 가격: 3000, 수량: 3 }, { 이름: "신발2", 가격: 3000, 수량: 4 }, { 이름: "바지", 가격: 3000, 수량: 1 }],

    reducers: {

        // Action 의 playload 속성이 any 라 그냥 배열로 받아옴
        Changeup(state, Action) {
            console.log(state)
            // console.log(Action.payload)
            // console.log(state[(Action.payload[1])].이름)
            state[(Action.payload[1])].수량 += 1;

            return state;
        }
        ,
        Changedown(state, Action) {
            console.log(Action.payload)
            console.log(state[(Action.payload[1])].이름)
            state[(Action.payload[1])].수량 -= 1;
        }
        ,
        Changedel(state, Action) {
            console.log(Action.payload)
            // console.log(state[(Action.payload[0])])


            //    console.log(state.splice(0))
            // console.log(state.splice(1))
            //    console.log(state.splice(2))

            console.log(state.splice(Action.payload, 1))



        }
        ,
        newproduct(state, Action) {
            var checks;
        //요건 장바구니 비운뒤라 이렇게 따로 빼줘야함
        console.log(state)
        console.log(state.length)  
            if(state.length==0){
                console.log(`다삭제후 값은 `)        
                checks = true;
          }        

for(let k=0; k<state.length; k++){

  

    console.log(` 인덱스 ${k} state[k].이름 ${state[k].이름}  Action.payload[0].이름 ${Action.payload[0].이름}  state[k].이름.includes(Action.payload[0].이름) ${state[k].이름.includes(Action.payload[0].이름)}`);
    if (state[k].이름.includes(Action.payload[0].이름)) {
        // console.log(obj.이름.includes(Action.payload[0].이름))
        state[k].수량+=1;
        checks = false;
         console.log(" 이프 check=>>"+checks);
        break;
      
    }
    else {
        // console.log(obj.이름.includes(Action.payload[0].이름))
        checks = true;
        
      //  console.log(" 엘스 check=>>"+check);
        
    }

   
}

            // state.map((obj) => {                
            // //   console.log(obj.이름.includes(Action.payload[0].이름))
            // //    console.log(Action.payload[0].이름)
            // //     if (obj.이름.includes(Action.payload[0].이름)) {
            // //         // console.log(obj.이름.includes(Action.payload[0].이름))
            // //        obj.수량+=1;
            // //         check = false;
            // //         console.log(" 이프 check=>>"+check);
            // //         return ;
            // //     }
            // //     else {
            // //         // console.log(obj.이름.includes(Action.payload[0].이름))
            // //         check = true;
            // //         console.log(" 엘스 check=>>"+check);
            // //      return check;   
            // //     }

            // })

             console.log(" 반복문 탈출후 check=>>"+checks);

            if(checks){
                let add={}
              Object.keys(Action.payload[0]).map((keys)=>{
                // console.log(Action.payload[0])
                // console.log(Action.payload[0][keys])
                add[keys]=Action.payload[0][keys]

              })

              state.push(add)
            }else{

            }





        }


    }

})

export const { Changeup, Changedown, Changedel, newproduct } = mycart.actions;



export const { changeobj } = obj.actions;


export default configureStore({
    reducer: {
        authtoken: authtoken.reducer,
        statetest1: test.reducer,
        cart: cart.reducer,
        user: user.reducer,
        arr: arr.reducer,
        obj: obj.reducer,
        mycart: mycart.reducer
    }
})




// 