// I brought in my fruitData and just changed the name to "data" so that hopefully my formulas will stay in tact. I think the require part isnt working cuz my database isnt actually a json file and for that reason require("/") wont work
const data = [
    {id: 1, name: "apple"},
    {id: 2, name: "orange"},
    {id: 3, name: "banana"},
    {id: 4, name: "lime"},
    {id: 5, name: "grape"},
]

// const data = require("./database") <-- commenting this out for now
let currentId = 5


module.exports = {
    getFruit: (req, res) => res.status(200).send(data),

    postFruit: (req, res) => {
        let {name} = req.body // <-- maybe this was the step my post function was missing
        let newFruit = {
            id: currentId,
            name,
        }
        data.push(newFruit)
        res.status(200).send(data)
        globalId++
    },

    putFruit: (req, res) => {
        let {id} = req.params;
        let fruitUpdate = data.find(fruitData) = fruitData.id === parseInt(id)
        fruitUpdate.name = req.body.name;
        res.status(200)({message: "updated"}, data)
    },

    deleteFruit: (req, res) => {
        // let {id, name} = req.params;
        let fruitDelete = data.findIndex(elem => elem.id === +req.params.id) // <-- is this more syntactically precise? ♥‿♥
        data.splice(req.params.id, 1);
        res.status(200).send(data);
    }
}