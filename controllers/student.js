const lodash = require('lodash');
const sqlQuery = require('../config/db');
const studentService = require('../services/student');

module.exports = {
    getStudents: async (req, res) => {
        const result = await sqlQuery('SELECT * FROM student');
        return res.render('student/list', {
            activePath: '/students',
            students: result
        });
    },

    getNewStudent: async (req, res) => {
        return res.render('student/new', {
            activePath: '/students'
        });
    },

    postNewStudent: async (req, res) => {
        const name = req.body.name;
        await sqlQuery(`INSERT INTO student (name) values ('${name}')`);
        return res.redirect('/students');
    },

    getRegistration: async (req, res) => {
        // ..
    },

    postRegistration: async (req, res) => {
        const Ch_courses = req.body.courses;
        for (var i = 0; i < Ch_courses; i++) {
            const ChosenCourses = await sqlQuery('INSERT INTO registration (student_id, course_id, mark) VALUES (${studentID}, course , NULL)'  );
        }
        
        console.log(req.body);
        return res.redirect('student/allowedCourses', {
            activePath: '/students',
            registration: result
        });

    },

    getAddMarks: async (req, res) => {
        // ..
    },

    postAddMarks: async (req, res) => {
        // ..
    },

    getViewReport: async (req, res) => {
        // ..
    }
};
