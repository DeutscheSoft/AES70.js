TEST_FILES=src/tests/utils.js src/tests/signatures.js src/tests/OCA.test.js
LIBRARY_FILES = \
  src/index.js\
  src/signature_parser.js\
  src/TypesBase.js\
  src/Types.js\
  src/OCA.js\
  src/WebSocket.js\
  src/controller/Base.js\
  src/RemoteControlClasses.js

SRC = $(filter-out src/utf8_node.js, $(wildcard src/*.js))
SRC += $(wildcard src/controller/*.js)
LIB = $(SRC:src/%.js=lib/%.js)

all: dist/OCA.es5.js $(LIB)

node: $(LIB)

dist/rollup.js: $(LIBRARY_FILES) Makefile rollup.conf.js
	rollup --o $@ --f iife -c rollup.conf.js src/index.js -m dist/rollup.js.map

lib/%.js: src/%.js Makefile .babelrc
	mkdir -p `dirname $@`
	BABEL_ENV=node babel $< -o $@

lib/utf8.js: src/utf8_node.js Makefile .babelrc
	BABEL_ENV=node babel $< -o $@

dist/babel.browser.js: dist/rollup.js Makefile .babelrc
	BABEL_ENV=browser babel $< -o $@

dist/OCA.es5.js: dist/babel.browser.js Makefile
	closure-compiler --js $< --js_output_file $@ --language_in ECMASCRIPT5 --language_out ECMASCRIPT5
