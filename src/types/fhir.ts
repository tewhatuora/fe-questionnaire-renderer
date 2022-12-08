/* eslint-disable @typescript-eslint/naming-convention */

// Extracted from the library to reduce the size of our bundle
// https://github.com/Ahryman40k/typescript-fhir-types

export enum AddressUseKind {
  _home = 'home',
  _work = 'work',
  _temp = 'temp',
  _old = 'old',
  _billing = 'billing'
}

export enum AddressTypeKind {
  _postal = 'postal',
  _physical = 'physical',
  _both = 'both'
}

export enum AgeComparatorKind {
  _lower = 'Lower',
  _lowerOrEqual = 'LowerOrEqual',
  _greaterOrEqual = 'GreaterOrEqual',
  _greater = 'Greater'
}

export enum ContactPointSystemKind {
  _phone = 'phone',
  _fax = 'fax',
  _email = 'email',
  _pager = 'pager',
  _url = 'url',
  _sms = 'sms',
  _other = 'other'
}

export enum ContactPointUseKind {
  _home = 'home',
  _work = 'work',
  _temp = 'temp',
  _old = 'old',
  _mobile = 'mobile'
}

export enum ContributorTypeKind {
  _author = 'author',
  _editor = 'editor',
  _reviewer = 'reviewer',
  _endorser = 'endorser'
}

export enum CountComparatorKind {
  _lower = 'Lower',
  _lowerOrEqual = 'LowerOrEqual',
  _greaterOrEqual = 'GreaterOrEqual',
  _greater = 'Greater'
}

export enum DataRequirement_SortDirectionKind {
  _ascending = 'ascending',
  _descending = 'descending'
}

export enum DistanceComparatorKind {
  _lower = 'Lower',
  _lowerOrEqual = 'LowerOrEqual',
  _greaterOrEqual = 'GreaterOrEqual',
  _greater = 'Greater'
}

export enum DurationComparatorKind {
  _lower = 'Lower',
  _lowerOrEqual = 'LowerOrEqual',
  _greaterOrEqual = 'GreaterOrEqual',
  _greater = 'Greater'
}

export enum ExpressionLanguageKind {
  _textCql = 'text/cql',
  _textFhirpath = 'text/fhirpath',
  _applicationXFhirQuery = 'application/x-fhir-query'
}

export enum HumanNameUseKind {
  _usual = 'usual',
  _official = 'official',
  _temp = 'temp',
  _nickname = 'nickname',
  _anonymous = 'anonymous',
  _old = 'old',
  _maiden = 'maiden'
}

export enum IdentifierUseKind {
  _usual = 'usual',
  _official = 'official',
  _temp = 'temp',
  _secondary = 'secondary',
  _old = 'old'
}

export enum NarrativeStatusKind {
  _generated = 'generated',
  _extensions = 'extensions',
  _additional = 'additional',
  _empty = 'empty'
}

export enum QuantityComparatorKind {
  _lower = 'Lower',
  _lowerOrEqual = 'LowerOrEqual',
  _greaterOrEqual = 'GreaterOrEqual',
  _greater = 'Greater'
}

export enum Questionnaire_EnableWhenOperatorKind {
  _exists = 'exists',
  _equal = '=',
  _notEqual = '!=',
  _greater = '>',
  _lower = '<',
  _greaterOrEqual = '>=',
  _lowerOrEqual = '<='
}

export enum Questionnaire_ItemEnableBehaviorKind {
  _all = 'all',
  _any = 'any'
}

export enum Questionnaire_ItemTypeKind {
  _group = 'group',
  _display = 'display',
  _boolean = 'boolean',
  _decimal = 'decimal',
  _integer = 'integer',
  _date = 'date',
  _dateTime = 'dateTime',
  _time = 'time',
  _string = 'string',
  _text = 'text',
  _url = 'url',
  _choice = 'choice',
  _openChoice = 'open-choice',
  _attachment = 'attachment',
  _reference = 'reference',
  _quantity = 'quantity'
}

export enum QuestionnaireResponseStatusKind {
  _inProgress = 'in-progress',
  _completed = 'completed',
  _amended = 'amended',
  _enteredInError = 'entered-in-error',
  _stopped = 'stopped'
}

export enum QuestionnaireStatusKind {
  _draft = 'draft',
  _active = 'active',
  _retired = 'retired',
  _unknown = 'unknown'
}

export enum RelatedArtifactTypeKind {
  _documentation = 'documentation',
  _justification = 'justification',
  _citation = 'citation',
  _predecessor = 'predecessor',
  _successor = 'successor',
  _derivedFrom = 'derived-from',
  _dependsOn = 'depends-on',
  _composedOf = 'composed-of'
}

export enum Timing_RepeatWhenKind {
  _morn = 'MORN',
  _mornEarly = 'MORN.early',
  _mornLate = 'MORN.late',
  _noon = 'NOON',
  _aft = 'AFT',
  _aftEarly = 'AFT.early',
  _aftLate = 'AFT.late',
  _eve = 'EVE',
  _eveEarly = 'EVE.early',
  _eveLate = 'EVE.late',
  _night = 'NIGHT',
  _phs = 'PHS',
  _hs = 'HS',
  _wake = 'WAKE',
  _c = 'C',
  _cm = 'CM',
  _cd = 'CD',
  _cv = 'CV',
  _ac = 'AC',
  _acm = 'ACM',
  _acd = 'ACD',
  _acv = 'ACV',
  _pc = 'PC',
  _pcm = 'PCM',
  _pcd = 'PCD',
  _pcv = 'PCV'
}

export enum Timing_RepeatDurationUnitKind {
  _s = 's',
  _min = 'min',
  _h = 'h',
  _d = 'd',
  _wk = 'wk',
  _mo = 'mo',
  _a = 'a'
}

export enum Timing_RepeatPeriodUnitKind {
  _s = 's',
  _min = 'min',
  _h = 'h',
  _d = 'd',
  _wk = 'wk',
  _mo = 'mo',
  _a = 'a'
}

export enum TriggerDefinitionTypeKind {
  _namedEvent = 'named-event',
  _periodic = 'periodic',
  _dataChanged = 'data-changed',
  _dataAdded = 'data-added',
  _dataModified = 'data-modified',
  _dataRemoved = 'data-removed',
  _dataAccessed = 'data-accessed',
  _dataAccessEnded = 'data-access-ended'
}

export interface IAddress {
  id?: string
  extension?: IExtension[]
  use?: AddressUseKind
  _use?: IElement
  type?: AddressTypeKind
  _type?: IElement
  text?: string
  _text?: IElement
  line?: string[]
  _line?: IElement[]
  city?: string
  _city?: IElement
  district?: string
  _district?: IElement
  state?: string
  _state?: IElement
  postalCode?: string
  _postalCode?: IElement
  country?: string
  _country?: IElement
  period?: IPeriod
}

export interface IAge {
  id?: string
  extension?: IExtension[]
  value?: number
  _value?: IElement
  comparator?: AgeComparatorKind
  _comparator?: IElement
  unit?: string
  _unit?: IElement
  system?: string
  _system?: IElement
  code?: string
  _code?: IElement
}

export interface IAnnotation {
  id?: string
  extension?: IExtension[]
  authorReference?: IReference
  authorString?: string
  _authorString?: IElement
  time?: string
  _time?: IElement
  text?: string
  _text?: IElement
}

export interface IAttachment {
  id?: string
  extension?: IExtension[]
  contentType?: string
  _contentType?: IElement
  language?: string
  _language?: IElement
  data?: string
  _data?: IElement
  url?: string
  _url?: IElement
  size?: number
  _size?: IElement
  hash?: string
  _hash?: IElement
  title?: string
  _title?: IElement
  creation?: string
  _creation?: IElement
}

export interface ICodeableConcept {
  id?: string
  extension?: IExtension[]
  coding?: ICoding[]
  text?: string
  _text?: IElement
}

export interface ICoding {
  id?: string
  extension?: IExtension[]
  system?: string
  _system?: IElement
  version?: string
  _version?: IElement
  code?: string
  _code?: IElement
  display?: string
  _display?: IElement
  userSelected?: boolean
  _userSelected?: IElement
}

export interface IContactDetail {
  id?: string
  extension?: IExtension[]
  name?: string
  _name?: IElement
  telecom?: IContactPoint[]
}

export interface IContactPoint {
  id?: string
  extension?: IExtension[]
  system?: ContactPointSystemKind
  _system?: IElement
  value?: string
  _value?: IElement
  use?: ContactPointUseKind
  _use?: IElement
  rank?: number
  _rank?: IElement
  period?: IPeriod
}

export interface IContributor {
  id?: string
  extension?: IExtension[]
  type?: ContributorTypeKind
  _type?: IElement
  name?: string
  _name?: IElement
  contact?: IContactDetail[]
}

export interface ICount {
  id?: string
  extension?: IExtension[]
  value?: number
  _value?: IElement
  comparator?: CountComparatorKind
  _comparator?: IElement
  unit?: string
  _unit?: IElement
  system?: string
  _system?: IElement
  code?: string
  _code?: IElement
}

export interface IDataRequirement {
  id?: string
  extension?: IExtension[]
  type?: string
  _type?: IElement
  profile?: string[]
  subjectCodeableConcept?: ICodeableConcept
  subjectReference?: IReference
  mustSupport?: string[]
  _mustSupport?: IElement[]
  codeFilter?: IDataRequirement_CodeFilter[]
  dateFilter?: IDataRequirement_DateFilter[]
  limit?: number
  _limit?: IElement
  sort?: IDataRequirement_Sort[]
}

export interface IDataRequirement_CodeFilter {
  id?: string
  extension?: IExtension[]
  modifierExtension?: IExtension[]
  path?: string
  _path?: IElement
  searchParam?: string
  _searchParam?: IElement
  valueSet?: string
  code?: ICoding[]
}

export interface IDataRequirement_DateFilter {
  id?: string
  extension?: IExtension[]
  modifierExtension?: IExtension[]
  path?: string
  _path?: IElement
  searchParam?: string
  _searchParam?: IElement
  valueDateTime?: string
  _valueDateTime?: IElement
  valuePeriod?: IPeriod
  valueDuration?: IDuration
}

export interface IDataRequirement_Sort {
  id?: string
  extension?: IExtension[]
  modifierExtension?: IExtension[]
  path?: string
  _path?: IElement
  direction?: DataRequirement_SortDirectionKind
  _direction?: IElement
}

export interface IDistance {
  id?: string
  extension?: IExtension[]
  value?: number
  _value?: IElement
  comparator?: DistanceComparatorKind
  _comparator?: IElement
  unit?: string
  _unit?: IElement
  system?: string
  _system?: IElement
  code?: string
  _code?: IElement
}

export interface IDomainResource extends IResource {
  text?: INarrative
  contained?: any[] // IResourceList[]
  extension?: IExtension[]
  modifierExtension?: IExtension[]
}

export interface IDosage {
  id?: string
  extension?: IExtension[]
  modifierExtension?: IExtension[]
  sequence?: number
  _sequence?: IElement
  text?: string
  _text?: IElement
  additionalInstruction?: ICodeableConcept[]
  patientInstruction?: string
  _patientInstruction?: IElement
  timing?: ITiming
  asNeededBoolean?: boolean
  _asNeededBoolean?: IElement
  asNeededCodeableConcept?: ICodeableConcept
  site?: ICodeableConcept
  route?: ICodeableConcept
  method?: ICodeableConcept
  doseAndRate?: IDosage_DoseAndRate[]
  maxDosePerPeriod?: IRatio
  maxDosePerAdministration?: IQuantity
  maxDosePerLifetime?: IQuantity
}

export interface IDosage_DoseAndRate {
  id?: string
  extension?: IExtension[]
  modifierExtension?: IExtension[]
  type?: ICodeableConcept
  doseRange?: IRange
  doseQuantity?: IQuantity
  rateRatio?: IRatio
  rateRange?: IRange
  rateQuantity?: IQuantity
}

export interface IDuration {
  id?: string
  extension?: IExtension[]
  value?: number
  _value?: IElement
  comparator?: DurationComparatorKind
  _comparator?: IElement
  unit?: string
  _unit?: IElement
  system?: string
  _system?: IElement
  code?: string
  _code?: IElement
}

export interface IElement {
  id?: string
  extension?: IExtension[]
}

export interface IExpression {
  id?: string
  extension?: IExtension[]
  description?: string
  _description?: IElement
  name?: string
  _name?: IElement
  language?: ExpressionLanguageKind
  _language?: IElement
  expression?: string
  _expression?: IElement
  reference?: string
  _reference?: IElement
}

export interface IExtension {
  id?: string
  extension?: IExtension[]
  url?: string
  _url?: IElement
  valueBase64Binary?: string
  _valueBase64Binary?: IElement
  valueBoolean?: boolean
  _valueBoolean?: IElement
  valueCanonical?: string
  _valueCanonical?: IElement
  valueCode?: string
  _valueCode?: IElement
  valueDate?: string
  _valueDate?: IElement
  valueDateTime?: string
  _valueDateTime?: IElement
  valueDecimal?: number
  _valueDecimal?: IElement
  valueId?: string
  _valueId?: IElement
  valueInstant?: string
  _valueInstant?: IElement
  valueInteger?: number
  _valueInteger?: IElement
  valueMarkdown?: string
  _valueMarkdown?: IElement
  valueOid?: string
  _valueOid?: IElement
  valuePositiveInt?: number
  _valuePositiveInt?: IElement
  valueString?: string
  _valueString?: IElement
  valueTime?: string
  _valueTime?: IElement
  valueUnsignedInt?: number
  _valueUnsignedInt?: IElement
  valueUri?: string
  _valueUri?: IElement
  valueUrl?: string
  _valueUrl?: IElement
  valueUuid?: string
  _valueUuid?: IElement
  valueAddress?: IAddress
  valueAge?: IAge
  valueAnnotation?: IAnnotation
  valueAttachment?: IAttachment
  valueCodeableConcept?: ICodeableConcept
  valueCoding?: ICoding
  valueContactPoint?: IContactPoint
  valueCount?: ICount
  valueDistance?: IDistance
  valueDuration?: IDuration
  valueHumanName?: IHumanName
  valueIdentifier?: IIdentifier
  valueMoney?: IMoney
  valuePeriod?: IPeriod
  valueQuantity?: IQuantity
  valueRange?: IRange
  valueRatio?: IRatio
  valueReference?: IReference
  valueSampledData?: ISampledData
  valueSignature?: ISignature
  valueTiming?: ITiming
  valueContactDetail?: IContactDetail
  valueContributor?: IContributor
  valueDataRequirement?: IDataRequirement
  valueExpression?: IExpression
  valueParameterDefinition?: IParameterDefinition
  valueRelatedArtifact?: IRelatedArtifact
  valueTriggerDefinition?: ITriggerDefinition
  valueUsageContext?: IUsageContext
  valueDosage?: IDosage
}

export interface IHumanName {
  id?: string
  extension?: IExtension[]
  use?: HumanNameUseKind
  _use?: IElement
  text?: string
  _text?: IElement
  family?: string
  _family?: IElement
  given?: string[]
  _given?: IElement[]
  prefix?: string[]
  _prefix?: IElement[]
  suffix?: string[]
  _suffix?: IElement[]
  period?: IPeriod
}

export interface IIdentifier {
  id?: string
  extension?: IExtension[]
  use?: IdentifierUseKind
  _use?: IElement
  type?: ICodeableConcept
  system?: string
  _system?: IElement
  value?: string
  _value?: IElement
  period?: IPeriod
  assigner?: IReference
}

export interface IMeta {
  id?: string
  extension?: IExtension[]
  versionId?: string
  _versionId?: IElement
  lastUpdated?: string
  _lastUpdated?: IElement
  source?: string
  _source?: IElement
  profile?: string[]
  security?: ICoding[]
  tag?: ICoding[]
}

export interface IMoney {
  id?: string
  extension?: IExtension[]
  value?: number
  _value?: IElement
  currency?: string
  _currency?: IElement
}

export interface INarrative {
  div: string
  id?: string
  extension?: IExtension[]
  status?: NarrativeStatusKind
  _status?: IElement
}

export interface IParameterDefinition {
  id?: string
  extension?: IExtension[]
  name?: string
  _name?: IElement
  use?: string
  _use?: IElement
  min?: number
  _min?: IElement
  max?: string
  _max?: IElement
  documentation?: string
  _documentation?: IElement
  type?: string
  _type?: IElement
  profile?: string
}

export interface IPeriod {
  id?: string
  extension?: IExtension[]
  start?: string
  _start?: IElement
  end?: string
  _end?: IElement
}

export interface IQuantity {
  id?: string
  extension?: IExtension[]
  value?: number
  _value?: IElement
  comparator?: QuantityComparatorKind
  _comparator?: IElement
  unit?: string
  _unit?: IElement
  system?: string
  _system?: IElement
  code?: string
  _code?: IElement
}

export interface IQuestionnaire extends IDomainResource {
  resourceType: 'Questionnaire'
  id?: string
  meta?: IMeta
  implicitRules?: string
  _implicitRules?: IElement
  language?: string
  _language?: IElement
  text?: INarrative
  contained?: any[] // IResourceList[]
  extension?: IExtension[]
  modifierExtension?: IExtension[]
  url?: string
  _url?: IElement
  identifier?: IIdentifier[]
  version?: string
  _version?: IElement
  name?: string
  _name?: IElement
  title?: string
  _title?: IElement
  derivedFrom?: string[]
  status?: QuestionnaireStatusKind
  _status?: IElement
  experimental?: boolean
  _experimental?: IElement
  subjectType?: string[]
  _subjectType?: IElement[]
  date?: string
  _date?: IElement
  publisher?: string
  _publisher?: IElement
  contact?: IContactDetail[]
  description?: string
  _description?: IElement
  useContext?: IUsageContext[]
  jurisdiction?: ICodeableConcept[]
  purpose?: string
  _purpose?: IElement
  copyright?: string
  _copyright?: IElement
  approvalDate?: string
  _approvalDate?: IElement
  lastReviewDate?: string
  _lastReviewDate?: IElement
  effectivePeriod?: IPeriod
  code?: ICoding[]
  item?: IQuestionnaire_Item[]
}

export interface IQuestionnaire_AnswerOption {
  id?: string
  extension?: IExtension[]
  modifierExtension?: IExtension[]
  valueInteger?: number
  _valueInteger?: IElement
  valueDate?: string
  _valueDate?: IElement
  valueTime?: string
  _valueTime?: IElement
  valueString?: string
  _valueString?: IElement
  valueCoding?: ICoding
  valueReference?: IReference
  initialSelected?: boolean
  _initialSelected?: IElement
}

export interface IQuestionnaire_EnableWhen {
  id?: string
  extension?: IExtension[]
  modifierExtension?: IExtension[]
  question?: string
  _question?: IElement
  operator?: Questionnaire_EnableWhenOperatorKind
  _operator?: IElement
  answerBoolean?: boolean
  _answerBoolean?: IElement
  answerDecimal?: number
  _answerDecimal?: IElement
  answerInteger?: number
  _answerInteger?: IElement
  answerDate?: string
  _answerDate?: IElement
  answerDateTime?: string
  _answerDateTime?: IElement
  answerTime?: string
  _answerTime?: IElement
  answerString?: string
  _answerString?: IElement
  answerCoding?: ICoding
  answerQuantity?: IQuantity
  answerReference?: IReference
}

export interface IQuestionnaire_Initial {
  id?: string
  extension?: IExtension[]
  modifierExtension?: IExtension[]
  valueBoolean?: boolean
  _valueBoolean?: IElement
  valueDecimal?: number
  _valueDecimal?: IElement
  valueInteger?: number
  _valueInteger?: IElement
  valueDate?: string
  _valueDate?: IElement
  valueDateTime?: string
  _valueDateTime?: IElement
  valueTime?: string
  _valueTime?: IElement
  valueString?: string
  _valueString?: IElement
  valueUri?: string
  _valueUri?: IElement
  valueAttachment?: IAttachment
  valueCoding?: ICoding
  valueQuantity?: IQuantity
  valueReference?: IReference
}

export interface IQuestionnaire_Item {
  id?: string
  extension?: IExtension[]
  modifierExtension?: IExtension[]
  linkId?: string
  _linkId?: IElement
  definition?: string
  _definition?: IElement
  code?: ICoding[]
  prefix?: string
  _prefix?: IElement
  text?: string
  _text?: IElement
  type?: Questionnaire_ItemTypeKind
  _type?: IElement
  enableWhen?: IQuestionnaire_EnableWhen[]
  enableBehavior?: Questionnaire_ItemEnableBehaviorKind
  _enableBehavior?: IElement
  required?: boolean
  _required?: IElement
  repeats?: boolean
  _repeats?: IElement
  readOnly?: boolean
  _readOnly?: IElement
  maxLength?: number
  _maxLength?: IElement
  answerValueSet?: string
  answerOption?: IQuestionnaire_AnswerOption[]
  initial?: IQuestionnaire_Initial[]
  item?: IQuestionnaire_Item[]
}

export interface IQuestionnaireResponse extends IDomainResource {
  resourceType: 'QuestionnaireResponse'
  id?: string
  meta?: IMeta
  implicitRules?: string
  _implicitRules?: IElement
  language?: string
  _language?: IElement
  text?: INarrative
  contained?: any[] // IResourceList[]
  extension?: IExtension[]
  modifierExtension?: IExtension[]
  identifier?: IIdentifier
  basedOn?: IReference[]
  partOf?: IReference[]
  questionnaire?: string
  status?: QuestionnaireResponseStatusKind
  _status?: IElement
  subject?: IReference
  encounter?: IReference
  authored?: string
  _authored?: IElement
  author?: IReference
  source?: IReference
  item?: IQuestionnaireResponse_Item[]
}

export interface IQuestionnaireResponse_Answer {
  id?: string
  extension?: IExtension[]
  modifierExtension?: IExtension[]
  valueBoolean?: boolean
  _valueBoolean?: IElement
  valueDecimal?: number
  _valueDecimal?: IElement
  valueInteger?: number
  _valueInteger?: IElement
  valueDate?: string
  _valueDate?: IElement
  valueDateTime?: string
  _valueDateTime?: IElement
  valueTime?: string
  _valueTime?: IElement
  valueString?: string
  _valueString?: IElement
  valueUri?: string
  _valueUri?: IElement
  valueAttachment?: IAttachment
  valueCoding?: ICoding
  valueQuantity?: IQuantity
  valueReference?: IReference
  item?: IQuestionnaireResponse_Item[]
}

export interface IQuestionnaireResponse_Item {
  id?: string
  extension?: IExtension[]
  modifierExtension?: IExtension[]
  linkId?: string
  _linkId?: IElement
  definition?: string
  _definition?: IElement
  text?: string
  _text?: IElement
  answer?: IQuestionnaireResponse_Answer[]
  item?: IQuestionnaireResponse_Item[]
}

export interface IRange {
  id?: string
  extension?: IExtension[]
  low?: IQuantity
  high?: IQuantity
}

export interface IRatio {
  id?: string
  extension?: IExtension[]
  numerator?: IQuantity
  denominator?: IQuantity
}

export interface IReference {
  id?: string
  extension?: IExtension[]
  reference?: string
  _reference?: IElement
  type?: string
  _type?: IElement
  identifier?: IIdentifier
  display?: string
  _display?: IElement
}

export interface IRelatedArtifact {
  id?: string
  extension?: IExtension[]
  type?: RelatedArtifactTypeKind
  _type?: IElement
  label?: string
  _label?: IElement
  display?: string
  _display?: IElement
  citation?: string
  _citation?: IElement
  url?: string
  _url?: IElement
  document?: IAttachment
  resource?: string
}

export interface IResource {
  id?: string
  meta?: IMeta
  implicitRules?: string
  _implicitRules?: IElement
  language?: string
  _language?: IElement
}

export interface ISampledData {
  origin: IQuantity
  id?: string
  extension?: IExtension[]
  period?: number
  _period?: IElement
  factor?: number
  _factor?: IElement
  lowerLimit?: number
  _lowerLimit?: IElement
  upperLimit?: number
  _upperLimit?: IElement
  dimensions?: number
  _dimensions?: IElement
  data?: string
  _data?: IElement
}

export interface ISignature {
  type: ICoding[]
  who: IReference
  id?: string
  extension?: IExtension[]
  when?: string
  _when?: IElement
  onBehalfOf?: IReference
  targetFormat?: string
  _targetFormat?: IElement
  sigFormat?: string
  _sigFormat?: IElement
  data?: string
  _data?: IElement
}

export interface ITiming {
  id?: string
  extension?: IExtension[]
  modifierExtension?: IExtension[]
  event?: string[]
  _event?: IElement[]
  repeat?: ITiming_Repeat
  code?: ICodeableConcept
}

export interface ITiming_Repeat {
  id?: string
  extension?: IExtension[]
  modifierExtension?: IExtension[]
  boundsDuration?: IDuration
  boundsRange?: IRange
  boundsPeriod?: IPeriod
  count?: number
  _count?: IElement
  countMax?: number
  _countMax?: IElement
  duration?: number
  _duration?: IElement
  durationMax?: number
  _durationMax?: IElement
  durationUnit?: Timing_RepeatDurationUnitKind
  _durationUnit?: IElement
  frequency?: number
  _frequency?: IElement
  frequencyMax?: number
  _frequencyMax?: IElement
  period?: number
  _period?: IElement
  periodMax?: number
  _periodMax?: IElement
  periodUnit?: Timing_RepeatPeriodUnitKind
  _periodUnit?: IElement
  dayOfWeek?: string[]
  _dayOfWeek?: IElement[]
  timeOfDay?: string[]
  _timeOfDay?: IElement[]
  when?: Timing_RepeatWhenKind[]
  _when?: IElement[]
  offset?: number
  _offset?: IElement
}

export interface ITriggerDefinition {
  id?: string
  extension?: IExtension[]
  type?: TriggerDefinitionTypeKind
  _type?: IElement
  name?: string
  _name?: IElement
  timingTiming?: ITiming
  timingReference?: IReference
  timingDate?: string
  _timingDate?: IElement
  timingDateTime?: string
  _timingDateTime?: IElement
  data?: IDataRequirement[]
  condition?: IExpression
}

export interface IUsageContext {
  code: ICoding
  id?: string
  extension?: IExtension[]
  valueCodeableConcept?: ICodeableConcept
  valueQuantity?: IQuantity
  valueRange?: IRange
  valueReference?: IReference
}
