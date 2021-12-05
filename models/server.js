const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        // Rutas direción
        this.path = {
            user: '/api/user',
            product: '/api/product',
        }

        // Middlewares
        this.middlewares();
        // Routes
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors());
        // parseo json
        this.app.use(express.json());
        // ruta de archivos
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.path.user, require('../routes/user'));
        this.app.use(this.path.product, require('../routes/product'));
    }

    listen() {
        this.app.listen(this.port, () => console.log(`port listening ${this.port}`))
    }
}

module.exports = Server;