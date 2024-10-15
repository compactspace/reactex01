const redis= require('redis');

const client = redis.createClient({ port: 6379 });

module.exports.redisconnect = async (req, res) => {


   await client.connect();

  
}

module.exports.redisdisconnect = async (req, res) => {


    await client.disconnect();
 
   
 }
 


