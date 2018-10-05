import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import App from './components/App';
import {articles} from "./data";

library.add(faStroopwafel);


ReactDOM.render(<App articles = {articles} />, document.getElementById('app'));
