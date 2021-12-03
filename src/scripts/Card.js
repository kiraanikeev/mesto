export class Card {
  constructor({
    name,
    link,
    id,
    userId,
    owner,
    likes,
    owntrLikes,
    likesres,
    cardSelector,
    handleCardClick,
    showDelete,
    handleLike,
  }) {
    this.name = name;
    this.link = link;
    this.id = id;
    this.userId = userId;
    this.owner = owner;
    this.likes = likes;
    this.owntrLikes = owntrLikes;
    this.cardSelector = cardSelector;
    this.handleCardClick = handleCardClick;
    this.showDelete = showDelete;
    this.handleLike = handleLike;
    this.likesres = likesres;
    this.showNoDelete = this.showNoDelete.bind(this);
    this.elemDelete = this.elemDelete.bind(this);
    this.likeFunction = this.likeFunction.bind(this);
  }
  _getTemplate() {
    const cardsTemplate = document
      .querySelector(this.cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardsTemplate;
  }

  _setEventListeners() {
    this._element
      .querySelector(".element__like")
      .addEventListener("click", () => {
        if (
          this._element
            .querySelector(".element__like")
            .classList.contains("element_like_aktive")
        ) {
          this.handleLike(true);
        } else {
          this.handleLike(false);
        }
      });
    this._element
      .querySelector(".element__delete")
      .addEventListener("click", () => {
        this.showDelete();
      });
    this._element
      .querySelector(".element__img")
      .addEventListener("click", () => {
        this.handleCardClick();
      });
  }
  activeLike() {
    this._element
      .querySelector(".element__like")
      .classList.add("element_like_aktive");
  }
  deleteLike() {
    this._element
      .querySelector(".element__like")
      .classList.remove("element_like_aktive");
  }

  likeFunction(likesres) {
    this.liked =
      likesres.filter((element) => {
        return element._id === this.userId;
      }).length > 0;
    if (this.liked) {
      this.activeLike();
    } else {
      this.deleteLike();
    }
    this._element.querySelector(".element_like_couner").textContent =
      likesres.length;
    if (likesres.length === 0) {
      this._element.querySelector(".element_like_couner").textContent = "";
    }
    return this.liked;
  }

  elemDelete() {
    this._element.remove();
  }
  showNoDelete() {
    if (this.owner !== this.userId) {
      this._element
        .querySelector(".element__delete")
        .classList.add("element_delete_hidden");
    }
  }

  createNewCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    const ElemName = this._element.querySelector(".element__name");
    const Elemlink = this._element.querySelector(".element__img");
    this.showNoDelete();
    this.likeFunction(this.owntrLikes);

    ElemName.textContent = this.name;
    Elemlink.src = this.link;

    return this._element;
  }
}
