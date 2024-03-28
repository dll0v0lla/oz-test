const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // 기존 기능 차단

    let userId = event.target.id.value;
    let userPw1 = event.target.pw1.value;
    let userPw2 = event.target.pw2.value;
    let userName = event.target.name.value;
    let userPhone = event.target.phone.value;
    let userPosition = event.target.position.value;
    let userGender = event.target.gender.value;
    let userEmail = event.target.email.value;
    let userintro = event.target.intro.value;

    if (userId.length < 6) {
        alert("🚫 아이디가 너무 짧습니다. 6자 이상 입력해주세요.");
        return;
    }

    if (userPw1 !== userPw2) {
        alert("🚫 비밀번호가 일치하지 않습니다.");
        return;
    }

    // 전화번호 형식 변환 함수
    function formatPhoneNumber(phoneNumber) {
        // 숫자만 남기고 나머지는 제거하여 전화번호 형식에 맞게 변환
        const cleaned = ('' + phoneNumber).replace(/\D/g, '');
        // 형식에 맞게 전화번호 변환 (000-0000-0000)
        const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);
        if (match) {
            return match[1] + '-' + match[2] + '-' + match[3];
        } else {
            // 형식에 맞지 않는 경우 null 반환
            return null;
        }
    }

    const formattedPhone = formatPhoneNumber(userPhone);
    if (!formattedPhone) {
        alert("🚫 올바른 전화번호 형식이 아닙니다. 다시 입력해주세요.");
        return;
    }

    // 가입 잘 되었다! 환영!
    document.body.innerHTML = "";
    document.write(`<h1>🤍 ${userId}님, 환영합니다. 🤍</h1>`);
    document.write(`<h2>회원 가입 시 입력하신 내용은 다음과 같습니다.</h2>`);
    document.write(`<p>🔖 아이디: ${userId}</p>`);
    document.write(`<p>🌸 사용자 이름: ${userName}</p>`);
    document.write(`<p>📞 전화번호: ${formattedPhone}</p>`);
    document.write(`<p>💼 원하는 직무: ${userPosition}</p>`);
});
