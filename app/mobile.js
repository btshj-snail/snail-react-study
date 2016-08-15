/**
 * Created by snail on 2016/8/15.
 */
import './css/main.css';
import $ from 'jquery';

$(document).ready(function() {
    let app  = document.createElement('div');
    app.innerHTML = '<h1>Hello World</h1>';
    document.body.appendChild(app);
    $('h1').greenify();
});
