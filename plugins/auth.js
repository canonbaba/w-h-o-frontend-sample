export default ({ app, $auth }) => {
  // $auth.onRedirect((to, from) => {
  $auth.onRedirect((to) => {
    // console.log(from);
    // console.log(to);
    let toFixed = to;
    for (let i = 0; i < app.i18n.locales.length; i += 1) {
      const locale = app.i18n.locales[i].code;
      const localeLength = locale.length;
      if (to === `/${locale}`) {
        toFixed = `/${to.substr(1 + localeLength)}`;
        // console.log(`fix method 1, toFixed = ${toFixed}`);
        break;
      } else if (to.substr(0, 4) === `/${locale}/`) {
        toFixed = `/${to.substr(2 + localeLength)}`;
        // console.log(`fix method 2, toFixed = ${toFixed}`);
        break;
      }
    }
    return app.localePath(toFixed);
  });
};
