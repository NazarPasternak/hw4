import {useEffect, useState} from "react";
import {getUsers} from "../services/ServicesUsers";
import User from "../user/User";
import {Route, Switch} from "react-router-dom";
import UserDetails from "../user-details/UserDetails";


export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers().then(value => setUsers([...value.data]))

    }, [])

    return(
        <div>
            {/*{users.map(value => <User key={value.id} item={value}/>)}*/}
            {/*<Route path={'posts/:id'} component={PostDetails}/>*/}

            {users.map(value => <User key={value.id} item={value}/>)}

            <Switch>
                <Route path={'users/:id'} components={UserDetails}/>
            </Switch>

        </div>

    )
}


