import express, { Response, Request } from 'express';

const router = express.Router();

router.get('/champions', (req: Request, res: Response) => {
  console.log('teste champion');
  res.json({
    msg: "ola"
  });
})

export default router;