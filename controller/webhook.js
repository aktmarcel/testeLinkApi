const Pipedrive = require('../models/Pipedrive');
const Bling = require('../models/Bling');
module.exports.index = async (req, res) =>{
    try {
        const pipe = new Pipedrive().createOrUpdate(req.body.current);
        console.log(JSON.stringify(pipe));
        const bling = new Bling(req.body.current);
        const response = await bling.insertOrder();
        res.status(201).send();
        
    } catch (error) {
        
    }
}