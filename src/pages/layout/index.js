import { Input,Button } from "antd";
import "./index.css";
import { ClockCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "../List";
const ShowItems = () => {
  const [value, setValue] = useState("");
   const [editId,setEditId]=useState()
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  const addItem = (e) => {
    //enter提交事件 value和输入框双向绑定 value为输入框的值
    if(editId){
   
      dispatch({type:"edit",id:editId,todoName:value})
      setEditId()
      setValue()
      return 
    }
    if (value) {
      dispatch({
        type: "add",
        value: {
          id: new Date().getTime(),
          todoName: value,
          isCompleted: false,
        },
      });
      setValue();
    }
  };

  return (
    <div className="showitem">
      <div className="container">
        <Input
          placeholder="Add your list"
          value={value}
          onChange={(e) =>{ setValue(e.target.value);console.log(e.target)}}
          onPressEnter={(e) => addItem(e)}
          allowClear
          prefix={<ClockCircleOutlined />}
          maxLength={11}
          
        />
        <div className="lists">
         {
          todos&&(todos.map((item, index) => {
            console.log(item)
            return <List key={index} items={item} setValue={setValue} setEditId={setEditId} />;
          }))
         }
         
        </div>
        {
          todos.length===0&&(<div className="nolist">暂时没有日程，请添加~~</div >)
         }
         {
          todos.length!==0&&(
            <div className="clearall-clearcomplete">
            <Button type="text" shape="round" size="small" onClick={()=>{dispatch({type:"clearcomplete"});setEditId()}}>
           clear complete
          </Button>
          <Button type="text" shape="round" size="small" onClick={()=>{dispatch({type:"clear"});setEditId()}}>
          clear all
          </Button>
          </div>
          )
         }
      </div>
    </div>
  );
};

export default ShowItems;
