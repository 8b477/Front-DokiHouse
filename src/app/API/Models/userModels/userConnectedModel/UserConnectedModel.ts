export class UserConnectedModel{
  id   : string
  name : string
  role : string

  constructor(id : string, name : string, role : string){
    this.id = id
    this.name = name
    this.role = role
  }
}
