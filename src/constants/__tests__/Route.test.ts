import { RequestMethod } from './../RequestMethod';

describe('Route test cases', () => {
    describe('RequestMethod', () => {
        it('Should have correct values', () => {
            const expectedValues = {
                Get: 'get',
                Post: 'post',
                Put: 'put',
                Delete: 'delete',
            };

            Object.keys(expectedValues).forEach((key) => {
                expect(
                    RequestMethod[key as keyof typeof RequestMethod],
                ).toEqual(expectedValues[key]);
            });
        });
    });
});
