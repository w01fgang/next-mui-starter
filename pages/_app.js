// @flow
import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import LuxonUtils from '@date-io/luxon';

import theme from '../lib/theme';

import MainContainer from '../components/MainContainer';

// This is optional but highly recommended
// since it prevents memory leak
const cache = createIntlCache();

type Props = {
  Component: React$ComponentType<*>,
  ctx: any,
};

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }: Props) {
    let pageProps = {};
    // $flow: doesn't know about getInitialProps
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // Get the `locale` and `messages` from the request object on the server.
    // In the browser, use the same values that the server serialized.
    const { req } = ctx;
    let locale = 'en';
    let messages = {};
    if (req) {
      const getLang = require('../lib/getLang').default; // eslint-disable-line global-require
      ({ locale, messages } = getLang(req));
    } else if (typeof window !== 'undefined') {
      ({ locale, messages } = window.__NEXT_DATA__.props); // eslint-disable-line no-underscore-dangle
    }

    return { pageProps, locale, messages };
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      if (jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const {
      Component, pageProps, locale, messages,
    } = this.props;
    const intl = createIntl(
      {
        locale,
        messages,
      },
      cache,
    );

    return (
      <RawIntlProvider value={intl}>
        <Head>
          <title>Power rent</title>
        </Head>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={LuxonUtils}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <MainContainer>
              <Component {...pageProps} />
            </MainContainer>
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </RawIntlProvider>
    );
  }
}
