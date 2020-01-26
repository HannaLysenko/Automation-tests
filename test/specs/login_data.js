const HOST = 'https://stage.pasv.us';

const URL_REGISTER = `${HOST}/user/register`;
const URL_LOGIN = `${HOST}/user/login`;
const URL_DIARY = `${HOST}/diary`

const loginUser = {
    email: 'hannatkach92@gmail.com',
    password: '11111'
};

const loginPage = {
    h1: 'Hanna Lysenko'
}

module.exports = {URL_REGISTER, URL_LOGIN, loginUser, loginPage, URL_DIARY};