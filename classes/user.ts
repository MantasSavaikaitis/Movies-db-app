import PrismaObj from '../prisma/script';

export interface UserProps {
  id: number;
  name?: string;
  surname?: string;
  regDate?: Date;
}
export class User {
  userId: number;
  userName?: string;
  userSurname?: string;
  regDate?: Date;

  constructor(UserProps: UserProps) {
    this.userId = UserProps.id;
    this.userName = UserProps.name;
    this.userSurname = UserProps.surname;
    this.regDate = UserProps.regDate;
  }
  getUser() {
    return PrismaObj.prismaQuery(async () => {
      const user = await PrismaObj.prismaClientObj.user.findFirst({
        where: {
          id: this.userId,
        },
      });
      if (user) return user;
      else throw new Error('user retrieval falt');
    });
  }
}
