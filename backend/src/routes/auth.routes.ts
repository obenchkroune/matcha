import { Router } from 'express';
import { signin } from 'src/controllers/user/signin.controller';

const router = Router();

router.post('/signin', signin);

export default router;
