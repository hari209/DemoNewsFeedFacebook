const {
    save, getAll, getPostId, removeByID, updateById
} = require("../dal/post.dao");

const createPost = async (data) => {
    return await save(data);
};

const getPost = async () => {
    return await getAll();
};

const getPostById = async (id) => {
    return await getPostId(id);
};

const deletePost = async (id) => {
    console.log(id);
    return await removeByID(id);
};

const updatePost = async (id, data) => {
    console.log(id);
    return await updateById(id, data);
};

module.exports = {
    createPost, getPost, getPostById, deletePost, updatePost
}