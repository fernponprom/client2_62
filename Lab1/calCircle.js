let stdin = process.openStdin() //ประกาศเพื่อให้มีการเก็บข้อมูลผ่านคีย์บอร์ด
console.log('Enter your radius: ') //แสดงข้อมูลที่ต้องการ
stdin.addListener("data", (r)=> { //มีการเก็บค่าผ่านข้อมูล
    let area
    if( r > 0){
        area = 3.14 * r * r 
        console.log('area of circle = ' + area)
    }
    else
        console.log('enter your radius please')
    
    stdin.destroy()
})