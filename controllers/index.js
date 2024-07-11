const db = require('../database/db');

exports.getAllTodos = (req, res) => {
    db.query('SELECT * FROM tareas', (err, results) => {
        if (err) {
            console.error('Error querying database:', err);
            return res.status(500).send(err);
        }
        res.json(results);
    });
};

exports.createTodo = (req, res) => {
    const { title, description } = req.body;
    const query = 'INSERT INTO tareas (title, description) VALUES (?, ?)';
    db.query(query, [title, description], (err, results) => {
        if (err) {
            console.error('Error inserting into database:', err);
            return res.status(500).send(err);
        }
        const newTodo = { id: results.insertId, title, description };
        res.json(newTodo);
    });
};

exports.updateTodo = (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const query = 'UPDATE tareas SET title = ?, description = ? WHERE id = ?';
    db.query(query, [title, description, id], (err, results) => {
        if (err) {
            console.error('Error updating database:', err);
            return res.status(500).send(err);
        }
        const updatedTodo = { id, title, description };
        res.json(updatedTodo);
    });
};

exports.deleteTodo = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM tareas WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error deleting from database:', err);
            return res.status(500).send(err);
        }
        res.status(204).send();
    });
};
