# Building_stellar_websites

Il faut restructurer ton projet pour le rendre plus lisible et facilement modifiable. En plus d'autres part il y'a des dossier que tu cree come ceci:

- How-we-work
- Privacy_Policy
- Work

Essaie de voir un peu cela et surtout garde la consistance avec le reste de ton projet.
J'ai fixe l'erreur sur les routing, quand tu export un composant s'il n'est pas default export tu l'import comme cecui:

Par exemple tu as un composant dans le dossier src/components/Header/index.jsx

```jsx
export const Header = () => {
  return <div>Header</div>;
};
```

Pour l'importer tu peux le faire avec ceci:

```jsx
import { Header } from "./components/Header";
```

Et s'il est default tu vas l'importer comme ceci:

```jsx
import Header from "./components/Header";
```

Essaie de preter un peu attention a tout cela. Apres tu n'est pas obliger de creer un composant pour chaque section de la page ce n;est pas une bonne pratique. On creer un composant s'il a un etat propre a lui.

Tu trouvera des commentaire avec TODO: dans quelques fichier de ton dossier home:

- comme par exemple logo.jsx
- header.jsx
- Design.jsx
- Header.jsx

Tu pourras par de suite effacer ceci de ton README je l'ai fait juste pour que tu te retrouves facilement sur ton projet.
