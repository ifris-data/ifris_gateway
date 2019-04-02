import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';

import { IfrisGatewayTestModule } from '../../../test.module';
import { IfrisMetricsMonitoringComponent } from 'app/admin/metrics/metrics.component';
import { IfrisMetricsService } from 'app/admin/metrics/metrics.service';

describe('Component Tests', () => {
    describe('IfrisMetricsMonitoringComponent', () => {
        let comp: IfrisMetricsMonitoringComponent;
        let fixture: ComponentFixture<IfrisMetricsMonitoringComponent>;
        let service: IfrisMetricsService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [IfrisGatewayTestModule],
                declarations: [IfrisMetricsMonitoringComponent]
            })
                .overrideTemplate(IfrisMetricsMonitoringComponent, '')
                .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(IfrisMetricsMonitoringComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(IfrisMetricsService);
        });

        describe('refresh', () => {
            it('should call refresh on init', () => {
                // GIVEN
                const response = {
                    timers: {
                        service: 'test',
                        unrelatedKey: 'test'
                    },
                    gauges: {
                        'jcache.statistics': {
                            value: 2
                        },
                        unrelatedKey: 'test'
                    }
                };
                spyOn(service, 'getMetrics').and.returnValue(of(response));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.getMetrics).toHaveBeenCalled();
            });
        });
    });
});
