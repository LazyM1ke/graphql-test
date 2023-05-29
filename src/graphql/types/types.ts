import { UUID } from 'crypto';

export enum ValueTypeEnum {
  NUMBER,
  STRING,
  BOOLEAN,
  DATE_TIME,
  GUID,
  RANGE,
  LIST,
  CATALOG,
}

export interface ParamGroup {
  groupName: string;
  id: UUID;
  objTemplate: objTemplate;
  objTemplateId: UUID;
  sortPosition: number;
}

export interface paramTemplate {
  objTemplateId: UUID;
  name: string;
  fullName?: string;
  shortName?: string;
  code?: string;
  isArchive?: boolean;
  isSystem?: boolean;
  // unitId: UUID
  // unit: Unit
  //  paramSettings: ParamSettings!
  valueType: any;
  objTemplate?: objTemplate;
  paramGroupId: UUID;
  paramGroup: ParamGroup;
  order?: number;
  // listValues: [ListValue!]!
  // rangeValues: [RangeValue!]!
  // catalogValue: CatalogValue
  isRemoved: boolean;
  isActive: boolean;
  id: string | any;
}

export interface objTemplate {
  isSystem?: boolean;
  name: string;
  fullName?: string;
  shortName?: string;
  code?: string;
  isActive: boolean;
  createdAt?: Date;
  groupId?: string | any;
  paramTemplates?: paramTemplate[];
  isRemoved?: boolean;
  id: string | any;
}
