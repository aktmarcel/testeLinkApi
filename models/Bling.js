var convert = require('xml-js');
const axios = require('axios');
class Bling {
    constructor(params){
        this.bling = {
            pedido: {
                cliente: { nome: params.owner_name },
                pedido: {
                  itens: {
                    item: {
                      codigo: 1,
                      descricao: params.title,
                      un: 'Un',
                      qtde: 1,
                      vlr_unit: params.value
                    }
                  }
                }
              }
        };
        this.xml = null;
        this.apiKey = '59630a675509944e8de88197b6ad2151fcbb3a1901d5640c78fe8dfc7f3b05451d3cafbe';
        this.convertToXml();
    }

    
    convertToXml(){
        try {
            this.xml=  convert.js2xml(this.bling, {compact: true});
            return this.xml
        } catch (error) {
            console.log(error);
        }

    }

     async insertOrder(){
         try {
            const data = {
              };
              const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
              };
            const response = await axios({method: 'post', url:`https://bling.com.br/Api/v2/pedido/json/?apikey=${this.apiKey}&xml=${this.xml}`});
            return response;
         } catch (error) {
             console.log("BLING ERROR -> "+ error);
             
         }

        
        
    }
}

module.exports = Bling;