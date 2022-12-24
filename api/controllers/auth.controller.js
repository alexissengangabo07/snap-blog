import { db } from "../database/db.js";
import bcrypt from 'bcrypt';

export const register = (req, res) => {
    // Chech if user already exists
    const selectQuery = 'SELECT * FROM users WHERE username = ? OR email = ?';
    db.query(selectQuery, [req.body.username, req.body.email], (err, data) => {
        if (err) return res.status(500).json({ error: err });

        if (data.length) {
            return res.status(409).json({ message: 'user already exists' });
        }

        //Hash the password
        const hashedPassword = bcrypt.hash(req.body.password, 10);
        const insertQuery = 'INSERT INTO  users(username, email, password) VALUES(?)';
        const values = [
            req.body.username,
            req.body.email,
            hashedPassword
        ];

        db.query(insertQuery, values, (err, data) => {
            if (err) return err;

            return res.status(201).json({ message: 'use inserted successfully' });
        });
    });
}

export const login = (req, res) => {

}

export const logout = (req, res) => {

}