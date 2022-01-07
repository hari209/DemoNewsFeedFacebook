const post = require('./index').db('myFirstDatabase').collection('Post');

const ObjectId = require('mongodb').ObjectId;

const save = async (data) => {
    const result = await post.insertOne(data);
    return result;
};

const getAll = async () => {
    const cursor = await post.find();
    return cursor.toArray();
};

const getPostId = async (id) => {
    return await post.findOne({ _id: ObjectId(id) });
};

const updateById = async (id, data) => {
    const result = await post.replaceOne({ _id: ObjectId(id) }, data);
    return result;
};

const removeByID = async (id) => {
    const result = await post.deleteOne({ _id: ObjectId(id) });
    return result;
};

module.exports = { save, getAll, getPostId, updateById, removeByID };