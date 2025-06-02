# Test Technique - Canadel

J’ai construit l’application demandée dans le cadre du test technique de Canadel selon l’architecture suivante :

## Structure du projet

- **Frontend** : Application Angular 19 (client)
- **Backend** : API Web ASP.NET (version .NET 8)
- **Base de données** : SQL Server (hébergée sur Azure)

---

## Déploiement

- **API** : Déployée avec succès sur Azure  
  🔗 [Lien de l'API](https://canadelwebapi-bxcre3ctdva9bscr.canadacentral-01.azurewebsites.net)

- **Client Angular** : Déployé sur Azure  
  🔗 [Lien du client](https://angularclientapp-hcfwcgb7fhdcaphz.scm.canadacentral-01.azurewebsites.net/wwwroot)  
  ⚠️ **Problème connu** : Le lien affiche uniquement le fichier `index.html`. Les composants Angular ne se chargent pas encore correctement à cause d’un problème de *binding* que je n’ai pas encore pu résoudre.

---

## Tester l'application

L'API et la base de données sont **fonctionnelles** et hébergées sur Azure.  
Vous pouvez les tester en lançant le client Angular en local.

### Étapes pour tester le client :
1. Ouvrez un terminal dans le dossier `ProductApp`
2. Exécutez la commande suivante :
   ```bash
   npm start
   ```

---

## Interface et technologies

- Le design a été fait avec **Angular 19**.
- L’API est construite avec **ASP.NET Core (.NET 8)**.
- Les deux projets communiquent via des appels HTTP.
- [Démo de l'application](https://youtu.be/khFIvU4RSY0)

---

## Notes

En raison de problèmes imprévus lors du déploiement (surtout côté client Angular), je n’ai pas eu le temps d’implémenter les tests unitaires.  
Je suis conscient de leur importance et j’ai prévu de les ajouter dès que le souci de rendu côté client est résolu.

Je tiens également à préciser que tout le développement de cette application a été fait par moi.  
J’ai utilisé des outils comme ChatGPT pour m’aider dans la syntaxe de certains fichiers de configuration (comme YAML), dans le but de gagner du temps et me concentrer sur le développement des fonctionnalités principales.

---

## Références utiles

- [How to deploy asp.net core web api to azure app service - kudvenkat](https://www.youtube.com/watch?v=MP4zatl3jF8)
- [Asp.Net Core Web API CRUD with Angular - CodAffection](https://www.youtube.com/watch?v=OZGdKYzUYvU)
- [Learn ASP.NET Core MVC (.NET 6) - Full Course - freeCodeCamp.org](https://www.youtube.com/watch?v=hZ1DASYd9rk)I