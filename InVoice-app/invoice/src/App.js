import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Home from "./components/home/Navbar";

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/home' element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
