
import csv
import json
import sys

def csv2json():
	f = open(sys.argv[1])
	fi = csv.reader(f)
	fo = json.dumps(list(fi))
	print(fo)

if __name__ == "__main__":
	csv2json()
