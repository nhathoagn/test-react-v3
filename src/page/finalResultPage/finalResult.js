import { Table } from "antd";
import React, {useState,useEffect} from "react";
import './finalResult.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { saveDataTable1, saveDataTable2 } from "../../store/slices/questionSlide/questionSlide";
import { Space,Input } from 'antd';
import { saveWinner } from "../../store/slices/playerSlide/player";
import { DatePicker} from 'antd';
import moment from 'moment';
const { RangePicker } = DatePicker;

const { Search } = Input;

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
                          if(z.score > 0){
                           Object.assign(z,{point: 1})
                          }else{
                            Object.assign(z,{point: 0})
                          }
                            percent.map( (q) =>{
                                dataUser.map( (p,index) =>{
                                    if ((data.username === p.currentUser) && (p.round ==x.round) && (p.round==y.round) && (z.currentUser === data.username) && (data.username === q.username)){
                                     
                                      dataTable1.push({key:index,name:data.username,no:index +1,result:x.answers,answer:p.answer,score:z.point ,date: p.date,summary:data.username,totalScore:z.score,percent:q.percent})
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
        let winner = JSON.stringify(scoreTotal.reduce(function(prev, current) { 
        return (prev.score > current.score) ? prev.currentUser : current.currentUser  }))

        let dataFinal1 = Array.from(new Set(dataTable1.map(JSON.stringify))).map(JSON.parse);
        let dataFinal2 = Array.from(new Set(dataTable2.map(JSON.stringify))).map(JSON.parse);
        
        dispatch(saveDataTable1(dataFinal1))
        dispatch(saveDataTable2(dataFinal2))
        dispatch(saveWinner(JSON.parse(winner)))
       
        
    

  
}
 }
const FinalResultPage = () => {
    HandleData()
   const dataTable1 = useSelector(state => state.question.dataTable1)
   const dataTable2 = useSelector(state => state.question.dataTable2)
   const winner = useSelector( state => state.player.winner)
   const [data,setData] = useState([])
   let tempDate = []
   const onChange = (dates, dateStrings) => {
    if (dates) {
      setData('')
     dataTable1.map( (value) => {
      if(moment(value.date).isBetween(dateStrings[0],dateStrings[1])){
        tempDate.push(value)
      }else if(!dateStrings){
        setData([])
      }
      setData(tempDate)
     })
    } else {
      console.log('Clear');
    }
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
  const onSearch = (value) =>{
    if(!value){
      setData([])
    }else{
      dataTable1.map( (data)=>{
        if(data.name === value){
          setData([data])
        
        }
    })
    }
        
  }
  console.log("dataState",data);
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
        <div className="search-user">
        <Space direction="vertical">
  
          <Search placeholder="input search text" onSearch={onSearch} enterButton />
  
        </Space>
        </div>
        <div className="match-time">
        <Space direction="vertical" size={12}>
          <RangePicker 
          ranges={{
            Today: [moment(), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
          }}
          showTime
          format="YYYY/MM/DD HH:mm:ss"
          onChange={onChange}
          />
        </Space>
        </div>
        <div className="final-result-content">
        <Table columns={columns1} dataSource={data.length >0 ? data : dataTable1} pagination={false} className="table-1" onChange={handleChange} />
             <Table columns={columns2} dataSource={data.length >0 ? data : dataTable2} pagination={false} className="table-2"/>
          
        </div>
        <div className="result-winner">
            <p>
              The winner is: {winner}
            </p>
        </div>
        <div className="final-result-title">
            <p>
                End Game
            </p>
        </div>
    </div>
   )
}
export default FinalResultPage