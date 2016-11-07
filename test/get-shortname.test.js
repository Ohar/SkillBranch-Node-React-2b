'use strict';

const chai         = require('chai'),
      getShortname = require('./../scripts/get-shortname'),
      assert       = chai.assert;

describe(
  'getShortname', () => {

    it(
      'Это функция', () => {
        assert.isFunction(getShortname);
      }
    );

    describe(
      'Корректные имена', () => {
        it(
          'Фамилия', () => {
            const name = {
              firstname : null,
              patronymic: null,
              lastname  : 'Test'
            };

            assert.equal(getShortname(name), 'Test');
          }
        );

        it(
          'Имя Фамилия', () => {
            const name = {
              firstname : 'Test1',
              patronymic: null,
              lastname  : 'Test2'
            };

            assert.equal(getShortname(name), 'Test2 T.');
          }
        );

        it(
          'Имя Отчество Фамилия', () => {
            const name = {
              firstname : 'Test1',
              patronymic: 'Test2',
              lastname  : 'Test3'
            };

            assert.equal(getShortname(name), 'Test3 T. T.');
          }
        );

        it(
          'Steven Paul Jobs', () => {
            const name = {
              firstname : 'Steven',
              patronymic: 'Paul',
              lastname  : 'Jobs'
            };

            assert.equal(getShortname(name), 'Jobs S. P.');
          }
        );

        it(
          'Илья Валентинович Сегалович', () => {
            const name = {
              firstname : 'Илья',
              patronymic: 'Валентинович',
              lastname  : 'Сегалович'
            };

            assert.equal(getShortname(name), 'Сегалович И. В.');
          }
        );

        it(
          'Tinna Gunnlaugsdóttir', () => {
            const name = {
              firstname : 'Tinna',
              patronymic: null,
              lastname  : 'Gunnlaugsdóttir'
            };

            assert.equal(getShortname(name), 'Gunnlaugsdóttir T.');
          }
        );

        it(
          'Putin', () => {
            const name = {
              firstname : null,
              patronymic: null,
              lastname  : 'Putin'
            };

            assert.equal(getShortname(name), 'Putin');
          }
        );
      }
    );

  }
);
