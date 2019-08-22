var faker = require('../faker');

module.exports = function (router) {
    router.get('/employee', (req, res) => {
        let employees = [];
        faker.employee.forEach(e => {
          const appraisalResult = faker.appraisalResult.filter(c => c.staffId == e.Id);
          const newEmp = Object.assign(e, appraisalResult[0]);
          employees.push(newEmp);
        })
        res.send(employees);
    })

    router.post('/employee/promotion', (req, res) => {
        res.send(200);
    })

    router.get('/employee/:id/appraisal/result', (req, res) => {
        let staffId = req.params.id;
        const appraisalResult = faker.appraisalResult.filter(e => e.staffId == staffId);
        res.send(appraisalResult);
    })

    router.get('/employee/:id/appraisal/decision', (req, res) => {
        let staffId = req.params.id;
        const appraisalResult = faker.appraisalResult.filter(e => e.staffId == staffId);
        res.send(appraisalResult);
    })
    return router;
}