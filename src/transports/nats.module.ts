import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import {  envs, NATS_SERVICES } from 'src/config';

@Module({
    imports: [

        ClientsModule.register([
            {
                name: NATS_SERVICES,
                transport: Transport.NATS,
                options: {
                    servers: envs.natsServers,
                }
            },
        ]),
    ],
    exports: [
        ClientsModule.register([
            {
                name: NATS_SERVICES,
                transport: Transport.NATS,
                options: {
                    servers: envs.natsServers,
                }
            },
        ]),
    ]
})
export class NatsModule { }
