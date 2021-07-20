import{BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import Users from "./users/Users";
import Comments from "./comments/Comments";


export default function App () {
    return(
        <div>
            <Router>
                <div>
                    <Link to={'/users'}>users page</Link>
                    <br/>
                    <Link to={'/comments'}>comments page</Link>
                </div>

                <Switch>
                    <Route path={'/users'} component={Users}/>
                    <Route path={'/comments'} component={Comments}/>
                </Switch>
            </Router>

        </div>
    );
}






























