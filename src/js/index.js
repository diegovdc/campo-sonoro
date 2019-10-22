
import {data} from './model'
import {audioElement} from './view'

const main = document.getElementById('main')
main.innerHTML = data.map(element => audioElement(element)).join('')

