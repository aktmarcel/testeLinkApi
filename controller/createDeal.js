const axios = require('axios');
const Joi = require('@hapi/joi');
// Função que cria os 'deals' na pipedrive

module.exports.index = async (req, res) => {
    try {
        await schemaValidation(req.body, res);
        const {title, value, status} = req.body;
        const config = {
            headers: {
              'Content-Type': 'application/json'
            }
          };
        const response = await axios.post('https://api.pipedrive.com/v1/deals?api_token=0445568e2e5c7d7c3261ce6dbbf2a09e829e0262', {title, value, status, currency: "USD"}, config);
        res.status(200).send({dealId: response.data.data.id});
    } catch (error) {
        console.log(error);
        
        res.status(500).send({error: "Internal Server Error"});
    }
}
async function schemaValidation(data, res) {
    const schema = Joi.object().keys({
      title: Joi.string().required(),
      value: Joi.string().required(),
      status: Joi.string()
        .required().valid('won')
    });
    try {
      await schema.validateAsync(data);
    } catch (err) {
        res.status(422).send({error: err.message});
    }
  }
  