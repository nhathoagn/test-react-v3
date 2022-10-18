import React, { useEffect } from "react";
import { Skeleton } from "antd";
import useAxios from "../../api/axios";
import { useDispatch } from "react-redux";
import { saveAnswerAPI } from "../../store/slices/questionSlide/questionSlide";
import './anwser.css'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
const AnwserComponent= (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const totalRound = useSelector(state => state.question.totalRound)
  const { index } = props;
  let apiUrl = "https://yesno.wtf/api";
  const { response } = useAxios({ url: apiUrl });
 
  useEffect(() => {
    if(response){
      dispatch(saveAnswerAPI({answers: response.answer, image: response.image,round: index + 1}));
    }
    else if(index + 1 === totalRound){
      setTimeout( ()=>{
        navigate('/answerPage')
      },3000)
  }
    
  },[response]);
 
  return (
    <div className="container-anwserpage">
      <div className="round-element" key={index}>
        <div className="round">
          <h2>Round:{index + 1}</h2>
        </div>
        <div className="answer">
        <Skeleton.Input active/>
        </div>
      </div>
    </div>
  );
};
export default AnwserComponent;
