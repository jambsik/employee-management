import { emailRegex } from './../regexHelper';

describe('Regex test cases', () => {
    describe('EmailRegex test', () => {
        const regex = new RegExp(emailRegex);
        it('Should match valid email addresses', () => {
            const validEmails = [
                'test@example.com',
                'john.doe@test.co',
                'agustina_bo@test.co.uk',
            ];

            validEmails.forEach((email) => {
                expect(email).toMatch(regex);
            });
        });

        it('Should not match invalid email addresses', () => {
            const invalidEmails = [
                'jose',
                'jp@',
                'balvin@example',
                'cristobal@example.',
            ];

            invalidEmails.forEach((email) => {
                expect(email).not.toMatch(regex);
            });
        });
    });
});
