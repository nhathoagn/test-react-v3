import React, { useEffect } from "react";
import { Skeleton } from "antd";
import useAxios from "../../api/axios";
import { useDispatch } from "react-redux";
import { saveAnswerAPI } from "../../store/slices/questionSlide/questionSlide";
import './anwser.css'
const AnwserPage = (props) => {
  const dispatch = useDispatch();
  const { index } = props;
  let apiUrl = "https://yesno.wtf/api";
  const { response } = useAxios({ url: apiUrl });
  console.log("day la response answer");
  useEffect(() => {
    if(response){
      dispatch(saveAnswerAPI({answers: response.answer, image: response.image}));
    }
  });
  console.log("data-response", response);
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
export default AnwserPage;
