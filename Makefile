prepublish:
	rm -rf ./dist
	babel index.js --out-dir ./dist
	babel decimalOne.js --out-dir ./dist
	babel decimalTwo.js --out-dir ./dist
