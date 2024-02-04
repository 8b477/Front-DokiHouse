export class Blog{
  cardPictureBonsai : string
  cardTextTitle : string
  cardTextBody : string
  cardAuthorName : string
  cardDatePublied : Date

  constructor(picture : string, title : string, text : string, authorName : string, datePublied : Date){
    this.cardPictureBonsai = picture
    this.cardTextTitle = title
    this.cardTextBody = text
    this.cardAuthorName = authorName
    this.cardDatePublied = datePublied
  }
}