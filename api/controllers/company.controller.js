const db = require('../models')
const Companies = db.companies
const Op = db.Sequelize.Op

exports.create = (req, res) => {
  const company = {
    company_name: req.body.company_name,
    company_address: req.body.company_address,
    contact_id: parseInt(req.params.companyId),
  }

  Companies.create(company)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the company.',
      })
    })
}

exports.findAll = (req, res) => {
  Companies.findAll()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving companies.',
      })
    })
}

exports.findOne = (req, res) => {
  const id = parseInt(req.params.companyId)

  Companies.findAll({
    where: { contact_id: id },
  })
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving company with id=' + id,
        error: err,
      })
    })
}

exports.update = (req, res) => {
  const id = parseInt(req.params.companyId)

  Companies.update(req.body, {
    where: { company_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Company was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Company with id=${id}. Maybe the company was not found or the request body is empty.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Company with id=' + id,
      })
    })
}

exports.delete = (req, res) => {
  const id = parseInt(req.params.companyId)

  Companies.destroy({
    where: { company_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Company was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Company with id=${id}. Maybe the company was not found.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Company with id=' + id,
      })
    })
}
