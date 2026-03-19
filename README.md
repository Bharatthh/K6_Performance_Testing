# 🚀 k6 Performance Testing Framework

## 📌 Overview

This project is a **Performance Testing Framework** built using **k6**, **InfluxDB**, and **Grafana** to evaluate system performance under load and visualize real-time metrics.

It provides a structured approach to execute tests, collect results, and analyze performance efficiently.

---

## 🛠 Tech Stack

* ⚡ k6 – Load testing
* 📊 InfluxDB – Metrics storage
* 📈 Grafana – Visualization
* 🧪 JavaScript – Scripting

---

## 🔄 Workflow

1️⃣ **Create Test Scripts**
Write k6 scripts to define user load and test scenarios.

2️⃣ **Execute Tests**
Run scripts using k6 to simulate virtual users.

3️⃣ **Store Metrics**
Test data is pushed to InfluxDB during execution.

4️⃣ **Visualize Data**
Grafana dashboards display real-time performance metrics.

5️⃣ **Analyze Results**
Results are stored and used to evaluate:

* Response time
* Throughput
* Error rates
* System stability

---

## 📂 Project Structure

```id="n3x7qp"
Performance_test/
│── scripts/        # k6 test scripts
│── config/         # Configuration files
│── dashboards/     # Grafana dashboards
│── results/        # Stored test results
│── README.md
```

---

## ⚙️ Setup

### Install k6

```id="p8v2lx"
npm install -g k6
```

### Setup InfluxDB

```id="w1k9rt"
influx
CREATE DATABASE k6
```

### Configure Grafana

* Add InfluxDB as data source
* URL: http://localhost:8086
* Database: k6

---

## ▶️ Run Tests

```id="z7m4ka"
k6 run scripts/test.js
```

```id="c2x8vn"
k6 run --out influxdb=http://localhost:8086/k6 scripts/test.js
```

---

## 📊 Results

* 📁 Test results are stored in the `results/` folder
* 📈 Metrics are visualized in Grafana dashboards
* 📊 Helps in identifying performance issues and bottlenecks

---

## ✨ Key Highlights

* ✔ Structured performance testing workflow
* ✔ Real-time monitoring with Grafana
* ✔ Centralized metrics storage
* ✔ Result tracking and analysis

---

## 👨‍💻 Author

**Bharath**

---

## 📜 License

MIT License
