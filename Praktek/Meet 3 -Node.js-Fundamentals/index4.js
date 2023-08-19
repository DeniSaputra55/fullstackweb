//function : unutk mengelompokan suatu code sehingga code bisa digunakan berulang kali
function getFullname() {
    return ' Deni saputra';
}
console.log( getFullname());

//menggunakan void function
function getFullname1(){
    console.log('heheheh');
}
getFullname1();
//
function getFullname2(fistName, LastName){
    const fullName2 = fistName+ '' + LastName;
    return fullName2;
}
const firstname = 'Deni';
const lastname = 'Saputra 1';
console.log(getFullname2(firstname, lastname));
