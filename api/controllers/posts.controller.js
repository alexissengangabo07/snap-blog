import { db } from "../database/db.js";

export const getPostsController = (req, res) => {
    const getQuery = req.query.categorie
        ? "SELECT * FROM posts WHERE categorie=?"
        : "SELECT * FROM posts";

    db.query(getQuery, [req.query.categorie], (err, data) => {
        if (err) return res.json('Invalid sql query');
        return res.status(200).json(data);
    })
}

export const getPostController = (req, res) => {
    const { id } = req.params;
    const getUniquePost = "SELECT * FROM posts p INNER JOIN users u ON p.user_id = u.id WHERE p.id = ?";

    db.query(getUniquePost, [id], (err, data) => {
        if (err) return res.json(err)

        return res.status(200).json(data);
    })
}

export const addPostController = (req, res) => {
    res.status(200).json({ messsage: 'Oklm' })
}

export const deletePostController = (req, res) => {
    const { id } = req.params;
    const deletePostRequest = "DELETE FROM posts WHERE id=?";

    db.query(deletePostRequest, [id], (err, data) => {
        if (err) return res.json(err);

        return res.json(data);
    })
}

export const updatePostController = (req, res) => {
    res.status(200).json({ messsage: 'Oklm' })
}