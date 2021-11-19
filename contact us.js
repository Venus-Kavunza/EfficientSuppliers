function validate() {
      
    if( document.contact_us.name.value == "" ) {
       alert( "Please provide your name!" );
       document.contact_us.name.focus() ;
       return false;
    }
   
    if( document.contact_us.email.value == "" ) {
        alert( "Please provide your email!" );
        document.contact_us.email.focus() ;
        return false;
     }
   
     if( document.contact_us.phone.value == "" ) {
        alert( "Please provide your phone number!" );
        document.contact_us.name.focus() ;
        return false;
     }
   
   
     if( document.contact_us.message.value == "" ) {
        alert( "Please write your Message first" );
        document.contact_us.message.focus() ;
        return false;
     }
     else{
        alert("Message Submitted Successfully")
        return true ;
    }
   
}
   
   
   
   
   
   
   
   
   
   
   
   
    