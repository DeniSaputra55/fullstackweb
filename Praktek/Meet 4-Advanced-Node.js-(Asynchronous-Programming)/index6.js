//contoh kasus dimana dilarang memakai async/await

function sendEmail() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log( "email sent!");
            resolve();
        }, 2000); //simulasi waktu pengiriman email
    });
}
async function main() {
    console.log( "Processing...");
    //menggunakan promise untuk pengiriman email tanpa await
    sendEmail()
    .then( () => {
        console.log( "email has been sent!");
    })
    .catch( (error) => {
        console.error( "email sending failed:", error);
    });
    //menggunakan await untuk pengiriman email
    console.log( "Response: email will be sent shortly.");
    console.log( "Finished.");
}
main();