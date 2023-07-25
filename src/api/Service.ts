import {
  makes,
  models,
  products,
  years,
  engines,
  promo,
  sendOrder,
  sendEmail,
  calculatorBrands,
  calculatorModels,
  calculatorEngines,
} from './implementation'
import { ProductsType } from './implementation/products'

class Service {
  private static __instance: Service

  sendOrder(
    args: sendOrder.SendOrderArgsType
  ): Promise<sendOrder.SendOrderResponseType> {
    return sendOrder.api(args)
  }

  getMakes(): Promise<makes.MakesType> {
    return makes.api()
  }

  getModels(make: string): Promise<models.ModelsType> {
    return models.api(make)
  }
  getProducts(): Promise<ProductsType> {
    return products.api()
  }

  getEngines(make: string, model: string): Promise<engines.EnginesType> {
    return engines.api(make, model)
  }

  getYears(
    make: string,
    model: string,
    engine: string
  ): Promise<years.YearsType> {
    return years.api(make, model, engine)
  }

  getCalculatorBrands(): Promise<calculatorBrands.CalculatorBrandsType> {
    return calculatorBrands.api()
  }

  getCalculatorModels(
    make: number
  ): Promise<calculatorModels.CalculatorModelsType> {
    return calculatorModels.api(make)
  }

  getCalculatorEngines(
    model: number
  ): Promise<calculatorEngines.CalculatorEnginesType> {
    return calculatorEngines.api(model)
  }

  sendPromo(code: string): Promise<promo.PromoType> {
    return promo.api(code)
  }

  sendEmail(
    args: sendEmail.SendEmailArgsType
  ): Promise<sendEmail.SendEmailResponseType> {
    return sendEmail.api(args)
  }

  static getInstance() {
    if (!this.__instance) {
      this.__instance = new this()
    }

    return this.__instance
  }
}

export default Service
