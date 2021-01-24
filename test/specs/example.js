import LoginPage from '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('My Login application', () => {
    let credentials = [
        {
            username: "fapecep930@ahhtee.com",
            password: "qwerty123"
        }
    ];

    beforeEach(() => {
        LoginPage.open();
    });

    for (const iteration of credentials) {
        it('should login with valid credentials', () => {
            LoginPage.login(iteration.username, iteration.password);
            expect(ProfilePage.userIcon).toBeExisting();
        });
    }

    it('submit button should be disabled if input fields are empty', () => {
        expect(LoginPage.btnSubmit).not.toBeClickable();
    });

    it('auth fails if wrong credentials provided', () => {
        LoginPage.setUsername('example@example.com');
        LoginPage.setPassword('123456');
        LoginPage.clickSubmit();
        expect(LoginPage.notification).toHaveText('Auth ');
    });

    // it('email format validation', () => {
    //     LoginPage.setUsername('123');
    //     expect(LoginPage.usernameValidation).toHaveText(`'email' is not a valid email`);
    // });
    //
    // it('email required validation', () => {
    //     LoginPage.setUsername('123');
    //     // browser.pause(2000)
    //    // LoginPage.clearUsername();
    //     LoginPage.inputUsername.doubleClick();
    //     // browser.pause(2000)
    //     browser.keys("\u007F")
    //     // browser.pause(2000)
    //     expect(LoginPage.usernameValidation).toHaveText('Required');
    // })
});
