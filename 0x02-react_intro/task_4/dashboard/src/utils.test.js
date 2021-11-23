import {getFullYear, getFooterCopy, getLatestNotification} from './utils.js';



describe('utils test comps', () => {

    test("getFullYear returns the current year in 4 digits format", () => {
        expect(getFullYear()).toEaqual(2021);
    });


    test("getFooterCopy returns the right string in case false or true", () => {
        expect(getFooterCopy(true)).toEaqual('Holberton School');
    });


    test("getFooterCopy returns the right string in case false or true", () => {
        expect(getFooterCopy(true)).toEaqual('Holberton School');
    });

    test("getLatestNotification it returns the expected jsx element", () =>{
        expect(getLatestNotification().toEaqual(<span><strong>Urgent requirement</strong> - complete by EOD</span>))
    });

});