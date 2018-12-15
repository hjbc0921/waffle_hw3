## Virtual Environment for React
```bash
$ python3 -m pip install virtualenv
$ python3 -m venv reactEnv #name
$ source reactEnv/bin/activate # ($ deactivate) to quit
```

## Start App
```bash
$ (reactEnv) npm init react-app like-or-dislike #name
```

### Directory Structure
```
waffle_hw3
├── README.md
└── like-or-dislike
    ├── README.md
    ├── node_modules
    ├── package.json
    ├── .gitignore
    ├── public
    |       favicon.io
    |       index.html
    |       manifest.json
    └── src
    	├── App.css
    	├── App.js
    	├── App.test.js
    	├── index.css
    	├── index.js
    	├── logo.svg
    	└── serviceWorker.js
```

## Run app in development mode
```bash
$ (reactEnv) cd like-or-dislike
$ (reactEnv) npm start #localhost:3000
```

## References
* [Create React App - Getting Started](https://facebook.github.io/create-react-app/docs/getting-started)
* [waffle seminar](https://waffle-skile.github.io/assignment/indiv3/))

