import { CalendarViewDay,  Create,  EventNote, Image,  NineKPlusRounded,  Subscriptions } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import "./Feed.css"
import { db } from './firebase'
import InputOption from './InputOption'
import Post from './Post'
import firebase from 'firebase'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import FlipMove from 'react-flip-move'

function Feed() {
    const user=useSelector(selectUser)
    const [input, setinput] = useState('')
    const [posts, setPosts] = useState([])
  

    
   useEffect(()=>{
       db.collection("posts")
       .orderBy("timestamp","desc")
       .onSnapshot((snapshot) =>
           setPosts(
               snapshot.docs.map((doc) => (
               {
                   id: doc.id,
                   data: doc.data(),
               }

           ))

       ))


   },[])

    const sendPost = (e)=>{
        e.preventDefault()
    
        db.collection('posts').add({
            name: user.displayName,
            description:user.email,
            message: input,
            photoUrl:user.photoUrl ||"" ,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
    }
    



  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <Create/>
                <form>
                    <input type="text" onChange={e => setinput(e.target.value)} value = {input}/>
                    <button onClick={sendPost} type ="submit">Send</button>
                </form>

            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={Image} title="Photo" color="#70B5F9"/>
                <InputOption Icon={Subscriptions} title="Video" color="#E7A33E"/>
                <InputOption Icon={EventNote} title="Event" color="#C0CBCD"/>
                <InputOption Icon={CalendarViewDay} title="WriteArticle" color="#7FC15E"/>
                
            </div>
            
        </div>
            <FlipMove>

            {posts.map(({id,data:{name,message,description,photoUrl}})=>(
            <Post 
                key={id}
                name={name} 
                description={description} 
                message ={message} 
                photoUrl={photoUrl}
                
                />
      
                
            ))}
            </FlipMove>
            
        
    </div>
  )
}

export default Feed 
