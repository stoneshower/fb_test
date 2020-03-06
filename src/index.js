// https://webpack.js.org/guides/caching/

import firebase from 'firebase/app'
import FirebaseConfig from '../firebase-config.json'
import _ from 'lodash'
import './style.css'
import placeholder from './images/placeholder.jpg'

firebase.initializeApp(FirebaseConfig)

function component() {
  const element = document.createElement('div')

  element.innerHTML = _.join(['Hello', 'World'], ' ')
  element.classList.add('hello');

  const myPlaceholder = new Image()
  myPlaceholder.src = placeholder;

  element.appendChild(myPlaceholder)

  return element
}

document.body.appendChild(component())

