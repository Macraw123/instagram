import { useMutation } from '@apollo/client'
import React from 'react'
import { MAKE_CR } from '../../lib/mutations'

const ProfileBoxA=props=> {
    var m=props.data
    var email=localStorage.getItem('email')
  const [createCr, {data:data4,loading:loading4,errorCreate4}]=useMutation(MAKE_CR)

    var clickedUser=()=>{
        createCr({
            variables:{
               om:email,
               rm:m.email,
            }
        }).then(({data}) => {

          }).catch(e=>{
            
        })
    }


//   onClick={()=>props.changeRec(m.email)}
    return (
                            
                              <div className="dn-each-user" onClick={clickedUser}>
                                    <img src={process.env.PUBLIC_URL+`${m.profile}`}/>
                                    <div><b>{m.username}</b></div>
                              </div>
    )
}

export default ProfileBoxA
