import { OrdersStatus } from "@prisma/client";
import { IsEnum, IsUUID } from "class-validator";
import { OrdersStatusList } from "../enum/order.enum";

export class ChangeOrderStatusDto{

    @IsUUID(4)
    id: string;

    @IsEnum(OrdersStatusList, {
        message: `valid status are ${ OrdersStatusList }` 
    })
    status: OrdersStatus
}