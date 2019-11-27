import build from './builder';
import { packages } from './config';

build({
    scope: '@hpen-jsonapi',
    packages,
}).catch(err => {
    console.error(err);
    process.exit(1);
});
