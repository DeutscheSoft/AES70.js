TEST_FILES = src/tests/utils.js src/tests/signatures.js src/tests/AES70.test.js
BIN_DIR = ./node_modules/.bin

BABEL = $(BIN_DIR)/babel
ROLLUP = $(BIN_DIR)/rollup

SRC = $(filter-out src/index.browser.js, $(wildcard src/*.js))
SRC += $(wildcard src/controller/*.js)
LIB = $(SRC:src/%.js=lib/%.js)

all: dist/AES70.es5.js

node: $(LIB)

lib/%.js: src/%.js Makefile .babelrc
	mkdir -p `dirname $@`
	BABEL_ENV=node $(BABEL) $< -o $@

build/node_modules/.bin/rollup:
	cd build && npm ci

dist/AES70.es5.js: build/rollup.conf.js Makefile build/node_modules/.bin/rollup $(SRC)
	cd build && ./node_modules/.bin/rollup -c ../$<

docs: $(SRC) Makefile
	node ./node_modules/jsdoc/jsdoc.js -c jsdoc.json --readme README.md src -r -d docs
