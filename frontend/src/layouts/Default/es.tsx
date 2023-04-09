import React from 'react'
import Layout from './index'

import messages from '../../data/messages/es';
import 'intl/locale-data/jsonp/es'

export const LANG_KEY = 'es'

export default props => <Layout {...props} i18nMessages={messages} />
