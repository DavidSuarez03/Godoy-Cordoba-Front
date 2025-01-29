export class LoginDto {
    email!: string;
    password!: string;
}
export interface UserDto {
    id: number;
    name: string;
    lastName: string;
    identification: string;
    email: string;
    lastConnectionDate: Date; 
    password: string;
}