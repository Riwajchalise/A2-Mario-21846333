// companies.routes.js

module.exports = app => {
    const companies = require("../controllers/company.controller.js");

    var router = require("express").Router();

    // Create a new company
    router.post("/companies", companies.create);

    // Get all companies
    router.get("/companies", companies.findAll);

    // Get a single company by id
    router.get("/companies/:companyId", companies.findOne);

    // Update a company by id
    router.put("/companies/:companyId", companies.update);

    // Delete a company by id
    router.delete("/companies/:companyId", companies.delete);

    app.use('/api', router);
};
