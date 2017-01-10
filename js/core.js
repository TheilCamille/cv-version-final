$( document ).ready(function() {
    
    // Initialisation de la page
    $( 'h3' ).typed({
        strings: ["Appuyez sur une touche pour commencer ..."],
        contenttype: 'text',
        showCursor: false
    })
    
    $( document ).one( "keydown", function(){
        
        $( 'section' ).typed({
            strings: ["Bienvenue sur le CV de Camille Theil, Développeur web. Pour explorer les différents menu, tapez sur la touche correspondante. <br/><br/><br/><br/> 1. Formations <br/> 2. Compétences <br/> 3. Exemple de projet <br/> 4. Contact"],
            contenttype: 'text',
            showCursor: false
        
       })
    });
    
    
    $(document).keypress(function(e) {
    if(e.which == 49 || e.which == 38) {
        
        $( 'section' ).typed({
            strings: ["Formations et Diplômes <br/><br/><br/> 09/2006 - 06/2009 Bac ES - Lycée Marcel Pagnol - Marseille (10e) <br/> 09/2011 - 07/2016 Troisième année de Philosophie - Faculté Aix-Marseille - Aix-en-Provence <br/> 09/2016 - 03/2017 Certification de niveau 3 développeur Web - Simplon Coda - Alès <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> 0. Retour au menu"],
            contenttype: 'text',
            showCursor: false
        })
    }
        
    else if(e.which == 48 || e.which == 224) {
        
        $( 'section' ).typed({
            strings: ["Bienvenue sur le CV de Camille Theil, Développeur web. Pour explorer les différents menu, tapez sur la touche correspondante. <br/><br/><br/><br/> 1. Formations <br/> 2. Compétences <br/> 3. Exemple de projet <br/> 4. Contact"],
            contenttype: 'text',
            showCursor: false
        
       })    
    }
    
    else if(e.which == 50 || e.which == 233) {
        
        $( 'section' ).typed({
            strings: ["Compétences <br/><br/><br/> <div><i class='devicon-html5-plain' /> HTML \xa0\xa0\xa0\xa0\xa0 <i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /> <br/><i class='devicon-css3-plain'/> CSS \xa0\xa0\xa0\xa0\xa0\xa0\xa0<i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star-o' /><br/><i class='devicon-javascript-plain'/> JavaScript <i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star-o' /> <br/> <i class='devicon-jquery-plain'/> Jquery \xa0\xa0\xa0\xa0<i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /><br/> <i class='devicon-php-plain'/> PHP \xa0\xa0\xa0\xa0\xa0\xa0 <i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star-half-o' /><i class='fa fa-star-o' /> <br/> <i class='devicon-mysql-plain'/> MYSQL \xa0\xa0\xa0\xa0\xa0<i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star-o' /><i class='fa fa-star-o' /><i class='fa fa-star-o' /> <br/> <i class='devicon-nodejs-plain'/> Node.js \xa0\xa0\xa0<i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star-o' /><i class='fa fa-star-o' /><i class='fa fa-star-o' /> <br/> <i class='devicon-mongodb-plain'/> MongoDB \xa0\xa0\xa0<i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star-half-o' /><i class='fa fa-star-o' /><i class='fa fa-star-o' /><br/><br/><br/> <i class='devicon-linux-plain'/> Linux \xa0\xa0\xa0\xa0\xa0<i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star-o' /><i class='fa fa-star-o' /><br/> <i class='devicon-github-plain'/> GitHub \xa0\xa0\xa0\xa0<i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star-o' /><i class='fa fa-star-o' /> <br/> <i class='devicon-trello-plain'/> Trello \xa0\xa0\xa0\xa0<i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star' /><i class='fa fa-star-o' /><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> 0. Retour au menu</div>"],
            contenttype: "text",
            showCursor: false
        })
    }
    else if (e.which == 34 || e.which == 51) {
        
         $( 'section' ).typed({
             strings: ["Projets <br/><br/><br/>01/2017 - UrbanParc - Réalisation d'un site web pour le skatepark d'Alès.<br/><br/>  J'ai notamment participé à l'interface d'administration, au calendrier de réservation et à l'animation général de l'interface uttilisateur. <br/><br/><a href='http://www.urbanparc.fr'>www.urbanparc.fr</a><br/><br/> 02/2017 - FinalementCestFacile - Réalisation d'un site web pour pour un professeur particulier de Physique / Mathématique. Livraison d'un site vitrine complet.<br/><br/><a href='http://www.finalementcestfacile.fr'>www.finalementcestfacile.fr<a/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> 0. Retour au menu"],
             contenttype: "text",
             showCursor: false
    
    })
    }
    else if (e.which == 52 || e.which == 39) {
        
        $( 'section' ).typed({
            strings: [""],
            contenttype: "text",
            showCursor: false
        })
    } 
    });

    
});

