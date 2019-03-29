
import csv
import json
import sys

def csv2json():
	f = open(sys.argv[1])
	fi = csv.reader(f)
	
	with open(sys.argv[1]+".json", "w", encoding='utf-8') as jf:
		json.dumps(list(fi), jf, ensure_ascii=False)

if __name__ == "__main__":
	csv2json()
