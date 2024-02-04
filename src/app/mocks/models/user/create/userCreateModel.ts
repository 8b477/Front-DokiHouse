export class userCreateModels{
    readonly name : string;
    readonly email : string;
    readonly passwd : string;
    readonly passwdConfirm : string;
    
    constructor(name : string, email : string, passwd : string, passwdConfirm : string) {
        this.name = name;
        this.email = email;
        this.passwd = passwd;
        this.passwdConfirm = passwdConfirm;
    }
}
