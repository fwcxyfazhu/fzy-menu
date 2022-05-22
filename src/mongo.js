// mongo.js文件

const { MongoClient } = require('mongodb');
const URL = 'mongodb://127.0.0.1:27017';

const mongo = async () => {
  const client = new MongoClient(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    retryWrites: true,
  });
  try {
    await client.connect();
    console.log('连接成功');
  } catch (err) {
    throw new Error(err);
  } finally {
    console.log('关闭-==---------------');
    await client.close();
  }
};
mongo();
