const sqlQuery = require('../config/db');

module.exports = {
    getCourses: async (req, res) => {
        // ..
        return res.render('course/list', {
            activePath: '/courses',
            // ..
        });
    }
};
