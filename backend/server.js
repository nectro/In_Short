const express = require('express');
const cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })
const pdf = require('pdf-extraction');
const fs = require('fs');
const SummarizerManager = require("node-summarizer").SummarizerManager;
const spell = require('spell-checker-js');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000; 

app.use(express.json());
app.use(cors());

const router = require('express').Router();

router.route('/').post(upload.single('doc'),(req, res)=>{
    let dataBuffer = fs.readFileSync(req.file.path);
    pdf(dataBuffer).then(function (data) {
        console.log(data.text);
        let Summarizer = new SummarizerManager(data.text,7);
        let reduction_percentage = Summarizer.getFrequencyReductionAsDec().dec_reduction;
        res.json({status:"uploaded",file:req.file,perc:reduction_percentage,summary:Summarizer})
    });
})

router.route('/spellcheck').post(upload.single('doc'),(req, res)=>{
    let dataBuffer = fs.readFileSync(req.file.path);
    pdf(dataBuffer).then(function (data) {
        console.log(data.text.replace(/\n/g, ''));
        const avd = ["Samaresh","Samanta","CSE"];
        avd.map(avd=>{
            data.text = data.text.replace(avd,'');
        })      
        spell.load('en');
        const check = spell.check(data.text.replace(/\n/g, '').replace(/[0-9]/g, ''));
        console.log(check);
        res.json({wrongspell:check,noOfIncrt:check.length});  
    });
})

app.use('/upload', router)

app.listen(port, ()=>{
    console.log(`server running on Port :- ${port}`);
});


//---------->for the extraction of texts<----------

//https://www.npmjs.com/package/context-url-extractor ---------->Extract url from html pages
//https://www.npmjs.com/package/pdf-extraction ---------->Extract text from pdf (DONE)
//https://www.npmjs.com/package/node-goose-honk ---------->Extract text from html pages
//https://www.npmjs.com/package/office-text-extractor ---------->Extract text from any word doc


//---------->for the summarizations of texts adn other functions<----------

//https://www.npmjs.com/package/@trashhalo/node-summarizer ----------->for summarization (DONE)
//https://www.npmjs.com/package/spell-checker-js --------------->spell checker