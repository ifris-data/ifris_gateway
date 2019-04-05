import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ILoanAccount } from 'app/shared/model/loanservice/loan-account.model';

type EntityResponseType = HttpResponse<ILoanAccount>;
type EntityArrayResponseType = HttpResponse<ILoanAccount[]>;

@Injectable({ providedIn: 'root' })
export class LoanAccountService {
    public resourceUrl = SERVER_API_URL + 'loanservice/api/loan-accounts';
    public resourceSearchUrl = SERVER_API_URL + 'loanservice/api/_search/loan-accounts';

    constructor(protected http: HttpClient) {}

    create(loanAccount: ILoanAccount): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(loanAccount);
        return this.http
            .post<ILoanAccount>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    update(loanAccount: ILoanAccount): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(loanAccount);
        return this.http
            .put<ILoanAccount>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http
            .get<ILoanAccount>(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http
            .get<ILoanAccount[]>(this.resourceUrl, { params: options, observe: 'response' })
            .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    search(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http
            .get<ILoanAccount[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
            .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    }

    protected convertDateFromClient(loanAccount: ILoanAccount): ILoanAccount {
        const copy: ILoanAccount = Object.assign({}, loanAccount, {
            openingDate:
                loanAccount.openingDate != null && loanAccount.openingDate.isValid() ? loanAccount.openingDate.format(DATE_FORMAT) : null,
            expiryDate:
                loanAccount.expiryDate != null && loanAccount.expiryDate.isValid() ? loanAccount.expiryDate.format(DATE_FORMAT) : null,
            appraisalMonth:
                loanAccount.appraisalMonth != null && loanAccount.appraisalMonth.isValid()
                    ? loanAccount.appraisalMonth.format(DATE_FORMAT)
                    : null
        });
        return copy;
    }

    protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
        if (res.body) {
            res.body.openingDate = res.body.openingDate != null ? moment(res.body.openingDate) : null;
            res.body.expiryDate = res.body.expiryDate != null ? moment(res.body.expiryDate) : null;
            res.body.appraisalMonth = res.body.appraisalMonth != null ? moment(res.body.appraisalMonth) : null;
        }
        return res;
    }

    protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
        if (res.body) {
            res.body.forEach((loanAccount: ILoanAccount) => {
                loanAccount.openingDate = loanAccount.openingDate != null ? moment(loanAccount.openingDate) : null;
                loanAccount.expiryDate = loanAccount.expiryDate != null ? moment(loanAccount.expiryDate) : null;
                loanAccount.appraisalMonth = loanAccount.appraisalMonth != null ? moment(loanAccount.appraisalMonth) : null;
            });
        }
        return res;
    }
}
