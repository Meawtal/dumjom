// กำหนดชื่อผู้ใช้และรหัสผ่านแบบธรรมดา
const correctUser = "admin";
const correctPassword = "1234";

// ฟังก์ชันตรวจสอบล็อกอิน
function login(event) {
    event.preventDefault(); // ป้องกันฟอร์มรีเฟรชหน้า

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    // ตรวจสอบว่า username และ password ตรงหรือไม่
    if (username === correctUser && password === correctPassword) {
        sessionStorage.setItem("loggedIn", "true"); // บันทึกสถานะล็อกอิน
        window.location.href = "dashboard.html"; // ไปยังหน้าหลัก
    } else {
        document.getElementById("error").textContent = "Hackerหรอ";
    }
}

// ผูก event กับฟอร์ม
document.getElementById("loginForm").addEventListener("submit", login);
