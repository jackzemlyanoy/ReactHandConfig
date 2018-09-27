import React from "react";
import ReactDOM from "react-dom";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import {faCoffee} from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import "./style.scss";
import Popover from "./components/UI/Popover/index";

// library.add(faStroopwafel);

ReactDOM.render(
	<div>
		<FontAwesomeIcon icon={faCoffee} />
		<h1>Hello, world!!</h1>
		<img src={require("./assets/img/react.jpg")} />
		<FontAwesomeIcon icon="stroopwafel" />
		<Popover />
	</div>,
	document.getElementById("app")
);
