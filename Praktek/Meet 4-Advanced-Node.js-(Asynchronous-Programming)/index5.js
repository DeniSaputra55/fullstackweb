// async/await : untuk mengelola operasi asinkron dengan cara yang lebih terstruktur.
//code async / await
async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = { name: "Dhenis", age: 30};
            if (data) {
                resolve(data); // promise berhasil
            } else {
                reject("Data not found"); //promise ditolak
            }
        },1000); //simulasi waktu eksekusi
    });
}
async function main() {
    try {
        console.log( "facthing data...");
        const result = await fetchData(); //menunggu hingga promise selesai
        console.log( result );
        console.log("Finished.");
    } catch (error){
        console.log(error);
    }
}
main();
