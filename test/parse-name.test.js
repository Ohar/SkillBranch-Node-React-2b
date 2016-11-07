'use strict';

const chai      = require('chai'),
      parseName = require('./../scripts/parse-name'),
      assert    = chai.assert,
      expect    = chai.expect;

const names = {
  valid  : {
    onlyLastname                      : 'Test',
    firstNameWithLastname             : 'Test1 Test2',
    firstNameWithLastnameAndPatronymic: 'Test1 Test2 Test3',
    jobs                              : 'Steven Paul Jobs',
    segalovich                        : 'Илья Валентинович Сегалович',
    tinna                             : 'Tinna Gunnlaugsdóttir',
    putin                             : 'Putin',
  },
  invalid: {
    fourWords: 'Test1 Test2 Test3 Test4',
    four     : 'Four word full name',
    empty    : '',
  },
};

describe(
  'parseName', () => {

    it(
      'Это функция', () => {
        assert.isFunction(parseName);
      }
    );

    describe(
      'Корректность обработки', () => {

        describe(
          'Корректные имена', () => {
            it(
              'Фамилия', () => {
                const expected = {
                  firstname : null,
                  patronymic: null,
                  lastname  : 'Test'
                };

                assert.deepEqual(
                  parseName(names.valid.onlyLastname),
                  expected
                );
              }
            );

            it(
              'Имя Фамилия', () => {
                const expected = {
                  firstname : 'Test1',
                  patronymic: null,
                  lastname  : 'Test2'
                };

                assert.deepEqual(parseName(names.valid.firstNameWithLastname), expected);
              }
            );

            it(
              'Имя Отчество Фамилия', () => {
                const expected = {
                  firstname : 'Test1',
                  patronymic: 'Test2',
                  lastname  : 'Test3'
                };

                assert.deepEqual(parseName(names.valid.firstNameWithLastnameAndPatronymic), expected);
              }
            );

            it(
              'Steven Paul Jobs', () => {
                const expected = {
                  firstname : 'Steven',
                  patronymic: 'Paul',
                  lastname  : 'Jobs'
                };

                assert.deepEqual(parseName(names.valid.jobs), expected);
              }
            );

            it(
              'Илья Валентинович Сегалович', () => {
                const expected = {
                  firstname : 'Илья',
                  patronymic: 'Валентинович',
                  lastname  : 'Сегалович'
                };

                assert.deepEqual(parseName(names.valid.segalovich), expected);
              }
            );

            it(
              'Tinna Gunnlaugsdóttir', () => {
                const expected = {
                  firstname : 'Tinna',
                  patronymic: null,
                  lastname  : 'Gunnlaugsdóttir'
                };

                assert.deepEqual(parseName(names.valid.tinna), expected);
              }
            );

            it(
              'Putin', () => {
                const expected = {
                  firstname : null,
                  patronymic: null,
                  lastname  : 'Putin'
                };

                assert.deepEqual(parseName(names.valid.putin), expected);
              }
            );
          }
        );

        describe(
          'Некорректные имена', () => {
            it(
              '4 слова', () => {
                assert.throws(() => {parseName(names.invalid.fourWords)}, 'Invalid fullname');
              }
            );

            it(
              'four', () => {
                assert.throws(() => {parseName(names.invalid.four)}, 'Invalid fullname');
              }
            );

            it(
              'Пустая строка', () => {
                assert.throws(() => {parseName(names.invalid.empty)}, 'Invalid fullname');
              }
            );
          }
        );

      }
    );

  }
);
