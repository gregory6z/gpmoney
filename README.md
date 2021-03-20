# Modal & Forms

### fonctionement des buttons

pour vérifier si le bouton a été modifié, utilisez le nom de classe  
avec une condition:

```javascript
className={type === 'deposit' ? 'active': ''}
```

ou un composant des composants stylisés avec de propriétés:

```javascript
isActive={type === 'deposit'}
```
