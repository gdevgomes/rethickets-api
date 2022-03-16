import { Router } from 'express';
import eventsRoutes from './events'
import userRoutes from './user'
import authRoutes from './auth'

const router: Router = Router();

router.use('/events', eventsRoutes)
router.use('/user', userRoutes)
router.use('/auth', authRoutes)

export default router;