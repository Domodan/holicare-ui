export interface FieldData {
    category: string;
    fields: Field[];
}

export interface Field {
    form: Form[];
}

export interface Form {
    label: string;
    type: string;
    options: Option[];
    accept?: string;
}

export interface Option {
    label: string;
    type?: string;
    value: string;
}
