import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Prism from 'prismjs';
// import bootstrap from 'bootstrap';

window.jQuery = $;

window.bootstrap = require('bootstrap');
window.ReactDOM = ReactDOM;


var previous = "";


/*** Onload ***/
$('.navigation-tab').on('click', function() {
    var url = window.location.href
        , index = url.indexOf('/#')
        , id = $(this)[0].id;
    url = url.substr(index,url.length-index);
    if(id === 'home-navigate') {
        window.location.href = window.location.href.replace(url,'/#/home');
    } else if(id === 'getting-started-navigate') {
        window.location.href = window.location.href.replace(url,'/#/getting-started');
    } else if(id === 'dashboard-navigate') {
        window.location.href = window.location.href.replace(url,'/#/dashboard');
        document.getElementById("dashboard-container").innerHTML='<object type="text/html" data="views/gtd-dashbaord-index.html" ></object>';
    } else if(id === 'demos-navigate') {
        window.location.href = window.location.href.replace(url,'/#/demos/ex1');
        $('.examples#ex1').trigger('click');
    }
});


$('.examples').on('click',function() {
    var url = window.location.href
        , index = url.indexOf('demos/')
        , example = url.substr(index+6,(url.length - (index+6)))
        , exampleId = this.id;
    if(exampleId !== previous) {
        document.getElementById("charts-example").innerHTML='<object class="chart-space" type="text/html" data="views/'+exampleId+'.html" ></object>';
    }

    $("#code-ex1").hide();
    $("#code-ex2").hide();
    $("#code-ex3").hide();
    $("#code-ex4").hide();
    $("#code-ex5").hide();

    $("#code-"+exampleId).show();



    // console.log(exampleId);
    // jQuery.get({
    //     url: "../src/js/" + exampleId + ".js",
    //     // contentType: 'application/json',
    //     dataType: "html",
    //     success: function (data) {
    //       console.log(data);
    //         $('#code-javascript').html(data);
    //         Prism.highlightAll();
    //     }
    // });

    // $('#code-javascript').load('../src/js/'+exampleId+".js");

    // jQuery.get({
    //     url: "../src/views/" + exampleId + ".html",
    //     // contentType: 'application/json',
    //     dataType: 'html',
    //     success: function (data) {
    //         data = "\n" + data.replace(/\</g, '&lt;');
    //         $('#html_code code.language-markup').html(data);
    //         Prism.highlightAll();
    //     }
    // });

    // $('#html_code code.language-markup').html(code[exampleId].html);
    // $('#javascript_code code.language-javascript').html(code[exampleId].javascript);

    previous = this.id;
    Prism.highlightAll();
});

if(window.location.href.indexOf('#') === -1) {
    window.location.href += '#/home';
} else {
    var url = window.location.href
        , index = url.indexOf('demos/')
        , example;
    if(url.indexOf('home/') !== -1) {
        $('.navigation-tab a[href="#home"]').tab('show')
    } else if(url.indexOf('/dashboard') !== -1) {
        $('.navigation-tab a[href="#dashboard"]').tab('show');
        document.getElementById("dashboard-container").innerHTML='<object type="text/html" data="views/gtd-dashbaord-index.html" ></object>';
    } else if(url.indexOf('/getting-started') !== -1) {
        $('.navigation-tab a[href="#getting-started"]').tab('show');
    } else if(index !== -1) {
        $('.navigation-tab a[href="#demos"]').tab('show')
        example = url.substr(index+6,(url.length - (index+6)));
        $('.examples#'+example).trigger('click');
    }
}
Prism.highlightAll();
