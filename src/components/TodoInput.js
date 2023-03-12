import React,{useState} from "react";

function TodoInput(props) {
    const [inputText,setInputText]=useState('');
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText("")
        }
    }
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your todo"
        value={inputText}
        onChange={
          e=>{
            setInputText(e.target.value)
        }
      }
        onKeyDown={handleEnterPress}
      />
      <button className="add-btn" 
      onClick={()=>{
        // function from app.js passes here as props
        props.addList(inputText)
        // to display input placeholder after adding to the todolist
        setInputText("")
      }}>+</button>      
    </div>
  );
}

export default TodoInput;