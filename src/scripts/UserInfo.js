export class UserInfo{
    constructor(name, info){
        this.name=name;
        this.info=info;

    }
   //возвращает объект с данными пользователя в попап
    getUserInfo() {
   const userInfo = {
       name: this.name.textContent,
       info: this.info.textContent
   }
   return userInfo;
      }
//принимает новые данные пользователя и добавляет их на страницу
    setUserInfo({name, info}){
        this.name.textContent = name;
        this.info.textContent = info;
    }
}