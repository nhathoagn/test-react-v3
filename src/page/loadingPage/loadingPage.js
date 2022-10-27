import { Button } from "antd";
import React from "react";
import './loadingPage.css'
import { useSelector } from 'react-redux';
import AnwserComponent from '../../components/answer/answer';
import { useNavigate } from 'react-router-dom';
const LoadingPage = () => {
    const navigate = useNavigate
    const totalPlayer = useSelector(state => state.player.username)
  
    const totalRound = useSelector(state => state.question.totalRound)
    const roundCount = Array(totalRound).fill('')
    const answer = useSelector( state => state.question.answerApi)

    
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
                <p className="player-name">Player:{totalPlayer.map(data => { return data.username + ","})}</p>
            </div>
            <div className="container-round">
                {roundCount.map( (value,index) =>{
                   return ( 
                    <AnwserComponent key={index} index={index}/>
                   )  
                }
                )}
                
            </div>
            <div className="btn-submit-answers">
                <Button type="primary" loading >Loading</Button>
            </div>
        </div>
    )
}
export default LoadingPage