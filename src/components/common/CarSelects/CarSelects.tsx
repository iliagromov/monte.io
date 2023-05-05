import React, { FC } from 'react'
import cn from 'classnames'
import { Select, Button } from '../../ui'
import './style.scss'
import { useCarSelects } from './useCarSelects'
import { useCalculatorCarSelects } from './useCalculatorCarSelects'
import { navigate } from 'gatsby'

type CarSelectProps = {
  isMainPage?: boolean
  isCalculatorCar?: boolean
  onSubmitClick?: () => void
  className?: string
}

export const CarSelects: FC<CarSelectProps> = ({
  isMainPage,
  isCalculatorCar,
  onSubmitClick,
  className,
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
    onMakerSelect,
    onModelSelect,
    onEngineSelect,
    onYearSelect,
    setIsSelected,
  } = isCalculatorCar ? useCalculatorCarSelects() : useCarSelects()

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

  const onClick = () => {
    if (typeof onSubmitClick === 'function') {
      onSubmitClick()
    }
    setIsSelected(true)
    if (isMainPage) {
      navigate('/store/')
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

export default CarSelects
