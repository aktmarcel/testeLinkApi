const Pipedrive = require('../models/Pipedrive');
module.exports.index = async (req, res) => {
    try {
        const pipe = new Pipedrive();
        const result = await pipe.getDeal();
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({error: "Internal Server Error"});
    }
}