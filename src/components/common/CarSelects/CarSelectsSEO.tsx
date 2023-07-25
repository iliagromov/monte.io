import React, { FC, useCallback, useEffect } from 'react'
import cn from 'classnames'
import { Select, Button } from '../../ui'
import './style.scss'
import { useCarSelects } from './useCarSelects'
import { useCalculatorCarSelects } from './useCalculatorCarSelects'
import { navigate } from 'gatsby'
import { useDispatch } from 'react-redux'
import { car } from '../../../store'

type CarSelectProps = {
  isMainPage?: boolean
  isCalculatorCar?: boolean
  onSubmitClick?: () => void
  className?: string
  isSeo?: boolean
  seoData?: any
}

export const CarSelectsSEO: FC<CarSelectProps> = ({
  isMainPage,
  isCalculatorCar,
  onSubmitClick,
  className,
  isSeo,
  seoData
}) => {
  const {
    optionsMaker,
    optionsModel,
    optionsEngine,
    optionsYears,
    makerSelectValue,
    modelSelectValue,
    engineSelectValue,
    yearSelectValue,
    isMakesLoading,
    isEnginesLoading,
    isModelsLoading,
    isYearsLoading,
    setMaker,
    setModel,
    setEngine,
    setYear,
    onMakerSelect,
    onModelSelect,
    onEngineSelect,
    onYearSelect,
    setIsSelected,
  } = useCarSelects()

 if(isSeo){
  const getSeoURL = useCallback(
    (value: any) => {
      setMaker(value.brand);
      setModel(value.model);
      setEngine(value.engine);
      setYear(value.year);
      setIsSelected(true);
    },
    []
  )

  useEffect(() => {
    getSeoURL(seoData);

  }, [])
 }
  

  const values = isCalculatorCar
    ? [makerSelectValue, modelSelectValue, engineSelectValue]
    : [makerSelectValue, modelSelectValue, engineSelectValue, yearSelectValue]

  /**
   * Значение для полоски прогресса выбора селектов.
   * Расчет ведется исходя от количества колонок.
   * каджый селект + кнопка.
   */
  const progress = values.reduce<number>((acc, value) => {
    if (!!value) {
      acc += 100 / (values.length + 1)
    }
    return acc
  }, 0)

  const isCalculatorAllSelected =
    !!makerSelectValue && !!modelSelectValue && !!engineSelectValue

  const isStorePageAllSelected =
    !!makerSelectValue &&
    !!modelSelectValue &&
    !!engineSelectValue &&
    !!yearSelectValue

  const isAllSelected = isCalculatorCar
    ? isCalculatorAllSelected
    : isStorePageAllSelected


  function replaceSymbol(str){
    let slugSorted0 = str.split(' ').join('-').toLowerCase();
    let slugSorted1 = slugSorted0.split('/').join('-');
    let slugSorted2 = slugSorted1.split('.').join('-');
    return slugSorted2;
  }

  const onClick = () => {
    if (typeof onSubmitClick === 'function') {
      onSubmitClick()
    }
    setIsSelected(true)
    if (isSeo) {

      
      let slugBrand = replaceSymbol(makerSelectValue);
      let slugModel = replaceSymbol(modelSelectValue);
      let slugEngine = replaceSymbol(engineSelectValue);
      let slug = `/${slugBrand}-${slugModel}-${slugEngine}-${yearSelectValue}`
      // console.log(slug);
      navigate(slug)
    }
  }

  const unicOptions = options => {
    const array = []
    options?.map(item => {
      if (!array.find(object => (object.label === item.label ? true : false))) {
        array.push(item)
      }
    })
    return array
  }

  const resultOptionsMaker = unicOptions(optionsMaker)
  const resultOptionsModel = unicOptions(optionsModel)
  const resultOptionsEngine = unicOptions(optionsEngine)

  return (
    <div className={cn('car-selects', className)}>
      <div className="car-selects__inner mx-auto">
        <form className="row no-gutters">
          <div className="col-md car-selects__col">
            <Select
              className="car-selects__control car-selects__control--radius-first"
              size="large"
              options={resultOptionsMaker}
              placeholder="Maker"
              showSearch={resultOptionsMaker?.length > 10}
              loading={isMakesLoading}
              onSelect={onMakerSelect}
              value={makerSelectValue}
            />
          </div>
          <div className="col-md car-selects__col">
            <Select
              className="car-selects__control"
              size="large"
              options={resultOptionsModel}
              placeholder="Model"
              showSearch={resultOptionsModel?.length > 10}
              disabled={!makerSelectValue || isModelsLoading}
              loading={isModelsLoading}
              onSelect={onModelSelect}
              value={modelSelectValue}
            />
          </div>
          <div className="col-md car-selects__col">
            <Select
              className="car-selects__control"
              size="large"
              options={resultOptionsEngine}
              placeholder="Engine"
              showSearch={resultOptionsEngine?.length > 10}
              disabled={!modelSelectValue || isEnginesLoading}
              loading={isEnginesLoading}
              onSelect={onEngineSelect}
              value={engineSelectValue}
              multiline
            />
          </div>
          {/*выбор года доступен только для страницы стора. для gain calculator используется другая api, которая не содержит поля "год"*/}
          {!isCalculatorCar && (
            <div className="col-md car-selects__col">
              <Select
                className="car-selects__control"
                size="large"
                options={optionsYears}
                placeholder="Years"
                showSearch={optionsYears?.length > 10}
                disabled={!engineSelectValue || isYearsLoading}
                loading={isYearsLoading}
                onSelect={onYearSelect}
                value={yearSelectValue}
              />
            </div>
          )}
          <div className="col-md car-selects__col">
            <Button
              disabled={!isAllSelected}
              className={cn(
                'car-selects__control',
                'car-selects__control--radius-last',
                'car-selects__control--submit'
              )}
              onClick={onClick}
            >
              Tuning on
            </Button>
          </div>
        </form>
        <div className="car-selects__progress d-none d-md-block">
          <span
            className="car-selects__progress-line"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default CarSelectsSEO
