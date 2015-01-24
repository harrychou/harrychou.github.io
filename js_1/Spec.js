/// <reference path="moment-with-locales.js" />
/// <reference path="Harry.js" />
describe("Harry", function () {
    it("can add 2 and 2", function () {
        var harry = new Harry();
        
        expect(harry.add(2, 2)).toBe(4);
    });
});

describe("Date", function() {
    it("tests out all functions", function() {
        var dt = new Date("2014-01-02T21:06:05+03:00");
        expect(dt.toString()).toBe('Thu Jan 02 2014 13:06:05 GMT-0500 (Eastern Standard Time)');
        expect(dt.toTimeString()).toBe('13:06:05 GMT-0500 (Eastern Standard Time)');
        expect(dt.toUTCString()).toBe('Thu, 02 Jan 2014 18:06:05 GMT');
        expect(dt.toJSON()).toBe('2014-01-02T18:06:05.000Z');

        var m = moment("2015-01-01T03:04:32+08:00");
        expect(m.toString()).toBe('Wed Dec 31 2014 14:04:32 GMT-0500');
        expect(m.toJSON()).toBe('2014-12-31T19:04:32.000Z');
        expect(m.toISOString()).toBe('2014-12-31T19:04:32.000Z');
        var dtString = m.format("YYYY-MM-DDTHH:mm:ss") + m.toString().substr(-5,3) + ':00';
        expect(dtString).toBe('2014-12-31T14:04:32-05:00');

    });
});