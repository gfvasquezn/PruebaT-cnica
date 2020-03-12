import { TestBed } from '@angular/core/testing';
import { ServiciosService } from './servicios.service';
describe('ServiciosService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ServiciosService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=servicios.service.spec.js.map