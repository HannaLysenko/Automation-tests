const HOST = 'https://stage.pasv.us';
const URL_REGISTER = `${HOST}/user/register`;
const URL_LOGIN = `${HOST}/user/login`;

const user = {
    firstName: "John",
    lastName: 'Smith',
    password: 'dgdfdvsdgd2597dzg',
    phone: '19165975597',
    email: Math.random() + '@gmail.com',
    about: 'good mood',
    goals: 'make life better',
    englishLevel: 'Native'
};

const page = {
    title: 'Progress Monitor',
    h1: 'User Register',
    description: 'Profiles with fictitious or dummy data will be deleted.',
    buttonText: 'Submit'

};

const pageRegisterSelectors = {
    h1: 'h1',
    description: 'p',
    submitButton: 'form button[type="submit"]',
    firstNameInput: 'form input[name="firstName"]',
    lastNameInput: 'form input[name="lastName"]',
    phoneInput: 'form input[name="phone"]',
    emailInput: 'form input[name="email"]',
    passwordInput: 'form input[name="password"]',
    aboutInput: 'form textarea[name="about"]',
    goalsInput: 'form textarea[name="goals"]',
    englishLevelInput: 'form select[name="englishLevel"]'
};

const pageLogin = {
    h1: 'You are a new user'
};

module.exports = {URL_REGISTER, URL_LOGIN, user, page, pageRegisterSelectors, pageLogin};