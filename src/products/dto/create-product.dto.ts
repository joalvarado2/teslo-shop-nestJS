import { IsString, MinLength, IsNumber, IsPositive, IsOptional, IsArray, IsInt, IsIn } from "class-validator";
import { DeepPartial } from "typeorm";

export class CreateProductDto {

    @IsString()
    @MinLength(1)
    title: string;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    price?: number;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    slug?: string;

    @IsInt()
    @IsPositive()
    @IsOptional()
    stock?: number;

    @IsString({each: true})
    @IsArray()
    sizes: string[];

    @IsIn(['men', 'women', 'kid', 'unisex'])
    gender: string;

    @IsArray()
    @IsOptional()
    tags: DeepPartial<string>[];
}
