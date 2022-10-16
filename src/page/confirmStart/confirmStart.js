import React,{useEffect, useState} from "react";
import HeaderPage from "../../components/header/header";
import { Button, Table, Modal,Form,Input,Space,InputNumber } from 'antd';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import './confirmStart.css'
import { addplayer } from "../../store/slices/playerSlide/player";
import { saveTotalRound } from "../../store/slices/questionSlide/questionSlide";
import { useNavigate } from 'react-router-dom';
const columns = [
    {
      title: 'NO.',
      dataIndex: 'no',
      key: 'no',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Player',
      dataIndex: 'name',
      key: 'name',
    },
  
  ];
   
const ConFirmPage = () => {
     const  navigate = useNavigate()
    const dispatch = useDispatch()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [username,setUserName] = useState()
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async (values) => {
    console.log("value-modal",values);
    setIsModalOpen(false);
   await dispatch(addplayer({username: username}))
   await setUserName()
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
    const player = useSelector(state => state.player.username)
    console.log("player",player);
    const data = []
    player.map((value,id) =>{
        let user = {key: id + 1,name: value.username,no: id+1}
        data.push(user)
    })
    console.log("datauser",data);
    
    const handleInput = (e) => {
        setUserName(e.target.value)
    }
    const [value, setValue] = useState();
    return(
    <div className="container-confirm-page">
        <div className="confirm-header">
            <HeaderPage/>
        </div>
        <div className="confirm-table">
            <Table columns={columns} dataSource={data} pagination={false}/>
        </div>
        <div className={player.length > 1 ? "disable" : "add-more-player"} >
        <Button type="primary" onClick={showModal}>
        Add More Player
      </Button>
      <Modal title="Please enter a name" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className="input-title">User name:</div>
      <Input value={username} onChange={handleInput} />
      </Modal>
        </div>
        <div className="total-round">
        <Space>
      <InputNumber min={1} max={100} value={value} onChange={setValue} />
      <Button
        type="primary"
        onClick={ () => {
            dispatch(saveTotalRound(value))
            navigate("/selectQuestion")
            }}
      >
        Start!
      </Button>
    </Space>
        </div>
    </div>
 )
}
export default ConFirmPage