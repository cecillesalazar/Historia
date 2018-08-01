#!/bin/sh

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR

(cd front_end && npm start &)
(cd back_end && npm start)

