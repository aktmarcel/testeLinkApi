const Pipedrive = require('../models/Pipedrive');
const Bling = require('../models/Bling');
/*Função que é disparada a partir do webhook da pipedrive. Essa função disparada sempre que um pedido é criado ou atualizado. Caso o status seja 
igual a 'won' então o pedido é salvo no mongo e uma ordem é criado na bling*/
module.exports.index = async (req, res) =>{
    try {
        if(req.body.current === 'won'){
        const pipe = new Pipedrive()
        await pipe.createOrUpdate(req.body.current);
        console.log(JSON.stringify(pipe));
        const bling = new Bling(req.body.current);
        const response = await bling.insertOrder();
        }
        res.status(201).send();
        
    } catch (error) {
        
    }
}