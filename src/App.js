import React from 'react';
import Counter from './comp/Counter';
import Fetch from './comp/Fetch';
import Todo from './comp/todo';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Nav from './comp/Nav';
import Reducer from './comp/Reducer';
function App(){
    return(<div>
        {/* <Counter/>
         
        {/* <Fetch /> */}

        <Router >
         <Nav />

            <Switch >   
                <Route exact path="/" component={Counter}></Route>
                <Route exact path="/todo" component={Todo}></Route>
                <Route exact path="/Fetch" component={Fetch}></Route>
                <Route exact path="/reducefetch" component={Reducer}></Route>
            </Switch>
        </Router>

    </div>)
}
export default App