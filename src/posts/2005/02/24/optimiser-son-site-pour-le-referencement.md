---
title: "Optimiser son site pour le référencement"
date: 2005-02-24
permalink: 2005/02/24/optimiser-son-site-pour-le-referencement/
author: Ced
tags: ["post"]
legacy_wordpress_id: 31
---

Les moteurs de recherche comme [Google](http://www.google.com), envoient des « robots » analyser votre site. Les moteurs n’indexent que les pages aux url simples et auxquelles ils ont accès. Plusieurs facteurs peuvent empêcher ces robots de suivre tous les liens de votre site :
<ul>
	<li>les liens en javascript,</li>
	<li>les liens en flash,</li>
	<li>les frames et les iframes,</li>
	<li>les session cookies,</li>
	<li>les areamap,</li>
	<li>etc.</li>
</ul>

<!-- excerpt -->

<h4>Arborescence des répertoires et nom de fichiers</h4>
L'adresse de la page est l'un des paramètres les plus importants pour les moteurs de recherche. Elle doit donc contenir des mots clés, il est donc judicieux de les utiliser pour nommer les répertoires et les fichiers. Par exemple : http://www.jeuxvideo.com/gamecube/aventure.html au lieu de http://www.jeuxvideo.com/section1/page1.html

Utiliser de préférences l'extension .html pour les pages. Eviter les .php, .aspx, etc. Utiliser la <a href="http://www.webmaster-hub.com/publication/article5.html" hreflang="fr">réécriture d'url</a>. Utiliser un maximum de 2 paramètres dans l'url. Par exemple : index.php?param=20&amp;id=30

L'idéal est même ne n'avoir aucun paramètre. Grâce au <a href="http://www.webmaster-hub.com/publication/article5.html" hreflang="fr">mod_rewrite</a> d'Apache. Cela permet la réécriture d'url. Ce qui peut donner par exemple : au lieu de http://www.jeuxvideo.com/index.php?param=20&amp;id=30 http://www.jeuxvideo.com/gamecube/mariosunshine

Dans les noms de fichiers, préférer le tiret « - » à l'underscore « _ »
<h4>Liens</h4>
Liens sous forme de texte ou image (car les moteurs sont incapables de suivre les liens dans du javascript, du flash,etc)

Pour les liens de type texte, ce texte doit être en rapport avec la page de destination Évitez donc les "cliquez ici" qui ne veulent rien dire: Au lieu de « cliquez ici pour accéder aux photos», utilisez plutôt « accéder aux photo ». Les moteurs de recherche accordent beaucoup d'importance au(x) mot(s) sur lequel le lien est fait. Utiliser le paramètre "title". Par exemple: <code>&lt;a href="#rechercher" title="Aller directement au formulaire de recherche"&gt;Rechercher&lt;/a&gt;</code>

Pour les liens sur des images: Utiliser le paramètre "alt". Par exemple : <code>&lt;img src="images/gamecube.gif" alt="Nintendo Gamecube"</code>

Éviter les méthodes telles que l'ajout de lien sur des images transparentes d'un pixel, de toute façon les moteurs le détecte
<h4>Sites multilingues</h4>
Au lieu de mettre le site en français dans un dossier « fr » ou « français » peu significatif, utiliser par exemple un dossier « belgique ». Si on cherche par exemple un site de jobs en Belgique, on tapera plutôt « jobs belgique » que « job fr » ou « job français » Même si votre site n'est au départ disponible en une seule langue, il est préférable de le mettre dans un dossier adéquat dès le départ, en prévision d'un ajout des langues dans le futur.
<h4>Les redirections</h4>
Évitez absolument les redirections de type meta. Les moteurs ne la suivront pas. Utiliser plutôt des redirections avec un language dynamique comme le PHP.
<h4>La home page</h4>
Elle doit contenir les mots clés importants. Par exemple éviter de mettre simplement « cliquez ici pour entrer ». Utilisez plutôt un petit texte d'introduction de quelques lignes.
<h4>La partie visible</h4>
Bien évidemment, le texte de la page doit contenir un maximum de mots clés.

Utiliser les balises &lt;hX&gt;, &lt;b&gt; pour structurer votre page. Il faut éviter de parler de plusieurs sujets sur une page, car les mots clés font se diluer dans l'ensemble de la page et avoir moins d'importance

Donner des noms révélant aux images
<h4>La partie non-visible</h4>
Le titre de la page est très important. Il doit être en relation avec le contenu de la page, donc changer pour chaque page. Et bien évidemment contenir des mots clés. Par exemple « Jeux videos – Gamecube - Aventure »

Les balises meta description et keywords sont de moins en moins utilisées par les moteurs.

Dans la source HTML, l'idéal est d'avoir le contenu avant le menu de navigation, sauf si celui-ci contient beaucoup de mots clés.

Plus le code sera "propre", plus la tâche des robots sera facilitées. Utiliser donc les standards du [W3C](http://www.w3.org/). Un [code valide](http://validator.w3.org) sera bien mieux référencé. Pour vous imaginez ce qu'un robot verra de votre site, vous pouvez utiliser un navigateur en mode texte tel que [[http://lynx.browser.org/ Lynx](http://64k.be/wp-admin/%5Bhttp://lynx.browser.org/%20Lynx)].
<h4>La règle d'or</h4>
La règle d’or sur Internet est de ne pas tricher pour être mieux référencé. Les moteurs repèrent vite les tricheurs et votre site risque d'être blacklisté.
<h4>Derniers conseils</h4>
<ul>
	<li>Le plus gros du <a href="http://www.webrankinfo.com/google/pagerank/index.php" hreflang="fr">Pagerank de Google</a> se trouve sur la home, donc c'est là que vous devriez concentrer vos efforts.</li>
	<li>Mettre les javascripts dans des fichiers séparés</li>
	<li>Faire un lien vers le plan du site sur chaque page. Lorsque que le robot ira sur cette page, il suivra les liens vers toutes les pages du site.</li>
	<li>Avoir un site terminé : éviter de faire des liens vers des pages en construction</li>
	<li>Avoir une navigation sans fin, évitez que certaines pages soient des impasses.</li>
</ul>
