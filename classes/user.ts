import PrismaObj from '../prisma/script';

export interface UserProps {
  id?: number;
  name?: string;
  surname?: string;
  regDate?: Date;
  email: string;
}
export class User {
  userId?: number;
  userName?: string;
  userSurname?: string;
  regDate?: Date;
  email: string;

  constructor(UserProps: UserProps) {
    this.userId = UserProps.id;
    this.userName = UserProps.name;
    this.userSurname = UserProps.surname;
    this.regDate = UserProps.regDate;
    this.email = UserProps.email;
  }
  getUser() {
    return PrismaObj.prismaQuery(async () => {
      const user = await PrismaObj.prismaClientObj.user.findFirst({
        where: {
          email: this.email,
        },
      });
      if (user) return user;
      else throw new Error('user retrieval falt');
    });
  }
}
