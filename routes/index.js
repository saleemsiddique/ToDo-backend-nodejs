const express = require('express');
const router = express.Router();
const db = require('../database/db'); // Asegúrate de que estás importando correctamente

// Ruta de ejemplo para obtener datos de la base de datos
router.get('/', (req, res) => {
    db.query('SELECT * FROM tareas', (err, results) => {
        if (err) {
            console.error('Error querying database:', err);
            return res.status(500).send(err);
        }
        console.log(results);
        res.json(results);
    });
});

module.exports = router;
