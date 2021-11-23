import $ from 'jquery';
import _ from 'lodash'

let counter = 0;
$("body").append("<button>Click here to get started<button/>");
$("body").append("<p id='count'><p/>");
function updateCounter() {
    counter += 1;
    document.getElementById("count").innerHTML = `${counter} clicks on the button`;
}
$("button").on('click', _.debounce(updateCounter, 500))
