//Promise 활용해서 Callback 지옥 개선하기

class UserStorage {
    UserLogin(id, pw){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === "Admin01" && pw === "admin0123")
                    || (id === "Guest01" && pw === "guest0123")
                ){
                    resolve(id);
                } else {
                    reject("입력하신 아이디와 비밀번호를 확인해주세요.");
                }
            }, 2000);
        });
    }

    getRoles(user){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === "Admin01"){
                    resolve({name: "Rayched", role: "관리자"});
                } else {
                    reject("접속 불가, 관리자 아이디로 로그인 해주세요.");
                }
            }, 1000);
        });
    }
}

const ID = document.getElementById("ID_Input");
const PW = document.getElementById("PW_Input");
const LoginBtn = document.getElementById("LoginBtn");

const userStorage = new UserStorage();

function LoginTest(){
    let userID = ID.value;
    let userPW = PW.value;

    userStorage.UserLogin(userID, userPW)
    .then(userStorage.getRoles)
    .then((user) => {
        alert(`로그인 성공 ${user.name} / ${user.role}`);
    }).catch(alert);
}

LoginBtn.addEventListener("click", LoginTest);