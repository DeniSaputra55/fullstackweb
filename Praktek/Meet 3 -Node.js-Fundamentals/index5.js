// arrow function : untuk menggantikan function normal sehingga code menjadi lebih clean.
const fullname = (fistName, LastName) => {
    const name = `${fistName} ${LastName}`;
    return name;
}
console.log( fullname('Deni', 'Saputra'));