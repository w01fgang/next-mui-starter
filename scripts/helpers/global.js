// eslint-disable-next-line
export function isMobileDevice() {
  return (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1);
}
