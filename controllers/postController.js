const Post = require("../models/postModel");

exports.getAll = (req, res) => {
    Post.getAllPosts((err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

exports.getOne = (req, res) => {
    Post.getPostById(req.params.id, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result[0]);
    });
};

exports.create = (req, res) => {
    Post.createPost(req.body, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ id: result.insertId, ...req.body });
    });
};

exports.update = (req, res) => {
    Post.updatePost(req.params.id, req.body, (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Post updated" });
    });
};

exports.delete = (req, res) => {
    Post.deletePost(req.params.id, (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Post deleted" });
    });
};
