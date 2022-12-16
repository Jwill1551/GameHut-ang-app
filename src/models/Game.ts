export class Game {
    private id:number = -1;
    private title:string = "";
    private genre:string = "";
    private year:number = 1999;
    private platform:string = "";
    private rating:string = "";
    

    constructor(id:number, title:string, genre:string, year:number, platform:string, rating:any){
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.year = year;
        this.platform = platform;
        this.rating = rating;
    }

    get Id():number
    {
        return this.id;
    }
    set Id(id:number)
    {
        this.id = id;
    }

    get Title():string {
        return this.title;
    }

    set Title(title:string){
        this.title = title;
    }

    get Genre():string {
        return this.genre;
    }

    set Genre(genre:string){
        this.genre = genre;
    }

    get Year():number {
        return this.year;
    }

    set Year(year:number){
        this.year = year;
    }

    get Platform():string {
        return this.platform;
    }

    set Platform(platform:string){
        this.platform = platform;
    }

    get Rating():string {
        return this.rating;
    }

    set Rating(rating:string){
        this.rating = rating;
    }
}