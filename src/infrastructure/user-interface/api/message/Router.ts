import "reflect-metadata";
import container from '@/inversify.config';
import express, { Router } from "express";
import { SendMessageController } from '@/infrastructure/user-interface/api/message/SendMessageController';

const sendMessageController = container.get<SendMessageController>(SendMessageController);

const router: Router = express.Router();

router.get('/send', sendMessageController.invoke.bind(sendMessageController));

export default router;