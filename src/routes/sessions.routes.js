import { Router } from 'express';
import { SessionsController } from '../controllers/session.controller.js';

const router = Router();

router.get('/', SessionsController.getAll);

export default router;
