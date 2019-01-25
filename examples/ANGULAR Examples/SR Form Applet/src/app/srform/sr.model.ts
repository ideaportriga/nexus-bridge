import { AbstractRecordModel } from '../abstract-record';
import { RecordModelStringField, RecordModelDateField, AbstractRecordModelField } from '../record-model-field';

export class ServiceRequest implements AbstractRecordModel {
    private id = '';
    private fields: AbstractRecordModelField[] = [
        new RecordModelStringField('srNumber', 'SRNumber'),
        new RecordModelStringField('firstName', 'ContactFirstName'),
        new RecordModelStringField('lastName', 'ContactLastName'),
        new RecordModelStringField('assignee', 'Owner'),
        new RecordModelStringField('summary', 'Abstract'),
        new RecordModelStringField('type', 'INS Product', { staticLov: true }),
        new RecordModelStringField('area', 'Area', { dynamicLov: true }),
        new RecordModelStringField('subarea', 'Sub-Area', { dynamicLov: true }),
        new RecordModelStringField('status', 'Status', { staticLov: true }),
        new RecordModelStringField('priority', 'Priority', { staticLov: true }),
        new RecordModelDateField('created', 'Created')
    ]

    getId() {
        return this.id;
    }

    getField(name: string) {
        return this.fields.find(f => f.name === name);
    }

    exists() {
        return !!this.id;
    }

    getFormModel() {
        return this.fields.reduce((m, f) => {
            m[f.name] = f.getValue();
            return m;
        }, {});
    }

    getNexusModel() {
        return this.fields.reduce((m, f) => {
            m[f.siebelControl] = f.getStringValue();
            return m;
        }, { id: '' });
    }

    loadDataFromNexusModel(data: {id: string}) {
        this.id = data.id;
        this.fields.forEach(f => {
            f.setStringValue(data[f.siebelControl].value);
            f.lov = [];
            f.options.required = data[f.siebelControl].required;
            f.options.readonly = data[f.siebelControl].readonly;
        });
    }

    loadLov(field: string, n19: any) {
        const f = this.getField(field);
        if (f.options.staticLov)
            f.lov = n19.getStaticLOV(f.siebelControl);
        else if (f.options.dynamicLov)
            f.lov = n19.getDynamicLOV(f.siebelControl);
    }

    forEachField(fn: (field: AbstractRecordModelField) => void) {
        this.fields.forEach(f => {
            fn(f);
        });
    }
}