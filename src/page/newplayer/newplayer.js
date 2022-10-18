import React from "react";
import HeaderPage from "../../components/header/header";
import "./newplayer.css";
import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { addplayer } from "../../store/slices/playerSlide/player";
import { useNavigate } from "react-router-dom";
const NewPlayer = () => {
    const natigate = useNavigate()
    const dispatch = useDispatch()
  const onFinish = (values) => {
   
    dispatch(addplayer(values))
    natigate('/confirmStart')

  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="container-newplayer">
      <div className="newplayer-title">
        <HeaderPage />
      </div>
      <div className="form-invite">
        <div className="form-title">
          <h2>Please enter a new name</h2>
          <hr />
          <div className="form-content">
            <Form
            className="form-custom"
              name="basic"
              layout="vertical"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="&emsp;&emsp;&emsp;&emsp;Username"
                name="username"
                // rules={[
                //   {
                //     required: true,
                //     message: "Please input your username!",
                //   },
                // ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 0,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit" className="btn-ok">
                  OK
                </Button>
                <Button type="primary" htmlType="submit" className="btn-cancel">
                  Cancel
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewPlayer;
