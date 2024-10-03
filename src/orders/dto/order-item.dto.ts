import { IsNumber, IsPositive } from "class-validator";

export class OrderTitemDto{

    @IsNumber()
    @IsPositive()
    productId: number;

    @IsNumber()
    @IsPositive()
    quantity: number;

    @IsNumber()
    @IsPositive()
    price: number;
}