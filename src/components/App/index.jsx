import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Popover from "../UI/Popover/index";
import "./style.scss";
import ModalMain from '../UI/ModalMain/index'

class App extends React.Component {


	// render app
	render() {
		return (
			<div className="wrapper">
				<div>
					<FontAwesomeIcon icon={faCoffee} />
					<h1>Hello, world!!</h1>
					<img src={require("../../assets/img/react.jpg")} />
					<FontAwesomeIcon icon="stroopwafel" />
					<Popover />
				</div>
				<ModalMain />
			</div>
		);
	}
}

export default App;
