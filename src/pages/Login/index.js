import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input, Button } from "antd";
import "./Login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    const { password, username } = values;
    const key = window.localStorage.getItem(`${username}${password}`);
    console.log(key);
    if (key) {
      console.log("jj")
      navigate("/");
    }
  };
  return (
    <div className="login">
      <div className="login-container">
        <Form name="normal_login" className="login-form" onFinish={onFinish}>
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
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <a href="/register">register now!</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Login;
// #components-form-demo-normal-login .login-form {
