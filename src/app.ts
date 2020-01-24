const express = require('express');
import morgan from 'morgan';
import indexRutas from './Rutas/rutas';

export class App {
    app = express();

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }
    routes(){
        this.app.use(indexRutas);
    }

    settings(){       
       this.app.set('json spaces',2);
       this.app.use(express.json());
    }
    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        //this.app.use(express.urlencoded({extended:false}))
    }

    async listen() {
        await this.app.listen(3000 || 3005);
        console.log('Server port 3000')
    }
}