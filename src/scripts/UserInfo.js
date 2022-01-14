export class UserInfo {
  constructor(name, info, avatar, id) {
    this.name = name;
    this.info = info;
    this.avatar = avatar;
    this.id = id;
    this.setId = this.setId.bind(this);
  }
  //возвращает объект с данными пользователя в попап
  getUserInfo() {
    const userInfo = {
      name: this.name.textContent,
      info: this.info.textContent,
    };
    return userInfo;
  }
  //принимает новые данные пользователя и добавляет их на страницу
  setUserInfo({ name, info }) {
    this.name.textContent = name;
    this.info.textContent = info;
  }
  setAvatar(avatar) {
    this.avatar.src = avatar;
  }

  setId(id) {
    this.id = id;
  }
}
