export class UserConnectedModel{
  id   : number
  name : string
  role : string

  constructor(id : number, name : string, role : string){
    this.id = id
    this.name = name
    this.role = role
  }
}
