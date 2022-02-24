export interface IProductDetails {
    TraceId:string;
    BrandId:string;
    Category: string;
    ProductCategory:string;
    ProductName: string;
    Tittle?: string;
    BrandName?:string;
    CountryOfOrgin?:string;
    KeyPoints?:Array<string>;
    ImageLinks?:Array<ImageLinks>;
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
