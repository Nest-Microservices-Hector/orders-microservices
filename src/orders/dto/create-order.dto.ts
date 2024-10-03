import { OrdersStatus } from "@prisma/client";
import { ArrayMinSize, IsArray, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { OrderTitemDto } from "./order-item.dto";


export class CreateOrderDto {

    @IsArray()
    @ArrayMinSize(1)
    @ValidateNested({ each: true })
    @Type( ()=> OrderTitemDto)
    items: OrderTitemDto[]

}
