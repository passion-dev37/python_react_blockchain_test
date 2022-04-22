import random

from flask import Flask
from flask import request
app = Flask(__name__)


@app.route("/rand-number", methods=['GET'])
def rand_number():
  start = int(request.args.get('start'))
  end = int(request.args.get('end'))
  result = random.randint(start, end)

  return str(result)
