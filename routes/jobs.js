const express = require('express')
const router  = express.Router()
const Job     = require('../models/Job')

router.get('/test', (req, res) => {
    res.send('deu certo')
})

// DETALHE DA VAGA
router.get('/view/:id', (req, res) => {
    Job.findOne({
        where: { id: req.params.id }
    })
    .then(job => {
        res.render('view', {
            job
        });
    })
    .catch(err => console.log(err));
});


// FORM DA ROTA DE ENVIO

router.get('/add', (req, res) =>{
    res.render('add')
})
// ADD JOB VIA POST

router.post('/add', (req, res) => {

    let {title, salary, company, description, email, new_job} = req.body

    //insert
    Job.create({
        title,
        description,
        salary,
        company,
        email,
        new_job
    })
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
})

module.exports = router