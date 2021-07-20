import {useState, useEffect} from "react";
import {getPosts} from "../services/ServicesUsers";
import CommentPost from "../comment_post/CommentPost";
import {Switch, Route} from "react-router-dom";
import CommentDetails from "../comment-details/CommentDetails";


export default function Comments () {

    let [posts, setPosts] = useState([]);

    useEffect(()=> {
        getPosts().then(value => setPosts([...value.data]))
        // getPosts().then(value => console.log(value.data))
    },[])

    return(
        <div>
            {posts.map(value => <CommentPost key={value.id} item={value}/>)}
            <Switch>
                <Route path={'/comments/:id'} components={CommentDetails}/>
            </Switch>
        </div>
    );
}