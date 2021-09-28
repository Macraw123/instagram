import { useQuery } from '@apollo/client'
import React from 'react'

import { Link, useLocation } from 'react-router-dom'
import StoryBox from '../../components/story/StoryBox'
import { GET_MAIN_STORY, GET_STORY_BY_USER_ID } from '../../GraphQL/Queries'
import './StoryPage.scss'
import Layout from '../../components/layout/Layout'

function StoryPage() {
    const location=useLocation()
    const email=localStorage.getItem("email");
    const {userid}=location.state

    const {error:error2,loading:loading2,data:data2}=useQuery(GET_STORY_BY_USER_ID, {
        variables: { 
                userid:userid
        }
      });

    if(loading2)return <div></div>

    
    return (
        <Layout>

        <div className="story-page">
            <div className="s-close-btn">
                
                <Link to="/main">X</Link>
                </div>

            <center>
                <StoryBox data={data2.getStoryByUserId}/>
            </center> 
            </div>
            </Layout>
        
    )
}

export default StoryPage
