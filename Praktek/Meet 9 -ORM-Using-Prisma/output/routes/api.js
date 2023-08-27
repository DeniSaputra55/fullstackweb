"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const book_controller_1 = __importDefault(require("../controller/book-controller"));
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send("Hello Wolrd");
});
router.get('/books', book_controller_1.default.index);
router.post('/books', book_controller_1.default.store);
router.put('/books/:id/update', book_controller_1.default.update);
router.delete('/books/:id/delete', book_controller_1.default.delete);
exports.default = router;
