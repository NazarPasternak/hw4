import {useEffect, useState} from "react";
import {getPost} from "../services/ServicesUsers";
import {useParams}  from "react-router-dom";


export default function UserDetails (props) {
    let {item} = props;
    console.log(props);

    // let {match: {param:{id}}} = props
    // let [post, setPost] = useState([]);
    //
    // let {id} = useParams();
    // useEffect(() => {
    //     getPost(id).then(value =>
    //         setPost([value]));
    //
    //
    // }, [id])

    return (
        <div>
            UserDetails {item.id}
            {/*{post.title} {post.body}*/}
        </div>
    );
}