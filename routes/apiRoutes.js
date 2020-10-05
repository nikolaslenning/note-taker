//  Data Source
const fs = require('fs');
var dbData = require("../db/db.json");

// Routing
module.exports = function(app) {
    // API get requests
    app.get("/api/notes", function(req, res) {
        
        fs.readFile("./db/db.json", function(error, data) {
            if (error) {
                return console.log("Error:" + error);
            }
           // console.log("data:" + data);
            return data;
        });
       return res.json(dbData);
      });

    app.post("/api/notes", function(req, res) {
        var newNote = req.body;
        //console.log(newNote);
        dbData.push(newNote);
        
       console.log("dbData json:")
       console.log(dbData)
       fs.writeFile("./db/db.json", JSON.stringify(dbData), (error) => {
           if (error) throw error;
       });
        return res.json(newNote);

    })

    app.delete("/api/notes/:id", function(req, res) {
        var id = (req.params.id);
        //console.log(id)
        res.json(id)
    })
}