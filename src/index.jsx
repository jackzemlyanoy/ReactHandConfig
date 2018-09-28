import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)



ReactDOM.render(<App />, document.getElementById("app"));
