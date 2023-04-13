import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makes, models, car, engines, years } from '../../../store'
import { SelectProps } from '../../ui'

type CarState = ReturnType<typeof car.selectors.car>
type MakesState = ReturnType<typeof makes.selectors.makes>
type MakesData = ReturnType<typeof makes.selectors.makesData>
type EnginesState = ReturnType<typeof engines.selectors.engines>
type EnginesData = ReturnType<typeof engines.selectors.enginesData>
type ModelsState = ReturnType<typeof models.selectors.models>
type ModelsData = ReturnType<typeof models.selectors.modelsData>
type YearsState = ReturnType<typeof years.selectors.years>
type YearsData = ReturnType<typeof years.selectors.yearsData>

export const useCarSelects = () => {
  const dispatch = useDispatch()

  const downloadMakes = () => dispatch(makes.actions.fetchMakes())
  const downloadModels = (make: string) =>
    dispatch(models.actions.fetchModels(make))
  const downloadEngines = (make: string, model: string) =>
    dispatch(engines.actions.fetchEngines(make, model))
  const downloadYears = (make: string, model: string, engine: string) =>
    dispatch(years.actions.fetchYears(make, model, engine))

  const setMaker = value => dispatch(car.actions.setMaker(value))
  const setModel = value => dispatch(car.actions.setModel(value))
  const setEngine = value => dispatch(car.actions.setEngine(value))
  const setYear = value => dispatch(car.actions.setYear(value))
  const setIsSelected = (value: boolean) =>
    dispatch(car.actions.setIsSelected(value))

  const makesState: MakesState = useSelector(makes.selectors.makes)
  const makesData: MakesData = useSelector(makes.selectors.makesData)

  const modelsState: ModelsState = useSelector(models.selectors.models)
  const modelsData: ModelsData = useSelector(models.selectors.modelsData)

  const enginesState: EnginesState = useSelector(engines.selectors.engines)
  const enginesData: EnginesData = useSelector(engines.selectors.enginesData)

  const yearsState: YearsState = useSelector(years.selectors.years)
  const yearsData: YearsData = useSelector(years.selectors.yearsData)

  const carState: CarState = useSelector(car.selectors.car)

  const makerSelectValue = carState.maker
  const modelSelectValue = carState.model
  const engineSelectValue = carState.engine
  const yearSelectValue = carState.year

  const optionsMaker = makesData?.map(make => {
    return {
      title: make,
      label: make,
      value: make,
    }
  })

  const optionsModel = modelsData?.map(model => {
    return {
      title: model,
      label: model,
      value: model,
    }
  })

  const optionsEngine = enginesData?.map(engine => {
    return {
      title: engine,
      label: engine,
      value: engine,
    }
  })

  const optionsYears = yearsData?.map(year => {
    return {
      label: year,
      value: year,
    }
  })

  const onMakerSelect: SelectProps['onSelect'] = (value, option) => {
    if (makerSelectValue === value) {
      return
    }
    downloadModels(option.value)
    setMaker(option.value)
    setModel(null)
    setEngine(null)
    setYear(null)
    setIsSelected(false)
  }

  const onModelSelect: SelectProps['onSelect'] = (value, option) => {
    if (modelSelectValue === value) {
      return
    }
    downloadEngines(makerSelectValue, option.value)
    setModel(option.value)
    setEngine(null)
    setYear(null)
    setIsSelected(false)
  }

  const onEngineSelect: SelectProps['onSelect'] = (value, option) => {
    if (engineSelectValue === value) {
      return
    }
    downloadYears(makerSelectValue, modelSelectValue, option.value)
    setEngine(option.value)
    setYear(null)
    setIsSelected(false)
  }

  const onYearSelect: SelectProps['onSelect'] = (value, option) => {
    if (yearSelectValue === value) {
      return
    }
    setYear(option.value)
    setIsSelected(false)
  }

  // не загружать марки авто, если они уже сохранены в сторе
  useEffect(() => {
    if (makesData) {
      return
    }
    downloadMakes()
  }, [])

  // автоматом выбрать модель, если она всего одна
  // и загрузить модификации
  useEffect(() => {
    if (modelsData?.length === 1) {
      const currentModel = modelsData[0]
      setModel(currentModel)
      downloadEngines(carState.maker, currentModel)
    }
  }, [modelsData])

  // автоматом выбрать модификацию, если она всего одна
  // и загрузить года
  useEffect(() => {
    if (enginesData?.length === 1) {
      const currentEngine = enginesData[0]
      setEngine(currentEngine)
      downloadYears(carState.maker, carState.model, currentEngine)
    }
  }, [enginesData])

  // автоматом выбрать год, если он всего один
  useEffect(() => {
    if (yearsData?.length === 1) {
      setYear(yearsData[0])
    }
  }, [yearsData])

  return {
    onMakerSelect,
    onModelSelect,
    onEngineSelect,
    onYearSelect,
    setIsSelected,
    isModelsLoading: modelsState.loading,
    isMakesLoading: makesState.loading,
    isEnginesLoading: enginesState.loading,
    isYearsLoading: yearsState.loading,
    optionsMaker,
    optionsModel,
    optionsEngine,
    optionsYears,
    makerSelectValue,
    modelSelectValue,
    engineSelectValue,
    yearSelectValue,
  }
}
