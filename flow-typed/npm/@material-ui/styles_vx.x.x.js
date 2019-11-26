declare module '@material-ui/styles' {
  import type {ComponentType, ElementConfig, ElementRef, ElementType, Ref} from "react";

  import type {Theme} from "@material-ui/core/styles/createMuiTheme"

  declare type CSSProperties = any; // import type {StandardProperties as CSSProperties} from "csstype";

  declare type CSSCreateStyleSheetOptions = {|
    media?: string,
    meta?: string,
    index?: number,
    link?: boolean,
    element?: HTMLStyleElement,
    generateClassName?: Function,
    classNamePrefix?: string,
  |};

  declare type StyleRules = { [string]: CSSProperties };

  declare type StyleRulesCallback = (theme: Theme) => StyleRules;

  declare export type WithStylesOptions = {|
    ...$Exact<CSSCreateStyleSheetOptions>,
    flip?: boolean,
    withTheme?: boolean,
    name?: string
  |};

  declare export type WithStyles = {
    classes: { +[string]: string },
    innerRef: Ref<any> | {current: ElementRef<any> | null}
  };

  declare type WithStylesHOC = {
    classes: void | { +[string]: string },
    innerRef: void | (Ref<any> | {current: ElementRef<any>} | null)
  };

  declare export type MuiWithStyles = (
    stylesOrCreator: StyleRules | StyleRulesCallback,
    options?: WithStylesOptions,
  ) => <WrappedComponent: ComponentType<*>>(
    Component: WrappedComponent
  ) => ComponentType<$Diff<ElementConfig<WrappedComponent>, WithStylesHOC>>;

  declare module.exports: {
    withStyles: MuiWithStyles,
    makeStyles: any,
    ThemeProvider: ComponentType<*>,
    useTheme: () => Theme,
  };
};
