import emailjs from 'emailjs-com';
import swal from 'sweetalert';


export function enviarMensaje(e) {
  e.preventDefault();
  emailjs.sendForm('service_i5favah', 'template_mh4o9fj', e.target, 'user_vHgrPqBhsusdq9vTBoRwZ')
    .then((result) => {
      if(result.text === "OK"){
        swal({
          title: "Enviada!",
          text: "La consulta ha sido enviada!",
          icon: "success",
          button: "OK",
        });
      }
    }, (error) => {
        console.log(error.text);
    });
  e.target.reset();
}