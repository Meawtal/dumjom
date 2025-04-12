// JavaScript สำหรับเปลี่ยนหน้าเว็บเมื่อคลิกปุ่ม

// เมื่อคลิกที่ปุ่ม "เรียนรู้เพิ่มเติม"
document.getElementById('learnMoreBtn').addEventListener('click', function() {
    window.location.href = 'about.html';  // เปลี่ยนไปยังหน้า about.html
});

// เมื่อคลิกที่ปุ่ม "ติดต่อเรา"
document.getElementById('contactBtn').addEventListener('click', function() {
    window.location.href = 'contrac.html';  // เปลี่ยนไปยังหน้า contact.html
});


// การคำนวณผลบวกเมื่อกดปุ่ม
document.getElementById('calcForm').addEventListener('submit', function(event) {
    event.preventDefault(); // หยุดการรีเฟรชหน้าหลังจากกดปุ่ม

    // รับค่าตัวเลขจากฟอร์ม
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    // คำนวณผลบวก
    var sum = num1 + num2;

    // แสดงผลลัพธ์
    document.getElementById('result').textContent = sum;
    console.log(sum);
});