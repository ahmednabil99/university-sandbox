const express = require('express');
const courseController = require('../controllers/course');

const router = express.Router();

// Display list of courses
router.get('/courses', courseController.getCourses);

module.exports = router;
