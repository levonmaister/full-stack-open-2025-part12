const express = require('express');
const { getAsync, setAsync } = require('../redis');
const router = express.Router();





router.get('/', async(req,res) => {
    try {
        if(await getAsync('added_todos') === null) {setAsync('added_todos', 0);}
        return res.json({
            added_todos: parseInt(await getAsync('added_todos'))
        });
    } 
    catch (error) {
        console.error('Error fetching statistics:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
})


module.exports = router;