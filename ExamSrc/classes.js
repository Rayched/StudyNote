console.clear();

class User {
    constructor(FirstName, LastName, Nickname){
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Nickname = Nickname;
    }

    getFullName(){
        console.log(`${this.FirstName} ${this.LastName}`);
        return `${this.FirstName} ${this.LastName}`;
    }
}

class Player extends User {
    getNickname(){
        console.log(`${this.FirstName} ${this.LastName} / ${this.Nickname}`);
        return `${this.FirstName} ${this.LastName} / ${this.Nickname}`;
    }
}

const Player1 = new Player("John", "Pablo", "Johny");
Player1.getFullName(); //John Pablo
Player1.getNickname(); //John Pablo / Johny