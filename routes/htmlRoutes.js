// Dependencies
var express = require('Express')
var path = require("path");

// routing
module.exports = function (app) {
    
    app.use(express.static('public'));

    app.get("/notes", function (req, res) {
        return res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    // if no matching route is found, defaut to index
    app.get("*", function(req, res) {
        return res.sendFile(path.join(__dirname, "../public/index.html"));
      });
}