import { Router } from 'express';
import { signup } from 'src/controllers/user/signin-controller';
import { getAllUsers } from 'src/services/user-service';

const router = Router();

router.post('/signup', signup);
router.get('/list', async (_, res) => {
	const users = await getAllUsers();
	res.json({ users });
});

export default router;
