import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { User } from './user.interface';

export class CreateUserDto implements User {
  @IsNotEmpty({ message: "L'ID est obligatoire" })
  @IsString({ message: "L'ID doit être une chaîne de caractères" })
  id: string;

  @IsEmail({}, { message: "L'email est invalide" })
  email: string;

  lastname: string | null;
  firstname: string | null;
  username: string | null;
}
