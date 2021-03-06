SRC = $(wildcard src/*.js) $(wildcard src/**/*.js)

all: dist/AES70.es5.js

build/node_modules/.bin/rollup:
	cd build && npm ci

dist/AES70.es5.js: build/rollup.conf.js Makefile build/node_modules/.bin/rollup $(SRC)
	cd build && ./node_modules/.bin/rollup -c ../$<
