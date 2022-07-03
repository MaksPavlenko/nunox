var plugins = [{
      name: 'gatsby-plugin-react-helmet',
      plugin: require('/Volumes/DJ PANAMA/Content_castom/WEB-DESIGN/FINAL-PROJECT/NUNOX/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-image',
      plugin: require('/Volumes/DJ PANAMA/Content_castom/WEB-DESIGN/FINAL-PROJECT/NUNOX/node_modules/gatsby-plugin-image/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('/Volumes/DJ PANAMA/Content_castom/WEB-DESIGN/FINAL-PROJECT/NUNOX/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#e2e2e2","theme_color":"#e2e2e2","display":"minimal-ui","icon":"src/images/icons/gatsby-icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"f39f757900ba72cd76452620921e681b"},
    },{
      name: 'gatsby-plugin-react-i18next',
      plugin: require('/Volumes/DJ PANAMA/Content_castom/WEB-DESIGN/FINAL-PROJECT/NUNOX/node_modules/gatsby-plugin-react-i18next/gatsby-ssr'),
      options: {"plugins":[],"localeJsonSourceName":"locale","languages":["ua","en","it","ru"],"defaultLanguage":"ua","siteUrl":"https://www.nunox.co","i18nextOptions":{"interpolation":{"escapeValue":false},"keySeparator":false,"nsSeparator":false},"pages":[{"matchPath":"/:lang?/blog/:uid","getLanguageFromPath":true,"excludeLanguages":["ua"]},{"matchPath":"/preview","languages":["ua"]}]},
    },{
      name: 'default-site-plugin',
      plugin: require('/Volumes/DJ PANAMA/Content_castom/WEB-DESIGN/FINAL-PROJECT/NUNOX/gatsby-ssr'),
      options: {"plugins":[]},
    }]
/* global plugins */
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

function augmentErrorWithPlugin(plugin, err) {
  if (plugin.name !== `default-site-plugin`) {
    // default-site-plugin is user code and will print proper stack trace,
    // so no point in annotating error message pointing out which plugin is root of the problem
    err.message += ` (from plugin: ${plugin.name})`
  }

  throw err
}

export function apiRunner(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  plugins.forEach(plugin => {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      return
    }

    try {
      const result = apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  })

  return results.length ? results : [defaultReturn]
}

export async function apiRunnerAsync(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  for (const plugin of plugins) {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      continue
    }

    try {
      const result = await apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  }

  return results.length ? results : [defaultReturn]
}
