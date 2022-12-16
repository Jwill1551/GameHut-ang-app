export class User
{
    private id: number = -1;
    private first_name: string = "";
    private last_name: string = "";
    private password: string = "";
    private username: string = "";
    private email:string = "";

    constructor(Id:number, first_name:string, last_name:string, email:string){
        this.id = Id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
    }

    get Id():number{
        return this.id;
    }

    set Id(id:number) {
        this.id = id;
    }

    get First_name():string{
        return this.first_name;
    }

    set First_name(first_name:string){
        this.first_name = first_name;
    }

    get Last_name():string{
        return this.last_name;
    }

    set Last_name(last_name:string){
        this.last_name = last_name;
    }

    get Password():string{
        return this.password
    }

    set Password(password:string){
        this.password = password;
    }

    get Username():string{
        return this.username;
    }

    set Username(username:string){
        this.username = username;
    }

    get Email(){
        return this.email;
    }

    set Email(email:string){
        this.email = email;
    }
}