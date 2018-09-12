let express = require("express");
let http = require("http");
let morgan = require("morgan");

import { Container } from "typedi";
import { UserRepo } from "./domain/repos/user.repo";
import { buildSchema, useContainer } from "type-graphql";
import { GraphQLServer, Options } from "graphql-yoga";
import { UserResolver } from "./application/resolvers/user.resolver";
async function bootstrap() {
    useContainer(Container);
    const schema = await buildSchema({
        // resolvers: [__dirname + "/**/*.resolver.ts"],
        resolvers: [UserResolver],
    });
    const server = new GraphQLServer({ schema });

    // Configure server options
    const serverOptions: Options = {
        port: 4000,
        endpoint: "/graphql",
        playground: "/playground",
    };

    // Start the server
    server.start(serverOptions, ({ port, playground }) => {
        console.log(
            `Server is running, GraphQL Playground available at http://localhost:${port}${playground}`,
        );
    });

    // other initialization code, like creating http server
}
bootstrap();
let app = express();
app.use(morgan("short"));
app.use(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello, World1233!");
});

http.createServer(app).listen(3000);
