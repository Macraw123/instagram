import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { UNSEND_MSG } from '../../lib/mutations'
import './SendBox.scss'

const SendBox=props=> {
    const [tamper,setTamper]=useState('not')
    const m=props.m
    const [unsendMsg, {data:data4,loading:loading4,errorCreate4}]=useMutation(UNSEND_MSG)

    const unsend=()=>{
        unsendMsg({
            variables:{
                id:m.id
            }
        }).then(({data}) => {
            setTamper('yes')
            // console.log("Berhasil delete")
        }).catch(e=>{
            // console.log("Tidak berhasil delete")
        })
     }
    return (
        <div>
            {tamper=="not"? 
            <div className="message sol">
            <div className="resim" ></div>
                <div className="messageText" data-time={(new Date(m.created)).getHours()+":"+((new Date(m.created)).getMinutes()<10?"0":"")+(new Date(m.created)).getMinutes()}>
                      <div>{m.image!=""?<img src={m.image}/>:""}</div>
                      <div>{m.video?<video width="320" height="240" controls>
                      <source src={m.video} type="video/mp4"/>
                      </video>:""}</div>
                      <div>{m.message}</div>
                </div>
                <div onClick={unsend} className="dm-unsend-btn">Unsend</div>
            </div>
            :
            ""
            }
        
        </div>
    )
}

export default SendBox
