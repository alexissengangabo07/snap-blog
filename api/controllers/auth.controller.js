import { db } from "../database/db.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export const register = (req, res) => {
    // Chech if user already exists
    const selectQuery = 'SELECT * FROM users WHERE username = ? OR email = ?';

    db.query(selectQuery, [req.body.username, req.body.email], async (err, data) => {
        if (err) return res.status(500).json({ error: err });
        if (data.length) return res.status(409).json('User already exists !');

        //Hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const insertQuery = "INSERT INTO users(`username`,`email`,`password`) VALUES (?, ?, ?)";
        const values = [req.body.username, req.body.email, hashedPassword];

        db.query(insertQuery, values, (err, data) => {
            if (err) return err;

            return res.status(201).json('Use inserted successfully !');
        });
    });
}

export const login = (req, res) => {
    // Chech if username or email exists
    const selectQuery = 'SELECT * FROM users WHERE username = ? OR email = ?';

    db.query(selectQuery, [req.body.username, req.body.email], async (err, data) => {
        if (err) return res.status(500).json(err);
        if (!data.length) return res.status(404).json('User not found !');

        //Chech password
        const isPasswordCorrect = await bcrypt.compare(req.body.password, data[0].password);

        if (!isPasswordCorrect) return res.status(400).json('Password incorrect!');

        const token = jwt.sign({ id: data[0].id }, 'jwtkey');
        const { password, ...others } = data[0];

        res.cookie('cookie name', 'ok');
        res
            .cookie("access_token", token, {
                maxAge: 60000,
                httpOnly: true,
            })
            .status(200)
            .json(others);
    });
}

export const logout = (req, res) => {

}