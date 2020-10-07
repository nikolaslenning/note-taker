//  Data Source
const fs = require('fs');
var dbData = require("../db/db.json");

// Routing
module.exports = function (app) {
    // API get requests
    app.get("/api/notes", function (req, res) {

        fs.readFile("./db/db.json", function (error, data) {
            if (error) {
                return console.log("Error:" + error);
            }
            return data;
        });
        return res.json(dbData);
    });

    app.post("/api/notes", function (req, res) {
        var newNote = req.body;
        newNote.id = Date.now();
        dbData.push(newNote);
        
        fs.writeFile("./db/db.json", JSON.stringify(dbData), (error) => {
            if (error) throw error;
        });
        return res.json(newNote);
    })

    app.delete("/api/notes/:id", function (req, res) {
        let id = (req.params.id);   
        let deletedData = dbData.filter(element => element.id != id);
                
        fs.writeFile("./db/db.json", JSON.stringify(deletedData), (error) => {
            if (error) throw error;
            else Location.reload();
        });
        return res.json(deletedData);       
    })
}
//1.use date for id Date.now()