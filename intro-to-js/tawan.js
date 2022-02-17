function askMyName() {
    
    const name = prompt("Please enter your name", "Your Name");
    
    // เรียกใช้คำสั่ง prompt เพื่อถามชื่อ https://www.w3schools.com/jsref/met_win_prompt.asp
 
    if (name != null) {
       document.getElementById("h1").innerHTML = "My name is " + name;
    }
 }
 
 function helloWorld() {
 const h1message = document.getElementById("h1").innerHTML;// ใช้คำสั่ง document.getElementById เหมือนใน askMyName เพื่อเอาข้อความใน h1 มาใส่
    alert(h1message + 'ไม่ว่าพายุจะแรงแค่ไหน สุดท้ายก็ต้องสงบ ปัญหาที่เราประสบ ไม่นานก็จบและผ่านไป')
 }