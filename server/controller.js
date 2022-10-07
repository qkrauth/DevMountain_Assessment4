const data = require("./database");
let currentId = 5;

module.exports = {
    getFruit: (req, res) => res.status(200).send(data),

    postFruit: (req, res) => {
        let newFruit = {
            id: currentId,
            name: postName.value,
        }
        data.push(newFruit)
        res.status(200).send(data)
        globalId++
    },

    putFruit: (req, res) => {
        let {id, name} = req.params;
        let fruitUpdate = data.find(fruitData) = fruitData.id === parseInt(id)
        fruitUpdate.name = req.body.name;
        res.status(200)({message: "updated"}, data)
    },

    deleteFruit: (req, res) => {
        let {id, name} = req.params;
        let fruitDelete = data.find(fruitData) = fruitData.id === parseInt(req.params)
        data.splice(req.params.id -1);
        res.status(200)({message: "deleted"}, data);
    }
}