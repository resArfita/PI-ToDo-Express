const TodoModel = require("../models/Todo")

module.exports = {
    getAllTodo: async (req, res) => {
        const data = await TodoModel.find({})

        // console.log(req.payload)

        res.status(200).json({
            message: "Berhasil mendapatkan semua Detail Todo",
            data
        })
    },
    getTodoById: async (req, res) => {
        const { id } = req.params
        const data = await TodoModel.findById(id)

        res.status(200).json({
            message: "Berhasil mendapatkan Todo By ID",
            data
        })
    },
    addTodo: (req, res) => {
        const data = req.body

        //buat data dari model
        const newTodo = new TodoModel(data)
        newTodo.save()

        res.status(200).json({
            message: "Todo berhasil dibuat"
        })
    },
    editTodoById: async (req, res) => {
        const { id } = req.params //get the id

        const todoEdit = await TodoModel.findByIdAndUpdate(id, req.body)
        todoEdit.save()

        //define untuk menampilkan data yang telah di update
        const updatedTodo = await TodoModel.findById(id)
        res.status(200).json({
            message: "Todo berhasil diupdate",
            updatedTodo //tampilkan data yg diupdate
        })
    },
    deleteTodoById: async (req, res) => {
        const { id } = req.params

        await TodoModel.findByIdAndDelete(id) //we don't want it to be saved so, no need to hold to a variable

        res.status(200).json({
            message: "Todo berhasil dihapus",

        })
    },
    //deletealltodo
    deleteAllTodo: async (req, res) => {

        await TodoModel.deleteMany({})

        res.status(200).json({
            message: "All Todo Berhasil dihapus"
        })
    },
    // //gettodoforthetaskonly
    getTodoForTheTaskOnly: async (req, res) => {
        
        const data = await TodoModel.find({}).select("task") //this gonna display id and task by default

        const tasks = data.map(todo => todo.task) //use map to only render the task

        res.status(200).json({
            message: "Berhasil mendapatkan semua Task Todo",
            tasks
        })
    }
}