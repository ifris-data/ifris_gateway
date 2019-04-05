/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { IfrisGatewayTestModule } from '../../../../test.module';
import { LoanAccountUpdateComponent } from 'app/entities/loanservice/loan-account/loan-account-update.component';
import { LoanAccountService } from 'app/entities/loanservice/loan-account/loan-account.service';
import { LoanAccount } from 'app/shared/model/loanservice/loan-account.model';

describe('Component Tests', () => {
    describe('LoanAccount Management Update Component', () => {
        let comp: LoanAccountUpdateComponent;
        let fixture: ComponentFixture<LoanAccountUpdateComponent>;
        let service: LoanAccountService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [IfrisGatewayTestModule],
                declarations: [LoanAccountUpdateComponent]
            })
                .overrideTemplate(LoanAccountUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(LoanAccountUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(LoanAccountService);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity', fakeAsync(() => {
                // GIVEN
                const entity = new LoanAccount(123);
                spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.loanAccount = entity;
                // WHEN
                comp.save();
                tick(); // simulate async

                // THEN
                expect(service.update).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));

            it('Should call create service on save for new entity', fakeAsync(() => {
                // GIVEN
                const entity = new LoanAccount();
                spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.loanAccount = entity;
                // WHEN
                comp.save();
                tick(); // simulate async

                // THEN
                expect(service.create).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));
        });
    });
});
