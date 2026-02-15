---
title: "Inspecter des fichiers Sass avec Chrome Canary"
date: 2013-01-26
description: ""
permalink: 2013/01/26/inspecter-des-fichiers-sass-avec-chrome-canary/
author: Ced
tags: ["post", "Geek"]
featured: sass.jpg
legacy_wordpress_id: 2210
---

Comme je me suis mis (très) récemment à Sass grâce au livre [CSS maintenables ](http://www.css-maintenables.fr/)de [Kaelig](http://blog.kaelig.fr/), je cherchais une solution pour pouvoir travailler avec dans Google Chrome.

<!-- excerpt -->

Dans Firefox ça fonctionne très bien avec l'extension FireSass. Par contre celle proposée pour Chrome, [Sass Inspector](https://chrome.google.com/webstore/detail/sass-inspector/lkofmbmllpgfbnonmnenkiakimpgoamn),  n'est pas terrible. Les .scss sont cachés dans un onglet « Sass Properties » et il n'est pas possible de les éditer directement via les Developer Tools.

La solution est d'utiliser [Chrome Canary](https://www.google.com/intl/en/chrome/browser/canary.html) , une version comparable aux nightlies de Firefox. Il faut ensuite aller dans chrome://flags, cocher « Enable Developer Tools Experiments », relancer, aller dans l'onglet « Experiments » et cocher  « Support for Sass ».


Et voilà, Chrome trouvera vos fichiers .scss et vous pourrez les éditer directement les Developer Tools, sans avoir besoin d'installer une extension !

(via [@simonowendesign](https://twitter.com/simonowendesign))
