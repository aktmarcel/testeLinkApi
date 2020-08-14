const mongo = require('../config/database');
class Pipedrive{
    constructor(){}
    
    async connect(){
        await mongo.connect();
        return mongo.db('linkapi-test').collection('pipedrive');
    }

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
            connection.updateOne(
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