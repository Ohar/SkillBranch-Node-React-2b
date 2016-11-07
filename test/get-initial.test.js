'use strict';

const chai       = require('chai'),
      getInitial = require('./../scripts/get-initial'),
      assert     = chai.assert,
      expect     = chai.expect;

describe(
  'getInitial', () => {

    it(
      'Это функция', () => {
        assert.isFunction(getInitial);
      }
    );

    describe(
      'Корректность обработки', () => {

        it(
          'Корректный аргумент', () => {
            assert.equal(getInitial('test'), 'T.');
          }
        );

        it(
          'Некорректный аргумент', () => {
            expect(getInitial('')).to.be.an('error');
            expect(getInitial(null)).to.be.an('error');
            expect(getInitial()).to.be.an('error');
          }
        );

      }
    );

  }
);
