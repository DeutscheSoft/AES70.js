TEST_FILES=lib/tests/utils.js lib/tests/signatures.js lib/tests/OCA.test.js
LIBRARY_FILES = \
  lib/index.js\
  lib/signature_parser.js\
  lib/TypesBase.js\
  lib/Types.js\
  lib/OCA.js\
  lib/WebSocket.js\
  lib/controller/Base.js\
  lib/RemoteControlClasses.js

SRC = $(wildcard lib/*.js)
LIB = $(SRC:src/%.js=lib/%.js)

all: dist/OCA.es5.js

dist/rollup.js: $(LIBRARY_FILES) Makefile rollup.conf.js
	rollup --o $@ --f iife -c rollup.conf.js lib/index.js -m dist/rollup.js.map

dist/babel.browser.js: dist/rollup.js Makefile .babelrc
	BABEL_ENV=browser babel $< -o $@

dist/OCA.es5.js: dist/babel.browser.js Makefile
	closure-compiler --js $< --js_output_file $@ --language_in ECMASCRIPT5 --language_out ECMASCRIPT5
