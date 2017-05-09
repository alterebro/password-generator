# Password Generator

Little web tool to create multiple secure passwords to use on your favorite online services / websites from a given memorable master password of your choice.

- **Live Demo : [https://alterebro.github.io/password-generator/](https://alterebro.github.io/password-generator/)**


## Usage

There is only one global function called `passgen` with three possible parameters:

- `password` : master password of your choice. (_i.e. foo_)
- `website` : Online service or website name. (_i.e. facebook.com_)
- `size` : Desired length of the generated password (8-16) (_i.e. 8_)

```javascript
passgen('foo', 'facebook.com', 8);

// outputs : C{,7!hv?
```

To use the same password for different services:
```javascript
passgen('foo', 'facebook.com', 8);
passgen('foo', 'twitter.com', 8);
passgen('foo', 'instagram.com', 8);
passgen('foo', 'linkedin.com', 8);

// facebook  : C{,7!hv?
// twitter   : En9hah5^
// instagram : E{FqkIu6
// linkedin  : ^<7B~n0%
```

## Development

- Clone repository:
```sh
git clone https://github.com/alterebro/password-generator.git
```

- Install dependencies:
```sh
npm install
```

- Build
```sh
gulp
```

---

### License

[MIT license](https://github.com/alterebro/password-generator/blob/master/LICENSE). (c) 2017 Jorge Moreno, [@alterebro](https://twitter.com/alterebro).
