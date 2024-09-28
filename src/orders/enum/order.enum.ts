import { OrdersStatus } from "@prisma/client";

export const OrdersStatusList = [
    OrdersStatus.PENDING,
    OrdersStatus.DELIVERED,
    OrdersStatus.CANCELLED,
]