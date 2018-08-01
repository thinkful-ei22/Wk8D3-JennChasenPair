import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ComplaintForm from './components/complaintForm';
import {Provider} from 'react-redux';
import store from './reducers/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}><ComplaintForm /></Provider>
  , document.getElementById('root'));
registerServiceWorker();
