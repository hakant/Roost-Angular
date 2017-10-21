export interface Property {
    thumbnail: string;
    address: string;
    description: string;
    price: number;
    beds: number;
    baths: number;
    parking: number;
    images: Array<string>;
    rent: boolean;
    sale: boolean;
    city: string;
}
