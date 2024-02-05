export class TokenDecryptedModel{
    nameid : number
    name : string
    role : string
    nbf : number
    exp : number
    iat : number

    constructor(id : number, name : string, role : string, nbf : number, exp : number, iat : number ){
        this.nameid = id
        this.name = name
        this.role = role
        this.nbf = nbf
        this.exp = exp
        this.iat = iat
    }
}
