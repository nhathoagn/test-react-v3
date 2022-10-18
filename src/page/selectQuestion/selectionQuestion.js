import { Button } from "antd";
import React,{useState,useEffect} from "react";
import './selectionQuestion.css'
import { useSelector } from 'react-redux';
import useAxios from '../../api/axios'
import player from "../../store/slices/playerSlide/player";
import Round from "../../components/round/round";
import { Link, useNavigate } from "react-router-dom";
const QuestionPage = () => {
    const navigate = useNavigate()
    const totalPlayer = useSelector(state => state.player.username)
    const totalRound = useSelector(state => state.question.totalRound)
    const roundCount = Array(totalRound).fill('')
    const [userIndex,setUserIndex] = useState(0)
    const date = new Date().toLocaleDateString('en-GB',{
        hour: 'numeric',
          minute: 'numeric',
          hour12: true
      })
    const [currentUser,setCurrentUser] = useState(totalPlayer[userIndex])
    const handleSubmit = async () => {
        if((userIndex +1) < totalPlayer.length){
           setUserIndex(userIndex + 1)
           
        }else{
            navigate('/loadingPage')
        }
    }
    useEffect( ()=>{
        setCurrentUser(totalPlayer[userIndex])
    },[userIndex])
    return(
        
        <div className="container-question">
            <div className="question-header">
                <div className="question-header-left">
                    <h2>YES NO WFT GAME</h2>
                </div>
                <div className="question-header-right">
                    <div className="btn-good-luck">
                        <Button type="primary">Good Luck</Button>
                    </div>
                </div>
            </div>
            <div className="total-player">
                <p className="player-name">Player:{totalPlayer.map(data => { 
                    return <p className={currentUser.username === data.username ? "currentUser" : null }> {data.username} ,</p> 
                    })}</p>
            </div>
            <div className="container-round">
                {roundCount.map( (value,index) =>{
                   return ( 
                    <Round currentUser={currentUser.username} Date={date} key={index}  index={index}/>
                   )  
                }
                )}
                
            </div>
            <div className="btn-submit-answers">
                <Button type="primary" onClick={() => handleSubmit()}>Submit Answer</Button>
            </div>
        </div>
    )
}
export default QuestionPage