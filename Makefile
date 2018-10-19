TEST_FILES = src/tests/utils.js src/tests/signatures.js src/tests/AES70.test.js
BIN_DIR = ./node_modules/.bin

BABEL = $(BIN_DIR)/babel
ROLLUP = $(BIN_DIR)/rollup

SRC = $(filter-out src/utf8_node.js, $(wildcard src/*.js))
SRC += $(wildcard src/controller/*.js)
LIB = $(SRC:src/%.js=lib/%.js)

all: dist/AES70.es5.js $(LIB)

node: $(LIB)

dist/rollup.js: $(SRC) Makefile rollup.conf.js
	$(ROLLUP) --o $@ --f iife -c rollup.conf.js src/index.browser.js -m dist/rollup.js.map

lib/%.js: src/%.js Makefile .babelrc
	mkdir -p `dirname $@`
	BABEL_ENV=node $(BABEL) $< -o $@

lib/utf8.js: src/utf8_node.js Makefile .babelrc
	BABEL_ENV=node $(BABEL) $< -o $@

dist/babel.browser.js: dist/rollup.js Makefile .babelrc
	BABEL_ENV=browser $(BABEL) $< -o $@

dist/AES70.es5.js: dist/babel.browser.js Makefile
	closure-compiler --js $< --js_output_file $@ --language_in ECMASCRIPT5 --language_out ECMASCRIPT5 ||\
	closure-compiler --js $< --js_output_file $@ --language_in ECMASCRIPT5 ||\
	cp $< $@

docs: $(SRC) Makefile
	node ./node_modules/jsdoc/jsdoc.js src -r -d docs
