import {useEffect, useState} from "react";
import {getUsers} from "../services/ServicesUsers";
import User from "../user/User";
import {Route, Switch} from "react-router-dom";
import UserDetails from "../user-details/UserDetails";


export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers().then(value => setUsers([...value.data]))
        // getUsers().then(value => console.log(value.data))

    }, [])

    return(
        <div>

            {/*{users.map(value => <User key={value.id} item={value}/>)}*/}
            {/*<Route path={'posts/:id'} component={PostDetails}/>*/}
            {users.map(value => <User key={value.id} item={value}/>)}

            <Switch>
                <Route path={'/users/:id'} component={UserDetails}/>
            </Switch>
        </div>

    )
}


