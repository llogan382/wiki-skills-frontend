import { ApiProperty } from "@nestjs/swagger";
import { ContactInfo, UserAccount } from "@prisma/client";

export class CreateUserDto implements UserAccount{
    id: string;

    @ApiProperty({
        description: 'The user password',
        type: String,
        example: 'password'
    })
    password: string;
    createdAt: Date;
    updatedAt: Date;
    @ApiProperty({
        description: 'The user name',
        type: String,
        example: 'Alan James'
    })
    name: string;

    @ApiProperty({
        description: 'The user email',
        type: String,
        example: 'alan@email.com'
    })
    email: string;
    




}
