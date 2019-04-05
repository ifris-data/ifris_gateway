/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { IfrisGatewayTestModule } from '../../../../test.module';
import { LoanAccountDetailComponent } from 'app/entities/loanservice/loan-account/loan-account-detail.component';
import { LoanAccount } from 'app/shared/model/loanservice/loan-account.model';

describe('Component Tests', () => {
    describe('LoanAccount Management Detail Component', () => {
        let comp: LoanAccountDetailComponent;
        let fixture: ComponentFixture<LoanAccountDetailComponent>;
        const route = ({ data: of({ loanAccount: new LoanAccount(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [IfrisGatewayTestModule],
                declarations: [LoanAccountDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(LoanAccountDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(LoanAccountDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.loanAccount).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
