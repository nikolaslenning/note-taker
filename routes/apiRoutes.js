//  Data Source
const fs = require('fs');
function dbData() {
    return JSON.parse(fs.readFileSync("./db/db.json"))
}

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
        return res.json(dbData());
    });

    app.post("/api/notes", function (req, res) {
        var newNote = req.body;
        var data = dbData();

        newNote.id = Date.now();
        data.push(newNote);

        fs.writeFile("./db/db.json", JSON.stringify(data), (error) => {
            if (error) throw error;
        });
        return res.json(newNote);
    })

    app.delete("/api/notes/:id", function (req, res) {
        let id = (req.params.id);
        let deletedData = dbData().filter(element => element.id != id);
        
        fs.writeFileSync("./db/db.json", JSON.stringify(deletedData));        
        res.json(deletedData);
    })
}