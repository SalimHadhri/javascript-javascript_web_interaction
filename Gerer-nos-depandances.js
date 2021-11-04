/********************* NPM ( Paquage Manager) ***************************/

//programme qui vous permet d'installer très facilement des modules pour le JavaScript,
//et cela comprend les outils dont nous avons parlé dans les chapitres précédents.

/******************** Initialisez votre projet *******************/

// package.json a creer afin d'avoir des informations sur votre projet : son nom, sa version, les modules à installer, etc.
npm init

/************** Installez un module *******************/
npm install <module_name> --save-dev //--save-dev ==> sauvegarder cette depandance dans le fichier package.json
                                    // --save ===> ajout de la depanddance en tant que depandance de production

npm install // ====> cloner notre projet pour la premiere fois depuis un repositry IGT
            // ===> installer toutes les dépendances de votre projet qui ont été ajoutées dans le fichier   package.json
