import 'reflect-metadata';
import { createSocketServer } from 'socket-controllers';
import { MessageController } from '@app/controllers/MessageController';

createSocketServer(3001, {
  useClassTransformer: false,
  controllers: [MessageController],
});
