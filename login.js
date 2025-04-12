document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // หยุดการส่งฟอร์มอัตโนมัติ
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // ชื่อผู้ใช้และรหัสผ่านที่ถูกต้อง
    const correctUsername = 'admin';
    const correctPassword = '1234';

    if (username === correctUsername && password === correctPassword) {
        alert('เข้าสู่ระบบสำเร็จ!');
        window.location.href = "dashboard.html";
        // ปรับให้ใช้ "dashboard.html" แทนชื่อไฟล์ 'dashborad.html'
    } else {
        alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
});