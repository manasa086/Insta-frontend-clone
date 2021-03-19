import React,{useRef,useState,useEffect} from 'react'
import axios from 'axios';
import { Button } from '@material-ui/core';

function ImageUpload() {

    const [fileUpload,setFileUpload]=useState("");
     


    const changeFile=(event)=>{
            setFileUpload(event.target.files[0])
    }

    const submitFile=()=>{
        const email=sessionStorage.getItem("email")
        const formData=new FormData();
        let newFileName=`${email}.jpg`;
        // formData.append('file',file);
        // console.log(data);
        formData.append('file', fileUpload, newFileName);
        
        const uploadFile = async ()=>
        {
            try{
                const res=await axios.post('http://localhost:5000/uploadFile',formData,{
                    headers:{
                        'Content-Type':'multipart/form-data'
                    }
                });
                console.log("Uploaded")
            }
            catch(err)
            {
                if(err.response.status===500){
                    console.log('There was a problem with the server')
                }
                else
                {
                    console.log(err);
                }
            }
        }
        uploadFile();
    }



    return (
        <div>
            <input type="file" onChange={changeFile} name="file" id="file"></input>
            <Button onClick={submitFile}>Save Image</Button>            
        </div>
    )
}

export default ImageUpload
