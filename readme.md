# Formify

> Simple Backend for your form submissions

## Installation
[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/ashiknesin/formify&env=SEND_EMAIL_SERVICE_PROVIDER&env=SEND_EMAIL_AUTH_USER&env=SEND_EMAIL_AUTH_PASS&env=FORMIFY_FROM&env=FORMIFY_SENT_TO&env=FORMIFY_SUBJECT&env=FORMIFY_REDIRECT_URL)

## Environment Variables

```
SEND_EMAIL_SERVICE_PROVIDER=gmail
SEND_EMAIL_AUTH_USER=username@gmail.com
SEND_EMAIL_AUTH_PASS=password

FORMIFY_FROM=you@example.com
FORMIFY_SENT_TO=you@yourdomain.com
FORMIFY_SUBJECT="Formify Form"
FORMIFY_REDIRECT_URL=http://example.com/form-submited
```
## Usage

```html
<form action="https://your-url.now.sh" method="POST">
```


## License

MIT © [Ashik Nesin](https://ashiknesin.com)
