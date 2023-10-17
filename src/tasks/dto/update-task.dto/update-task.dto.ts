import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";
import { Type } from 'class-transformer';

export class UpdateTaskDto {
    @IsOptional()
    @IsString()
    readonly title?: string;
    @IsOptional()
    @IsString()
    readonly description?: string;
    @IsOptional()
    @Type(() => Date)
    @IsDate()
    readonly date?: Date;
    @IsOptional()
    @IsNumber()
    readonly priority?: number;
}
