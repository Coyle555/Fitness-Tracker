const router = require('express').Router()
const { Workout } = require('../models')

router.get('/', async (req, res) => {
    const workoutData = Workout.findAll({})
    const workout = workoutData.map((post) => post.get({plain: true}))
    res.render('stats', {
        workout
    })
})

router.post('/api/workout', ({ body }, res) => {
    Workout.create(body)
    .then(db => {
        res.json(db)
    })
    .catch(err => {
        res.status(err)
    })
})