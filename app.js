// تعريف الزر
const next = document.querySelector('#next');
// تعريف خط تقدم المراحل
const prog = document.getElementById('prog');
// تحديد قيمة التقدم
let progState = 0;
// إنشاء مصفوفة لتخزين عناصر المراحل المفعلة
let active = [];

// عند الظغط على الزر
next.addEventListener('click', () =>{
    // إذا كل المراحل غير مفعلة، ستفعل الأولى
    if (active.length == 0) {
        const item = document.querySelector(`#s1`);
        item.classList.add('active');
        active.push(item);
    }
    // إذا كل المراحل مفعلة يعاد كل شيء إلى مرحلة الصفر
    else if(active.length > 3) {
        for (let index = 0; index < active.length; index++) {
            const item = active[index];
            progState = 0;
            item.classList.remove('active');
        }
        active = [];
    }
    // تفعيل المراحل الباقية
    else {
        const item = document.querySelector(`#s${active.length + 1}`);
        (progState < 60)? progState += 25 : progState = 70;
        setTimeout(() => {
            item.classList.add('active');
        }, 1000);
        active.push(item);
    }
    // تحديث قيمة عرض خط المراحل المفعلة
    prog.style.width = progState + '%';
});