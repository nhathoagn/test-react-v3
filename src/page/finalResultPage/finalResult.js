import { Table } from "antd";
import React, {useState,useEffect} from "react";
import './finalResult.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { saveDataTable } from "../../store/slices/questionSlide/questionSlide";

  const data = [
    {
      key: 1,
      name: 'John Brown',
      no: 32,
      date: 'New York No. 1 Lake Park',
      answer: 'yes',
      result: 'no',
      core: 1,
      summary: 'hoang',
      percent: '10%',
      totalScore: 12
    },
    

  ];
  console.log(12,data);
 const HandleData = () => {
  const dispatch = useDispatch()
  const total = useSelector(state => state.question.arr)
  const arr2 = []
  // let dataTable = []
  const player = useSelector(state => state.player.username)
  // console.log("player",player);
  const dataUser = useSelector(state => state.question.answerUser)
  const dataAPI = useSelector(state => state.question.answerApi)
  // console.log("answerUser-FinalResultPage",answerUser);
  const totalRound = useSelector(state => state.question.totalRound)
 
 
  useEffect( ()=>{
    let key = "currentUser"
   score(total,key)
   filterDataTable()
  },[total])
  console.log("arr2",arr2);
  // console.log("dataTable",dataTable);

  const score = (arr,key) =>{
    // let arr2 = [];
    arr.forEach((x)=>{
        if(arr2.some((val)=>{ return val[key] == x[key] })){
            arr2.forEach((k)=>{
                if(k[key] === x[key]){
                    k["score"]++
                }
            })

        }else{
            let a = {}
            a[key] = x[key]
            a["score"] = 1
            arr2.push(a);
        }
    })

    return arr2
  }
  const filterDataTable = () => {
    let scoreTotal = []
   
    let percent = []
    arr2.map( (data, index) => {
        player.map( (value,key) => {
            if ( data.currentUser == value.username){
                scoreTotal.push({currentUser: value.username,score: data.score})
            }else{
                scoreTotal.push({currentUser: value.username,score: 0})
            }
        })
    })
    // var arr = arraymove(scoreTotal,0,1)

    scoreTotal.map( (data) => {
        if (data.score === 0){
            percent.push({username: data.currentUser, percent: '0%'})
        }else{
            let percentUser = ((data.score/ totalRound)*100) + '%'
            percent.push({username: data.currentUser, percent: percentUser})
        }
    })
    // console.log(percent)
    //
    //
    // console.log("1",scoreTotal)
        for (let i = 0; i< player.length; i++){
        dispatch(saveDataTable({key: i + 1,no: i + 1,name:player[i].username, date: dataUser[i].date,answer: dataUser[i].answer, result:dataAPI[i].answer,score: scoreTotal[i].score,summary:player[i].username,percent: percent[i].percent,totalScore: scoreTotal[i].score})) 
        }


  //  return dataTable
}
 }
const FinalResultPage = () => {
    HandleData()
  // console.log("total",total);
  


   const dataTable = useSelector(state => state.question.dataTable)
   console.log(15,dataTable);


    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      };



      const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const clearFilters = () => {
    setFilteredInfo({});
  };
  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };
  const setAgeSort = () => {
    setSortedInfo({
      order: 'descend',
      columnKey: 'age',
    });
  };
  const columns1 = [
    {
        title: 'No.',
        dataIndex: 'no',
        key: 'no',
    
      },
    {
      title: 'Player',
      dataIndex: 'name',
      key: 'name',
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
      
      },
    {
      title: 'Answer',
      dataIndex: 'answer',
      key: 'answer',
    },
    {
      title: 'Result',
      dataIndex: 'result',
      key: 'result',
    
    },
    {
      title: 'Core',
      dataIndex: 'core',
      key: 'core',
    },
  ];
  const columns2 = [
    {
      title: 'Summary',
      dataIndex: 'summary',
      key: 'summary',
    },
    {
      title: 'Correct percent',
      dataIndex: 'percent',
      key: 'percent',
    },
    {
      title: 'Total score',
      dataIndex: 'totalScore',
      key: 'totalScore',
    }
  ]


   return(
    <div className="container-final-result">
        <div className="final-result-header">
                <h2>Yes No WTF GAME</h2>
        </div>
        <div className="final-result-title">
            <p>
                Final Result
            </p>
        </div>
        <div className="final-result-content">
        <Table columns={columns1} dataSource={dataTable} pagination={false} className="table-1" onChange={handleChange} />
             <Table columns={columns2} dataSource={dataTable} pagination={false} className="table-2"/>
          
        </div>
    </div>
   )
}
export default FinalResultPage