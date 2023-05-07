import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input,Button } from "antd";
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import "./register.css"
const Register=()=>{
  const dispatch=useDispatch()
  const navigate=useNavigate()
    const onFinish = (values) => {
        console.log("Received values of form: ", values);
        const {username, password} = values;
        dispatch({type:"register",user:{username:username,password:password}})
        window.localStorage.setItem(`${username}${password}`,`${username}${password}`)
        navigate('/')
      };
     return <div className="register">
        <div style={{textAlign:"center",fontSize:"100px",color:"white",textShadow:"3px 3px rgba(0,0,0,0.5)"}}>男童信息注册中心  </div>
    <div className="register-container">
    <Form
      name="normal_login"
      className="login-form"    
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
       <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
           Register
          </Button>
        </Form.Item>

    </Form>
    </div>
   </div>
   
     
}

export default Register