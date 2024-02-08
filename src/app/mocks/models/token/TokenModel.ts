export class TokenModel{

    token : string

constructor(tokenPayLoad: string) {
    if(tokenPayLoad==  undefined || null)
        console.log(tokenPayLoad)

        this.token = tokenPayLoad
    }

}