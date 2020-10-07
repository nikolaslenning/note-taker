// Dependencies
var express = require('express')
var path = require("path");

// routing
module.exports = function (app) {
    // https://stackoverflow.com/questions/34105183/uncaught-syntaxerror-unexpected-token-in-nodejs
    // serving static files - another exapmple - https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction
    //app.use(express.static('public'));

    app.get("/notes", function (req, res) {
         res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    // if no matching route is found, defaut to index
    app.get("/", function(req, res) {
         res.sendFile(path.join(__dirname, "../public/index.html"));
      });
}