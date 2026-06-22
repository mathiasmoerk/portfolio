#!/bin/sh
export PATH="$HOME/.local/node/bin:$PATH"
exec node node_modules/next/dist/bin/next dev --port 3000
