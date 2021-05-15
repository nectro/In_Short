const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000; 

app.use(express.json());
app.use(cors());

app.listen(port, ()=>{
    console.log(`server running on Port :- ${port}`);
});


//---------->for the extraction of texts<----------

//https://www.npmjs.com/package/context-url-extractor ---------->Extract url from html pages
//https://www.npmjs.com/package/pdf-extraction ---------->Extract text from pdf
//https://www.npmjs.com/package/node-goose-honk ---------->Extract text from html pages
//https://www.npmjs.com/package/office-text-extractor ---------->Extract text from any word doc


//---------->for the summarizations of texts<----------

//https://www.npmjs.com/package/nodejs-text-summarizer