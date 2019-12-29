// @flow
import { UrlObject, URLFormatOptions } from 'url';
import { ServerResponse, IncomingMessage } from 'http';
import React, { ComponentType } from 'react';
import { ParsedUrlQuery } from 'querystring';
import { DynamicOptions, Loader } from 'next/dist/next-server/lib/dynamic';

declare module "next" {
  declare type NextApp = {
    prepare(): Promise<void>;
    getRequestHandler(): any;
    render(req: any, res: any, pathname: string, query: any): any;
    renderToHTML(req: any, res: any, pathname: string, query: string): string;
    renderError(err: Error, req: any, res: any, pathname: any, query: any): any;
    renderErrorToHTML(err: Error, req: any, res: any, pathname: string, query: any): string;
  };
  declare module.exports: (...opts: any) => NextApp
}

declare module "next/head" {
  declare module.exports: Class<React$Component<any, any>>;
}

declare module "next/app" {
  declare module.exports: Class<React$Component<any, any>>;
}

declare module "next/dynamic" {
  declare module.exports: (dynamicOptions: any, options: any) => ComponentType<any>;
}

declare module "next/router" {
  declare type Handler = (...evts: any[]) => void;

  declare export type MittEmitter = {
    on(type: string, handler: Handler): void;
    off(type: string, handler: Handler): void;
    emit(type: string, ...evts: any[]): void;
  };

  declare export type AppInitialProps = {
    pageProps: any;
  };

  declare export type AppTreeType = ComponentType<AppInitialProps & {
    [name: string]: any;
  }>;

  declare export interface NextPageContext {
    /**
     * Error object if encountered during rendering
     */
    err?: Error & {
        statusCode?: number;
    } | null;
    /**
     * `HTTP` request object.
     */
    req?: IncomingMessage;
    /**
     * `HTTP` response object.
     */
    res?: ServerResponse;
    /**
     * Path section of `URL`.
     */
    pathname: string;
    /**
     * Query string section of `URL` parsed as an object.
     */
    query: ParsedUrlQuery;
    /**
     * `String` of the actual path including query.
     */
    asPath?: string;
    /**
     * `Component` the tree of the App to use if needing to render separately
     */
    AppTree: AppTreeType;
  }

  declare type Url = UrlObject | string;

  declare export type BaseRouter = {
    route: string,
    pathname: string,
    query: ParsedUrlQuery,
    asPath: string,
    ...
  };

  declare export type NextRouter = BaseRouter &
    Pick<
      Router,
      | "push"
      | "replace"
      | "reload"
      | "back"
      | "prefetch"
      | "beforePopState"
      | "events"
    >;

  declare type RouteInfo = {
    Component: ComponentType,
    props?: any,
    err?: Error,
    error?: any,
    ...
  };

  declare type Subscription = (data: RouteInfo, App?: ComponentType) => void;

  declare type BeforePopStateCallback = (state: any) => boolean;

  declare type ComponentLoadCancel = (() => void) | null;

  declare export function useRouter(): NextRouter;


  declare export default class Router {
    route: string;
    pathname: string;
    query: ParsedUrlQuery;
    asPath: string;
    components: {
      [pathname: string]: RouteInfo,
      ...
    };
    sub: Subscription;
    clc: ComponentLoadCancel;
    pageLoader: any;
    _bps: BeforePopStateCallback | void;
    events: MittEmitter;
    _wrapApp: (App: ComponentType) => any;
    historyId: number;
    static events: MittEmitter;
    constructor(
      pathname: string,
      query: ParsedUrlQuery,
      as: string,
      x: {
        subscription: Subscription,
        initialProps: any,
        pageLoader: any,
        Component: ComponentType,
        App: ComponentType,
        wrapApp: (App: ComponentType) => any,
        err?: Error,
        ...
      }
    ): this;
    static _rewriteUrlForNextExport(url: string): string;
    onPopState: (e: PopStateEvent) => void;
    static update(route: string, mod: any): void;
    static reload(): void;
    static back(): void;
    static push(url: Url, as?: Url, options?: { ... }): Promise<boolean>;
    static replace(url: Url, as?: Url, options?: { ... }): Promise<boolean>;
    static change(method: string, _url: Url, _as: Url, options: any): Promise<boolean>;
    static changeState(method: string, url: string, as: string, options?: { ... }): void;
    static getRouteInfo(
      route: string,
      pathname: string,
      query: any,
      as: string,
      shallow?: boolean
    ): Promise<RouteInfo>;
    static set(
      route: string,
      pathname: string,
      query: any,
      as: string,
      data: RouteInfo
    ): void;
    static beforePopState(cb: BeforePopStateCallback): void;
    static onlyAHashChange(as: string): boolean;
    static scrollToHash(as: string): void;
    static urlIsNew(asPath: string): boolean;
    static prefetch(url: string): Promise<void>;
    static fetchComponent(route: string): Promise<ComponentType>;
    static getInitialProps(Component: ComponentType, ctx: NextPageContext): Promise<any>;
    static abortComponentLoad(as: string): void;
    static notify(data: RouteInfo): void;
  }
}

declare module "next/link" {
  declare module.exports: Class<React$Component<{href: string, prefetch?: bool}, any>>;
}

declare module "next/error" {
  declare module.exports: Class<React$Component<{statusCode: number}, any>>;
}

declare module "next/config" {
  declare module.exports: () => { serverRuntimeConfig: { [key: string]: string }, publicRuntimeConfig: { [key: string]: string } };
}
