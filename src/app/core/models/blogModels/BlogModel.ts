export class Blog{
  cardPictureBonsai : string
  cardTextTitle     : string
  cardTextBody      : string
  cardAuthorName    : string
  cardDatePublied   : Date


  constructor(picture : string, text : string, content : string, author : string, datePublish : Date){
    this.cardPictureBonsai = picture,
    this.cardTextTitle     = text,
    this.cardTextBody      = content,
    this.cardAuthorName    = author,
    this.cardDatePublied   = datePublish
  }


}