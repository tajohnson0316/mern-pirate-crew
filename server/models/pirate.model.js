const mongoose = require("mongoose");

const pirateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "ARR, matey! All pirates in this crew be needin' a name!"],
    minLength: [
      2,
      "Provide a name at least (2) characters in length, or you'll be walkin' the plank!",
    ],
  },
  imgUrl: {
    type: String,
    required: [
      true,
      "We'll be needing valid picture ID for that ugly mug 'o yours, matey!",
    ],
  },
  totalChests: {
    type: Number,
    required: [
      true,
      "Better disclose how much booty yer bringin' along, or I'll be claiming it myself!",
    ],
    min: [0, "You won't be declaring bankruptcy on my ship, matey!"],
  },
  catchPhrases: {
    type: String,
    required: [
      true,
      "Give us a catchphrase or two to yell during boarding parties!",
    ],
    minLength: [
      3,
      "Catchphrases need at least (3) characters. Them's the rules!",
    ],
  },
  crewPosition: {
    type: String,
    required: [
      true,
      "Tell us where you'll be stationed, or you'll be defaulted to Davy Jones' locker!",
    ],
  },
  pegLeg: {
    type: Boolean,
    required: [true],
  },
  eyePatch: {
    type: Boolean,
    required: [true],
  },
  hookHand: {
    type: Boolean,
    required: [true],
  },
});

module.exports = mongoose.model("Pirate", pirateSchema);
