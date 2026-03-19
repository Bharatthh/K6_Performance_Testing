import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";



export const options = {
    vus: 10,
    duration: '30s',

};
export default function () {
    const res = http.get('https://jsonplaceholder.typicode.com/posts/1');

    check(res, {
        'status is 200': (r) => r.status === 200,
        'response time < 500ms': (r) => r.timings.duration < 500,
        'body is not empty': (r) => r.body.length > 0,
        'has title field': (r) => JSON.parse(r.body).title !== undefined,
        'is JSON': (r) => r.headers['Content-Type'].includes('application/json'),
    });
    sleep(1);
}
export function handleSummary(data) {
    return {
        "/reports/report.html": htmlReport(data),
        stdout: textSummary(data, { indent: " ", enableColors: true }),
    };
}