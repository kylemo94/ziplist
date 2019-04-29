/* eslint-env mocha, chai */
/*global zipList, zipListTheSimpleWay */

describe('zipList', function () {
  const arrOne = [1, 2, 3];
  const arrTwo = ['a', 'b', 'c'];
  it('should return a single array with six elements', function () {
     chai.expect(zipList(arrOne, arrTwo)).to.have.lengthOf(6);
  });
  it('should deep equal the passed six element array', function () {
    chai.expect(zipList(arrOne, arrTwo)).to.deep.equal([1,"a",2,"b",3,"c"]);
  });
});

describe('zipListTheSimpleWay', function () {
  const arrOne = [1, 2, 3];
  const arrTwo = ['a', 'b', 'c'];
  it('should return a single array with six elements', function () {
    chai.expect(zipListTheSimpleWay(arrOne, arrTwo)).to.have.lengthOf(6);
  });
  it('should deep equal the passed six element array', function () {
    chai.expect(zipListTheSimpleWay(arrOne, arrTwo)).to.deep.equal([1,"a",2,"b",3,"c"]);
  });
});