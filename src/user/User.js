// import {useEffect, useState} from "react";
// import {getUsers} from "../services/ServicesUsers";
import{Link} from "react-router-dom";

export default function User({item}) {

    return(
        <div>
            {/*{item.id} - {item.name}, {item.username} -*/}
            {/*<Link to={'posts + item.id'}>details</Link>*/}

            {item.name} - <Link to={'users + item.id'}>details</Link>
        </div>
    );
}