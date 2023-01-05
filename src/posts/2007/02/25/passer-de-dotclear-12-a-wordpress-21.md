---
title: "Passer de Dotclear 1.2 à WordPress 2.1"
date: 2007-02-25
permalink: 2007/02/25/passer-de-dotclear-12-a-wordpress-21/
author: Ced
tags: ["post"]
legacy_wordpress_id: 565
---

Ah Dotclear... C'était en octobre 2003. J'entendais de plus en plus souvent parler des blogs. J'ai donc tout naturellement testé Dotclear. J'étais tellement emballé que j'ai acheté un nom de domaine (64k.be) et j'ai installé ce moteur de blog. J'ai mis plus d'un an avant d'être vraiment motivé à publier quelque chose (merci Soph).

Hélas Dotclear a pris un peu de retard dans son développement, avec une version 2 qui s'est fait très longtemps attendre et qui d'ailleurs est toujours en version beta. Version que je n'ai pas encore testé. Il faut dire que les hébergeurs compatibles PHP5 et MySQL5 n'étaient pas légion.

Depuis quelques mois,  j'ai commencé à lorgner du côté de WordPress. Je l'ai récemment utilisé pour réaliser un site pour un client, et je dois dire que j'ai été emballé ^-^

Un problème avec Dotclear, c'est sa communauté. Bien que très sympathique , celle-ci a du mal à sortir de monde francophone. WordPress est beaucoup plus international. Cela veut dire une communauté très réactive, un meilleur support sur les forums, beaucoup plus de plugins disponibles, etc.

Mais la transition entre deux systèmes de gestion de contenu n'est jamais une chose évidente. [Certains en parlent](http://www.presse-citron.net/?2007/02/02/1739-votre-avis-votre-experience-passer-de-dotclear-a-wordpress-c-est-jouable), [certains ont déjà franchi le cap](http://www.vinch.be/blog/2007/01/11/visite-guidee-du-nouveau-site-et-du-nouveau-blog/), et [d'autres l'utilisent depuis longtemps](http://www.gatellier.be/blog/).

Mon côté geek-bidouilleur étant plus fort que tout, je me suis lancé dans l'aventure ^-^

<!-- excerpt -->

J'ai suivi [cette procédure](http://cvie.free.fr/public/dc2wp.html).

La première étape consiste à exporter le contenu de Dotclear grâce au plugin [flatexport](http://www.dotclear.net/plugins/plugin-flatExport-1.1.tar.gz). Idéalement avec un Dotclear à jour, et pas comme 64k, un Dotclear dont on connaît même plus la version suite aux différents bidouilles. Le plugin se charge d'exporter le contenu de votre blog sous forme de fichier texte (_blog-backup.txt)_.

On peut en profiter pour changer la source des images. En effet Dotclear les place dans le dossier /images/ alors quand dans WordPress, elles sont stockées dans /wp-content/uploads/ANNEE/DATE. J'ai décidé que je placerais les anciennes images dans   /wp-content/uploads/2006/dotclear et de remplacer tout ça dans blog-backup via un éditeur texte.

Ensuite, le truc le plus simple, on installe WordPress.

Maintenant, depuis ce WordPress bien propre, il faut importer le contenu Dotclear, grâce au plugin [flatimport](http://cvie.free.fr/public/flatimport.txt). Il faut le renommer en flatimport.php et le placer dans wp-admin/import. Le fichier blog-backup.txt se place lui dans  __wp-content/uploads. __Ensuite dans l'interface de Wordpres, on lance l'import depuis Manage/Import/Dotclear Flat Import.

Un point très important, les changements d'url. En effet il serait bête de perdre toutes ces pages référencées dans les moteurs de recherche. Sous Dotclear, les url de 64k étaient du type  64k.be/index.php/ANNEE/MOIS/JOUR/POST_ID-TITRE. Pas de problème, puisque WordPress permet de définir sa propre structure de permalien. Mais c'est là que je découvre un problème : l'import a modifié tous les post_id. Donc les liens depuis Google étaient brisés.

C'est là que [Mich](http://www.emich.be) entre en action et me pond un htaccess miraculeux. Je ne sais pas vous, mais les expressions régulières et moi ça fait deux. Cette règle permet de rediriger les liens indexés par Google vers la bonne url WordPress, sans tenir compte du post_id :

RewriteRule ^index.php[/]([0-9]+)[/]([0-9]+)[/]([0-9]+)[/][0-9]+-(.+)$ http://64k.be/$1/$2/$3/$4 [R=301,L]

Le R=301 indique aux moteurs de recherche qu'il s'agit d'une redirection permanente.

__MàJ :__ On dirait que ça fonctionne à merveille puisqu'il n'y a déjà presque plus aucunes anciennes url dans [l'index de Google](http://www.google.be/search?q=site:64k.be) ! ^-^

Et voilà, au niveau du contenu le principal est fait.

Maintenant il faut trouver les correspondances aux niveaux des fonctionnalités. J'ai utilisé comme base le [thème K2](http://getk2.com/). Il intègre à la base l'affichage des commentaires récents, les archives, un lecteur rss, etc. Et aussi pas mal de fonctionnalités AJAX à la mode :)

Quelques-uns des plugins que j'ai installé :
<ul>
	<li>[Google Sitemaps Generator](http://www.arnebrachhold.de/2005/06/05/google-sitemaps-generator-v2-final), : génération d'un fichier sitemap.xml</li>
	<li><a href="http://www.geekyweekly.com/mylinkorder" title="Visit plugin homepage">My Link Order</a>  : permet de réorganiser facilement sa liste de liens</li>
	<li><a href="http://akismet.com/" title="Visit plugin homepage">Akismet</a> : le plugin antispam fournit par défaut avec WordPress</li>
	<li><a href="http://aranea.zuavra.net/index.php/18/" title="Visit plugin homepage">Smiley Javascript Buttons</a> : permet d'avoir des smilies cliquables pour les commentaires</li>
	<li><a href="http://www.ceprix.net/archives/spotmilk-admin-theme-for-wordpress/" title="Visit plugin homepage">SpotMilk</a> : un thème pour l'interface d'administration</li>
	<li><a href="http://www.neato.co.nz/ultimate-tag-warrior/" title="Visit plugin homepage">Ultimate Tag Warrior</a> : gestion des tags</li>
</ul>
J'ai encore quelques petits problèmes non résolu :
<ul>
	<li>Fichier fr_FR.mo ou pas, mon WordPress ne veut rien  savoir, l'admin et les dates restent en anglais. Apparement il s'agirait d'[un problème au niveau de mon hébergement](http://wordpress-fr.net/support/viewtopic.php?id=172).</li>
	<li>La version 2.1 a quelques petits problèmes de jeunesses avec l'AJAX, en effet, parfois il est impossible de supprimer un commentaire ou ajouter une catégorie.</li>
</ul>
Sinon à part ça, on est très satisfait de cette migration ! Et vous ? ;-)

Pour l'instant je suis en train de regarder de côté des plugins pour ajouter de nouvelles fonctionnalités à 64k. Et après... un nouveau thème !
