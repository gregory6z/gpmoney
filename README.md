# Modal & Forms

### Enregistrement des données de form

éviter le comportement d'envoi par défaut de rechargement de  
 la page avec le FormEvent en tant que type et event la propriete:

```javascript
function handleCreateNewTransaction(event: FormEvent) {
  event.preventDefault();
}
```

et pour avoir accès aux données du formulaire avec:

```javascript
onChange={event => setTitle(event.target.value) }
```
