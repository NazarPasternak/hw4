import {Link} from "react-router-dom";

export default function CommentPost ({item}){
    return(
        <div>
            {item.id} - {item.title}-
            <Link to={'/comments' + item.id}>details</Link>
        </div>
    )
}