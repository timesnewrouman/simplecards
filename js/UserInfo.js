class UserInfo {
    constructor(nameContainer, aboutContainer) {
        this.nameContainer = nameContainer;
        this.aboutContainer = aboutContainer;
    }

    setUserInfo(name, about) {
        name.value = this.nameContainer.textContent;
        about.value = this.aboutContainer.textContent;
    }

    updateUserInfo(name, about) {
        this.nameContainer.textContent = name;
        this.aboutContainer.textContent = about;
    }
}
