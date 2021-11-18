import $ from 'jquery';
import _ from 'lodash'

let counter = 0;
function updateCounter() {
    return counter + 1;
}


$(function() {
    $("body").append('<p>Holberton Dashboard</p>');
    $("body").append('<p>Dashboard data for the students</p>');
    $("body").append("<button>Click here to get started</button>");
    $("body").append("<p id='count'></p>");
    $("body").append("<p>Copyright - Holberton School</p>");
    let deb = _.debounce(() => {
    let counter = updateCounter();
    document.getElementById("count").innerHTML = `${counter} clicks on the button`;
    });
    $("button").on('click', deb)
});
