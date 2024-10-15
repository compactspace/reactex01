import React, {Component} from "react";
import sun from'./sun'

class Mom extends Component{

constructor(props){
super(props);
this.state = {
    Mom : 30,
   
};

}

render(){
const {Mom}=this.state
return(
<div>
    <h1>엄마나이:{Mom}</h1>
</div>
)

}
}
export default Mom;