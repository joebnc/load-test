

docker pull grafana/k6

docker run --rm -i grafana/k6 run --vus 5000 --duration 3600s - <load-test.js