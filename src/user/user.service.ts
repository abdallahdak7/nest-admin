import { ConflictException, Injectable } from '@nestjs/common';
import { RegisterDto } from 'src/Dtos/registerDto';
import { User } from './model/user.entity';
import { ErrorConstraint } from '../enums/constraints.enum';
import bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  async findAll(): Promise<User[]> {
    return User.find();
  }

  async register(registerDto: RegisterDto): Promise<User> {
    try {
      const { password } = registerDto;

      const hash = async (): Promise<string> => {
        const hashed: string = await bcrypt.hash(password, 12);
        return hashed;
      };
      const hashed = await hash();
      const user: User = User.create({ ...registerDto, password: hashed });
      console.log(user);

      return await user.save();
    } catch (error) {
      if (error.constraint === ErrorConstraint.emailError) {
        throw new ConflictException('Email already exists.');
      }
    }
  }
}
