import React, { useContext } from 'react';
import '../App.css';
import { RiImageAiFill, RiImageAddLine } from "react-icons/ri";
import { MdChatBubbleOutline } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { FaArrowUp } from "react-icons/fa";
import { dataContext } from '../context/userContext';
import Chat from '../pages/Chat';  // Make sure this path is correct

const Home = () => {
  
  let { startRes, setStartRes,popUp,setPopUp,input,setInput } = useContext(dataContext);

  async function handleSubmit(e) {
     e.preventDefault();
     setStartRes(true);
  }

  return (
    <div className='home'>
      <nav>
        <div className="logo">
          Smart AI Bot
        </div>
      </nav>

      {!startRes ? (
        <div className="hero">
          <span id="tag">What can I help with?</span>
          <div className="cat">
            <div className="upImg">
              <RiImageAddLine />
              <span>Upload Image</span>
            </div>
            <div className="genImg">
              <RiImageAiFill />
              <span>Generate Image</span>
            </div>
            <div className="chat">
              <MdChatBubbleOutline />
              <span>Let's Chat</span>
            </div>
          </div>
        </div>
      ) : (
        <Chat />
      )}

      <form className="input-box" onSubmit={handleSubmit}>

      {popUp ? (
  <div className="pop-up">
    <div className="select-up">
      <RiImageAddLine />
      <span>Upload Image</span>
    </div>
    <div className="select-gen">
      <RiImageAiFill />
      <span>Generate Image</span>
    </div>
  </div>
) : null}

        
        <div id="add" onClick={()=>{
          setPopUp(prev=>!prev)
        }}>
          <AiOutlinePlus />
        </div>
        <input type="text" placeholder='Ask Something...' onChange={(e)=>setInput(e.target.value)}
        value={input} />

        {input?<button id="submit">
          <FaArrowUp />
        </button>:null}
        
      </form>
    </div> 
  );
};

export default Home;
