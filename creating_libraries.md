## Creating Libraries

### Setting the environment to create javascript based libraries


```
$ pip install upgrade pip
$ pip install nodeenv
```

```
$ nodeenv --version
$ nodeenv -p
```

```
$ npm install uglify-js -g
```

```
uglifyjs <inputfile> -c -m -o  <ouputfile>
```
where the options used are described as:
| Option | Description |
|--------|-------------|
|-m, --mangle | Mangle names/specify mangler options. |
|-m, --mangle | Mangle names/specify mangler options. |
|-o, --output <file> | Output file (default STDOUT). |
