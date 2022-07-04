const functions = require("firebase-functions");
const { user } = require("firebase-functions/v1/auth");
const nodemailer = require ("nodemailer");
const { isFunctionDeclaration } = require("typescript");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: email,
    }
})

exports.notificarCorreo = functions.firestore.document("notificacion/{id}").onCreate(
    (snap, context) => {
        const email = snap.data().email;
        return enviarCorreo(email, namep, telefono)
    }
);

//para enviar correo

function enviarCorreo(email, namep, telefono){
    return transport.sendMail(
        {
            from: email,
            to : "fundacion.findpets@gmail.com",
            subject:" Solcitud de adopción",
            html: `
            <h1> Hola, ${namep} ha solicitado adoptar una mascota!
            su número de conacto es :  ${telefono}</h1>
            <p> Gracias!</p>
            `
        })
        .then( r=> r)
        .catch(e=>e);
}