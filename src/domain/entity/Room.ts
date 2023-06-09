import { Uuid } from '@/domain/value-object/Uuid';
import { Message } from '@/domain/entity/Message';

export class Room {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public readonly uuid: Uuid,
    public readonly name: string,
    public readonly messages: Message[],
  ) { }
}
