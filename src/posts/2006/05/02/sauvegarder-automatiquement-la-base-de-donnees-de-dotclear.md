---
title: "Sauvegarder automatiquement la base de données de Dotclear"
date: 2006-05-02
permalink: 2006/05/02/sauvegarder-automatiquement-la-base-de-donnees-de-dotclear/
author: Ced
tags: ["post"]
legacy_wordpress_id: 416
---

C'est chouette un blog avec des tonnes de billets et de commentaires. Ce serait bête de perdre tout ça d'un coup à cause d'un problème de serveur ou d'une mauvaise manipulation, non ? Il suffit de faire une sauvegarde de la base de données via l'interface de Dotclear me direz-vous. Mais encore faut-il penser à le faire :p

Il existe plusieurs solutions pour automatiser cette tâche de sauvegarde. Principalement au niveau du serveur, <a href="http://www.prendreuncafe.com/blog/2006/01/22/382-programmer-ses-backups-dotclear-grace-a-un-script-bash-et-cron" hreflang="fr">grâce à un script bash et Cron</a>, un programme permettant d'exécuter automatiquement des commandes ou des scripts à une date et une heure spécifiées à l'avance. Mais cela nécessite un accès <a href="http://fr.wikipedia.org/wiki/Ssh" hreflang="fr">SSH</a> au serveur, et pas mal de notions niveau Unix. Il existe également des programmes tel que <a href="http://www.libellules.ch/dotclear/index.php?2005/04/30/341-mysql-auto-backup" hreflang="fr">MySQL Auto Backup</a>, permettant de faire un backup en local, sur votre ordinateur.

<!-- excerpt -->

Mais l'idéal serait de faire ce backup sur un serveur distant et sans avoir besoin d'un accès SSH. J'ai découvert <a href="http://petit.dotclear.net/pages/2006/01/03/100-faire-ses-sauvegardes-facilement-c-est-bien" hreflang="fr">cette méthode de sauvegarde pour Dotclear</a>. C'est très simple. Vous placez le script php sur votre serveur, dans lequel vous indiquez une adresse email. Un compte Gmail fera parfaitement l'affaire. Ensuite vous vous inscrivez sur <a href="http://www.webcron.org/" hreflang="fr">WebCron</a>. Ce site, à la manière de Cron sous Unix, va vous permettre d'exécuter votre script automatiquement au moment que vous lui avez spécifié. Et comme ça, vous allez recevoir le backup de votre base de données Dotclear, sur votre adresse Gmail, par exemple chaque jour à 3h du matin.
