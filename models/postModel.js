const db = require("../config/db");

exports.getAllPosts = (cb) => {
    db.query("SELECT * FROM posts", cb);
};

exports.getPostById = (id, cb) => {
    db.query("SELECT * FROM posts WHERE id = ?", [id], cb);
};

exports.createPost = (data, cb) => {
    db.query("INSERT INTO posts SET ?", data, cb);
};

exports.updatePost = (id, data, cb) => {
    db.query("UPDATE posts SET ? WHERE id = ?", [data, id], cb);
};

exports.deletePost = (id, cb) => {
    db.query("DELETE FROM posts WHERE id = ?", [id], cb);
};
