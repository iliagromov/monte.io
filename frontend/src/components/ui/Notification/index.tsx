import { notification as AntNotification } from 'antd'
import { NotificationApi as INotificationApi } from 'antd/lib/notification'

import 'antd/lib/notification/style/index.css'
import './style.scss'

export type NotificationApi = INotificationApi

export const notification: NotificationApi = AntNotification

export default notification
