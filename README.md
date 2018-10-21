<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tennieldumdee.jpg" alt="Tenniel illustration of Tweedledum (centre) and Tweedledee (right) and Alice (left)." height="321" width="400" />

HATEOAS API Self-generating Client
==================================

[![Build Status](https://secure.travis-ci.org/gonzalo-bulnes/hateoas-api-self-generating-client.png?branch=master)](http://travis-ci.org/gonzalo-bulnes/hateoas-api-self-generating-client)

API which apply the [HATEOAS](http://vimeo.com/30586709) constraints are self-documented. This Javascript application generates the client views from the information provided by the API itself and allows simple interaction with the API for demonstration or testing purposes.

Testing
-------

[Jasmine](https://jasmine.github.io/) provides a server to run the specs suite.

```bash
cd hateoas-api-self-generating-client
rake jasmine # start the server
```

Once the server started, Jasmine runs the specs suite each time you refresh [http://localhost:8888](http://localhost:8888).

Credits
-------

The header picture was created by John Tenniel [Public domain], and is included here via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Tennieldumdee.jpg).
