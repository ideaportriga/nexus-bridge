import { AbstractRecordModelField } from './record-model-field';

export interface AbstractRecordModel {
    getId(): string;
    getField(name: string): AbstractRecordModelField;
    getFormModel(): {};
    getNexusModel(): {};
    loadDataFromNexusModel(data: {}): void;
}