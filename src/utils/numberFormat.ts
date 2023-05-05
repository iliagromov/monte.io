/**
 * https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string#answer-14428340
 * примеры использования
 *
 * numberFormat(12345678.9, 2, 3, '.', ',');  // "12.345.678,90"
 * numberFormat(123456.789, 4, 4, ' ', ':');  // "12 3456:7890"
 * numberFormat(12345678.9, 0, 3, '-');       // "12-345-679"
 */

type NumberFormatType = (
  number: number,
  n: number,
  x: number,
  s: string,
  c?: string
) => string

/**
 * numberFormat(number, n, x, s, c)
 *
 * @param {number}  number: изменяемое чилсо
 * @param {number}  n:      length of decimal
 * @param {number}  x:      length of whole part
 * @param {string}  s:      sections delimiter
 * @param {string}  c:      decimal delimiter
 */
const numberFormat: NumberFormatType = (number, n, x, s, c) => {
  // eslint-disable-next-line prefer-template
  const re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')'
  // eslint-disable-next-line no-bitwise
  const num = number.toFixed(Math.max(0, ~~n))

  // eslint-disable-next-line prefer-template
  return (c ? num.replace('.', c) : num).replace(
    new RegExp(re, 'g'),
    '$&' + (s || ',')
  )
}

export default numberFormat
