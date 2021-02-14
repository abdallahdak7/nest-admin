import { RegisterDto } from '../../Dtos/registerDto';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  constructor(registerDto: RegisterDto) {
    super();

    if (registerDto) {
      const { firstname, lastname, email, password } = registerDto;
      this.firstname = firstname;
      this.lastname = lastname;
      this.email = email;
      this.password = password;
    }
  }
}
