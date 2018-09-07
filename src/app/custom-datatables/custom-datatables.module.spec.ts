import { CustomDatatablesModule } from './custom-datatables.module';

describe('CustomDatatablesModule', () => {
  let customDatatablesModule: CustomDatatablesModule;

  beforeEach(() => {
    customDatatablesModule = new CustomDatatablesModule();
  });

  it('should create an instance', () => {
    expect(customDatatablesModule).toBeTruthy();
  });
});
