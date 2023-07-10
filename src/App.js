import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import FolderImages from "./FolderImages";

function App() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/type/:name" component={FolderImages} />
		</Switch>
	);
}

export default App;
