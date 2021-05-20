const express = require('express');
const cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })
const pdf = require('pdf-extraction');
const fs = require('fs');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000; 

app.use(express.json());
app.use(cors());

const router = require('express').Router();

router.route('/').post(upload.single('doc'),(req, res)=>{
    let dataBuffer = fs.readFileSync(req.file.path);
    pdf(dataBuffer).then(function (data) {
        // number of pages
        console.log(data.numpages);
        // number of rendered pages
        console.log(data.numrender);
        // PDF info
        console.log(data.info);
        // PDF metadata
        console.log(data.metadata);
        // PDF.js version
        // check https://mozilla.github.io/pdf.js/getting_started/
        console.log(data.version);
        // PDF text
        console.log(data.text);
        res.json({status:"uploaded",file:req.file,text:data.text})
    });
    
})

app.use('/upload', router)

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