import {useEffect, useState} from "react";
import {getUser, getUserPosts} from "../services/ServicesUsers";


export default function UserDetails (props) {
    const [user, setUser] = useState(null);
    let {match: {params: {id}}} = props;
    let [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        getUser(id).then(value => setUser(value.data))
        // getUser(id).then(value => console.log(value.data))

        getUserPosts(id).then(value => setUserPosts([...value.data]));
        // getUserPosts(id).then(value => console.log(value.data));


    }, [id])

    return (
        <div>
            <div>
                <h2>User details {user && user.id}</h2>
                {user && <div>
                    <ul>
                        <li><h4>{user.phone}</h4></li>
                        <li><h4>{user.email}</h4></li>
                    </ul>
                </div>}
            </div>


            {userPosts.map(value => <div key={value.id}>
                <h4>{value.id}. {value.title} </h4>
                <p>{value.body}</p>
            </div>)}
        </div>
    );
}