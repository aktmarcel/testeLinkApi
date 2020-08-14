const mongo = require('../config/database');
class Pipedrive{
    constructor(){}
    //Função responsavel por fazer a conexão com o banco
    async connect(){
        await mongo.connect();
        return mongo.db('linkapi').collection('deals');
    }
    //Função que insere ou atualiza o dado caso o mesmo já exista, após realizar a operação encera a conexão com o banco
    async createOrUpdate(params){
        try {
            const connection = await this.connect();            
            const data = {
                _id: params.id,
                title: params.title,
                status: params.status,
                value: params.value,
                owner_name: params.owner_name,
                createdAt: params.add_time
            }
            await connection.updateOne(
                { _id: data._id },
                { $set: data },
                { upsert: true });
            
            return data;
        } catch (error) {
            return error
        }finally{
            mongo.close();
        }
    }
    // Função que busca os pedidos salvos no banco, após realizar a operação encera a conexão com o banco
    async getDeal(){
        try {
            const connection = await this.connect();
            const result = await connection.find({"status": "won"}).toArray();
            return result;
        } catch (error) {
            return error;
        }finally{
            mongo.close();
        }
    }
}
module.exports = Pipedrive;