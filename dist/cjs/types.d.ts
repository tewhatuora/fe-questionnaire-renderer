import React from 'react';
import { Params } from 'react-router-dom';
import { AddressDetails } from './components/formComponents/Address/types';
import { IExtension, IQuestionnaire, IQuestionnaire_Item } from './types/fhir';
export declare enum AccordionButtonFontSizes {
    small = "small",
    large = "large"
}
export declare enum AccordionDetailBackgroundColors {
    blue = "blue",
    white = "white"
}
export declare enum ButtonVariantTypes {
    add = "add",
    edit = "edit",
    delete = "delete",
    link = "link",
    primary = "primary",
    tag = "tag",
    tertiary = "tertiary"
}
export declare enum Extensions {
    addressExtension = "addressExtension",
    checkboxGroupWithNoOption = "checkboxGroupWithNoOption",
    cmsExtension = "cmsExtension",
    cmsProjectIdExtension = "cmsProjectIdExtension",
    dateInputExtension = "dateInputExtension",
    dateOfBirthExtension = "dateOfBirthExtension",
    dividerExtension = "dividerExtension",
    noOptionExtension = "noOptionExtension",
    progressIndicatorExtension = "progressIndicatorExtension",
    soloCheckboxExtension = "soloCheckboxExtension",
    themeExtension = "themeExtension",
    validationExtension = "validationExtension"
}
export declare enum ValidationExtensions {
    validationDateOfBirth = "validationDateOfBirth",
    validationDateMaxPeriod = "validationDateMaxPeriod",
    validationDateMaxPeriodValue = "validationDateMaxPeriodValue",
    validationForbiddenCharacters = "validationForbiddenCharacters",
    validationRequired = "validationRequired",
    validationTrueValue = "validationTrueValue"
}
export interface AddressAutocompleteInputProps {
    id: string;
    isInvalid: boolean;
    name: string;
    onBlur: () => void;
    onClear: () => void;
    onSelect: (address: AddressDetails) => void;
    value: string;
}
export interface ButtonAttribute {
    content?: string;
    href?: string;
    shouldSave?: boolean;
    shouldValidate?: boolean;
    variant: ButtonVariantTypes;
    onClick?(): Promise<void>;
}
export interface CMSContextProps {
    [key: string]: any;
}
export interface FormInputComponents {
    AddressAutocompleteInput?: (props: AddressAutocompleteInputProps) => JSX.Element;
    TextInput?: (props: React.InputHTMLAttributes<HTMLTextAreaElement | HTMLInputElement>) => JSX.Element;
}
export interface FormValues {
    [key: string]: any;
}
export interface Input extends IQuestionnaire_Item {
    indexRepeat?: number;
    isFormSection?: boolean;
    isLastElemFormSection?: boolean;
    linkIdWithParent?: string;
    questionnairePosition?: string;
}
export interface InputOption {
    id: string;
    label: string;
    value: string;
}
export interface NavigationState {
    editFromReview?: boolean;
    shouldKeepState?: boolean;
}
export interface PhoneNumber {
    countryCallingCode: string;
    nationalNumber: string;
    number: string;
    country: string;
}
export interface PreviousNextProps {
    formData?: FormValues;
    params: Params;
    questionnaire?: IQuestionnaire;
    isNext: boolean;
}
export interface Questionnaire extends IQuestionnaire {
    item?: Input[];
}
export interface ValidateFieldProps {
    extension?: IExtension;
    fieldName?: string;
    formValues: FormValues;
    key?: string;
    minValue?: number;
    maxValue?: number;
    params: Params;
    value: any;
}
