import * as moment from 'moment';

export abstract class AbstractRecordModelField {
    readonly name: string;
    readonly siebelControl: string;
    readonly options: { required?: boolean, readonly?: boolean, staticLov?: boolean,  dynamicLov?: boolean }
    
    lov: string[];

    constructor(name: string, siebelControl: string, options?: {required?: boolean, readonly?: boolean, staticLov?: boolean,  dynamicLov?: boolean}) {
        this.name = name;
        this.siebelControl = siebelControl;
        this.options = options || {};
    }

    abstract getValue(): any;
    abstract setValue(value: any): void;
    abstract getStringValue(): string;
    abstract setStringValue(value: string): void;
}

export class RecordModelStringField extends AbstractRecordModelField {
    private value: string;

    getValue() {
        return this.value;
    }

    setValue(value: string) {
        this.value = value;
    }

    getStringValue() {
        return this.value || '';
    }

    setStringValue(value: string) {
        this.value = value;
    }
}

export class RecordModelDateField extends AbstractRecordModelField {
    private value: moment.Moment;

    getValue() {
        return this.value;
    }

    setValue(value: moment.Moment) {
        this.value = value;
    }

    getStringValue() {
        return this.value && this.value.format("MM/DD/YYYY HH:mm:ss");
    }

    setStringValue(value: string) {
        this.value = moment(value, "MM/DD/YYYY HH:mm:ss");
    }
}