const express = require('express');
require ('dotenv').config();
const fs = require('fs').promises;


const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {

    try{

        const data = await fs.readFile('exapmle.txt','utf-s');
        res.send(data);

    }catch(err){
        console.error('Something went wrong:', error);
        res.status(500).send('Internet Server Error');

    }

});




