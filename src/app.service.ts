import { Injectable } from '@nestjs/common';
import { User, UserProps } from 'classes/user';

@Injectable()
export class AppService {
  async getUser(id: number) {
    try {
      console.log('service id ===', id);
      const user = await new User({ id: id }).getUser();
      return user;
    } catch (error) {
      console.log('error ===', error);
    }
  }
}
