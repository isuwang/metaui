import {metadata} from "./demo_metadata.js";
import {waybillData} from "./demo_data.js";
// test
// init first mock
MockDataPool.when("POST", "/dapeng/metadata")
  .withExpectedHeader("content-type", "application/x-www-form-urlencoded;charset=utf-8")
  .responseWith({status: 200, body: JSON.stringify(metadata)});

MockDataPool.when("GET", "/mall/kuaisuorderlogistics/findWaybills.do?limit=15")
  // .withExpectedHeader("content-type", "text/plain;charset=utf-8")
  .responseWith({status: 200, body: JSON.stringify(waybillData)});