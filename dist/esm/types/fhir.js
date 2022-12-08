/* eslint-disable @typescript-eslint/naming-convention */
// Extracted from the library to reduce the size of our bundle
// https://github.com/Ahryman40k/typescript-fhir-types
export var AddressUseKind;
(function (AddressUseKind) {
    AddressUseKind["_home"] = "home";
    AddressUseKind["_work"] = "work";
    AddressUseKind["_temp"] = "temp";
    AddressUseKind["_old"] = "old";
    AddressUseKind["_billing"] = "billing";
})(AddressUseKind || (AddressUseKind = {}));
export var AddressTypeKind;
(function (AddressTypeKind) {
    AddressTypeKind["_postal"] = "postal";
    AddressTypeKind["_physical"] = "physical";
    AddressTypeKind["_both"] = "both";
})(AddressTypeKind || (AddressTypeKind = {}));
export var AgeComparatorKind;
(function (AgeComparatorKind) {
    AgeComparatorKind["_lower"] = "Lower";
    AgeComparatorKind["_lowerOrEqual"] = "LowerOrEqual";
    AgeComparatorKind["_greaterOrEqual"] = "GreaterOrEqual";
    AgeComparatorKind["_greater"] = "Greater";
})(AgeComparatorKind || (AgeComparatorKind = {}));
export var ContactPointSystemKind;
(function (ContactPointSystemKind) {
    ContactPointSystemKind["_phone"] = "phone";
    ContactPointSystemKind["_fax"] = "fax";
    ContactPointSystemKind["_email"] = "email";
    ContactPointSystemKind["_pager"] = "pager";
    ContactPointSystemKind["_url"] = "url";
    ContactPointSystemKind["_sms"] = "sms";
    ContactPointSystemKind["_other"] = "other";
})(ContactPointSystemKind || (ContactPointSystemKind = {}));
export var ContactPointUseKind;
(function (ContactPointUseKind) {
    ContactPointUseKind["_home"] = "home";
    ContactPointUseKind["_work"] = "work";
    ContactPointUseKind["_temp"] = "temp";
    ContactPointUseKind["_old"] = "old";
    ContactPointUseKind["_mobile"] = "mobile";
})(ContactPointUseKind || (ContactPointUseKind = {}));
export var ContributorTypeKind;
(function (ContributorTypeKind) {
    ContributorTypeKind["_author"] = "author";
    ContributorTypeKind["_editor"] = "editor";
    ContributorTypeKind["_reviewer"] = "reviewer";
    ContributorTypeKind["_endorser"] = "endorser";
})(ContributorTypeKind || (ContributorTypeKind = {}));
export var CountComparatorKind;
(function (CountComparatorKind) {
    CountComparatorKind["_lower"] = "Lower";
    CountComparatorKind["_lowerOrEqual"] = "LowerOrEqual";
    CountComparatorKind["_greaterOrEqual"] = "GreaterOrEqual";
    CountComparatorKind["_greater"] = "Greater";
})(CountComparatorKind || (CountComparatorKind = {}));
export var DataRequirement_SortDirectionKind;
(function (DataRequirement_SortDirectionKind) {
    DataRequirement_SortDirectionKind["_ascending"] = "ascending";
    DataRequirement_SortDirectionKind["_descending"] = "descending";
})(DataRequirement_SortDirectionKind || (DataRequirement_SortDirectionKind = {}));
export var DistanceComparatorKind;
(function (DistanceComparatorKind) {
    DistanceComparatorKind["_lower"] = "Lower";
    DistanceComparatorKind["_lowerOrEqual"] = "LowerOrEqual";
    DistanceComparatorKind["_greaterOrEqual"] = "GreaterOrEqual";
    DistanceComparatorKind["_greater"] = "Greater";
})(DistanceComparatorKind || (DistanceComparatorKind = {}));
export var DurationComparatorKind;
(function (DurationComparatorKind) {
    DurationComparatorKind["_lower"] = "Lower";
    DurationComparatorKind["_lowerOrEqual"] = "LowerOrEqual";
    DurationComparatorKind["_greaterOrEqual"] = "GreaterOrEqual";
    DurationComparatorKind["_greater"] = "Greater";
})(DurationComparatorKind || (DurationComparatorKind = {}));
export var ExpressionLanguageKind;
(function (ExpressionLanguageKind) {
    ExpressionLanguageKind["_textCql"] = "text/cql";
    ExpressionLanguageKind["_textFhirpath"] = "text/fhirpath";
    ExpressionLanguageKind["_applicationXFhirQuery"] = "application/x-fhir-query";
})(ExpressionLanguageKind || (ExpressionLanguageKind = {}));
export var HumanNameUseKind;
(function (HumanNameUseKind) {
    HumanNameUseKind["_usual"] = "usual";
    HumanNameUseKind["_official"] = "official";
    HumanNameUseKind["_temp"] = "temp";
    HumanNameUseKind["_nickname"] = "nickname";
    HumanNameUseKind["_anonymous"] = "anonymous";
    HumanNameUseKind["_old"] = "old";
    HumanNameUseKind["_maiden"] = "maiden";
})(HumanNameUseKind || (HumanNameUseKind = {}));
export var IdentifierUseKind;
(function (IdentifierUseKind) {
    IdentifierUseKind["_usual"] = "usual";
    IdentifierUseKind["_official"] = "official";
    IdentifierUseKind["_temp"] = "temp";
    IdentifierUseKind["_secondary"] = "secondary";
    IdentifierUseKind["_old"] = "old";
})(IdentifierUseKind || (IdentifierUseKind = {}));
export var NarrativeStatusKind;
(function (NarrativeStatusKind) {
    NarrativeStatusKind["_generated"] = "generated";
    NarrativeStatusKind["_extensions"] = "extensions";
    NarrativeStatusKind["_additional"] = "additional";
    NarrativeStatusKind["_empty"] = "empty";
})(NarrativeStatusKind || (NarrativeStatusKind = {}));
export var QuantityComparatorKind;
(function (QuantityComparatorKind) {
    QuantityComparatorKind["_lower"] = "Lower";
    QuantityComparatorKind["_lowerOrEqual"] = "LowerOrEqual";
    QuantityComparatorKind["_greaterOrEqual"] = "GreaterOrEqual";
    QuantityComparatorKind["_greater"] = "Greater";
})(QuantityComparatorKind || (QuantityComparatorKind = {}));
export var Questionnaire_EnableWhenOperatorKind;
(function (Questionnaire_EnableWhenOperatorKind) {
    Questionnaire_EnableWhenOperatorKind["_exists"] = "exists";
    Questionnaire_EnableWhenOperatorKind["_equal"] = "=";
    Questionnaire_EnableWhenOperatorKind["_notEqual"] = "!=";
    Questionnaire_EnableWhenOperatorKind["_greater"] = ">";
    Questionnaire_EnableWhenOperatorKind["_lower"] = "<";
    Questionnaire_EnableWhenOperatorKind["_greaterOrEqual"] = ">=";
    Questionnaire_EnableWhenOperatorKind["_lowerOrEqual"] = "<=";
})(Questionnaire_EnableWhenOperatorKind || (Questionnaire_EnableWhenOperatorKind = {}));
export var Questionnaire_ItemEnableBehaviorKind;
(function (Questionnaire_ItemEnableBehaviorKind) {
    Questionnaire_ItemEnableBehaviorKind["_all"] = "all";
    Questionnaire_ItemEnableBehaviorKind["_any"] = "any";
})(Questionnaire_ItemEnableBehaviorKind || (Questionnaire_ItemEnableBehaviorKind = {}));
export var Questionnaire_ItemTypeKind;
(function (Questionnaire_ItemTypeKind) {
    Questionnaire_ItemTypeKind["_group"] = "group";
    Questionnaire_ItemTypeKind["_display"] = "display";
    Questionnaire_ItemTypeKind["_boolean"] = "boolean";
    Questionnaire_ItemTypeKind["_decimal"] = "decimal";
    Questionnaire_ItemTypeKind["_integer"] = "integer";
    Questionnaire_ItemTypeKind["_date"] = "date";
    Questionnaire_ItemTypeKind["_dateTime"] = "dateTime";
    Questionnaire_ItemTypeKind["_time"] = "time";
    Questionnaire_ItemTypeKind["_string"] = "string";
    Questionnaire_ItemTypeKind["_text"] = "text";
    Questionnaire_ItemTypeKind["_url"] = "url";
    Questionnaire_ItemTypeKind["_choice"] = "choice";
    Questionnaire_ItemTypeKind["_openChoice"] = "open-choice";
    Questionnaire_ItemTypeKind["_attachment"] = "attachment";
    Questionnaire_ItemTypeKind["_reference"] = "reference";
    Questionnaire_ItemTypeKind["_quantity"] = "quantity";
})(Questionnaire_ItemTypeKind || (Questionnaire_ItemTypeKind = {}));
export var QuestionnaireResponseStatusKind;
(function (QuestionnaireResponseStatusKind) {
    QuestionnaireResponseStatusKind["_inProgress"] = "in-progress";
    QuestionnaireResponseStatusKind["_completed"] = "completed";
    QuestionnaireResponseStatusKind["_amended"] = "amended";
    QuestionnaireResponseStatusKind["_enteredInError"] = "entered-in-error";
    QuestionnaireResponseStatusKind["_stopped"] = "stopped";
})(QuestionnaireResponseStatusKind || (QuestionnaireResponseStatusKind = {}));
export var QuestionnaireStatusKind;
(function (QuestionnaireStatusKind) {
    QuestionnaireStatusKind["_draft"] = "draft";
    QuestionnaireStatusKind["_active"] = "active";
    QuestionnaireStatusKind["_retired"] = "retired";
    QuestionnaireStatusKind["_unknown"] = "unknown";
})(QuestionnaireStatusKind || (QuestionnaireStatusKind = {}));
export var RelatedArtifactTypeKind;
(function (RelatedArtifactTypeKind) {
    RelatedArtifactTypeKind["_documentation"] = "documentation";
    RelatedArtifactTypeKind["_justification"] = "justification";
    RelatedArtifactTypeKind["_citation"] = "citation";
    RelatedArtifactTypeKind["_predecessor"] = "predecessor";
    RelatedArtifactTypeKind["_successor"] = "successor";
    RelatedArtifactTypeKind["_derivedFrom"] = "derived-from";
    RelatedArtifactTypeKind["_dependsOn"] = "depends-on";
    RelatedArtifactTypeKind["_composedOf"] = "composed-of";
})(RelatedArtifactTypeKind || (RelatedArtifactTypeKind = {}));
export var Timing_RepeatWhenKind;
(function (Timing_RepeatWhenKind) {
    Timing_RepeatWhenKind["_morn"] = "MORN";
    Timing_RepeatWhenKind["_mornEarly"] = "MORN.early";
    Timing_RepeatWhenKind["_mornLate"] = "MORN.late";
    Timing_RepeatWhenKind["_noon"] = "NOON";
    Timing_RepeatWhenKind["_aft"] = "AFT";
    Timing_RepeatWhenKind["_aftEarly"] = "AFT.early";
    Timing_RepeatWhenKind["_aftLate"] = "AFT.late";
    Timing_RepeatWhenKind["_eve"] = "EVE";
    Timing_RepeatWhenKind["_eveEarly"] = "EVE.early";
    Timing_RepeatWhenKind["_eveLate"] = "EVE.late";
    Timing_RepeatWhenKind["_night"] = "NIGHT";
    Timing_RepeatWhenKind["_phs"] = "PHS";
    Timing_RepeatWhenKind["_hs"] = "HS";
    Timing_RepeatWhenKind["_wake"] = "WAKE";
    Timing_RepeatWhenKind["_c"] = "C";
    Timing_RepeatWhenKind["_cm"] = "CM";
    Timing_RepeatWhenKind["_cd"] = "CD";
    Timing_RepeatWhenKind["_cv"] = "CV";
    Timing_RepeatWhenKind["_ac"] = "AC";
    Timing_RepeatWhenKind["_acm"] = "ACM";
    Timing_RepeatWhenKind["_acd"] = "ACD";
    Timing_RepeatWhenKind["_acv"] = "ACV";
    Timing_RepeatWhenKind["_pc"] = "PC";
    Timing_RepeatWhenKind["_pcm"] = "PCM";
    Timing_RepeatWhenKind["_pcd"] = "PCD";
    Timing_RepeatWhenKind["_pcv"] = "PCV";
})(Timing_RepeatWhenKind || (Timing_RepeatWhenKind = {}));
export var Timing_RepeatDurationUnitKind;
(function (Timing_RepeatDurationUnitKind) {
    Timing_RepeatDurationUnitKind["_s"] = "s";
    Timing_RepeatDurationUnitKind["_min"] = "min";
    Timing_RepeatDurationUnitKind["_h"] = "h";
    Timing_RepeatDurationUnitKind["_d"] = "d";
    Timing_RepeatDurationUnitKind["_wk"] = "wk";
    Timing_RepeatDurationUnitKind["_mo"] = "mo";
    Timing_RepeatDurationUnitKind["_a"] = "a";
})(Timing_RepeatDurationUnitKind || (Timing_RepeatDurationUnitKind = {}));
export var Timing_RepeatPeriodUnitKind;
(function (Timing_RepeatPeriodUnitKind) {
    Timing_RepeatPeriodUnitKind["_s"] = "s";
    Timing_RepeatPeriodUnitKind["_min"] = "min";
    Timing_RepeatPeriodUnitKind["_h"] = "h";
    Timing_RepeatPeriodUnitKind["_d"] = "d";
    Timing_RepeatPeriodUnitKind["_wk"] = "wk";
    Timing_RepeatPeriodUnitKind["_mo"] = "mo";
    Timing_RepeatPeriodUnitKind["_a"] = "a";
})(Timing_RepeatPeriodUnitKind || (Timing_RepeatPeriodUnitKind = {}));
export var TriggerDefinitionTypeKind;
(function (TriggerDefinitionTypeKind) {
    TriggerDefinitionTypeKind["_namedEvent"] = "named-event";
    TriggerDefinitionTypeKind["_periodic"] = "periodic";
    TriggerDefinitionTypeKind["_dataChanged"] = "data-changed";
    TriggerDefinitionTypeKind["_dataAdded"] = "data-added";
    TriggerDefinitionTypeKind["_dataModified"] = "data-modified";
    TriggerDefinitionTypeKind["_dataRemoved"] = "data-removed";
    TriggerDefinitionTypeKind["_dataAccessed"] = "data-accessed";
    TriggerDefinitionTypeKind["_dataAccessEnded"] = "data-access-ended";
})(TriggerDefinitionTypeKind || (TriggerDefinitionTypeKind = {}));
//# sourceMappingURL=fhir.js.map