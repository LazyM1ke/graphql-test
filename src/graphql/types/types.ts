export  enum ValueTypeEnum {
    NUMBER,
    STRING,
    BOOLEAN,
    DATE_TIME,
    GUID,
    RANGE,
    LIST,
    CATALOG
}

export interface paramTemplate {
    objTemplateId: string | any ;
    name: String;
    fullName?: String;
    shortName?: String;
    code?: String;
    isArchive?: Boolean;
    isSystem?: Boolean;
    // unitId: UUID
    // unit: Unit
    //  paramSettings: ParamSettings!
    valueType: any;
    // paramGroupId: UUID
    // paramGroup: ParamGroup
    order?: number;
    // listValues: [ListValue!]!
    // rangeValues: [RangeValue!]!
    // catalogValue: CatalogValue
    isRemoved: Boolean;
    isActive: Boolean;
    id: string | any;
}

export interface objTemplate {
    isSystem: Boolean;
    name: String;
    fullName: String;
    shortName: String;
    code: String;
    isActive: Boolean;
    createdAt?: Date;
    groupId?: string | any;
    paramTemplates?: paramTemplate[];
    isRemoved: Boolean;
    id: string | any;
}