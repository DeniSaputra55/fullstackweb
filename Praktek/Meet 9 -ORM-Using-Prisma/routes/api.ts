import { Router, Request, Response } from "express";
import BookController from "../controller/book-controller";
const router = Router();

router.get("/", ( req: Request, res: Response) => {
    res.send("Hello Wolrd");
});

router.get('/books', BookController.index);
router.post('/books', BookController.store);
router.put('/books/:id/update', BookController.update);
router.delete('/books/:id/delete',BookController.delete);


export default router;