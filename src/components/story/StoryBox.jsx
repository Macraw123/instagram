import React, { useState } from 'react'
import Stories from 'react-insta-stories';
import './story.scss'
import samplePost from '../../assets/sampleStory1.jpg';





const StoryBox=props=>{

    const [stories,setStories] =useState([])

    console.log(props.data)
  
    props.data.map(item=>(
    
        item.video==""?

        stories.push({
            url:process.env.PUBLIC_URL+`${item.image}`,
            header: {
                heading: item.user.username,
                subheading: 'Posted 1h ago',
                profileImage:
                process.env.PUBLIC_URL+`${item.user.profile}`
            }

            
    }) : 
    stories.push({
            url: process.env.PUBLIC_URL+`${item.video}`,
            type: 'video',
            duration: 1000,
            header: {
                heading: item.user.username,
                subheading: 'Posted 1h ago',
                profileImage:
                process.env.PUBLIC_URL+`${item.user.profile}`
            }
    })
    
    )      )



    return (
        <div className="ig-story">
            {
                    <Stories
                        stories={stories}
                        defaultInterval={15000}
                        width={370}
                        height={window.innerHeight}
                    />
            }

        </div>
    )
}

export default StoryBox
