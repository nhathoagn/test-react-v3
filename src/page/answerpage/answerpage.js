import React,{useState,useEffect} from "react";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import './answerpage.css'
import ResultComponent from "../../components/result/result";
import { changeScore, saveResult } from "../../store/slices/questionSlide/questionSlide";
import { getNextKeyDef } from "@testing-library/user-event/dist/keyboard/getNextKeyDef";
import { Link } from "react-router-dom";
const AnswerPage = () => {
  const dispatch = useDispatch()
    const totalPlayer = useSelector(state => state.player.username)
    const totalRound = useSelector(state => state.question.totalRound)
    const roundCount = Array(totalRound).fill('')
    const answerAPI = useSelector(state => state.question.answerApi)
    const answerUser = useSelector(state => state.question.answerUser)
    const arr = []
    console.log("answerAPI",answerAPI);
    console.log("answerUser",answerUser);
    const [score,setScore] = useState(0)
   const Check = () => {
    
    answerAPI.filter( (data,index) => {
      answerUser.map( (value,key) =>{
        if((data.answers === value.answer) && (data.round === value.round)){
          dispatch(saveResult({answer: value.answer,currentUser: value.currentUser,image: data.image,round: data.round}))
        }
      })
    })
   }
    useEffect( ()=>{ 
      Check()
      console.log("aaaaaawdsd",arr);
    },[])
   
  return (
    <div className="container-answer">
      <div className="answer-header">
        <div className="answer-header-left">
          <h2>YES NO WFT GAME</h2>
        </div>
        <div className="answer-header-right">
          <div className="btn-good-luck">
            <Button type="primary">Good Luck</Button>
          </div>
        </div>
      </div>
      <div className="total-player">
        <p className="player-name">
          Player:
          {totalPlayer.map((data) => {
            return (
              <p
              >
                {" "}
                {data.username} ,
              </p>
            );
          })}
        </p>
      </div>
      <div className="answer-content">
         {
            roundCount.map( (value,index)=>{
                return (
                    <ResultComponent   index={index}/>
                )
            })
         }
      </div>
      <div className="summary">
        <Link to={"/finalresultpage"}>
          <Button type="primary">
              Summary
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default AnswerPage;
