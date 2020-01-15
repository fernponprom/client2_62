let stdin = process.openStdin()
console.log('Enter your side: ')
stdin.addListener("data", (x)=> {
    let area
    if( x > 0){
        area = x * x
        console.log('Area of Square is ' + area)
    }
    else
        console.log('please enter your side')
    
    stdin.destroy()
})