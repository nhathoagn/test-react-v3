import React from "react";
import { Button } from "antd";
import { useDispatch } from 'react-redux';
import { saveAnswerUser } from "../../store/slices/questionSlide/questionSlide";
const Round = (props) => {
 const {index,currentUser,Date} = props

 const dispatch = useDispatch()
 const handleAnswer = (answer) =>{
    dispatch(saveAnswerUser({answer,currentUser,round: index + 1,date: Date}))
 }

  return (
    <div className="round-element" key={index}>
      <div className="round">
        <h2>Round:{index + 1}</h2>
      </div>
      <div className="answer">
        <Button type="primary" className="btn-yes" onClick={() => handleAnswer('yes')}>
          Yes
        </Button>
        <Button type="primary" danger className="btn-no" onClick={() => handleAnswer('no')}>
          No
        </Button>
      </div>
    </div>
  );
};
export default Round
