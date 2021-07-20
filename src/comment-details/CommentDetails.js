import {useEffect, useState} from "react";
import {getPostComment} from "../services/ServicesUsers";


export default function CommentDetails (props) {
    let{match: {param:{id}}} = props;

    let [postComment, setPostComment] = useState([]);

    useEffect(()=> {
        getPostComment(id).then(value => setPostComment([...value.data]));
        getPostComment(id).then(value => console.log([...value.data]));

    }, [id]);
    return(

        <div>
            {
                postComment.map(value =>
                    <div>{value.body}. {value.name}</div>)
            }
        </div>
    );
}