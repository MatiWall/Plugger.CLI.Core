To check where it will try to publish
```
yarn npm publish --dry-run
```

To check the registry config
```
yarn config get npmScopes 
```

Add user to registry 
```
 npm addUser --registry "http://verdaccio.mw.local"
```

Publish
```
npm publish --registry=http://verdaccio.mw.local --access public
```