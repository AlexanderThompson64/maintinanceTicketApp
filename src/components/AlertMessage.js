

const AlertMessage = () => {
    
    return ( 
        alert("For the purpose of this application login is a dummy feature, anything with an email format " + 
        "(asda@asdasd.com / .co.uk ) will work. \n\nYou can also type /admin in the url as there is no verification required," +
        "\nto access admin page.")
     );
}
 
export default AlertMessage;