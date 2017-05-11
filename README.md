# Password Generator

Little web tool to create multiple secure passwords to use on your favorite online services / websites from a given memorable master password of your choice.

- **Live Demo : [https://alterebro.github.io/password-generator/](https://alterebro.github.io/password-generator/)**


### How does it work

The master password of your choice and the online service / website inputs are hashed using the [MD5](https://en.wikipedia.org/wiki/MD5) algorithm, both strings concatenated are hashed again resulting in a HEX 32 chars length string / hash. This one is converted from base 16 (hex) to base 94 (using the custom alphabet made of the 94 printable ASCII characters). Finally the Base94 string is trimmed to match the length passed as a parameter.

**This script works on the browser using JavaScript so no password is stored or collected in anyway**.


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
