// import {useEffect, useState} from "react";
// import {getUsers} from "../services/ServicesUsers";
import {Link, Route, Switch} from "react-router-dom";
import UserDetails from "../user-details/UserDetails";

export default function User({item}) {

    return(
        <div>
            {/*users/1*/}
            {/*users/2*/}
            {/*users/3*/}
            {/*{item.id} - {item.name}, {item.username} -*/}

            {item.name} - <Link to={'/users/' + item.id}>details</Link>

        </div>
    );
}