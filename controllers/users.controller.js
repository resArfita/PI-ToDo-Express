const UserModel = require("../models/User")

module.exports = {
    getAllUsers: async (req, res) => {
        const data = await UserModel.find({})

        res.status(200).json({
            message: "Berhasil mendapatkan semua data user",
            data
        })
    },
    getUsersById: (req, res) => {},
    addUsers: (req, res) => {
        const data = req.body

        //buat data dari model
        const newUser = new UserModel(data)
        newUser.save()

        res.status(200).json({
            message: "Data berhasil dibuat"
        })
    },
    editUsersById: (req, res) => {},
    deleteUsersById: (req, res) => {}
}