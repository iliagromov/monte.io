import cn from 'classnames'
import React, { FC } from 'react'
import { AdvAppControllableSvg } from './components/AdvAppControllableSvg'
import { AdvDisplayCarSvg } from './components/AdvDisplayCarSvg'
import { AdvErrorCodeReaderSvg } from './components/AdvErrorCodeReaderSvg'
import { AdvPowerMeterSvg } from './components/AdvPowerMeterSvg'
import { AppFeatureSvg } from './components/AppFeatureSvg'
import { ArrowBackSvg } from './components/ArrowBackSvg'
import { ArrowForwardSvg } from './components/ArrowForwardSvg'
import { BankTransferSvg } from './components/BankTransferSvg'
import { CarFeatureSvg } from './components/CarFeatureSvg'
import { CartBagSvg } from './components/CartBagSvg'
import { ChatContourSvg } from './components/ChatContourSvg'
import { ChatSvg } from './components/ChatSvg'
import { CheckmarkSvg } from './components/CheckmarkSvg'
import { ChipsCompareSvg } from './components/ChipsCompareSvg'
import { Clock4HoursSvg } from './components/Clock4HoursSvg'
import { ClockSvg } from './components/ClockSvg'
import { CloudFeatureSvg } from './components/CloudFeatureSvg'
import { CloudUpdatesFilledSvg } from './components/CloudUpdatesFilledSvg'
import { CloudUpdatesSvg } from './components/CloudUpdatesSvg'
import { CrossSvg } from './components/CrossSvg'
import { DropSvg } from './components/DropSvg'
import { DynoWheelSvg } from './components/DynoWheelSvg'
import { FacebookSvg } from './components/FacebookSvg'
import { FuelOutlineSvg } from './components/FuelOutlineSvg'
import { FuelSvg } from './components/FuelSvg'
import { GainCalculatorSvg } from './components/GainCalculatorSvg'
import { GearSvg } from './components/GearSvg'
import { GlobalSvg } from './components/GlobalSvg'
import { GraphSvg } from './components/GraphSvg'
import { IncreaseSvg } from './components/IncreaseSvg'
import { InfinityOutlineSvg } from './components/InfinityOutlineSvg'
import { InfinitySvg } from './components/InfinitySvg'
import { InfoSvg } from './components/InfoSvg'
import { InstagramSvg } from './components/InstagramSvg'
import { LocationSvg } from './components/LocationSvg'
import { LogoSvg } from './components/LogoSvg'
import { MailSvg } from './components/MailSvg'
import { MastercardSvg } from './components/MastercardSvg'
import { MinusSvg } from './components/MinusSvg'
import { MonitorSvg } from './components/MonitorSvg'
import { MonitorWithStandSvg } from './components/MonitorWithStandSvg'
import { MonteGtrSvg } from './components/MonteGtrSvg'
import { MonteGtSvg } from './components/MonteGtSvg'
import { MotorGaugesSvg } from './components/MotorGaugesSvg'
import { MotorOutlineSvg } from './components/MotorOutlineSvg'
import { MotorSvg } from './components/MotorSvg'
import { ObdSvg } from './components/ObdSvg'
import { OpenBoxSvg } from './components/OpenBoxSvg'
import { PaypalSvg } from './components/PaypalSvg'
import { PhoneSvg } from './components/PhoneSvg'
import { PlusSvg } from './components/PlusSvg'
import { PrinterSvg } from './components/PrinterSvg'
import { ProcessorBoldSvg } from './components/ProcessorBoldSvg'
import { ProcessorFeatureSvg } from './components/ProcessorFeatureSvg'
import { PurseSvg } from './components/PurseSvg'
import { ReturnBoxSvg } from './components/ReturnBoxSvg'
import { ReturnCircledSvg } from './components/ReturnCircledSvg'
import { SearchSvg } from './components/SearchSvg'
import { ShieldCheckmarkSvg } from './components/ShieldCheckmarkSvg'
import { SmartphoneFilledSvg } from './components/SmartphoneFilledSvg'
import { SmartphoneSvg } from './components/SmartphoneSvg'
import { SpeedometerSvg } from './components/SpeedometerSvg'
import { SslSvg } from './components/SslSvg'
import { SteeringWheelSvg } from './components/SteeringWheelSvg'
import { SwapSvg } from './components/SwapSvg'
import { SyncSvg } from './components/SyncSvg'
import { UsaFlagSvg } from './components/UsaFlagSvg'
import { VisaSvg } from './components/VisaSvg'
import { WhatsAppSvg } from './components/WhatsAppSvg'
import { WrenchSvg } from './components/WrenchSvg'
import { YouTubeSvg } from './components/YouTubeSvg'
// @ts-ignore-file
import './style.scss'

export const iconsMap = {
  obd: ObdSvg,
  swap: SwapSvg,
  'return-circled': ReturnCircledSvg,
  'return-box': ReturnBoxSvg,
  'shield-checkmark': ShieldCheckmarkSvg,
  'usa-flag': UsaFlagSvg,
  youtube: YouTubeSvg,
  facebook: FacebookSvg,
  instagram: InstagramSvg,
  'cart-bag': CartBagSvg,
  fuel: FuelSvg,
  'fuel-outline': FuelOutlineSvg,
  'bank-transfer': BankTransferSvg,
  'gain-calculator': GainCalculatorSvg,
  global: GlobalSvg,
  logo: LogoSvg,
  mastercard: MastercardSvg,
  monitor: MonitorSvg,
  paypal: PaypalSvg,
  speedometer: SpeedometerSvg,
  ssl: SslSvg,
  visa: VisaSvg,
  motor: MotorSvg,
  'motor-gauges': MotorGaugesSvg,
  'motor-outline': MotorOutlineSvg,
  smartphone: SmartphoneSvg,
  'smartphone-filled': SmartphoneFilledSvg,
  'monte-gt': MonteGtSvg,
  'monte-gtr': MonteGtrSvg,
  'chips-compare': ChipsCompareSvg,
  drop: DropSvg,
  'steering-wheel': SteeringWheelSvg,
  'dyno-wheel': DynoWheelSvg,
  infinity: InfinitySvg,
  'infinity-outline': InfinityOutlineSvg,
  cross: CrossSvg,
  info: InfoSvg,
  minus: MinusSvg,
  plus: PlusSvg,
  sync: SyncSvg,
  phone: PhoneSvg,
  mail: MailSvg,
  location: LocationSvg,
  'arrow-forward': ArrowForwardSvg,
  'adv-display-card': AdvDisplayCarSvg,
  'adv-error-code': AdvErrorCodeReaderSvg,
  'adv-power-meter': AdvPowerMeterSvg,
  'adv-app-controllable': AdvAppControllableSvg,
  'car-feature': CarFeatureSvg,
  'processor-feature': ProcessorFeatureSvg,
  'processor-bold': ProcessorBoldSvg,
  'app-feature': AppFeatureSvg,
  'cloud-feature': CloudFeatureSvg,
  'cloud-updates': CloudUpdatesSvg,
  'cloud-updates-filled': CloudUpdatesFilledSvg,
  gear: GearSvg,
  increase: IncreaseSvg,
  search: SearchSvg,
  'open-box': OpenBoxSvg,
  printer: PrinterSvg,
  purse: PurseSvg,
  'monitor-with-stand': MonitorWithStandSvg,
  graph: GraphSvg,
  wrench: WrenchSvg,
  clock: ClockSvg,
  checkmark: CheckmarkSvg,
  chat: ChatSvg,
  'chat-contour': ChatContourSvg,
  whatsapp: WhatsAppSvg,
  'clock-4-hours': Clock4HoursSvg,
  'arrow-back': ArrowBackSvg,
}

export type IconNamesType = keyof typeof iconsMap

export type IconProps = React.HTMLAttributes<HTMLElement> & {
  className?: string
  name?: IconNamesType
  component?: () => JSX.Element
}

export const Icon: FC<IconProps> = ({
  name,
  className,
  component,
  ...restProps
}) => {
  const IconComponent = component || iconsMap[name] || 'span'
  return (
    <i
      role="img"
      data-name={name}
      className={cn('svg-icon', className)}
      {...restProps}
    >
      <IconComponent />
    </i>
  )
}

export default Icon
