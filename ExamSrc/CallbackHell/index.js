class UserStorage {
    userLogin(id, pw, onSuccess, onError){
        setTimeout(() => {
            if (
                (id == "Admin" && pw == "admin01")
                || (id == "Guest" && pw == "guest01")
            ){
                onSuccess(id);
            } else {
                onError("입력하신 ID와 PW를 확인해주세요.");
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if(user == "Admin"){
                onSuccess({ name: "Aznable", role: "관리자"});
            } else {
                onError("접속 불가");
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();

const ID = document.getElementById("ID_Input");
const PW = document.getElementById("PW_Input");
const LoginBtn = document.getElementById("LoginBtn");

function LoginMatching(){
    let userID = ID.value;
    let userPW = PW.value;

    userStorage.userLogin(
        userID,
        userPW,
        (user) => {
            userStorage.getRoles(
                user,
                (userRoles) => {
                    alert(`어서오세요. ${userRoles.name}님, 당신은 ${userRoles.role}입니다.`);
                },
                (error) => alert(error)
            );
        },
        (error) => alert(error)
    );
}

LoginBtn.addEventListener("click", LoginMatching);