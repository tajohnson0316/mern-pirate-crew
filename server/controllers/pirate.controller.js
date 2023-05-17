const Pirate = require("../models/pirate.model");

// *** GET ALL ***
module.exports.findAllPirates = (_request, response) => {
  /**
   * .find()
     @param: none 
   */
  Pirate.find()
    .then((allPirates) => {
      let alphabetizedPirates = [];
      const pirateNames = allPirates.map((pirate) => pirate.name).sort();
      for (let pirateName of pirateNames) {
        for (let pirate of allPirates) {
          if (pirate.name == pirateName) {
            alphabetizedPirates.push(pirate);
          }
        }
      }

      console.log({ results: alphabetizedPirates });
      response.status(200).json({ results: alphabetizedPirates });
    })
    .catch((error) => {
      response.status(400).json(error);
    });
};

// *** GET ONE ***
module.exports.findOnePirate = (request, response) => {
  /** 
    .findOne({_id: request.params.id})
    @param: the passed in "id" from the URL
  */
  Pirate.findOne({ _id: request.params.id })
    .then((pirate) => {
      console.log({ results: pirate });
      response.status(200).json({ results: pirate });
    })
    .catch((error) => {
      response.status(400).json(error);
    });
};

// *** CREATE ONE ***
module.exports.createNewPirate = (request, response) => {
  /** 
    .create({request.body})
    @param: the body/data of the client request
  */
  const { name } = request.body;
  Pirate.create({ name })
    .then((newPirate) => {
      console.log({ results: newPirate });
      response.status(200).json({ results: newPirate });
    })
    .catch((error) => {
      response.status(400).json(error);
    });
};

// *** UPDATE ONE ***
module.exports.updateOnePirate = (request, response) => {
  /**
    .findOneAndUpdate({_id: request.params.id}, request.body, {new, runValidators})
    @param: the passed in "id" from the URL
    @param: the body/data of the client request
    @param: update options
  */
  Pirate.updateOne({ _id: request.params.id }, request.body, {
    new: true,
    runValidators: true,
  })
    .then((pirate) => {
      console.log("UPDATE RESULTS ==>", pirate);
      response.status(200).json({ results: pirate });
    })
    .catch((error) => {
      response.status(400).json(error);
    });
};

// *** DELETE ONE ***
module.exports.deleteOnePirate = (request, response) => {
  /**
    .deleteOne({_id: request.params.id})
    @param: the passed in "id" from the URL
  */
  Pirate.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.status(200).json(deleteConfirmation))
    .catch((error) => response.status(400).json(error));
};
