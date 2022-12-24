import mysql from 'mysql';

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'snap_blog'
});

db.connect(err => {
    if (err) throw err;
    console.log('Database connection established');
})