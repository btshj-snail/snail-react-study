/**
 * Created by snail on 2016/8/15.
 */
//var sub = require('./sub');
//require('./css/main.css');
//var $ = require("jquery");
//var moment = require("moment");
//var app  = document.createElement('div');
//app.innerHTML = '<h1>Hello World</h1>';
//app.appendChild(sub());
//document.body.appendChild(app);
//$('body').append('<div>我是jquery添加的div</div>')



import './css/main.css';
import generateText from './sub';
import $ from 'jquery';
import moment from 'moment';

let app  = document.createElement('div');
const myPromise = Promise.resolve(42);
myPromise.then((number) => {
    $('body').append('<p>promise result is ' + number + ' now is ' + moment().format() + '</p>');
});
app.innerHTML = '<h1>Hello World it</h1>';
document.body.appendChild(app);
app.appendChild(generateText());
