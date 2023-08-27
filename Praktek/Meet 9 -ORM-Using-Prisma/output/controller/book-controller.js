"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
class BookController {
    prisma;
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    index = async (_, res) => {
        try {
            const books = await this.prisma.book.findMany();
            res.json(books);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
    store = async (req, res) => {
        const payload = req.body;
        try {
            const book = await this.prisma.book.create({
                data: {
                    title: payload.title,
                    author: payload.author,
                    publisher: payload.publisher,
                    price: payload.price,
                },
            });
            res.json(book);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
    update = async (req, res) => {
        try {
            const payload = req.body;
            const id = parseInt(req.params.id);
            const book = await this.prisma.book.update({
                where: { id: id },
                data: {
                    title: payload.title,
                    author: payload.author,
                    publisher: payload.publisher,
                    price: payload.price,
                }
            });
            res.json(book);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
    delete = async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            await this.prisma.book.delete({
                where: { id: id }
            });
            res.json({ message: 'Book berhasil di hapus ' });
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
}
exports.default = new BookController();
