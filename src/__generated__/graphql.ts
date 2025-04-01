/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  Long: { input: any; output: any; }
};

export type AboutUs = {
  BOT_CTA_Text?: Maybe<Scalars['String']['output']>;
  MainCTA?: Maybe<Array<Maybe<ComponentMainCtaMainCta>>>;
  Title?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  htmlColorText?: Maybe<Array<Maybe<ComponentHtmlColorTextHtmlColorText>>>;
  iconText?: Maybe<Array<Maybe<ComponentIconTextIconText>>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  sliders: Array<Maybe<UploadFile>>;
  sliders_connection?: Maybe<UploadFileRelationResponseCollection>;
  smallText?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type AboutUsMainCtaArgs = {
  filters?: InputMaybe<ComponentMainCtaMainCtaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type AboutUsHtmlColorTextArgs = {
  filters?: InputMaybe<ComponentHtmlColorTextHtmlColorTextFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type AboutUsIconTextArgs = {
  filters?: InputMaybe<ComponentIconTextIconTextFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type AboutUsSlidersArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type AboutUsSliders_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AboutUsInput = {
  BOT_CTA_Text?: InputMaybe<Scalars['String']['input']>;
  MainCTA?: InputMaybe<Array<InputMaybe<ComponentMainCtaMainCtaInput>>>;
  Title?: InputMaybe<Scalars['String']['input']>;
  htmlColorText?: InputMaybe<Array<InputMaybe<ComponentHtmlColorTextHtmlColorTextInput>>>;
  iconText?: InputMaybe<Array<InputMaybe<ComponentIconTextIconTextInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sliders?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  smallText?: InputMaybe<Scalars['String']['input']>;
};

export type Account = {
  Title?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  smallText?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AccountInput = {
  Title?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  smallText?: InputMaybe<Scalars['String']['input']>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Boost = {
  BOT_CTA_Text?: Maybe<Scalars['String']['output']>;
  MainCTA?: Maybe<Array<Maybe<ComponentMainCtaMainCta>>>;
  Title?: Maybe<Scalars['String']['output']>;
  TopBg: Array<Maybe<UploadFile>>;
  TopBgUrl?: Maybe<Scalars['String']['output']>;
  TopBg_connection?: Maybe<UploadFileRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  iconText?: Maybe<Array<Maybe<ComponentIconTextIconText>>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  sliders: Array<Maybe<UploadFile>>;
  sliders_connection?: Maybe<UploadFileRelationResponseCollection>;
  smallText?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type BoostMainCtaArgs = {
  filters?: InputMaybe<ComponentMainCtaMainCtaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BoostTopBgArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BoostTopBg_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BoostIconTextArgs = {
  filters?: InputMaybe<ComponentIconTextIconTextFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BoostSlidersArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BoostSliders_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BoostInput = {
  BOT_CTA_Text?: InputMaybe<Scalars['String']['input']>;
  MainCTA?: InputMaybe<Array<InputMaybe<ComponentMainCtaMainCtaInput>>>;
  Title?: InputMaybe<Scalars['String']['input']>;
  TopBg?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  TopBgUrl?: InputMaybe<Scalars['String']['input']>;
  iconText?: InputMaybe<Array<InputMaybe<ComponentIconTextIconTextInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sliders?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  smallText?: InputMaybe<Scalars['String']['input']>;
};

export type BuyPoolz = {
  Icon?: Maybe<UploadFile>;
  IsDex?: Maybe<Scalars['Boolean']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Order?: Maybe<Scalars['Int']['output']>;
  URL?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BuyPoolzEntityResponseCollection = {
  nodes: Array<BuyPoolz>;
  pageInfo: Pagination;
};

export type BuyPoolzFiltersInput = {
  IsDex?: InputMaybe<BooleanFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Order?: InputMaybe<IntFilterInput>;
  URL?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<BuyPoolzFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<BuyPoolzFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BuyPoolzFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BuyPoolzInput = {
  Icon?: InputMaybe<Scalars['ID']['input']>;
  IsDex?: InputMaybe<Scalars['Boolean']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Order?: InputMaybe<Scalars['Int']['input']>;
  URL?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BuyWith = {
  ChainAddresses?: Maybe<Array<Maybe<ComponentChainAddressesChainAddresses>>>;
  Name: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type BuyWithChainAddressesArgs = {
  filters?: InputMaybe<ComponentChainAddressesChainAddressesFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BuyWithEntityResponseCollection = {
  nodes: Array<BuyWith>;
  pageInfo: Pagination;
};

export type BuyWithFiltersInput = {
  ChainAddresses?: InputMaybe<ComponentChainAddressesChainAddressesFiltersInput>;
  Name?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<BuyWithFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<BuyWithFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BuyWithFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BuyWithInput = {
  ChainAddresses?: InputMaybe<Array<InputMaybe<ComponentChainAddressesChainAddressesInput>>>;
  Name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Chain = {
  chainId?: Maybe<Scalars['Long']['output']>;
  chain_setting?: Maybe<ChainSetting>;
  contracts_on_chain?: Maybe<ContractsOnChain>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  isTest?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  symbol: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ChainEntityResponseCollection = {
  nodes: Array<Chain>;
  pageInfo: Pagination;
};

export type ChainFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ChainFiltersInput>>>;
  chainId?: InputMaybe<LongFilterInput>;
  chain_setting?: InputMaybe<ChainSettingFiltersInput>;
  contracts_on_chain?: InputMaybe<ContractsOnChainFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  isTest?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ChainFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ChainFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  symbol?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ChainInput = {
  chainId?: InputMaybe<Scalars['Long']['input']>;
  chain_setting?: InputMaybe<Scalars['ID']['input']>;
  contracts_on_chain?: InputMaybe<Scalars['ID']['input']>;
  isTest?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
};

export type ChainSetting = {
  DisplayText?: Maybe<Scalars['String']['output']>;
  IsEVM?: Maybe<Scalars['Boolean']['output']>;
  Show?: Maybe<Scalars['Boolean']['output']>;
  ShowInBoutique?: Maybe<Scalars['Boolean']['output']>;
  WhiteLogo?: Maybe<UploadFile>;
  chain?: Maybe<Chain>;
  colorIcon?: Maybe<ComponentColorIconColorIcon>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  lock_token_whitelist?: Maybe<LockTokenWhitelist>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  scannerTxUrl?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ChainSettingEntityResponseCollection = {
  nodes: Array<ChainSetting>;
  pageInfo: Pagination;
};

export type ChainSettingFiltersInput = {
  DisplayText?: InputMaybe<StringFilterInput>;
  IsEVM?: InputMaybe<BooleanFilterInput>;
  Show?: InputMaybe<BooleanFilterInput>;
  ShowInBoutique?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ChainSettingFiltersInput>>>;
  chain?: InputMaybe<ChainFiltersInput>;
  colorIcon?: InputMaybe<ComponentColorIconColorIconFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  lock_token_whitelist?: InputMaybe<LockTokenWhitelistFiltersInput>;
  not?: InputMaybe<ChainSettingFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ChainSettingFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  scannerTxUrl?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ChainSettingInput = {
  DisplayText?: InputMaybe<Scalars['String']['input']>;
  IsEVM?: InputMaybe<Scalars['Boolean']['input']>;
  Show?: InputMaybe<Scalars['Boolean']['input']>;
  ShowInBoutique?: InputMaybe<Scalars['Boolean']['input']>;
  WhiteLogo?: InputMaybe<Scalars['ID']['input']>;
  chain?: InputMaybe<Scalars['ID']['input']>;
  colorIcon?: InputMaybe<ComponentColorIconColorIconInput>;
  lock_token_whitelist?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  scannerTxUrl?: InputMaybe<Scalars['String']['input']>;
};

export type ChainSettingRelationResponseCollection = {
  nodes: Array<ChainSetting>;
};

export type ComponentChainAddressesChainAddresses = {
  Address: Scalars['String']['output'];
  chain_setting?: Maybe<ChainSetting>;
  id: Scalars['ID']['output'];
};

export type ComponentChainAddressesChainAddressesFiltersInput = {
  Address?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentChainAddressesChainAddressesFiltersInput>>>;
  chain_setting?: InputMaybe<ChainSettingFiltersInput>;
  not?: InputMaybe<ComponentChainAddressesChainAddressesFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentChainAddressesChainAddressesFiltersInput>>>;
};

export type ComponentChainAddressesChainAddressesInput = {
  Address?: InputMaybe<Scalars['String']['input']>;
  chain_setting?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentColorIconColorIcon = {
  Color?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
};

export type ComponentColorIconColorIconFiltersInput = {
  Color?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentColorIconColorIconFiltersInput>>>;
  not?: InputMaybe<ComponentColorIconColorIconFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentColorIconColorIconFiltersInput>>>;
};

export type ComponentColorIconColorIconInput = {
  Color?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentContractOnChainContractOnChain = {
  Address: Scalars['String']['output'];
  ContractType: ContractType;
  ContractVersion: Contract;
  id: Scalars['ID']['output'];
};

export type ComponentContractOnChainContractOnChainFiltersInput = {
  Address?: InputMaybe<StringFilterInput>;
  ContractType?: InputMaybe<ContractTypeFiltersInput>;
  ContractVersion?: InputMaybe<ContractFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentContractOnChainContractOnChainFiltersInput>>>;
  not?: InputMaybe<ComponentContractOnChainContractOnChainFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentContractOnChainContractOnChainFiltersInput>>>;
};

export type ComponentContractOnChainContractOnChainInput = {
  Address?: InputMaybe<Scalars['String']['input']>;
  ContractType?: InputMaybe<Scalars['ID']['input']>;
  ContractVersion?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentDictionaryLinks = {
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ComponentDictionaryLinksFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentDictionaryLinksFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentDictionaryLinksFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentDictionaryLinksFiltersInput>>>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentDictionaryLinksInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentFullTokenDistributionFullTokenDistribution = {
  DistributionType?: Maybe<Scalars['String']['output']>;
  Monthly?: Maybe<Array<Maybe<ComponentTokenDistributionTokenDistribution>>>;
  TGE?: Maybe<ComponentTokenDistributionTokenDistribution>;
  Text?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  non_evm_chain?: Maybe<NonEvmChain>;
};


export type ComponentFullTokenDistributionFullTokenDistributionMonthlyArgs = {
  filters?: InputMaybe<ComponentTokenDistributionTokenDistributionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentFullTokenDistributionFullTokenDistributionFiltersInput = {
  DistributionType?: InputMaybe<StringFilterInput>;
  Monthly?: InputMaybe<ComponentTokenDistributionTokenDistributionFiltersInput>;
  TGE?: InputMaybe<ComponentTokenDistributionTokenDistributionFiltersInput>;
  Text?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentFullTokenDistributionFullTokenDistributionFiltersInput>>>;
  non_evm_chain?: InputMaybe<NonEvmChainFiltersInput>;
  not?: InputMaybe<ComponentFullTokenDistributionFullTokenDistributionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentFullTokenDistributionFullTokenDistributionFiltersInput>>>;
};

export type ComponentFullTokenDistributionFullTokenDistributionInput = {
  DistributionType?: InputMaybe<Scalars['String']['input']>;
  Monthly?: InputMaybe<Array<InputMaybe<ComponentTokenDistributionTokenDistributionInput>>>;
  TGE?: InputMaybe<ComponentTokenDistributionTokenDistributionInput>;
  Text?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  non_evm_chain?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentHeaderSimpleUrlHeaderSimpleUrl = {
  ctaText?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  text?: Maybe<Scalars['String']['output']>;
  textColor?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ComponentHeaderSimpleUrlHeaderSimpleUrlFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHeaderSimpleUrlHeaderSimpleUrlFiltersInput>>>;
  ctaText?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentHeaderSimpleUrlHeaderSimpleUrlFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHeaderSimpleUrlHeaderSimpleUrlFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
  textColor?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentHeaderSimpleUrlHeaderSimpleUrlInput = {
  ctaText?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  textColor?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentHighlightsHighlights = {
  Value?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentHighlightsHighlightsFiltersInput = {
  Value?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentHighlightsHighlightsFiltersInput>>>;
  not?: InputMaybe<ComponentHighlightsHighlightsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHighlightsHighlightsFiltersInput>>>;
};

export type ComponentHighlightsHighlightsInput = {
  Value?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentHtmlColorTextHtmlColorText = {
  id: Scalars['ID']['output'];
  text?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ComponentHtmlColorTextHtmlColorTextFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHtmlColorTextHtmlColorTextFiltersInput>>>;
  not?: InputMaybe<ComponentHtmlColorTextHtmlColorTextFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHtmlColorTextHtmlColorTextFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentHtmlColorTextHtmlColorTextInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentIconTextIconText = {
  icon?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
  smallText?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type ComponentIconTextIconTextFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentIconTextIconTextFiltersInput>>>;
  not?: InputMaybe<ComponentIconTextIconTextFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentIconTextIconTextFiltersInput>>>;
  smallText?: InputMaybe<StringFilterInput>;
  text?: InputMaybe<StringFilterInput>;
};

export type ComponentIconTextIconTextInput = {
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  smallText?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentInvestorsInvestors = {
  Category?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  investor: Array<Maybe<Investor>>;
  investor_connection?: Maybe<InvestorRelationResponseCollection>;
};


export type ComponentInvestorsInvestorsInvestorArgs = {
  filters?: InputMaybe<InvestorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentInvestorsInvestorsInvestor_ConnectionArgs = {
  filters?: InputMaybe<InvestorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentInvestorsInvestorsFiltersInput = {
  Category?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentInvestorsInvestorsFiltersInput>>>;
  investor?: InputMaybe<InvestorFiltersInput>;
  not?: InputMaybe<ComponentInvestorsInvestorsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentInvestorsInvestorsFiltersInput>>>;
};

export type ComponentInvestorsInvestorsInput = {
  Category?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  investor?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ComponentMainCtaMainCta = {
  TextColor?: Maybe<Scalars['String']['output']>;
  addText?: Maybe<Scalars['String']['output']>;
  backColor?: Maybe<Scalars['String']['output']>;
  ctaText?: Maybe<Scalars['String']['output']>;
  flag?: Maybe<Scalars['String']['output']>;
  hoverBackColor?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  text?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ComponentMainCtaMainCtaFiltersInput = {
  TextColor?: InputMaybe<StringFilterInput>;
  addText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentMainCtaMainCtaFiltersInput>>>;
  backColor?: InputMaybe<StringFilterInput>;
  ctaText?: InputMaybe<StringFilterInput>;
  flag?: InputMaybe<StringFilterInput>;
  hoverBackColor?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentMainCtaMainCtaFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentMainCtaMainCtaFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentMainCtaMainCtaInput = {
  TextColor?: InputMaybe<Scalars['String']['input']>;
  addText?: InputMaybe<Scalars['String']['input']>;
  backColor?: InputMaybe<Scalars['String']['input']>;
  ctaText?: InputMaybe<Scalars['String']['input']>;
  flag?: InputMaybe<Scalars['String']['input']>;
  hoverBackColor?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentOverviewOverview = {
  BoldText?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Text?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentOverviewOverviewFiltersInput = {
  BoldText?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Text?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentOverviewOverviewFiltersInput>>>;
  not?: InputMaybe<ComponentOverviewOverviewFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentOverviewOverviewFiltersInput>>>;
};

export type ComponentOverviewOverviewInput = {
  BoldText?: InputMaybe<Scalars['String']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Text?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentSectionSection = {
  MainCTA?: Maybe<Array<Maybe<ComponentMainCtaMainCta>>>;
  SecondSmallText?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  TopBg?: Maybe<UploadFile>;
  TopBgUrl?: Maybe<Scalars['String']['output']>;
  htmlColorText?: Maybe<ComponentHtmlColorTextHtmlColorText>;
  id: Scalars['ID']['output'];
  secondCta?: Maybe<Array<Maybe<ComponentMainCtaMainCta>>>;
  secondTitle?: Maybe<Scalars['String']['output']>;
  smallText?: Maybe<Scalars['String']['output']>;
};


export type ComponentSectionSectionMainCtaArgs = {
  filters?: InputMaybe<ComponentMainCtaMainCtaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentSectionSectionSecondCtaArgs = {
  filters?: InputMaybe<ComponentMainCtaMainCtaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionSectionInput = {
  MainCTA?: InputMaybe<Array<InputMaybe<ComponentMainCtaMainCtaInput>>>;
  SecondSmallText?: InputMaybe<Scalars['String']['input']>;
  Title?: InputMaybe<Scalars['String']['input']>;
  TopBg?: InputMaybe<Scalars['ID']['input']>;
  TopBgUrl?: InputMaybe<Scalars['String']['input']>;
  htmlColorText?: InputMaybe<ComponentHtmlColorTextHtmlColorTextInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  secondCta?: InputMaybe<Array<InputMaybe<ComponentMainCtaMainCtaInput>>>;
  secondTitle?: InputMaybe<Scalars['String']['input']>;
  smallText?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSimpleUrlSimpleUrl = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  newWindow: Scalars['Boolean']['output'];
  url: Scalars['String']['output'];
};

export type ComponentSimpleUrlSimpleUrlFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSimpleUrlSimpleUrlFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  newWindow?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentSimpleUrlSimpleUrlFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSimpleUrlSimpleUrlFiltersInput>>>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentSimpleUrlSimpleUrlInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  newWindow?: InputMaybe<Scalars['Boolean']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSmartLinksSmartLinks = {
  URL?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  link_type?: Maybe<LinkType>;
};

export type ComponentSmartLinksSmartLinksFiltersInput = {
  URL?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentSmartLinksSmartLinksFiltersInput>>>;
  link_type?: InputMaybe<LinkTypeFiltersInput>;
  not?: InputMaybe<ComponentSmartLinksSmartLinksFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSmartLinksSmartLinksFiltersInput>>>;
};

export type ComponentSmartLinksSmartLinksInput = {
  URL?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  link_type?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentSyntheticZoneSyntetic = {
  TokenAddress?: Maybe<Scalars['String']['output']>;
  chain_setting?: Maybe<ChainSetting>;
  id: Scalars['ID']['output'];
};

export type ComponentSyntheticZoneSynteticFiltersInput = {
  TokenAddress?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentSyntheticZoneSynteticFiltersInput>>>;
  chain_setting?: InputMaybe<ChainSettingFiltersInput>;
  not?: InputMaybe<ComponentSyntheticZoneSynteticFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSyntheticZoneSynteticFiltersInput>>>;
};

export type ComponentSyntheticZoneSynteticInput = {
  TokenAddress?: InputMaybe<Scalars['String']['input']>;
  chain_setting?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentTokenDistributionTokenDistribution = {
  IsTimeTBA?: Maybe<Scalars['Boolean']['output']>;
  Ratio?: Maybe<Scalars['Float']['output']>;
  StartTime?: Maybe<Scalars['DateTime']['output']>;
  Unlock?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentTokenDistributionTokenDistributionFiltersInput = {
  IsTimeTBA?: InputMaybe<BooleanFilterInput>;
  Ratio?: InputMaybe<FloatFilterInput>;
  StartTime?: InputMaybe<DateTimeFilterInput>;
  Unlock?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentTokenDistributionTokenDistributionFiltersInput>>>;
  not?: InputMaybe<ComponentTokenDistributionTokenDistributionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentTokenDistributionTokenDistributionFiltersInput>>>;
};

export type ComponentTokenDistributionTokenDistributionInput = {
  IsTimeTBA?: InputMaybe<Scalars['Boolean']['input']>;
  Ratio?: InputMaybe<Scalars['Float']['input']>;
  StartTime?: InputMaybe<Scalars['DateTime']['input']>;
  Unlock?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentTokenomicsTokenomics = {
  CirculationSupply?: Maybe<Scalars['String']['output']>;
  MarketCap?: Maybe<Scalars['String']['output']>;
  Symbol?: Maybe<Scalars['String']['output']>;
  TGEMarketCap?: Maybe<Scalars['String']['output']>;
  TotalRaise?: Maybe<Scalars['String']['output']>;
  TotalSupply?: Maybe<Scalars['String']['output']>;
  USDPrice?: Maybe<Scalars['Float']['output']>;
  VisualInfo?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
};

export type ComponentTokenomicsTokenomicsFiltersInput = {
  CirculationSupply?: InputMaybe<StringFilterInput>;
  MarketCap?: InputMaybe<StringFilterInput>;
  Symbol?: InputMaybe<StringFilterInput>;
  TGEMarketCap?: InputMaybe<StringFilterInput>;
  TotalRaise?: InputMaybe<StringFilterInput>;
  TotalSupply?: InputMaybe<StringFilterInput>;
  USDPrice?: InputMaybe<FloatFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentTokenomicsTokenomicsFiltersInput>>>;
  not?: InputMaybe<ComponentTokenomicsTokenomicsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentTokenomicsTokenomicsFiltersInput>>>;
};

export type ComponentTokenomicsTokenomicsInput = {
  CirculationSupply?: InputMaybe<Scalars['String']['input']>;
  MarketCap?: InputMaybe<Scalars['String']['input']>;
  Symbol?: InputMaybe<Scalars['String']['input']>;
  TGEMarketCap?: InputMaybe<Scalars['String']['input']>;
  TotalRaise?: InputMaybe<Scalars['String']['input']>;
  TotalSupply?: InputMaybe<Scalars['String']['input']>;
  USDPrice?: InputMaybe<Scalars['Float']['input']>;
  VisualInfo?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentUploadPoolUploadPool = {
  Participants?: Maybe<Scalars['Int']['output']>;
  PublicRate?: Maybe<Scalars['Float']['output']>;
  TotalTokens?: Maybe<Scalars['Float']['output']>;
  WhitelistRate?: Maybe<Scalars['Float']['output']>;
  buy_with?: Maybe<BuyWith>;
  id: Scalars['ID']['output'];
};

export type ComponentUploadPoolUploadPoolFiltersInput = {
  Participants?: InputMaybe<IntFilterInput>;
  PublicRate?: InputMaybe<FloatFilterInput>;
  TotalTokens?: InputMaybe<FloatFilterInput>;
  WhitelistRate?: InputMaybe<FloatFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentUploadPoolUploadPoolFiltersInput>>>;
  buy_with?: InputMaybe<BuyWithFiltersInput>;
  not?: InputMaybe<ComponentUploadPoolUploadPoolFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentUploadPoolUploadPoolFiltersInput>>>;
};

export type ComponentUploadPoolUploadPoolInput = {
  Participants?: InputMaybe<Scalars['Int']['input']>;
  PublicRate?: InputMaybe<Scalars['Float']['input']>;
  TotalTokens?: InputMaybe<Scalars['Float']['input']>;
  WhitelistRate?: InputMaybe<Scalars['Float']['input']>;
  buy_with?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentVersionVersion = {
  ContractType: ContractType;
  ContractVersion: Contract;
  id: Scalars['ID']['output'];
};

export type ComponentVersionVersionFiltersInput = {
  ContractType?: InputMaybe<ContractTypeFiltersInput>;
  ContractVersion?: InputMaybe<ContractFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentVersionVersionFiltersInput>>>;
  not?: InputMaybe<ComponentVersionVersionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentVersionVersionFiltersInput>>>;
};

export type ComponentVersionVersionInput = {
  ContractType?: InputMaybe<Scalars['ID']['input']>;
  ContractVersion?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentVisualTextVisualText = {
  Highlights?: Maybe<Array<Maybe<ComponentHighlightsHighlights>>>;
  Overview?: Maybe<Array<Maybe<ComponentOverviewOverview>>>;
  SmartLinks?: Maybe<Array<Maybe<ComponentSmartLinksSmartLinks>>>;
  Tokenomics?: Maybe<ComponentTokenomicsTokenomics>;
  id: Scalars['ID']['output'];
};


export type ComponentVisualTextVisualTextHighlightsArgs = {
  filters?: InputMaybe<ComponentHighlightsHighlightsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentVisualTextVisualTextOverviewArgs = {
  filters?: InputMaybe<ComponentOverviewOverviewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentVisualTextVisualTextSmartLinksArgs = {
  filters?: InputMaybe<ComponentSmartLinksSmartLinksFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentVisualTextVisualTextFiltersInput = {
  Highlights?: InputMaybe<ComponentHighlightsHighlightsFiltersInput>;
  Overview?: InputMaybe<ComponentOverviewOverviewFiltersInput>;
  SmartLinks?: InputMaybe<ComponentSmartLinksSmartLinksFiltersInput>;
  Tokenomics?: InputMaybe<ComponentTokenomicsTokenomicsFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentVisualTextVisualTextFiltersInput>>>;
  not?: InputMaybe<ComponentVisualTextVisualTextFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentVisualTextVisualTextFiltersInput>>>;
};

export type ComponentVisualTextVisualTextInput = {
  Highlights?: InputMaybe<Array<InputMaybe<ComponentHighlightsHighlightsInput>>>;
  Overview?: InputMaybe<Array<InputMaybe<ComponentOverviewOverviewInput>>>;
  SmartLinks?: InputMaybe<Array<InputMaybe<ComponentSmartLinksSmartLinksInput>>>;
  Tokenomics?: InputMaybe<ComponentTokenomicsTokenomicsInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Condition = {
  Value?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ConditionInput = {
  Value?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Contract = {
  ABI?: Maybe<Scalars['JSON']['output']>;
  ByteCode?: Maybe<Scalars['JSON']['output']>;
  GitLink?: Maybe<Scalars['String']['output']>;
  NameVersion: Scalars['String']['output'];
  ReleaseNotes?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ContractEntityResponseCollection = {
  nodes: Array<Contract>;
  pageInfo: Pagination;
};

export type ContractFiltersInput = {
  ABI?: InputMaybe<JsonFilterInput>;
  ByteCode?: InputMaybe<JsonFilterInput>;
  GitLink?: InputMaybe<StringFilterInput>;
  NameVersion?: InputMaybe<StringFilterInput>;
  ReleaseNotes?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ContractFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ContractFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContractFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContractInput = {
  ABI?: InputMaybe<Scalars['JSON']['input']>;
  ByteCode?: InputMaybe<Scalars['JSON']['input']>;
  GitLink?: InputMaybe<Scalars['String']['input']>;
  NameVersion?: InputMaybe<Scalars['String']['input']>;
  ReleaseNotes?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ContractType = {
  ContractType: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ContractTypeEntityResponseCollection = {
  nodes: Array<ContractType>;
  pageInfo: Pagination;
};

export type ContractTypeFiltersInput = {
  ContractType?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ContractTypeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ContractTypeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContractTypeFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContractTypeInput = {
  ContractType?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ContractsOnChain = {
  Chain: Chain;
  Contracts: Array<Maybe<ComponentContractOnChainContractOnChain>>;
  Decimals?: Maybe<Scalars['Int']['output']>;
  Explorer?: Maybe<Scalars['String']['output']>;
  Faucet?: Maybe<Scalars['String']['output']>;
  NativeCurrency?: Maybe<Scalars['String']['output']>;
  RPC?: Maybe<Scalars['String']['output']>;
  WebSocket?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ContractsOnChainContractsArgs = {
  filters?: InputMaybe<ComponentContractOnChainContractOnChainFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContractsOnChainEntityResponseCollection = {
  nodes: Array<ContractsOnChain>;
  pageInfo: Pagination;
};

export type ContractsOnChainFiltersInput = {
  Chain?: InputMaybe<ChainFiltersInput>;
  Contracts?: InputMaybe<ComponentContractOnChainContractOnChainFiltersInput>;
  Decimals?: InputMaybe<IntFilterInput>;
  Explorer?: InputMaybe<StringFilterInput>;
  Faucet?: InputMaybe<StringFilterInput>;
  NativeCurrency?: InputMaybe<StringFilterInput>;
  RPC?: InputMaybe<StringFilterInput>;
  WebSocket?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ContractsOnChainFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ContractsOnChainFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContractsOnChainFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContractsOnChainInput = {
  Chain?: InputMaybe<Scalars['ID']['input']>;
  Contracts?: InputMaybe<Array<InputMaybe<ComponentContractOnChainContractOnChainInput>>>;
  Decimals?: InputMaybe<Scalars['Int']['input']>;
  Explorer?: InputMaybe<Scalars['String']['input']>;
  Faucet?: InputMaybe<Scalars['String']['input']>;
  NativeCurrency?: InputMaybe<Scalars['String']['input']>;
  RPC?: InputMaybe<Scalars['String']['input']>;
  WebSocket?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Cover = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  picture?: Maybe<UploadFile>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CoverEntityResponseCollection = {
  nodes: Array<Cover>;
  pageInfo: Pagination;
};

export type CoverFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CoverFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CoverFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CoverFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CoverInput = {
  picture?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DefaultWallet = {
  Icon?: Maybe<UploadFile>;
  Link?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type DefaultWalletEntityResponseCollection = {
  nodes: Array<DefaultWallet>;
  pageInfo: Pagination;
};

export type DefaultWalletFiltersInput = {
  Link?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<DefaultWalletFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<DefaultWalletFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<DefaultWalletFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type DefaultWalletInput = {
  Icon?: InputMaybe<Scalars['ID']['input']>;
  Link?: InputMaybe<Scalars['String']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DeleteMutationResponse = {
  documentId: Scalars['ID']['output'];
};

export enum Enum_Grow_Reward {
  IdoToken = 'IDO_Token',
  Nft = 'NFT',
  Stable = 'Stable',
  Token = 'Token',
  Whitelist = 'Whitelist'
}

export enum Enum_Locktokenwhitelist_Type {
  Envelope = 'Envelope',
  LockDealNft = 'LockDealNFT',
  OriginalToken = 'OriginalToken',
  Synthetic = 'Synthetic'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type Footer = {
  Boost_Social: Array<Maybe<ComponentSimpleUrlSimpleUrl>>;
  Company: Array<Maybe<ComponentSimpleUrlSimpleUrl>>;
  Help: Array<Maybe<ComponentSimpleUrlSimpleUrl>>;
  Information: Array<Maybe<ComponentSimpleUrlSimpleUrl>>;
  Social: Array<Maybe<ComponentSimpleUrlSimpleUrl>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type FooterBoost_SocialArgs = {
  filters?: InputMaybe<ComponentSimpleUrlSimpleUrlFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type FooterCompanyArgs = {
  filters?: InputMaybe<ComponentSimpleUrlSimpleUrlFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type FooterHelpArgs = {
  filters?: InputMaybe<ComponentSimpleUrlSimpleUrlFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type FooterInformationArgs = {
  filters?: InputMaybe<ComponentSimpleUrlSimpleUrlFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type FooterSocialArgs = {
  filters?: InputMaybe<ComponentSimpleUrlSimpleUrlFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FooterInput = {
  Boost_Social?: InputMaybe<Array<InputMaybe<ComponentSimpleUrlSimpleUrlInput>>>;
  Company?: InputMaybe<Array<InputMaybe<ComponentSimpleUrlSimpleUrlInput>>>;
  Help?: InputMaybe<Array<InputMaybe<ComponentSimpleUrlSimpleUrlInput>>>;
  Information?: InputMaybe<Array<InputMaybe<ComponentSimpleUrlSimpleUrlInput>>>;
  Social?: InputMaybe<Array<InputMaybe<ComponentSimpleUrlSimpleUrlInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GenericMorph = AboutUs | Account | Boost | BuyPoolz | BuyWith | Chain | ChainSetting | ComponentChainAddressesChainAddresses | ComponentColorIconColorIcon | ComponentContractOnChainContractOnChain | ComponentDictionaryLinks | ComponentFullTokenDistributionFullTokenDistribution | ComponentHeaderSimpleUrlHeaderSimpleUrl | ComponentHighlightsHighlights | ComponentHtmlColorTextHtmlColorText | ComponentIconTextIconText | ComponentInvestorsInvestors | ComponentMainCtaMainCta | ComponentOverviewOverview | ComponentSectionSection | ComponentSimpleUrlSimpleUrl | ComponentSmartLinksSmartLinks | ComponentSyntheticZoneSyntetic | ComponentTokenDistributionTokenDistribution | ComponentTokenomicsTokenomics | ComponentUploadPoolUploadPool | ComponentVersionVersion | ComponentVisualTextVisualText | Condition | Contract | ContractType | ContractsOnChain | Cover | DefaultWallet | Footer | Grow | GrowBadge | Header | I18NLocale | IdoBadge | InvestTerm | Investor | LatestType | LinkType | LockPoolzTerm | LockTokenWhitelist | Main | MarketCapBadge | MediaKit | NonEvmChain | OpenGrant | OurPartner | PageInfo | PoolzBoutique | Privacy | ProjectsInformation | ReviewWorkflowsWorkflow | ReviewWorkflowsWorkflowStage | StakingCoolDown | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | VaultFaq;

export type Grow = {
  Banner?: Maybe<UploadFile>;
  BannerText?: Maybe<Scalars['String']['output']>;
  BannerUrl?: Maybe<Scalars['String']['output']>;
  DescriptionMainText?: Maybe<Scalars['String']['output']>;
  DescriptionSubText?: Maybe<Scalars['String']['output']>;
  Show?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  data_ccode?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  finishTime?: Maybe<Scalars['DateTime']['output']>;
  grow_badge?: Maybe<GrowBadge>;
  mainIcon?: Maybe<UploadFile>;
  mainPicture?: Maybe<UploadFile>;
  order?: Maybe<Scalars['Int']['output']>;
  participants?: Maybe<Scalars['Int']['output']>;
  projectName?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  reward: Enum_Grow_Reward;
  showInMainBanner?: Maybe<Scalars['Boolean']['output']>;
  startTime?: Maybe<Scalars['DateTime']['output']>;
  subTitle?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GrowBadge = {
  BackgroundColor?: Maybe<Scalars['String']['output']>;
  Color?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  TooltipText?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GrowBadgeEntityResponseCollection = {
  nodes: Array<GrowBadge>;
  pageInfo: Pagination;
};

export type GrowBadgeFiltersInput = {
  BackgroundColor?: InputMaybe<StringFilterInput>;
  Color?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  TooltipText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<GrowBadgeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<GrowBadgeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GrowBadgeFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type GrowBadgeInput = {
  BackgroundColor?: InputMaybe<Scalars['String']['input']>;
  Color?: InputMaybe<Scalars['String']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  TooltipText?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GrowEntityResponseCollection = {
  nodes: Array<Grow>;
  pageInfo: Pagination;
};

export type GrowFiltersInput = {
  BannerText?: InputMaybe<StringFilterInput>;
  BannerUrl?: InputMaybe<StringFilterInput>;
  DescriptionMainText?: InputMaybe<StringFilterInput>;
  DescriptionSubText?: InputMaybe<StringFilterInput>;
  Show?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<GrowFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  data_ccode?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  finishTime?: InputMaybe<DateTimeFilterInput>;
  grow_badge?: InputMaybe<GrowBadgeFiltersInput>;
  not?: InputMaybe<GrowFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GrowFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
  participants?: InputMaybe<IntFilterInput>;
  projectName?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  reward?: InputMaybe<StringFilterInput>;
  showInMainBanner?: InputMaybe<BooleanFilterInput>;
  startTime?: InputMaybe<DateTimeFilterInput>;
  subTitle?: InputMaybe<StringFilterInput>;
  text?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type GrowInput = {
  Banner?: InputMaybe<Scalars['ID']['input']>;
  BannerText?: InputMaybe<Scalars['String']['input']>;
  BannerUrl?: InputMaybe<Scalars['String']['input']>;
  DescriptionMainText?: InputMaybe<Scalars['String']['input']>;
  DescriptionSubText?: InputMaybe<Scalars['String']['input']>;
  Show?: InputMaybe<Scalars['Boolean']['input']>;
  data_ccode?: InputMaybe<Scalars['String']['input']>;
  finishTime?: InputMaybe<Scalars['DateTime']['input']>;
  grow_badge?: InputMaybe<Scalars['ID']['input']>;
  mainIcon?: InputMaybe<Scalars['ID']['input']>;
  mainPicture?: InputMaybe<Scalars['ID']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  participants?: InputMaybe<Scalars['Int']['input']>;
  projectName?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  reward?: InputMaybe<Enum_Grow_Reward>;
  showInMainBanner?: InputMaybe<Scalars['Boolean']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  subTitle?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type Header = {
  HeaderList?: Maybe<Array<Maybe<ComponentHeaderSimpleUrlHeaderSimpleUrl>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type HeaderHeaderListArgs = {
  filters?: InputMaybe<ComponentHeaderSimpleUrlHeaderSimpleUrlFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HeaderInput = {
  HeaderList?: InputMaybe<Array<InputMaybe<ComponentHeaderSimpleUrlHeaderSimpleUrlInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type I18NLocale = {
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntityResponseCollection = {
  nodes: Array<I18NLocale>;
  pageInfo: Pagination;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IdoBadge = {
  Color?: Maybe<Scalars['String']['output']>;
  ExplainText?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type IdoBadgeEntityResponseCollection = {
  nodes: Array<IdoBadge>;
  pageInfo: Pagination;
};

export type IdoBadgeFiltersInput = {
  Color?: InputMaybe<StringFilterInput>;
  ExplainText?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<IdoBadgeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<IdoBadgeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IdoBadgeFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdoBadgeInput = {
  Color?: InputMaybe<Scalars['String']['input']>;
  ExplainText?: InputMaybe<Scalars['String']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type InvestTerm = {
  Value?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type InvestTermInput = {
  Value?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Investor = {
  Icon?: Maybe<UploadFile>;
  Name?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type InvestorEntityResponseCollection = {
  nodes: Array<Investor>;
  pageInfo: Pagination;
};

export type InvestorFiltersInput = {
  Name?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<InvestorFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<InvestorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<InvestorFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type InvestorInput = {
  Icon?: InputMaybe<Scalars['ID']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type InvestorRelationResponseCollection = {
  nodes: Array<Investor>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type LatestType = {
  Version: Array<Maybe<ComponentVersionVersion>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type LatestTypeVersionArgs = {
  filters?: InputMaybe<ComponentVersionVersionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LatestTypeInput = {
  Version?: InputMaybe<Array<InputMaybe<ComponentVersionVersionInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LinkType = {
  DarkIcon?: Maybe<UploadFile>;
  IsOnTop?: Maybe<Scalars['Boolean']['output']>;
  LightIcon?: Maybe<UploadFile>;
  Name?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type LinkTypeEntityResponseCollection = {
  nodes: Array<LinkType>;
  pageInfo: Pagination;
};

export type LinkTypeFiltersInput = {
  IsOnTop?: InputMaybe<BooleanFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<LinkTypeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<LinkTypeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LinkTypeFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type LinkTypeInput = {
  DarkIcon?: InputMaybe<Scalars['ID']['input']>;
  IsOnTop?: InputMaybe<Scalars['Boolean']['input']>;
  LightIcon?: InputMaybe<Scalars['ID']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LockPoolzTerm = {
  Value?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type LockPoolzTermInput = {
  Value?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LockTokenWhitelist = {
  Address?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Enum_Locktokenwhitelist_Type>;
  chain_settings: Array<Maybe<ChainSetting>>;
  chain_settings_connection?: Maybe<ChainSettingRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type LockTokenWhitelistChain_SettingsArgs = {
  filters?: InputMaybe<ChainSettingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type LockTokenWhitelistChain_Settings_ConnectionArgs = {
  filters?: InputMaybe<ChainSettingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LockTokenWhitelistEntityResponseCollection = {
  nodes: Array<LockTokenWhitelist>;
  pageInfo: Pagination;
};

export type LockTokenWhitelistFiltersInput = {
  Address?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<LockTokenWhitelistFiltersInput>>>;
  chain_settings?: InputMaybe<ChainSettingFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<LockTokenWhitelistFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LockTokenWhitelistFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type LockTokenWhitelistInput = {
  Address?: InputMaybe<Scalars['String']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Type?: InputMaybe<Enum_Locktokenwhitelist_Type>;
  chain_settings?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LongFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  contains?: InputMaybe<Scalars['Long']['input']>;
  containsi?: InputMaybe<Scalars['Long']['input']>;
  endsWith?: InputMaybe<Scalars['Long']['input']>;
  eq?: InputMaybe<Scalars['Long']['input']>;
  eqi?: InputMaybe<Scalars['Long']['input']>;
  gt?: InputMaybe<Scalars['Long']['input']>;
  gte?: InputMaybe<Scalars['Long']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  lt?: InputMaybe<Scalars['Long']['input']>;
  lte?: InputMaybe<Scalars['Long']['input']>;
  ne?: InputMaybe<Scalars['Long']['input']>;
  nei?: InputMaybe<Scalars['Long']['input']>;
  not?: InputMaybe<LongFilterInput>;
  notContains?: InputMaybe<Scalars['Long']['input']>;
  notContainsi?: InputMaybe<Scalars['Long']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  startsWith?: InputMaybe<Scalars['Long']['input']>;
};

export type Main = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  sections?: Maybe<ComponentSectionSection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type MainInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sections?: InputMaybe<ComponentSectionSectionInput>;
};

export type MarketCapBadge = {
  Link?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  icon?: Maybe<UploadFile>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type MarketCapBadgeEntityResponseCollection = {
  nodes: Array<MarketCapBadge>;
  pageInfo: Pagination;
};

export type MarketCapBadgeFiltersInput = {
  Link?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<MarketCapBadgeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<MarketCapBadgeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MarketCapBadgeFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type MarketCapBadgeInput = {
  Link?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MediaKit = {
  Link?: Maybe<ComponentDictionaryLinks>;
  Name?: Maybe<Scalars['String']['output']>;
  Text?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type MediaKitEntityResponseCollection = {
  nodes: Array<MediaKit>;
  pageInfo: Pagination;
};

export type MediaKitFiltersInput = {
  Link?: InputMaybe<ComponentDictionaryLinksFiltersInput>;
  Name?: InputMaybe<StringFilterInput>;
  Text?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<MediaKitFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<MediaKitFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MediaKitFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type MediaKitInput = {
  Link?: InputMaybe<ComponentDictionaryLinksInput>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Text?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Mutation = {
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createBuyPoolz?: Maybe<BuyPoolz>;
  createBuyWith?: Maybe<BuyWith>;
  createChain?: Maybe<Chain>;
  createChainSetting?: Maybe<ChainSetting>;
  createContract?: Maybe<Contract>;
  createContractType?: Maybe<ContractType>;
  createContractsOnChain?: Maybe<ContractsOnChain>;
  createCover?: Maybe<Cover>;
  createDefaultWallet?: Maybe<DefaultWallet>;
  createGrow?: Maybe<Grow>;
  createGrowBadge?: Maybe<GrowBadge>;
  createIdoBadge?: Maybe<IdoBadge>;
  createInvestor?: Maybe<Investor>;
  createLinkType?: Maybe<LinkType>;
  createLockTokenWhitelist?: Maybe<LockTokenWhitelist>;
  createMarketCapBadge?: Maybe<MarketCapBadge>;
  createMediaKit?: Maybe<MediaKit>;
  createNonEvmChain?: Maybe<NonEvmChain>;
  createOpenGrant?: Maybe<OpenGrant>;
  createOurPartner?: Maybe<OurPartner>;
  createPageInfo?: Maybe<PageInfo>;
  createPoolzBoutique?: Maybe<PoolzBoutique>;
  createProjectsInformation?: Maybe<ProjectsInformation>;
  createReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  createReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  createStakingCoolDown?: Maybe<StakingCoolDown>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createVaultFaq?: Maybe<VaultFaq>;
  deleteAboutUs?: Maybe<DeleteMutationResponse>;
  deleteAccount?: Maybe<DeleteMutationResponse>;
  deleteBoost?: Maybe<DeleteMutationResponse>;
  deleteBuyPoolz?: Maybe<DeleteMutationResponse>;
  deleteBuyWith?: Maybe<DeleteMutationResponse>;
  deleteChain?: Maybe<DeleteMutationResponse>;
  deleteChainSetting?: Maybe<DeleteMutationResponse>;
  deleteCondition?: Maybe<DeleteMutationResponse>;
  deleteContract?: Maybe<DeleteMutationResponse>;
  deleteContractType?: Maybe<DeleteMutationResponse>;
  deleteContractsOnChain?: Maybe<DeleteMutationResponse>;
  deleteCover?: Maybe<DeleteMutationResponse>;
  deleteDefaultWallet?: Maybe<DeleteMutationResponse>;
  deleteFooter?: Maybe<DeleteMutationResponse>;
  deleteGrow?: Maybe<DeleteMutationResponse>;
  deleteGrowBadge?: Maybe<DeleteMutationResponse>;
  deleteHeader?: Maybe<DeleteMutationResponse>;
  deleteIdoBadge?: Maybe<DeleteMutationResponse>;
  deleteInvestTerm?: Maybe<DeleteMutationResponse>;
  deleteInvestor?: Maybe<DeleteMutationResponse>;
  deleteLatestType?: Maybe<DeleteMutationResponse>;
  deleteLinkType?: Maybe<DeleteMutationResponse>;
  deleteLockPoolzTerm?: Maybe<DeleteMutationResponse>;
  deleteLockTokenWhitelist?: Maybe<DeleteMutationResponse>;
  deleteMain?: Maybe<DeleteMutationResponse>;
  deleteMarketCapBadge?: Maybe<DeleteMutationResponse>;
  deleteMediaKit?: Maybe<DeleteMutationResponse>;
  deleteNonEvmChain?: Maybe<DeleteMutationResponse>;
  deleteOpenGrant?: Maybe<DeleteMutationResponse>;
  deleteOurPartner?: Maybe<DeleteMutationResponse>;
  deletePageInfo?: Maybe<DeleteMutationResponse>;
  deletePoolzBoutique?: Maybe<DeleteMutationResponse>;
  deletePrivacy?: Maybe<DeleteMutationResponse>;
  deleteProjectsInformation?: Maybe<DeleteMutationResponse>;
  deleteReviewWorkflowsWorkflow?: Maybe<DeleteMutationResponse>;
  deleteReviewWorkflowsWorkflowStage?: Maybe<DeleteMutationResponse>;
  deleteStakingCoolDown?: Maybe<DeleteMutationResponse>;
  deleteUploadFile?: Maybe<UploadFile>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteVaultFaq?: Maybe<DeleteMutationResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAboutUs?: Maybe<AboutUs>;
  updateAccount?: Maybe<Account>;
  updateBoost?: Maybe<Boost>;
  updateBuyPoolz?: Maybe<BuyPoolz>;
  updateBuyWith?: Maybe<BuyWith>;
  updateChain?: Maybe<Chain>;
  updateChainSetting?: Maybe<ChainSetting>;
  updateCondition?: Maybe<Condition>;
  updateContract?: Maybe<Contract>;
  updateContractType?: Maybe<ContractType>;
  updateContractsOnChain?: Maybe<ContractsOnChain>;
  updateCover?: Maybe<Cover>;
  updateDefaultWallet?: Maybe<DefaultWallet>;
  updateFooter?: Maybe<Footer>;
  updateGrow?: Maybe<Grow>;
  updateGrowBadge?: Maybe<GrowBadge>;
  updateHeader?: Maybe<Header>;
  updateIdoBadge?: Maybe<IdoBadge>;
  updateInvestTerm?: Maybe<InvestTerm>;
  updateInvestor?: Maybe<Investor>;
  updateLatestType?: Maybe<LatestType>;
  updateLinkType?: Maybe<LinkType>;
  updateLockPoolzTerm?: Maybe<LockPoolzTerm>;
  updateLockTokenWhitelist?: Maybe<LockTokenWhitelist>;
  updateMain?: Maybe<Main>;
  updateMarketCapBadge?: Maybe<MarketCapBadge>;
  updateMediaKit?: Maybe<MediaKit>;
  updateNonEvmChain?: Maybe<NonEvmChain>;
  updateOpenGrant?: Maybe<OpenGrant>;
  updateOurPartner?: Maybe<OurPartner>;
  updatePageInfo?: Maybe<PageInfo>;
  updatePoolzBoutique?: Maybe<PoolzBoutique>;
  updatePrivacy?: Maybe<Privacy>;
  updateProjectsInformation?: Maybe<ProjectsInformation>;
  updateReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  updateReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  updateStakingCoolDown?: Maybe<StakingCoolDown>;
  updateUploadFile: UploadFile;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateVaultFaq?: Maybe<VaultFaq>;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateBuyPoolzArgs = {
  data: BuyPoolzInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateBuyWithArgs = {
  data: BuyWithInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateChainArgs = {
  data: ChainInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateChainSettingArgs = {
  data: ChainSettingInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateContractArgs = {
  data: ContractInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateContractTypeArgs = {
  data: ContractTypeInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateContractsOnChainArgs = {
  data: ContractsOnChainInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateCoverArgs = {
  data: CoverInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateDefaultWalletArgs = {
  data: DefaultWalletInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateGrowArgs = {
  data: GrowInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateGrowBadgeArgs = {
  data: GrowBadgeInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateIdoBadgeArgs = {
  data: IdoBadgeInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateInvestorArgs = {
  data: InvestorInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateLinkTypeArgs = {
  data: LinkTypeInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateLockTokenWhitelistArgs = {
  data: LockTokenWhitelistInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateMarketCapBadgeArgs = {
  data: MarketCapBadgeInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateMediaKitArgs = {
  data: MediaKitInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateNonEvmChainArgs = {
  data: NonEvmChainInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateOpenGrantArgs = {
  data: OpenGrantInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateOurPartnerArgs = {
  data: OurPartnerInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreatePageInfoArgs = {
  data: PageInfoInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreatePoolzBoutiqueArgs = {
  data: PoolzBoutiqueInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateProjectsInformationArgs = {
  data: ProjectsInformationInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateStakingCoolDownArgs = {
  data: StakingCoolDownInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationCreateVaultFaqArgs = {
  data: VaultFaqInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationDeleteBuyPoolzArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteBuyWithArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteChainArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteChainSettingArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteContractArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteContractTypeArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteContractsOnChainArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteCoverArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteDefaultWalletArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteGrowArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteGrowBadgeArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteIdoBadgeArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteInvestorArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteLinkTypeArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteLockTokenWhitelistArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteMarketCapBadgeArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteMediaKitArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteNonEvmChainArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteOpenGrantArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteOurPartnerArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeletePageInfoArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeletePoolzBoutiqueArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteProjectsInformationArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteStakingCoolDownArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteVaultFaqArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateAboutUsArgs = {
  data: AboutUsInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateAccountArgs = {
  data: AccountInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateBoostArgs = {
  data: BoostInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateBuyPoolzArgs = {
  data: BuyPoolzInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateBuyWithArgs = {
  data: BuyWithInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateChainArgs = {
  data: ChainInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateChainSettingArgs = {
  data: ChainSettingInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateConditionArgs = {
  data: ConditionInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateContractArgs = {
  data: ContractInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateContractTypeArgs = {
  data: ContractTypeInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateContractsOnChainArgs = {
  data: ContractsOnChainInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateCoverArgs = {
  data: CoverInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateDefaultWalletArgs = {
  data: DefaultWalletInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateFooterArgs = {
  data: FooterInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateGrowArgs = {
  data: GrowInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateGrowBadgeArgs = {
  data: GrowBadgeInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateHeaderArgs = {
  data: HeaderInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateIdoBadgeArgs = {
  data: IdoBadgeInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateInvestTermArgs = {
  data: InvestTermInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateInvestorArgs = {
  data: InvestorInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateLatestTypeArgs = {
  data: LatestTypeInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateLinkTypeArgs = {
  data: LinkTypeInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateLockPoolzTermArgs = {
  data: LockPoolzTermInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateLockTokenWhitelistArgs = {
  data: LockTokenWhitelistInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateMainArgs = {
  data: MainInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateMarketCapBadgeArgs = {
  data: MarketCapBadgeInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateMediaKitArgs = {
  data: MediaKitInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateNonEvmChainArgs = {
  data: NonEvmChainInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateOpenGrantArgs = {
  data: OpenGrantInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateOurPartnerArgs = {
  data: OurPartnerInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdatePageInfoArgs = {
  data: PageInfoInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdatePoolzBoutiqueArgs = {
  data: PoolzBoutiqueInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdatePrivacyArgs = {
  data: PrivacyInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateProjectsInformationArgs = {
  data: ProjectsInformationInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateStakingCoolDownArgs = {
  data: StakingCoolDownInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateUploadFileArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateVaultFaqArgs = {
  data: VaultFaqInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};

export type NonEvmChain = {
  DisplayText?: Maybe<Scalars['String']['output']>;
  Icon?: Maybe<UploadFile>;
  Regex?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type NonEvmChainEntityResponseCollection = {
  nodes: Array<NonEvmChain>;
  pageInfo: Pagination;
};

export type NonEvmChainFiltersInput = {
  DisplayText?: InputMaybe<StringFilterInput>;
  Regex?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<NonEvmChainFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<NonEvmChainFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NonEvmChainFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type NonEvmChainInput = {
  DisplayText?: InputMaybe<Scalars['String']['input']>;
  Icon?: InputMaybe<Scalars['ID']['input']>;
  Regex?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OpenGrant = {
  Link?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Text?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  icon?: Maybe<UploadFile>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OpenGrantEntityResponseCollection = {
  nodes: Array<OpenGrant>;
  pageInfo: Pagination;
};

export type OpenGrantFiltersInput = {
  Link?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Text?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<OpenGrantFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<OpenGrantFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<OpenGrantFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type OpenGrantInput = {
  Link?: InputMaybe<Scalars['String']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Text?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OurPartner = {
  DarkLogo?: Maybe<UploadFile>;
  Name?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OurPartnerEntityResponseCollection = {
  nodes: Array<OurPartner>;
  pageInfo: Pagination;
};

export type OurPartnerFiltersInput = {
  Name?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<OurPartnerFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<OurPartnerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<OurPartnerFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type OurPartnerInput = {
  DarkLogo?: InputMaybe<Scalars['ID']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PageInfo = {
  Description?: Maybe<Scalars['String']['output']>;
  Link: Scalars['String']['output'];
  Title?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PageInfoEntityResponseCollection = {
  nodes: Array<PageInfo>;
  pageInfo: Pagination;
};

export type PageInfoFiltersInput = {
  Description?: InputMaybe<StringFilterInput>;
  Link?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<PageInfoFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<PageInfoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PageInfoFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PageInfoInput = {
  Description?: InputMaybe<Scalars['String']['input']>;
  Link?: InputMaybe<Scalars['String']['input']>;
  Title?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Pagination = {
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type PoolzBoutique = {
  Color?: Maybe<Scalars['String']['output']>;
  Discord?: Maybe<Scalars['String']['output']>;
  Logo?: Maybe<UploadFile>;
  Telegram?: Maybe<Scalars['String']['output']>;
  TokenAddress?: Maybe<Scalars['String']['output']>;
  Twitter?: Maybe<Scalars['String']['output']>;
  WebSite?: Maybe<Scalars['String']['output']>;
  chainID?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  projectName?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PoolzBoutiqueEntityResponseCollection = {
  nodes: Array<PoolzBoutique>;
  pageInfo: Pagination;
};

export type PoolzBoutiqueFiltersInput = {
  Color?: InputMaybe<StringFilterInput>;
  Discord?: InputMaybe<StringFilterInput>;
  Telegram?: InputMaybe<StringFilterInput>;
  TokenAddress?: InputMaybe<StringFilterInput>;
  Twitter?: InputMaybe<StringFilterInput>;
  WebSite?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<PoolzBoutiqueFiltersInput>>>;
  chainID?: InputMaybe<IntFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<PoolzBoutiqueFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PoolzBoutiqueFiltersInput>>>;
  projectName?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PoolzBoutiqueInput = {
  Color?: InputMaybe<Scalars['String']['input']>;
  Discord?: InputMaybe<Scalars['String']['input']>;
  Logo?: InputMaybe<Scalars['ID']['input']>;
  Telegram?: InputMaybe<Scalars['String']['input']>;
  TokenAddress?: InputMaybe<Scalars['String']['input']>;
  Twitter?: InputMaybe<Scalars['String']['input']>;
  WebSite?: InputMaybe<Scalars['String']['input']>;
  chainID?: InputMaybe<Scalars['Int']['input']>;
  projectName?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Privacy = {
  Value?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PrivacyInput = {
  Value?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProjectsInformation = {
  ATHROI?: Maybe<Scalars['Float']['output']>;
  Block?: Maybe<UploadFile>;
  CryptorankKey?: Maybe<Scalars['String']['output']>;
  FinishTime?: Maybe<Scalars['DateTime']['output']>;
  FullTokenDistribution?: Maybe<ComponentFullTokenDistributionFullTokenDistribution>;
  Investors?: Maybe<Array<Maybe<ComponentInvestorsInvestors>>>;
  IsShow: Scalars['Boolean']['output'];
  IsTimeTBA: Scalars['Boolean']['output'];
  Logo?: Maybe<UploadFile>;
  MainListShow?: Maybe<Scalars['Boolean']['output']>;
  Name: Scalars['String']['output'];
  Original?: Maybe<ComponentSyntheticZoneSyntetic>;
  PoolzBackId?: Maybe<Scalars['Long']['output']>;
  StartTime?: Maybe<Scalars['DateTime']['output']>;
  Syntetic?: Maybe<ComponentSyntheticZoneSyntetic>;
  UploadPool?: Maybe<ComponentUploadPoolUploadPool>;
  VisualText?: Maybe<ComponentVisualTextVisualText>;
  Warning_Text?: Maybe<Scalars['String']['output']>;
  WhitelistId?: Maybe<Scalars['Long']['output']>;
  blockLocations?: Maybe<Scalars['String']['output']>;
  chain_setting?: Maybe<ChainSetting>;
  coingeckoKey?: Maybe<Scalars['String']['output']>;
  coinmarketcapKey?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  ido_badge?: Maybe<IdoBadge>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ProjectsInformationInvestorsArgs = {
  filters?: InputMaybe<ComponentInvestorsInvestorsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProjectsInformationEntityResponseCollection = {
  nodes: Array<ProjectsInformation>;
  pageInfo: Pagination;
};

export type ProjectsInformationFiltersInput = {
  ATHROI?: InputMaybe<FloatFilterInput>;
  CryptorankKey?: InputMaybe<StringFilterInput>;
  FinishTime?: InputMaybe<DateTimeFilterInput>;
  FullTokenDistribution?: InputMaybe<ComponentFullTokenDistributionFullTokenDistributionFiltersInput>;
  Investors?: InputMaybe<ComponentInvestorsInvestorsFiltersInput>;
  IsShow?: InputMaybe<BooleanFilterInput>;
  IsTimeTBA?: InputMaybe<BooleanFilterInput>;
  MainListShow?: InputMaybe<BooleanFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Original?: InputMaybe<ComponentSyntheticZoneSynteticFiltersInput>;
  PoolzBackId?: InputMaybe<LongFilterInput>;
  StartTime?: InputMaybe<DateTimeFilterInput>;
  Syntetic?: InputMaybe<ComponentSyntheticZoneSynteticFiltersInput>;
  UploadPool?: InputMaybe<ComponentUploadPoolUploadPoolFiltersInput>;
  VisualText?: InputMaybe<ComponentVisualTextVisualTextFiltersInput>;
  Warning_Text?: InputMaybe<StringFilterInput>;
  WhitelistId?: InputMaybe<LongFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ProjectsInformationFiltersInput>>>;
  blockLocations?: InputMaybe<StringFilterInput>;
  chain_setting?: InputMaybe<ChainSettingFiltersInput>;
  coingeckoKey?: InputMaybe<StringFilterInput>;
  coinmarketcapKey?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  ido_badge?: InputMaybe<IdoBadgeFiltersInput>;
  not?: InputMaybe<ProjectsInformationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProjectsInformationFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProjectsInformationInput = {
  ATHROI?: InputMaybe<Scalars['Float']['input']>;
  Block?: InputMaybe<Scalars['ID']['input']>;
  CryptorankKey?: InputMaybe<Scalars['String']['input']>;
  FinishTime?: InputMaybe<Scalars['DateTime']['input']>;
  FullTokenDistribution?: InputMaybe<ComponentFullTokenDistributionFullTokenDistributionInput>;
  Investors?: InputMaybe<Array<InputMaybe<ComponentInvestorsInvestorsInput>>>;
  IsShow?: InputMaybe<Scalars['Boolean']['input']>;
  IsTimeTBA?: InputMaybe<Scalars['Boolean']['input']>;
  Logo?: InputMaybe<Scalars['ID']['input']>;
  MainListShow?: InputMaybe<Scalars['Boolean']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Original?: InputMaybe<ComponentSyntheticZoneSynteticInput>;
  PoolzBackId?: InputMaybe<Scalars['Long']['input']>;
  StartTime?: InputMaybe<Scalars['DateTime']['input']>;
  Syntetic?: InputMaybe<ComponentSyntheticZoneSynteticInput>;
  UploadPool?: InputMaybe<ComponentUploadPoolUploadPoolInput>;
  VisualText?: InputMaybe<ComponentVisualTextVisualTextInput>;
  Warning_Text?: InputMaybe<Scalars['String']['input']>;
  WhitelistId?: InputMaybe<Scalars['Long']['input']>;
  blockLocations?: InputMaybe<Scalars['String']['input']>;
  chain_setting?: InputMaybe<Scalars['ID']['input']>;
  coingeckoKey?: InputMaybe<Scalars['String']['input']>;
  coinmarketcapKey?: InputMaybe<Scalars['String']['input']>;
  ido_badge?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum PublicationStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type Query = {
  aboutUs?: Maybe<AboutUs>;
  account?: Maybe<Account>;
  boost?: Maybe<Boost>;
  buyPoolz?: Maybe<BuyPoolz>;
  buyPoolzs: Array<Maybe<BuyPoolz>>;
  buyPoolzs_connection?: Maybe<BuyPoolzEntityResponseCollection>;
  buyWith?: Maybe<BuyWith>;
  buyWiths: Array<Maybe<BuyWith>>;
  buyWiths_connection?: Maybe<BuyWithEntityResponseCollection>;
  chain?: Maybe<Chain>;
  chainSetting?: Maybe<ChainSetting>;
  chainSettings: Array<Maybe<ChainSetting>>;
  chainSettings_connection?: Maybe<ChainSettingEntityResponseCollection>;
  chains: Array<Maybe<Chain>>;
  chains_connection?: Maybe<ChainEntityResponseCollection>;
  condition?: Maybe<Condition>;
  contract?: Maybe<Contract>;
  contractType?: Maybe<ContractType>;
  contractTypes: Array<Maybe<ContractType>>;
  contractTypes_connection?: Maybe<ContractTypeEntityResponseCollection>;
  contracts: Array<Maybe<Contract>>;
  contractsOnChain?: Maybe<ContractsOnChain>;
  contractsOnChains: Array<Maybe<ContractsOnChain>>;
  contractsOnChains_connection?: Maybe<ContractsOnChainEntityResponseCollection>;
  contracts_connection?: Maybe<ContractEntityResponseCollection>;
  cover?: Maybe<Cover>;
  covers: Array<Maybe<Cover>>;
  covers_connection?: Maybe<CoverEntityResponseCollection>;
  defaultWallet?: Maybe<DefaultWallet>;
  defaultWallets: Array<Maybe<DefaultWallet>>;
  defaultWallets_connection?: Maybe<DefaultWalletEntityResponseCollection>;
  footer?: Maybe<Footer>;
  grow?: Maybe<Grow>;
  growBadge?: Maybe<GrowBadge>;
  growBadges: Array<Maybe<GrowBadge>>;
  growBadges_connection?: Maybe<GrowBadgeEntityResponseCollection>;
  grows: Array<Maybe<Grow>>;
  grows_connection?: Maybe<GrowEntityResponseCollection>;
  header?: Maybe<Header>;
  i18NLocale?: Maybe<I18NLocale>;
  i18NLocales: Array<Maybe<I18NLocale>>;
  i18NLocales_connection?: Maybe<I18NLocaleEntityResponseCollection>;
  idoBadge?: Maybe<IdoBadge>;
  idoBadges: Array<Maybe<IdoBadge>>;
  idoBadges_connection?: Maybe<IdoBadgeEntityResponseCollection>;
  investTerm?: Maybe<InvestTerm>;
  investor?: Maybe<Investor>;
  investors: Array<Maybe<Investor>>;
  investors_connection?: Maybe<InvestorEntityResponseCollection>;
  latestType?: Maybe<LatestType>;
  linkType?: Maybe<LinkType>;
  linkTypes: Array<Maybe<LinkType>>;
  linkTypes_connection?: Maybe<LinkTypeEntityResponseCollection>;
  lockPoolzTerm?: Maybe<LockPoolzTerm>;
  lockTokenWhitelist?: Maybe<LockTokenWhitelist>;
  lockTokenWhitelists: Array<Maybe<LockTokenWhitelist>>;
  lockTokenWhitelists_connection?: Maybe<LockTokenWhitelistEntityResponseCollection>;
  main?: Maybe<Main>;
  marketCapBadge?: Maybe<MarketCapBadge>;
  marketCapBadges: Array<Maybe<MarketCapBadge>>;
  marketCapBadges_connection?: Maybe<MarketCapBadgeEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  mediaKit?: Maybe<MediaKit>;
  mediaKits: Array<Maybe<MediaKit>>;
  mediaKits_connection?: Maybe<MediaKitEntityResponseCollection>;
  nonEvmChain?: Maybe<NonEvmChain>;
  nonEvmChains: Array<Maybe<NonEvmChain>>;
  nonEvmChains_connection?: Maybe<NonEvmChainEntityResponseCollection>;
  openGrant?: Maybe<OpenGrant>;
  openGrants: Array<Maybe<OpenGrant>>;
  openGrants_connection?: Maybe<OpenGrantEntityResponseCollection>;
  ourPartner?: Maybe<OurPartner>;
  ourPartners: Array<Maybe<OurPartner>>;
  ourPartners_connection?: Maybe<OurPartnerEntityResponseCollection>;
  pageInfo?: Maybe<PageInfo>;
  pageInfos: Array<Maybe<PageInfo>>;
  pageInfos_connection?: Maybe<PageInfoEntityResponseCollection>;
  poolzBoutique?: Maybe<PoolzBoutique>;
  poolzBoutiques: Array<Maybe<PoolzBoutique>>;
  poolzBoutiques_connection?: Maybe<PoolzBoutiqueEntityResponseCollection>;
  privacy?: Maybe<Privacy>;
  projectsInformation?: Maybe<ProjectsInformation>;
  projectsInformations: Array<Maybe<ProjectsInformation>>;
  projectsInformations_connection?: Maybe<ProjectsInformationEntityResponseCollection>;
  reviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  reviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  reviewWorkflowsWorkflowStages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
  reviewWorkflowsWorkflowStages_connection?: Maybe<ReviewWorkflowsWorkflowStageEntityResponseCollection>;
  reviewWorkflowsWorkflows: Array<Maybe<ReviewWorkflowsWorkflow>>;
  reviewWorkflowsWorkflows_connection?: Maybe<ReviewWorkflowsWorkflowEntityResponseCollection>;
  stakingCoolDown?: Maybe<StakingCoolDown>;
  stakingCoolDowns: Array<Maybe<StakingCoolDown>>;
  stakingCoolDowns_connection?: Maybe<StakingCoolDownEntityResponseCollection>;
  uploadFile?: Maybe<UploadFile>;
  uploadFiles: Array<Maybe<UploadFile>>;
  uploadFiles_connection?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRole>;
  usersPermissionsRoles: Array<Maybe<UsersPermissionsRole>>;
  usersPermissionsRoles_connection?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUser>;
  usersPermissionsUsers: Array<Maybe<UsersPermissionsUser>>;
  usersPermissionsUsers_connection?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  vaultFaq?: Maybe<VaultFaq>;
  vaultFaqs: Array<Maybe<VaultFaq>>;
  vaultFaqs_connection?: Maybe<VaultFaqEntityResponseCollection>;
};


export type QueryAboutUsArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryAccountArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryBoostArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryBuyPoolzArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryBuyPoolzsArgs = {
  filters?: InputMaybe<BuyPoolzFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryBuyPoolzs_ConnectionArgs = {
  filters?: InputMaybe<BuyPoolzFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryBuyWithArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryBuyWithsArgs = {
  filters?: InputMaybe<BuyWithFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryBuyWiths_ConnectionArgs = {
  filters?: InputMaybe<BuyWithFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryChainArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryChainSettingArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryChainSettingsArgs = {
  filters?: InputMaybe<ChainSettingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryChainSettings_ConnectionArgs = {
  filters?: InputMaybe<ChainSettingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryChainsArgs = {
  filters?: InputMaybe<ChainFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryChains_ConnectionArgs = {
  filters?: InputMaybe<ChainFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryConditionArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryContractArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryContractTypeArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryContractTypesArgs = {
  filters?: InputMaybe<ContractTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryContractTypes_ConnectionArgs = {
  filters?: InputMaybe<ContractTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryContractsArgs = {
  filters?: InputMaybe<ContractFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryContractsOnChainArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryContractsOnChainsArgs = {
  filters?: InputMaybe<ContractsOnChainFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryContractsOnChains_ConnectionArgs = {
  filters?: InputMaybe<ContractsOnChainFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryContracts_ConnectionArgs = {
  filters?: InputMaybe<ContractFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCoverArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCoversArgs = {
  filters?: InputMaybe<CoverFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCovers_ConnectionArgs = {
  filters?: InputMaybe<CoverFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryDefaultWalletArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryDefaultWalletsArgs = {
  filters?: InputMaybe<DefaultWalletFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryDefaultWallets_ConnectionArgs = {
  filters?: InputMaybe<DefaultWalletFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryFooterArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryGrowArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryGrowBadgeArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryGrowBadgesArgs = {
  filters?: InputMaybe<GrowBadgeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryGrowBadges_ConnectionArgs = {
  filters?: InputMaybe<GrowBadgeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryGrowsArgs = {
  filters?: InputMaybe<GrowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryGrows_ConnectionArgs = {
  filters?: InputMaybe<GrowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryHeaderArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocaleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocales_ConnectionArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryIdoBadgeArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryIdoBadgesArgs = {
  filters?: InputMaybe<IdoBadgeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryIdoBadges_ConnectionArgs = {
  filters?: InputMaybe<IdoBadgeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryInvestTermArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryInvestorArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryInvestorsArgs = {
  filters?: InputMaybe<InvestorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryInvestors_ConnectionArgs = {
  filters?: InputMaybe<InvestorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryLatestTypeArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryLinkTypeArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryLinkTypesArgs = {
  filters?: InputMaybe<LinkTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryLinkTypes_ConnectionArgs = {
  filters?: InputMaybe<LinkTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryLockPoolzTermArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryLockTokenWhitelistArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryLockTokenWhitelistsArgs = {
  filters?: InputMaybe<LockTokenWhitelistFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryLockTokenWhitelists_ConnectionArgs = {
  filters?: InputMaybe<LockTokenWhitelistFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryMainArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryMarketCapBadgeArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryMarketCapBadgesArgs = {
  filters?: InputMaybe<MarketCapBadgeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryMarketCapBadges_ConnectionArgs = {
  filters?: InputMaybe<MarketCapBadgeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryMediaKitArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryMediaKitsArgs = {
  filters?: InputMaybe<MediaKitFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryMediaKits_ConnectionArgs = {
  filters?: InputMaybe<MediaKitFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryNonEvmChainArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryNonEvmChainsArgs = {
  filters?: InputMaybe<NonEvmChainFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryNonEvmChains_ConnectionArgs = {
  filters?: InputMaybe<NonEvmChainFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryOpenGrantArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryOpenGrantsArgs = {
  filters?: InputMaybe<OpenGrantFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryOpenGrants_ConnectionArgs = {
  filters?: InputMaybe<OpenGrantFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryOurPartnerArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryOurPartnersArgs = {
  filters?: InputMaybe<OurPartnerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryOurPartners_ConnectionArgs = {
  filters?: InputMaybe<OurPartnerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPageInfoArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPageInfosArgs = {
  filters?: InputMaybe<PageInfoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPageInfos_ConnectionArgs = {
  filters?: InputMaybe<PageInfoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPoolzBoutiqueArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPoolzBoutiquesArgs = {
  filters?: InputMaybe<PoolzBoutiqueFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPoolzBoutiques_ConnectionArgs = {
  filters?: InputMaybe<PoolzBoutiqueFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPrivacyArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProjectsInformationArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProjectsInformationsArgs = {
  filters?: InputMaybe<ProjectsInformationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProjectsInformations_ConnectionArgs = {
  filters?: InputMaybe<ProjectsInformationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowsArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflows_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryStakingCoolDownArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryStakingCoolDownsArgs = {
  filters?: InputMaybe<StakingCoolDownFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryStakingCoolDowns_ConnectionArgs = {
  filters?: InputMaybe<StakingCoolDownFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFileArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFiles_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRoleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRoles_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUserArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryVaultFaqArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryVaultFaqsArgs = {
  filters?: InputMaybe<VaultFaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryVaultFaqs_ConnectionArgs = {
  filters?: InputMaybe<VaultFaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type ReviewWorkflowsWorkflow = {
  contentTypes: Scalars['JSON']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  stageRequiredToPublish?: Maybe<ReviewWorkflowsWorkflowStage>;
  stages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
  stages_connection?: Maybe<ReviewWorkflowsWorkflowStageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ReviewWorkflowsWorkflowEntityResponseCollection = {
  nodes: Array<ReviewWorkflowsWorkflow>;
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  contentTypes?: InputMaybe<JsonFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  stageRequiredToPublish?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  stages?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ReviewWorkflowsWorkflowInput = {
  contentTypes?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  stageRequiredToPublish?: InputMaybe<Scalars['ID']['input']>;
  stages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ReviewWorkflowsWorkflowStage = {
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workflow?: Maybe<ReviewWorkflowsWorkflow>;
};

export type ReviewWorkflowsWorkflowStageEntityResponseCollection = {
  nodes: Array<ReviewWorkflowsWorkflowStage>;
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowStageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  color?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  workflow?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
};

export type ReviewWorkflowsWorkflowStageInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workflow?: InputMaybe<Scalars['ID']['input']>;
};

export type ReviewWorkflowsWorkflowStageRelationResponseCollection = {
  nodes: Array<ReviewWorkflowsWorkflowStage>;
};

export type StakingCoolDown = {
  Amount?: Maybe<Scalars['String']['output']>;
  CoolDownPeriod?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type StakingCoolDownEntityResponseCollection = {
  nodes: Array<StakingCoolDown>;
  pageInfo: Pagination;
};

export type StakingCoolDownFiltersInput = {
  Amount?: InputMaybe<StringFilterInput>;
  CoolDownPeriod?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<StakingCoolDownFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<StakingCoolDownFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<StakingCoolDownFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  text?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type StakingCoolDownInput = {
  Amount?: InputMaybe<Scalars['String']['input']>;
  CoolDownPeriod?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntityResponseCollection = {
  nodes: Array<UploadFile>;
  pageInfo: Pagination;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileRelationResponseCollection = {
  nodes: Array<UploadFile>;
};

export type UsersPermissionsCreateRolePayload = {
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  documentId: Scalars['ID']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  nodes: Array<UsersPermissionsPermission>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  permissions: Array<Maybe<UsersPermissionsPermission>>;
  permissions_connection?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users: Array<Maybe<UsersPermissionsUser>>;
  users_connection?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRolePermissions_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  nodes: Array<UsersPermissionsRole>;
  pageInfo: Pagination;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntityResponse = {
  data?: Maybe<UsersPermissionsUser>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  nodes: Array<UsersPermissionsUser>;
  pageInfo: Pagination;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  provider?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  nodes: Array<UsersPermissionsUser>;
};

export type VaultFaq = {
  LongText?: Maybe<Scalars['String']['output']>;
  ShortText?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type VaultFaqEntityResponseCollection = {
  nodes: Array<VaultFaq>;
  pageInfo: Pagination;
};

export type VaultFaqFiltersInput = {
  LongText?: InputMaybe<StringFilterInput>;
  ShortText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<VaultFaqFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<VaultFaqFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<VaultFaqFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type VaultFaqInput = {
  LongText?: InputMaybe<Scalars['String']['input']>;
  ShortText?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FooterQueryVariables = Exact<{ [key: string]: never; }>;


export type FooterQuery = { footer?: { Company: Array<{ id: string, name: string, url: string, newWindow: boolean } | null>, Help: Array<{ id: string, name: string, url: string, newWindow: boolean } | null>, Information: Array<{ id: string, name: string, url: string, newWindow: boolean } | null>, Social: Array<{ id: string, name: string, url: string, newWindow: boolean } | null>, Boost_Social: Array<{ id: string, name: string, url: string, newWindow: boolean } | null> } | null };


export const FooterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Footer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"footer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"newWindow"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Help"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"newWindow"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Information"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"newWindow"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Social"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"newWindow"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Boost_Social"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"newWindow"}}]}}]}}]}}]} as unknown as DocumentNode<FooterQuery, FooterQueryVariables>;