// Dependencies
var express = require('Express')
var path = require("path");

// routing
module.exports = function (app) {
    // https://stackoverflow.com/questions/34105183/uncaught-syntaxerror-unexpected-token-in-nodejs
    app.use(express.static('public'));

    app.get("/notes", function (req, res) {
        return res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    // if no matching route is found, defaut to index
    app.get("*", function(req, res) {
        return res.sendFile(path.join(__dirname, "../public/index.html"));
      });
}