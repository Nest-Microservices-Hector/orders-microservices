import { PaginationDto } from "src/common";
import { OrdersStatusList } from "../enum/order.enum";
import { IsEnum, IsOptional } from "class-validator";
import { OrdersStatus } from "@prisma/client";

export class OrderPaginationDto extends PaginationDto{

    @IsOptional()
    @IsEnum( OrdersStatusList,{
        message: `Valid status are ${ OrdersStatusList }`
    })
    status: OrdersStatus;
}