/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { IfrisGatewayTestModule } from '../../../../test.module';
import { LoanAccountDeleteDialogComponent } from 'app/entities/loanservice/loan-account/loan-account-delete-dialog.component';
import { LoanAccountService } from 'app/entities/loanservice/loan-account/loan-account.service';

describe('Component Tests', () => {
    describe('LoanAccount Management Delete Component', () => {
        let comp: LoanAccountDeleteDialogComponent;
        let fixture: ComponentFixture<LoanAccountDeleteDialogComponent>;
        let service: LoanAccountService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [IfrisGatewayTestModule],
                declarations: [LoanAccountDeleteDialogComponent]
            })
                .overrideTemplate(LoanAccountDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(LoanAccountDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(LoanAccountService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});
