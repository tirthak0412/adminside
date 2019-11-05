export class menuData{
  public constructor(public menu_id:number,
    public name:string,
    public discription:string,
    public price:number,
    public fk_cat_id:number,
    public is_jain:number,
    public is_available:number,
    public ingredients:string,
    public cat_id?:number,
    public cat_name?:string){}
}
