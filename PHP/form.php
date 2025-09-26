<?php


echo "aqui";
var_dump($_POST);

require 'processa_envio.php';

// die();

// if(isset($_POST['email']) && !empty($_POST['email'])){

//   $nome = addslashes($_POST['nome']);

//   $telefone = addslashes($_POST['telefone']);

//   $email = addslashes($_POST['email']);

//   $mensagem = addslashes($_POST['mensagem']);

//   // $to = "paulornvidigal@yahoo.com.br";

//   $to = "victorhugo.alvespires7@gmail.com";

//   $subject = "Informações imobiliária vidigal";

//   $body = "Nome: ". $nome ."\r\n".
//           "telefone: ". $telefone ."\r\n".
//           "email: ". $email ."\r\n" .
//           "mensagem: ". $mensagem ."\r\n";

//   $header = "From:webmail.imobiliariavidigal.com"."\r\n".
//             "Reply-to:".$email."\r\n".
//             "X=Mailer:PHP/".phpversion();

//   echo mail($to,$subject,$body,$header);

//   if(mail($to,$subject,$body,$header)){
//       echo "E-mail enviado com sucesso";
//   }else{
//       echo "E-mail não pôde ser enviado";
//   }
// }



// ?>