import { Request, Response,  } from "express";
import { PrismaClient } from "@prisma/client";


class BookController {
    private prisma: PrismaClient;
    constructor() {
        this.prisma = new PrismaClient();
    }

    index = async (_: Request, res: Response) => {
        try {
          const books = await this.prisma.book.findMany();
          res.json(books);
        } catch (error: any) {
          res.status(500).json({ error: error.message });
        }
      };

      store = async (req: Request, res: Response) => {
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
        } catch (error: any) {
            res.status(500).json({ error: error.message })
        }
      }

      update = async (req: Request, res: Response) => {
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
        } catch (error: any) {
          res.status(500).json({ error: error.message });
        }
      }

      delete = async ( req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id);
            await this.prisma.book.delete({
                where: { id: id}
            });
            res.json({ message: 'Book berhasil di hapus '});
            } catch (error: any) {
                res.status(500).json({ error: error.message});
        }
      }
    }

    export default  new BookController();