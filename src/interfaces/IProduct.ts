export interface IProduct {
    TraceId:string;
    BrandId:string;
    ProductName: string;
    ProductCategory:string;
    BrandName?:string;
    CountryOfOrgin?:string;
    Discrption?: string;
    Tittle?: string;
    Category: string;
    KeyPoints?:Array<string>;
    Tags?:Array<string>;
    Stock?: number;
    ProductType?:string;
    ProducDetails?:any
    Price?: number;
    MRP?: number;
    GST?: number;
    IGST?:number;
    SGST?:number;
    BuddyMargin?: number;
    LoyalityPoint?: number;
}

export interface IProductDetails {
    TraceId:string;
    BrandId:string;
    Category: string;
    ProductCategory:string;
    ProductName: string;
    Tittle: string;
    BrandName:string;
    CountryOfOrgin:string;
    KeyPoints:Array<string>;
    ImageLinks:Array<ImageLinks>;
}
export interface IAdditionalDetails {
    AgeGroup:string;
    Warranty:string;
    RetunAndRefund: string;
    InBox:string;
    ImporctantNotes: string;
    Tags?:Array<string>;
}

export interface ImageLinks{
    Name:string;
    Url:string
}

export interface IPricingAndShipping {
    GST:string;
    BuddyMargin:string;
    LoyaltyPoint: string;
    LocalDelivery:string;
    ZonalDelivery: string;
    NationalDelivery: string;
    RetunPeriod:string;
}
