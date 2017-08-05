#!/bin/bash
supervisor -i ./logs,./.git,./upload --ignore-synlinks --harmony app.js

