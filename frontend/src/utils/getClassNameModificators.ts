/**
 * Возвращает массив модификаторов с учетом названия блока
 * или класс, если модификатор один
 *
 * @param   blockName   css название блока
 * @param   mod   БЭМ модификатор или массив модификаторов
 */
export const getClassNameModificators = (
  blockName: string,
  mod: string | string[]
) => {
  return Array.isArray(mod)
    ? mod.map(m => `${blockName}--${m}`)
    : mod
    ? `${blockName}--${mod}`
    : ''
}
