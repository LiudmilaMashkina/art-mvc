const model = require('../models/painting')
//const file = path.join(__dirname, 'db.json')

function getAll (req, res, next) {
    // const contents = fs.readFileSync(file, 'utf-8')
    // const paintings = JSON.parse(contents)

    const limit = req.query.limit
    const data = model.getAll(limit)
    res.status(200).json({ data })
}

function getOne(req, res, next){
    const painting = model.getOne(req.params.id)
    if(painting.data){
      return res.status(200).send({ data: painting.data })
    }
    else if(painting.error){
      return next({ status: 404, message: painting.error })
    }
}

function update(req, res, next) {
    if (!req.body.name) {
        return next({ status: 400, message: "Bad Request" });
    }
    const painting = model.update(req.body.name, req.params.id);

    if (painting.data) {
        return res.status(200).send({data: painting.data});
    }
    else if(painting.error) {
        return next({ status: 404, message: painting.error })
    }
}

function create (req, res, next) {
    const result = model.create(req.body);

    if (result.errors) {
        return next({ status: 400, message: `Could not create, no inspiration`, errors: result.errors });
    }

    res.status(201).json({ data: result });
}

module.exports = { getAll, getOne, update, create };
