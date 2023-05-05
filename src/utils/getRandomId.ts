/**
 * генерация случайного ID
 *
 * @param   {string}  prefix  строка с префиксом
 */
const getRandomId = (prefix: string = 'id') => {
  return `${prefix}-${Math.random().toString(36).substr(2, 10)}`
}

export default getRandomId
