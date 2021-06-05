import React, { useEffect, useState } from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import db from './firebase'
import FlipMove from 'react-flip-move'

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot =>{
            setPosts(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    //console.log(posts)

    return (
        <div className = "feed">
            <div className = "feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox />
            <FlipMove>
            <Post
							key = {1}
							displayName = {"Nguyễn thành cong"}
							username = {"congnt"}
							verified = {"true"}
							text = {"Danh sách 10 CLB có nhiều cầu thủ chinh chiến tại Euro 2020 vắng Real Madrid, Barcelona, Liverpool hay PSG."}
							image = {"https://picsum.photos/200/300?grayscale"}
							avatar = {"https://res.cloudinary.com/practicaldev/image/fetch/s--4GUdCMwp--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/631770/6464230a-e07d-4a01-884f-f960378e2af1.png"}
            />
            </FlipMove>
        </div>
    )
}
export default Feed
