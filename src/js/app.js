import '../styles/main.scss';
import * as $ from 'jquery';

$("#btn-services").click(function() {
    $('html,body').animate({
        scrollTop: $("#services-section").offset().top},
        'slow');
});

$("#sh-services-btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#services-section").offset().top},
        'slow');
});

$("#small-services-btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#services-section").offset().top},
        'slow');
});

$("#mp-btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#sm-section").offset().top},
        'slow');
});