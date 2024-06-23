import { ApiProperty } from '@nestjs/swagger'
import { IsString, MinLength } from 'class-validator'

export class CreateTrainerDTO {
    @ApiProperty()
    @IsString()
    @MinLength(3)
    name: string
    @ApiProperty()
    @IsString()
    location: string
}
