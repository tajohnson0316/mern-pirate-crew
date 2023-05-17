const pirateController = require("../controllers/pirate.controller");

module.exports = (app) => {
  app.get("/api/pirates", pirateController.findAllPirates);
  app.get("/api/pirates/:id", pirateController.findOnePirate);

  app.post("/api/pirates", pirateController.createNewPirate);

  app.patch("/api/pirates/:id", pirateController.updateOnePirate);

  app.delete("/api/pirates/:id", pirateController.deleteOnePirate);
};
