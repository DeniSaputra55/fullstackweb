//promise : untuk mengelola aliran/ urutan eksekusi dari kode yang bersifat asinkron
// kunci di dalam promise:
// 1.pending : status awal ketika promise sedang menunggu untuk diselesaikan atau ditolak.
// 2.fullfilled(Resolved) : promise telah berhasil diselesaikan dengan nilai yang diinginkan.
// 3.rejected : promise telah ditolak biasanya dengan alasan mengapa penyelesaian tidak berhasil.

//code function asinkron
function fetchData() {
    return new Promise((resolve, reject) => {
        //asumsi ini adalah panggilan API atau operasi yang memerlukan waktu
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

//code function promise
fetchData()
.then(result => {
    console.log( "Data fetched successfully:", result);
})
.catch(error => {
    console.error( "Error fetching data:", error);
});