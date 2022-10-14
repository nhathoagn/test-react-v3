import { Button } from "antd";
import React,{useState} from "react";
import './selectionQuestion.css'
import { useSelector } from 'react-redux';
import useAxios from '../../api/axios'
import player from "../../store/slices/playerSlide/player";
import Round from "../../components/round/round";
import { Link } from "react-router-dom";
const QuestionPage = () => {
    const totalPlayer = useSelector(state => state.player.username)
    console.log("totalPlayer",totalPlayer);
    const totalRound = useSelector(state => state.question.totalRound)
    const roundCount = Array(totalRound).fill('')
    const [userIndex,setUserIndex] = useState(0)
    const [currentUser,setCurrentUser] = useState(totalPlayer[userIndex])
    console.log("currentUser",currentUser.username);
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
                    return <p className={currentUser.username === data.username ? "currentUser" : null }>{data.username}</p> 
                    })}</p>
            </div>
            <div className="container-round">
                {roundCount.map( (value,index) =>{
                   return ( 
                    <Round currentUser={currentUser.username} key={index} index={index}/>
                   )  
                }
                )}
                
            </div>
            <div className="btn-submit-answers">
                <Link to='/loadingPage'>
                <Button type="primary">Submit Answer</Button>
                </Link>
                
            </div>
        </div>
    )
}
export default QuestionPage