import { expressjwt } from 'express-jwt';
import env from 'src/config/env';

const publicRoutes = ['/api/user/signin'];

export default expressjwt({
	secret: env.JWT_SECRET,
	algorithms: ['HS256'],
}).unless({ path: publicRoutes });
