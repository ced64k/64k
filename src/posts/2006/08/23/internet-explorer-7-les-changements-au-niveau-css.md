---
title: "Internet Explorer 7, les changements au niveau CSS"
date: 2006-08-23
permalink: 2006/08/23/internet-explorer-7-les-changements-au-niveau-css/
author: Ced
tags: ["post"]
legacy_wordpress_id: 477
---

L'équipe de développement d'Internet Explorer a publié hier <a href="http://blogs.msdn.com/ie/archive/2006/08/22/712830.aspx" hreflang="en">la liste des changements au niveau CSS pour la version 7</a>. Ca s'annonce plutôt bien. Tous les bugs recensés sur <a href="http://www.positioniseverything.net/explorer.html" hreflang="en">positioneverything.net</a> sont fixés (sauf "<a href="http://www.positioniseverything.net/explorer/escape-floats.html" hreflang="en">l'escaping float</a>"). Ainsi qu'une grosse série d'autres bugs.

En théorie, on ne devrait plus avoir de problème avec par exemple du texte qui disparaît ou des floats. Et on pourra utiliser des propriétés CSS 2.1 que jusqu'alors ne fonctionnaient pas dans Internet Explorer (min-height et max-height par exemple).

<!-- excerpt -->

Le rendu d'IE devrait donc se rapprocher de celui des navigateurs respectant les standards comme Firefox ou Safari. Cela voudra dire beaucoup moins de temps lors de la création d'un site mais aussi pas mal du boulot en perspective pour adapter les sites actuels. En effet, la plupart des sites utilisent des _hacks_ pour palier aux bugs d'Internet Explorer 6. Mais la plupart ne fonctionneront plus avec IE7.

Donc autant tester Internet Explorer 7 Beta 3 dès maintenant, sans l'installer, grâce <a href="http://tools.veloc-it.com/tabid/58/grm2id/4/Default.aspx" hreflang="en">au patch standalone</a> créé par Jon Galloway.
