import { UserEntity } from '@app/user/user.entity';
import { type } from 'os';
type UserType = Omit<UserEntity, 'hashPassword'>;
export interface UserResponseInterface {
  user: UserType & { token: string };
}
