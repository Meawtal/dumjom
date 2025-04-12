// ตั้งค่าผู้ใช้และรหัสผ่านที่แฮชแล้ว
const correctUser = "admin";
const correctHashedPass = "e3afed0047b08059d0fada10f400c1e5c1d9a24d4ecb67a1b8089e2c0f76e8d9"; // SHA-256 hash ของ 

// ฟังก์ชันสำหรับการแฮชรหัสผ่าน
function hashPassword(password) {
    return CryptoJS.SHA256(password).toString(CryptoJS.enc.Base64);
}

// ฟังก์ชันการตรวจสอบการล็อกอิน
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // แฮชรหัสผ่านที่ผู้ใช้กรอก
    const hashedPass = hashPassword(password);

    // ตรวจสอบชื่อผู้ใช้และรหัสผ่านที่แฮชแล้ว
    if (username === correctUser && hashedPass === correctHashedPass) {
        // หากล็อกอินสำเร็จ เก็บสถานะล็อกอินใน sessionStorage
        sessionStorage.setItem('loggedIn', 'true');
        
        // เปลี่ยนหน้าไปที่หน้า main.html
        window.location.href = 'dashborad.html';
        return false;
    } else {
        // หากข้อมูลไม่ถูกต้อง แสดงข้อความผิดพลาด
        document.getElementById('error').textContent = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
        return false;
    }
}
