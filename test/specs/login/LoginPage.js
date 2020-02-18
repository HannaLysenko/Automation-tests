import Page from '../../Page';

class LoginPage extends Page{
    //email = $('//input[@name="email"]');

    get email(){
        return $('//input[@name="email"]');
    }

    get password(){
        return $('//input [@name="password"]');
    }

    get submitBtn(){
        return $('//button[@type="submit"]');
    }

    get h1(){
        return $('//h1');
    }

    login(){

    }

    open(){
        super.open('https://stage.pasv.us/user/login')
    }
}

export default new LoginPage();
