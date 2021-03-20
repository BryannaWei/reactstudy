import reactDom from "react-dom";
import React,{Component} from "react";

//类组件
// export default class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       message:'你好，李焕英'
//     }
//   }
//   render(){
//     return (
//       <div>
//         <h2>{this.state.message}</h2>
//       </div>
//     )
//   }
// }

//函数组件
//没有this对象 没有内部状态
export default function App (){
  return (
    <div>
      <h2>函数组件</h2>
    </div>
  )
}