import { IsNumber, IsString, IsDate } from "class-validator";
import { Type } from 'class-transformer';

export class CreateTaskDto {
    @IsString()
    readonly title: string;
    @IsString()
    readonly description: string;
    @Type(() => Date)
    @IsDate()
    readonly date: Date;
    @IsNumber()
    readonly priority: number;
}
