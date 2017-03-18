// On intervient au niveau du serveur avant que celui-ci ne soit démarré.
// Ce code sera exécuté au lancement de NodeAtlas.
exports.setConfigurations = function (next) {
    // Récupérer l'instance « NodeAtlas » du moteur.
    var NA = this;

    // Middleware utilisé lors de chaque requête.
    NA.express.use(function (request, response, next) {
        response.setHeader("X-Frame-Options", "ALLOW-FROM http://www.lesieur.name/");
        next();
    });

    // On ré-injecte les modifications.
    next();
};