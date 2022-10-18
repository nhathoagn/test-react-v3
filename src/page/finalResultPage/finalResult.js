import { Table } from "antd";
import React, {useState,useEffect} from "react";
import './finalResult.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { saveDataTable1, saveDataTable2 } from "../../store/slices/questionSlide/questionSlide";

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

 const HandleData = () => {
  const dispatch = useDispatch()
  const total = useSelector(state => state.question.arr)
  const arr2 = []
  // let dataTable = []
  const player = useSelector(state => state.player.username)

  const dataUser = useSelector(state => state.question.answerUser)
  const dataAPI = useSelector(state => state.question.answerApi)

  const totalRound = useSelector(state => state.question.totalRound)
  const result = useSelector(state => state.question.arr)
 
  useEffect( ()=>{
    let key = "currentUser"
   score(total,key)
   filterDataTable()
  },[total])

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
    let dataTable1 = []
    let dataTable2 = []
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
   
        // for (let i = 0; i< player.length; i++){
        // dispatch(saveDataTable({key: i + 1,no: i + 1,name:player[i].username, date: dataUser[i].date,answer: dataUser[i].answer, result:dataAPI[i].answers,score: scoreTotal[i].score,summary:player[i].username,percent: percent[i].percent,totalScore: scoreTotal[i].score})) 
        // }
        let dataRaw = dataUser.concat(dataAPI,player,result,scoreTotal)
        // console.log(dataRaw)
    
        //
        //
        // console.log("1",scoreTotal)
        // dataTable.push({key: i,no: i + 1,name:player[i].username, date: dataUser[i].date,answer: dataUser[i].answer, result:dataAPI[i].answer,score: scoreTotal[i].score,summary:player[i].username,percent: percent[i].percent,totalScore: scoreTotal[i].score})
    
        player.map( (data) =>{
            for (let h = 1; h <= totalRound;h++){
                dataAPI.map( (x)=>{
                    result.map( (y)=>{
                        scoreTotal.map( (z)=>{
                            percent.map( (q) =>{
                                dataUser.map( (p,index) =>{
                                    if ((data.username === p.currentUser) && (p.round ==x.round) && (p.round==y.round) && (z.currentUser === data.username) && (data.username === q.username)){
                                        // dataTable.push(data,x,y,z,p,q)
                                        dataTable1.push({key:index,name:data.username,no:index +1,result:x.answers,answer:p.answer,score:z.score,date: p.date,summary:data.username,totalScore:z.score,percent:q.percent})
                                        dataTable2.push({summary:data.username,totalScore:z.score,percent:q.percent})
                                    }
                                })
                            })
                        })
                    })
                })
            }
    
    
        })
        // console.log(dataTable)
        let dataFinal1 = Array.from(new Set(dataTable1.map(JSON.stringify))).map(JSON.parse);
        let dataFinal2 = Array.from(new Set(dataTable2.map(JSON.stringify))).map(JSON.parse);
        // let dataFinal = Array.from(new Set(dataTable)) //
        dispatch(saveDataTable1(dataFinal1))
        dispatch(saveDataTable2(dataFinal2))
        console.log(11,dataFinal1)
        
    

  
}
 }
const FinalResultPage = () => {
    HandleData()

  


   const dataTable1 = useSelector(state => state.question.dataTable1)
   const dataTable2 = useSelector(state => state.question.dataTable2)
   console.log(15,dataTable1);
   console.log(16,dataTable2);


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
      dataIndex: 'score',
      key: 'score',
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

  console.log("datatable",dataTable2);
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
        <Table columns={columns1} dataSource={dataTable1} pagination={false} className="table-1" onChange={handleChange} />
             <Table columns={columns2} dataSource={dataTable2} pagination={false} className="table-2"/>
          
        </div>
    </div>
   )
}
export default FinalResultPage