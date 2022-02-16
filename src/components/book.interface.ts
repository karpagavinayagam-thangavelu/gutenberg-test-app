export interface IAuthor {
    birth_year?: number|null,
    death_year?: number|null,
    name: string;
};

export interface IBook  {
    id: number,
    authors: IAuthor[],
    bookshelves:string[],
    download_count: number,
    formats: {
        "application/x-mobipocket-ebook"?:string,
        "application/pdf"?:string,
        "text/plain; charset=us-ascii"?:string,
        "text/plain; charset=utf-8"?:string,
        "application/rdf+xml"?:string,
        "application/zip"?:string,
        "application/epub+zip"?:string,
        "text/html; charset=utf-8"?:string,
        "image/jpeg"?: string
    },
    languages: string[],
    media_type:string,
    subjects:string[],
    title: string
}

export interface IBookDetails {
    count: number,
    next ?: string|null,
    results: IBook[]
}