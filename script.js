function activeboutton(){

    var firstname= document.getElementById("Firstname").value;
    var lastname= document.getElementById("Lastname").value;
    var email= document.getElementById("Email").value;
    

    if (firstname!="" && lastname!="" && email!=""){
        var bt1=document.getElementById("BT1").disabled = false;
}
    else{
        var bt1=document.getElementById("BT1").disabled = true;
    }
    

}

function print(){
   var firstname= document.getElementById("Firstname").value;
   var lastname= document.getElementById("Lastname").value;
   var email= document.getElementById("Email").value;
   w = open ("",'print', 'width=400, height=400, toolbar=no, scrollbars=no, resizable=yes');

   w.document.write ("<body>");

   w.document.write ("<h2>Prénom : ");
   w.document.write (firstname);
   w.document.write ("</h2>");

   w.document.write ("<h2>Nom : ");
   w.document.write (lastname);
   w.document.write ("</h2>");

   w.document.write ("<h2>E-mail : ");
   w.document.write (email);
   w.document.write ("</h2>");

   w.document.write ("</body>");
   w.document.close();
   w.print();

}


