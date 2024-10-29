const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

const admins = []; // Arreglo en memoria para almacenar administradores

// Ruta para servir el archivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/index.html'));
});

// Registro de administrador
app.post('/admin/register', async (req, res) => {
    const { username, password } = req.body;

    const existingAdmin = admins.find(admin => admin.username === username);
    if (existingAdmin) {
        return res.status(400).send('El administrador ya existe');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    admins.push({ username, password: hashedPassword });
    res.status(201).send('Administrador registrado');
});

// Ingreso de administrador
app.post('/admin/login', async (req, res) => {
    const { username, password } = req.body;
    const admin = admins.find(admin => admin.username === username);

    if (admin && (await bcrypt.compare(password, admin.password))) {
        const token = jwt.sign({ username: admin.username }, 'tu_secreto', { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).send('Credenciales incorrectas');
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
