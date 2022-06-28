

const getAll = (req, res) => {
    res.status(200).json({ "msg": [] })
}

const update = (req, res) => {
    res.status(200).json({ "msg": [] })
}
const create = (req, res) => {
    res.status(200).json({ "msg": [] })
}
const remove = (req, res) => {
    res.status(200).json({ "msg": "Delete a product" })
}


module.exports = {
    getAll,
    create,
    update,
    remove
}