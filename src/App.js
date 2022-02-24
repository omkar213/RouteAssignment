import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import UserDetail from './UserDetail';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<BrowserRouter>
				<div className='App'>
					<Nav />
					<Switch>
						<Route path="/" component={Home} exact />
						<Route path="/about" component={About} />
						<Route path="/shop" exact component={Shop} />
						<Route path="/shop/:id" component={UserDetail}/>
					</Switch>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;





















{/* <Navigator>
            {login?<Profile/>:<Navigate to ="/"/>}</Navigator> */}
{/* <button onClick={() => setlogin(!login)}>{login ? "Logout" : "Login"}</button> */ }

// const [login, setlogin] = useState(false);