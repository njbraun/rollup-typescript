// Enable sourcemap support
import { install } from 'source-map-support';
install();

import * as http from 'http';
import * as httpStatus from 'http-status-codes';

const sayIt = (name: string): string => `Hello ${name}!`;

const server = http.createServer(
    (req: http.IncomingMessage, res: http.ServerResponse) => {
        if (req.url === '/throw') {
            throw new Error('Throwin an error.');
        }
        res.statusCode = httpStatus.OK;
        res.setHeader('Content-type', 'text/plain');
        res.end(sayIt('World'));
    }
);

server.listen(3000, '0.0.0.0');
