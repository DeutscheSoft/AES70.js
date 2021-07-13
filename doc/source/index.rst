.. AES70.js documentation master file, created by
   sphinx-quickstart on Tue Jul  6 19:20:52 2021.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

########
AES70.js
########

Building this documentation
---------------------------

The documentation for this project is built using ``sphinx-js``. The documentation
source files can be found in the ``doc`` directory.
Building the documentation requires ``sphinx-js`` to be installed.
``sphinx-js`` requires ``jsdoc`` which can be installed by running ::

    npm ci

inside of the ``doc`` directory.

After that the documentation can be built using ::

    make html

after which the HTML version of the documentation can be found in
``doc/build/html/``.

Installation
============

AES70.js is written as ES6 modules. It can be used both in a browser and in
NodeJS.

WebBrowser
----------

A ES5 compatible version of AES70.js can be build from within the git
repository. The build process uses babel and closure-compiler to bunde a single
file ``dist/AES70.es5.js``. To build this file run ::

        npm ci
        make dist/AES70.es5.js

Alternatively, the version of AES70 published to NPM already contains the 
generated source file. After installing ``aes70`` using NPM a version of AES70.js
for the browser will be at ``node_modules/aes70/dist/AES70.es5.js``.

NodeJS
------

In order to use AES70 from inside a NodeJS project simply install it with npm.
::

        npm i aes70

In order to build a NodeJS compatible version of AES70.js from the git
repository run: ::

        npm ci
        make node

The output files will then be found in the ``lib/`` directory.


License
=======

This software is released here under the GNU General Public License version 2.

.. toctree::
   :maxdepth: 2
   :caption: Documentation

   introduction

.. toctree::
   :maxdepth: 2
   :caption: API Reference

   api/controller
   api/Control Classes
   api/Control Data Types

Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`
