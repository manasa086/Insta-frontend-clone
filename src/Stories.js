import React,{useState} from 'react';
import "./Stories.css";
import HorizontalScroll from "react-scroll-horizontal";
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Story from "./Story";
function Stories() {

    let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    let [currentPage,setCurrentPage]=useState(1);
    let [storiesPerPage,setStoriesPerPage]=useState(7);

  const leftClick=(e)=>{
      e.preventDefault();
      let indexOfLastStory=(currentPage-1)*storiesPerPage;
  let indexOfFirstStory=indexOfLastStory-storiesPerPage;
  
      if((arr.slice(indexOfFirstStory,indexOfLastStory).length)<7)
      {
          setCurrentPage(1);
      }
      else{
          setCurrentPage(currentPage-1);
      }
  }
  const rightClick=(e)=>{
      e.preventDefault();
      let indexOfLastStory=(currentPage+1)*storiesPerPage;
  let indexOfFirstStory=indexOfLastStory-storiesPerPage;
      if((currentPage+1)>arr.slice(indexOfFirstStory,indexOfLastStory).length)
      {
          setCurrentPage(1);
      }
      else{
          setCurrentPage(currentPage+1);
      }
  }
  let indexOfLastStory=currentPage*storiesPerPage;
  let indexOfFirstStory=indexOfLastStory-storiesPerPage;
  let display_arr=arr.slice(indexOfFirstStory,indexOfLastStory);
//   if(display_arr.length>0)
//   {
    return (
        
        <div className="stories">
      <button className="button" onClick={leftClick}>{"<"}</button>
     
      {display_arr.map((each,index)=>{
         
          return <Story key={index}></Story>
          
      })}
        {display_arr.length>=7? <button className="butright"  onClick={rightClick}>{">"}</button>:<button className="butright1"  onClick={rightClick}>{">"}</button>}
       
    </div>
    )
//   }
//   else{
//       let arr1=[1,2,3,4,5,6,7]
//     return (
        
//         <div className="stories">
//       <button className="button" onClick={leftClick}>{"<"}</button>
//       <button className="button" onClick={rightClick}>{">"}</button>
//       {arr1.map((each,index)=>{
//           return <Story key={index}></Story>
//       })}
      
//     </div>
//     )
//   }  
}

export default Stories
