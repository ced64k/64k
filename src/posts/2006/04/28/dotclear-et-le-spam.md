---
title: "Dotclear et le spam"
date: 2006-04-28
permalink: 2006/04/28/dotclear-et-le-spam/
author: Ced
tags: ["post"]
legacy_wordpress_id: 414
---

Ces dernières semaines, de nombreux blogs tournant sous Dotclear ont été envahis de spams pour vanter les mérites de médicaments miracles ou de trucs bizarres avec des animaux :p

Au départ j'utilisais le plugin <a href="http://www.dotclear.net/forum/viewtopic.php?id=13328" hreflang="fr">Spamplemousse</a>. Ca marche assez bien, mais le problème est qu'il fonctionne avec une liste noire, qu'il faut régulièrement mettre à jour. Et si un "vrai" visiteur utilise un mot présent dans cette liste dans son commentaire, il sera également pris comme étant du spam. Donc pas vraiment l'idéal.
Hier j'ai installé <a href="http://www.dotclear.net/forum/viewtopic.php?id=16270" hreflang="fr">Spamclear</a>, qui lui fonctionne avec un filtrage bayésien (comme dans Thunderbird ou Spamassassin), c'est-à-dire que vous allez lui apprendre à détecter les spams au fur et à mesure. Il faudra donc quelques jours avant qu'il soit vraiment efficace. Son grand avantage par rapport à Spamplemousse, c'est qu'il peut faire la différence entre un "vrai" visiteur qui utilise le mot viagra par exemple, et un spam. Mais on reste toujours avec une énorme liste où il faut vérifier qu'un bon commentaire n'a pas été détecté comme du spam.
Il existe également la solution du captcha, où il faut recopier le texte présent dans une image ou répondre à une question pour que son commentaire soit validé. Cette solution n'est pas très pratique pour l'utilisateur.

Je viens de découvrir deux autres techniques, beaucoup plus simples :
<a href="http://conseil-recherche-innovation.net/index.php/2006/03/23/61-un-antispam-simpliste-pour-dotclear" hreflang="fr">La première pour les commentaires</a>. Il s'agit de tromper les robots spammeurs en ajoutant un champ caché au formulaire. Evidemment ça marchera jusqu'à ce que les spammeurs trouvent une parade.
<a href="http://le-libre.be/?2006/05/04/14-anti-spam-pour-dotclear" hreflang="fr">La deuxième solution concernent les trackbacks</a>. Elle consite à comparer l'adresse IP du serveur qui demande le trackback avec l'adresse IP du serveur hébergeant la page Web contenue dans le lien.

Voilà, fini le spam. Mais jusque quand...
