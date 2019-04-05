import { Moment } from 'moment';

export const enum RiskClass {
    NORMAL = 'NORMAL',
    WATCH = 'WATCH',
    SUBSTANDARD = 'SUBSTANDARD',
    DOUBTFUL = 'DOUBTFUL',
    LOSS = 'LOSS'
}

export interface ILoanAccount {
    id?: number;
    sbu?: string;
    rmCode?: string;
    glCode?: string;
    schemeCode?: string;
    customerCode?: string;
    accountNumber?: string;
    accountName?: string;
    currencyCode?: string;
    openingDate?: Moment;
    accountBalance?: number;
    limitAmount?: number;
    systemClassification?: RiskClass;
    userClassification?: RiskClass;
    nominalRate?: number;
    expiryDate?: Moment;
    interestSuspended?: number;
    loanProvision?: number;
    economicSector?: string;
    economicSubSector?: string;
    appraisalMonth?: Moment;
}

export class LoanAccount implements ILoanAccount {
    constructor(
        public id?: number,
        public sbu?: string,
        public rmCode?: string,
        public glCode?: string,
        public schemeCode?: string,
        public customerCode?: string,
        public accountNumber?: string,
        public accountName?: string,
        public currencyCode?: string,
        public openingDate?: Moment,
        public accountBalance?: number,
        public limitAmount?: number,
        public systemClassification?: RiskClass,
        public userClassification?: RiskClass,
        public nominalRate?: number,
        public expiryDate?: Moment,
        public interestSuspended?: number,
        public loanProvision?: number,
        public economicSector?: string,
        public economicSubSector?: string,
        public appraisalMonth?: Moment
    ) {}
}
