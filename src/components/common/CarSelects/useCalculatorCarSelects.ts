import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  calculatorBrands,
  calculatorModels,
  calculatorCar,
  calculatorEngines,
} from '../../../store'

import { SelectProps } from '../../ui'

type CalculatorCarState = ReturnType<
  typeof calculatorCar.selectors.calculatorCar
>
type CalculatorBrandsState = ReturnType<
  typeof calculatorBrands.selectors.calculatorBrands
>
type CalculatorBrandsData = ReturnType<
  typeof calculatorBrands.selectors.calculatorBrandsData
>
type CalculatorEnginesState = ReturnType<
  typeof calculatorEngines.selectors.calculatorEngines
>
type CalculatorEnginesData = ReturnType<
  typeof calculatorEngines.selectors.calculatorEnginesData
>
type CalculatorModelsState = ReturnType<
  typeof calculatorModels.selectors.calculatorModels
>
type CalculatorModelsData = ReturnType<
  typeof calculatorModels.selectors.calculatorModelsData
>

export const useCalculatorCarSelects = () => {
  const dispatch = useDispatch()

  const downloadCalculatorBrands = () =>
    dispatch(calculatorBrands.actions.fetchCalculatorBrands())
  const downloadModels = (brand: number) =>
    dispatch(calculatorModels.actions.fetchCalculatorModels(brand))
  const downloadEngines = (brand: number) =>
    dispatch(calculatorEngines.actions.fetchCalculatorEngines(brand))
  // const downloadEngines = (brand: string, model: string) =>
  //   dispatch(calculatorEngines.actions.fetchCalculatorEngines(brand, model))

  const setCalculatorBrand = value =>
    dispatch(calculatorCar.actions.setCalculatorBrand(value))
  const setCalculatorModel = value =>
    dispatch(calculatorCar.actions.setCalculatorModel(value))
  const setCalculatorEngine = value =>
    dispatch(calculatorCar.actions.setCalculatorEngine(value))
  const setIsSelected = (value: boolean) =>
    dispatch(calculatorCar.actions.setIsSelected(value))

  const calculatorBrandsState: CalculatorBrandsState = useSelector(
    calculatorBrands.selectors.calculatorBrands
  )
  const calculatorBrandsData: CalculatorBrandsData = useSelector(
    calculatorBrands.selectors.calculatorBrandsData
  )

  const calculatorModelsState: CalculatorModelsState = useSelector(
    calculatorModels.selectors.calculatorModels
  )
  const calculatorModelsData: CalculatorModelsData = useSelector(
    calculatorModels.selectors.calculatorModelsData
  )

  const calculatorEnginesState: CalculatorEnginesState = useSelector(
    calculatorEngines.selectors.calculatorEngines
  )
  const calculatorEnginesData: CalculatorEnginesData = useSelector(
    calculatorEngines.selectors.calculatorEnginesData
  )

  const calculatorCarState: CalculatorCarState = useSelector(
    calculatorCar.selectors.calculatorCar
  )

  const calculatorBrandsSelectValue = calculatorCarState.calculatorBrand
  const modelSelectValue = calculatorCarState.calculatorModel
  const engineSelectValue = calculatorCarState.calculatorEngine

  const optionsMaker = calculatorBrandsData?.map(brand => {
    return {
      label: brand.title,
      value: brand.title,
      data: brand,
    }
  })

  const optionsModel = calculatorModelsData?.map(model => {
    return {
      label: model.title,
      value: model.title,
      data: model,
    }
  })

  const optionsEngine = calculatorEnginesData?.map(engine => {
    const engineParams = `${engine.title} ${engine.hp}HP ${engine.nm}NM`
    return {
      title: engineParams,
      label: engineParams,
      value: engineParams,
      data: engine,
    }
  })

  const onMakerSelect: SelectProps['onSelect'] = (value, option) => {
    if (calculatorBrandsSelectValue === option.data) {
      return
    }
    downloadModels(option.data.id)
    setCalculatorBrand(option.data)
    setCalculatorModel(null)
    setCalculatorEngine(null)
    setIsSelected(false)
  }

  const onModelSelect: SelectProps['onSelect'] = (value, option) => {
    if (modelSelectValue === option.value) {
      return
    }
    // downloadEngines(calculatorBrandsSelectValue.title, option.value)
    downloadEngines(option.data.id)
    setCalculatorModel(option.data)
    setCalculatorEngine(null)
    setIsSelected(false)
  }

  const onEngineSelect: SelectProps['onSelect'] = (value, option) => {
    if (engineSelectValue === option.data) {
      return
    }
    setCalculatorEngine(option.data)
    setIsSelected(false)
  }

  useEffect(() => {
    if (calculatorBrandsData) {
      return
    }
    downloadCalculatorBrands()
  }, [])

  useEffect(() => {
    if (calculatorModelsData?.length === 1) {
      const currentModel = calculatorModelsData[0]
      setCalculatorModel(currentModel)
      // downloadEngines(calculatorCarState.calculatorBrand.title, currentModel)
      downloadEngines(currentModel.id)
    }
  }, [calculatorModelsData])

  useEffect(() => {
    if (calculatorEnginesData?.length === 1) {
      const currentEngine = calculatorEnginesData[0]
      setCalculatorEngine(currentEngine)
    }
  }, [calculatorEnginesData])

  return {
    onMakerSelect,
    onModelSelect,
    onEngineSelect,
    setIsSelected,
    isModelsLoading: calculatorModelsState.loading,
    isMakesLoading: calculatorBrandsState.loading,
    isEnginesLoading: calculatorEnginesState.loading,
    optionsMaker,
    optionsModel,
    optionsEngine,
    makerSelectValue: calculatorBrandsSelectValue
      ? calculatorBrandsSelectValue.title
      : null,
    modelSelectValue: modelSelectValue ? modelSelectValue.title : null,
    engineSelectValue: engineSelectValue ? engineSelectValue.title : null,
    // makerSelectValue: calculatorBrandsSelectValue,
    // modelSelectValue,
    // engineSelectValue,

    /*для обратной совместимости*/
    optionsYears: null,
    yearSelectValue: null,
    isYearsLoading: null,
    onYearSelect: null,
  }
}
