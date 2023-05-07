import { Checkbox, Button,Popconfirm } from "antd";
import {GithubOutlined} from "@ant-design/icons"
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./index.css"
const List = (props) => {
  const dispatch = useDispatch();
  const { todoName, isCompleted, id } = props.items;
  const setValue=props.setValue
  const setEditId=props.setEditId
  const [ok, setOk] = useState(isCompleted);
  const onChange = (e) => {
    setOk(!ok);
    dispatch({type:'complete',id:id})
  };
  const edit=()=>{
    setValue(todoName) 
    setEditId(id)
    document.getElementsByClassName("ant-input")[0].focus() 
   }
  
  return (
    <div
    className={isCompleted?"inline":null}
      style={{
        width: "300px",
        overflow: "hidden",
        borderWidth:"0px 1px 1px 1px",
        borderStyle:"solid",
        borderColor:"rgb(176, 174, 174)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >

      <Checkbox onChange={onChange} checked={isCompleted}  >
        {todoName}
      </Checkbox>
      <div className="b">
      <Button type="text" shape="round" size="small" onClick={()=>edit()}>
          Edit
        </Button>
        <Popconfirm
        icon={<GithubOutlined />}
        placement="right"
        title="确定要删除吗?"
        description={null}
        onConfirm={()=>dispatch({type:"remove",id:id})}
        okText="确定"
        cancelText="取消"
        color="rgb(176, 174, 174)"
      >
        <Button type="text" shape="round" size="small" >
          Delete
        </Button>
      </Popconfirm>
      </div>
     
    </div>
  );
};
export default List;
