function getReplacements(pkg) {
  let rn = pkg['react-native'];
  let browser = pkg.browser;
  if (rn == null) {
    return browser;
  }

  if (browser == null) {
    return rn;
  }

  const main = getMain(pkg);
  if (typeof rn !== 'object') {
    rn = { [main]: rn };
  }

  if (typeof browser !== 'object') {
    browser = { [main]: browser };
  }

  // merge with "browser" as default,
  // "react-native" as override
  return { ...browser, ...rn };
}
