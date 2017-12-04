import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { IntlProvider } from 'react-intl'
import PropTypes from 'prop-types'
import React from 'react'

import makeSelectLanguage from './selector'

const LanguageProvider = ({ children, locale, messages }) => (
  <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
    {React.Children.only(children)}
  </IntlProvider>
)

const { element, object, string } = PropTypes

LanguageProvider.propTypes = {
  children: element.isRequired,
  locale: string,
  messages: object
}

const mapStateToProps = createStructuredSelector({
  locale: makeSelectLanguage('locale')
})

export default connect(mapStateToProps)(LanguageProvider)
