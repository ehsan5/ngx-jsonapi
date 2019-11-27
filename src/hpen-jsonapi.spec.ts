import { JsonapiCore, HpenJsonapiModule } from '.';
import { JsonapiConfig } from './jsonapi-config';
/*
  This file is to import the main module. By importing it into this
  spec file, all the attached components get traversed and recognized
  in the code coverage stats.
*/

describe('hpen-jsonapi Module', () => {
    it('should load', () => {
        expect(HpenJsonapiModule).toBeDefined();
    });

    it('should throw error when imported more than once', () => {
        expect(
            (): HpenJsonapiModule => new HpenJsonapiModule(HpenJsonapiModule, new JsonapiCore(new JsonapiConfig(), undefined, undefined))
        ).toThrow('HpenJsonapiModule is already loaded. Import it in the AppModule only');
    });
});
