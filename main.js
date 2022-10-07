const localURL = `http://localhost:4004/api/database/`

const { getFruit, postFruit, putFruit, deleteFruit } = require("./server/controller");

const getDataBtn = document.getElementById("getData");
const getData = () => {
    axios.get("http://localhost:4004/api/database/")
    .then(res => {
        res.status(200).send(data)
    }
)}

const postDataBtn = document.getElementById("postName");
const postData = () => {
    axios.post("http://localhost:4004/api/database/")
    .then(res => {
        res.status(200).send(data)
    }
)}

const putDataBtn = document.getElementById("putName");
const putData = () => {
    axios.put("http://localhost:4004/api/database/") 
    .then(res => {
        res.status(200).send(data)
    }
)}

const deleteDataBtn = document.getElementById("deleteName");
const deleteData = () => {
    axios.delete("http://localhost:4004/api/database/") 
    .then(res => {
        res.status(200).send(data)
    }
)}

function submitHandler(event) {
    event.preventDefault()
}