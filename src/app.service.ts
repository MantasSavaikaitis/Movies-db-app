import { Injectable } from '@nestjs/common';
import { User, UserProps } from 'classes/user';

@Injectable()
export class AppService {
  async getUser(email: string) {
    try {
      console.log('service id ===');
      const user = await new User({ email: email }).getUser();
      return user;
    } catch (error) {
      console.log('error ===', error);
    }
  }
}
