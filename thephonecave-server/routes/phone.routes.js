const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Phone = require("..models/Phone.model");

// GET - Display all phones
router.get("/", (req, res, next) => {
    Phone.find()
        .then((allPhones) => res.json(allPhones))
        .catch((error) => res.json(error))
});

// GET - Display the details of a Phone
router.get("/:id", (req, res, next) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ message: "This is not a valid id" });
    }

    Phone.findById(id)
        .then((spot) => res.status(200).json(spot))
        .catch((error) => res.json(error));
});
