import React  from "react";
import './result.css'
import Round from '../round/round';
import { useSelector } from 'react-redux';
const ResultComponent = (props) => {
    const {index} = props
    console.log("day la props resultcomponent",props);
    const data = useSelector(state => state.question.arr)
    console.log("day roi",data);
  return(
    <div className="container-result">
        <div className="result-round">
            <h2>Round:{index + 1}</h2>
        </div>
       {data.map( (value,key)=>{
        if(value.round === index + 1){
           return (
            <div className="result-content" key={key}>
        <div className="result-content-left">
             <div className="content-result-top">
                 <p className="result">Result:{value.answer}</p>
             </div>
             <div className="content-result-bottom">
                 <p className="winner">
                     Winner: {value.currentUser}
                 </p>
             </div>
         </div>
         <div className="result-content-right">
             <img src={value.image}/>
         </div>
        </div>
           )
        }
        
       })}
    </div>
  )
}
export default ResultComponent