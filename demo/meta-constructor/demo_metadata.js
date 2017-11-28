const metadata = {
  "serviceMeta": {
    "namespace": "com.isuwang.soa.order.service",
    "name": "WaybillBizService",
    "meta": {"version": "1.0.0", "timeout": 30000},
    "methods": [{
      "name": "findWaybills",
      "request": {
        "name": "findWaybills_args",
        "fields": [{
          "tag": 1,
          "name": "request",
          "optional": false,
          "dataType": {"kind": "STRUCT", "qualifiedName": "com.isuwang.soa.order.domain.TFindWaybillRequest"},
          "doc": "",
          "privacy": false
        }]
      },
      "response": {
        "name": "findWaybills_result",
        "fields": [{
          "tag": 0,
          "name": "success",
          "optional": false,
          "dataType": {"kind": "STRUCT", "qualifiedName": "com.isuwang.soa.order.domain.TFindWaybillResoponse"},
          "doc": "",
          "privacy": false
        }]
      },
      "annotations": [{"key": "m.form.url", "value": "/mall/kuaisuorderlogistics/findWaybills.do"}],
      "isSoaTransactionProcess": false
    }, {
      "name": "findWaybillById",
      "request": {
        "name": "findWaybillById_args",
        "fields": [{
          "tag": 1,
          "name": "id",
          "optional": false,
          "dataType": {"kind": "INTEGER"},
          "doc": "",
          "privacy": false
        }]
      },
      "response": {
        "name": "findWaybillById_result",
        "fields": [{
          "tag": 0,
          "name": "success",
          "optional": false,
          "dataType": {"kind": "STRUCT", "qualifiedName": "com.isuwang.soa.order.domain.TWaybillEx"},
          "doc": "",
          "privacy": false
        }]
      },
      "isSoaTransactionProcess": false
    }, {
      "name": "findWaybillStatistics",
      "request": {
        "name": "findWaybillStatistics_args",
        "fields": [{
          "tag": 1,
          "name": "request",
          "optional": false,
          "dataType": {"kind": "STRUCT", "qualifiedName": "com.isuwang.soa.order.domain.TFindWaybillStatisticsRequest"},
          "doc": "",
          "privacy": false
        }]
      },
      "response": {
        "name": "findWaybillStatistics_result",
        "fields": [{
          "tag": 0,
          "name": "success",
          "optional": false,
          "dataType": {
            "kind": "STRUCT",
            "qualifiedName": "com.isuwang.soa.order.domain.TFindWaybillStatisticsResponse"
          },
          "doc": "",
          "privacy": false
        }]
      },
      "annotations": [{"key": "m.form.url", "value": "/mall/kuaisuorderlogistics/findWaybillStatistics.do"}],
      "isSoaTransactionProcess": false
    }, {
      "name": "findWaybillStatisticsInfo",
      "request": {
        "name": "findWaybillStatisticsInfo_args",
        "fields": [{
          "tag": 1,
          "name": "request",
          "optional": false,
          "dataType": {
            "kind": "STRUCT",
            "qualifiedName": "com.isuwang.soa.order.domain.TFindWaybillStatisticsInfoRequest"
          },
          "doc": "",
          "privacy": false
        }]
      },
      "response": {
        "name": "findWaybillStatisticsInfo_result",
        "fields": [{
          "tag": 0,
          "name": "success",
          "optional": false,
          "dataType": {"kind": "STRUCT", "qualifiedName": "com.isuwang.soa.order.domain.TWaybillStatisticsInfo"},
          "doc": "",
          "privacy": false
        }]
      },
      "isSoaTransactionProcess": false
    }, {
      "name": "createWayBill",
      "doc": "\n\n  ### 创建运单\n\n  #### 业务描述\n  1. 对预约单进行拆单，拆成对应的n个运单\n\n  #### 输入参数\n  1. 运单id\n  2. 拿卡人id\n  3. 车辆司机关联信息\n\n  #### 接口依赖\n  1.\n\n\n  #### 边界异常说明\n  1. 无\n\n\n  #### 前置检查\n  1. 运单的总数量与预约单总数量一致\n  2. 运单的总收入与预约单的对内报价一致\n  3. 预约单必须存在状态为待创建运单，且不存在对应的运单\n\n  #### 权限检查\n  1. 无\n\n\n  #### 逻辑处理\n  1. 保存运单信息与运单子单信息,运单状态为待派单\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n  1. createWayBill\n   - delivery.onCreateWayBill\n\n  #### 输出\n  1. 无\n",
      "request": {
        "name": "createWayBill_args",
        "fields": [{
          "tag": 1,
          "name": "request",
          "optional": false,
          "dataType": {
            "kind": "STRUCT",
            "qualifiedName": "com.isuwang.soa.order.domain.TCreateWayBillFromDeliveryRequest"
          },
          "doc": "",
          "privacy": false
        }]
      },
      "response": {
        "name": "createWayBill_result",
        "fields": [{
          "tag": 0,
          "name": "success",
          "optional": false,
          "dataType": {"kind": "VOID"},
          "doc": "\n\n  ### 创建运单\n\n  #### 业务描述\n  1. 对预约单进行拆单，拆成对应的n个运单\n\n  #### 输入参数\n  1. 运单id\n  2. 拿卡人id\n  3. 车辆司机关联信息\n\n  #### 接口依赖\n  1.\n\n\n  #### 边界异常说明\n  1. 无\n\n\n  #### 前置检查\n  1. 运单的总数量与预约单总数量一致\n  2. 运单的总收入与预约单的对内报价一致\n  3. 预约单必须存在状态为待创建运单，且不存在对应的运单\n\n  #### 权限检查\n  1. 无\n\n\n  #### 逻辑处理\n  1. 保存运单信息与运单子单信息,运单状态为待派单\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n  1. createWayBill\n   - delivery.onCreateWayBill\n\n  #### 输出\n  1. 无\n",
          "privacy": false
        }]
      },
      "isSoaTransactionProcess": false
    }, {
      "name": "dispatchWaybill",
      "doc": "\n\n  ### 运单指派\n\n  #### 业务描述\n  1. 指定承运商信息\n  2. 指定调度员调整后成本与调整原因\n\n  #### 输入参数\n  1. 运单id\n  2. 承运上id\n  3. 承运上调整原因\n  4. 承运商调整成本\n\n  #### 接口依赖\n  1.\n\n\n  #### 边界异常说明\n  1. 无\n\n\n  #### 前置检查\n  1. 运单状态为待派单\n\n  #### 权限检查\n  1. 无\n\n\n  #### 逻辑处理\n  1. 运单状态为待派车\n  2. 保存承运商相关信息\n  3. 保存调整后成本\n  4. 保存调整原因\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n  1. 无\n\n  #### 输出\n  1. 无\n",
      "request": {
        "name": "dispatchWaybill_args",
        "fields": [{
          "tag": 1,
          "name": "request",
          "optional": false,
          "dataType": {"kind": "STRUCT", "qualifiedName": "com.isuwang.soa.order.domain.TDispatchWaybillRequeset"},
          "doc": "",
          "privacy": false
        }]
      },
      "response": {
        "name": "dispatchWaybill_result",
        "fields": [{
          "tag": 0,
          "name": "success",
          "optional": false,
          "dataType": {"kind": "VOID"},
          "doc": "\n\n  ### 运单指派\n\n  #### 业务描述\n  1. 指定承运商信息\n  2. 指定调度员调整后成本与调整原因\n\n  #### 输入参数\n  1. 运单id\n  2. 承运上id\n  3. 承运上调整原因\n  4. 承运商调整成本\n\n  #### 接口依赖\n  1.\n\n\n  #### 边界异常说明\n  1. 无\n\n\n  #### 前置检查\n  1. 运单状态为待派单\n\n  #### 权限检查\n  1. 无\n\n\n  #### 逻辑处理\n  1. 运单状态为待派车\n  2. 保存承运商相关信息\n  3. 保存调整后成本\n  4. 保存调整原因\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n  1. 无\n\n  #### 输出\n  1. 无\n",
          "privacy": false
        }]
      },
      "annotations": [{"key": "m.form.url", "value": "/mall/kuaisuorderlogistics/dispatchWaybill.do"}, {
        "key": "m.id",
        "value": "DISPATCHER"
      }, {"key": "m.operType", "value": "2"}, {"key": "m.type", "value": "entity-action"}, {
        "key": "m.form.title",
        "value": "派单"
      }, {"key": "m.name", "value": "派单"}],
      "isSoaTransactionProcess": false
    }, {
      "name": "revokeWaybillDispatched",
      "doc": "\n\n  ### 撤回运单指派\n\n  #### 业务描述\n  1. 撤回运单指派相关数据\n\n  #### 输入参数\n  1. 运单id\n\n  #### 接口依赖\n  1.\n\n\n  #### 边界异常说明\n  1. 无\n\n\n  #### 前置检查\n  1. 运单状态为待派车状态\n\n  #### 权限检查\n  1. 无\n\n\n  #### 逻辑处理\n  1. 修改运单状态为待派单\n  2. 重置承运商信息，与调度调整成本信息\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n  1. 无\n\n  #### 输出\n  1. 无\n",
      "request": {
        "name": "revokeWaybillDispatched_args",
        "fields": [{
          "tag": 1,
          "name": "waybillId",
          "optional": false,
          "dataType": {"kind": "INTEGER"},
          "doc": "",
          "privacy": false,
          "annotations": [{"key": "m.srcKey", "value": "id"}]
        }]
      },
      "response": {
        "name": "revokeWaybillDispatched_result",
        "fields": [{
          "tag": 0,
          "name": "success",
          "optional": false,
          "dataType": {"kind": "VOID"},
          "doc": "\n\n  ### 撤回运单指派\n\n  #### 业务描述\n  1. 撤回运单指派相关数据\n\n  #### 输入参数\n  1. 运单id\n\n  #### 接口依赖\n  1.\n\n\n  #### 边界异常说明\n  1. 无\n\n\n  #### 前置检查\n  1. 运单状态为待派车状态\n\n  #### 权限检查\n  1. 无\n\n\n  #### 逻辑处理\n  1. 修改运单状态为待派单\n  2. 重置承运商信息，与调度调整成本信息\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n  1. 无\n\n  #### 输出\n  1. 无\n",
          "privacy": false
        }]
      },
      "annotations": [{
        "key": "m.form.url",
        "value": "/mall/kuaisuorderlogistics/revokeWaybillAssigned.do"
      }, {"key": "m.id", "value": "REVOKE_DISPATCHER"}, {"key": "m.operType", "value": "1"}, {
        "key": "m.type",
        "value": "entity-action"
      }, {"key": "m.form.title", "value": "撤回派单"}, {"key": "m.form.confirm", "value": "确认撤回派单？"}, {
        "key": "m.name",
        "value": "撤回派单"
      }],
      "isSoaTransactionProcess": false
    }, {
      "name": "assignWaybillCar",
      "doc": "\n\n  ### 派车\n\n  #### 业务描述\n  1. 修改为待通知出车\n\n  #### 输入参数\n  1. 运单id\n  2. 拿卡人id\n  3. 车辆司机关联信息\n\n  #### 接口依赖\n  1.\n\n\n  #### 边界异常说明\n  1. 无\n\n\n  #### 前置检查\n  1. 运单状态为待通知出车\n\n  #### 权限检查\n  1. 无\n\n\n  #### 逻辑处理\n  1. 修改运单状态为待派单\n  2. 重置派单时间，司机，拿卡人，车辆信息\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n  1. 触发派车事件\n   - 物流领域：预约单模块接受派车事件，如果预约单对应的所有运单已派车，则修改状态为 约车成功，待发货\n\n  #### 输出\n  1. 无\n",
      "request": {
        "name": "assignWaybillCar_args",
        "fields": [{
          "tag": 1,
          "name": "request",
          "optional": false,
          "dataType": {"kind": "STRUCT", "qualifiedName": "com.isuwang.soa.order.domain.TAssignWaybillCarRequeset"},
          "doc": "",
          "privacy": false
        }]
      },
      "response": {
        "name": "assignWaybillCar_result",
        "fields": [{
          "tag": 0,
          "name": "success",
          "optional": false,
          "dataType": {"kind": "VOID"},
          "doc": "\n\n  ### 派车\n\n  #### 业务描述\n  1. 修改为待通知出车\n\n  #### 输入参数\n  1. 运单id\n  2. 拿卡人id\n  3. 车辆司机关联信息\n\n  #### 接口依赖\n  1.\n\n\n  #### 边界异常说明\n  1. 无\n\n\n  #### 前置检查\n  1. 运单状态为待通知出车\n\n  #### 权限检查\n  1. 无\n\n\n  #### 逻辑处理\n  1. 修改运单状态为待派单\n  2. 重置派单时间，司机，拿卡人，车辆信息\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n  1. 触发派车事件\n   - 物流领域：预约单模块接受派车事件，如果预约单对应的所有运单已派车，则修改状态为 约车成功，待发货\n\n  #### 输出\n  1. 无\n",
          "privacy": false
        }]
      },
      "annotations": [{"key": "m.form.url", "value": "/mall/kuaisuorderlogistics/assignWaybillCar.do"}, {
        "key": "m.id",
        "value": "ASSIGN"
      }, {"key": "m.operType", "value": "2"}, {"key": "m.type", "value": "entity-action"}, {
        "key": "m.form.title",
        "value": "派车"
      }, {"key": "m.name", "value": "派车"}],
      "isSoaTransactionProcess": false
    }, {
      "name": "saveWaybillCar",
      "doc": "\n\n  ### 换车\n\n  #### 业务描述\n  1. 添加或提货运单司机与车辆信息\n\n  #### 输入参数\n  1. 运单id\n  2. 拿卡人id\n  3. 车辆司机关联信息\n\n  #### 接口依赖\n  1.\n\n\n  #### 边界异常说明\n  1. 无\n\n\n  #### 前置检查\n  1. 运单状态为待出车、待提货、待签收\n\n  #### 权限检查\n  1. 无\n\n\n  #### 逻辑处理\n  1. 保存车辆信息与司机信息\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n  1. 无\n\n  #### 输出\n  1. 无\n",
      "request": {
        "name": "saveWaybillCar_args",
        "fields": [{
          "tag": 1,
          "name": "waybillId",
          "optional": false,
          "dataType": {"kind": "INTEGER"},
          "doc": "",
          "privacy": false,
          "annotations": [{"key": "m.visible", "value": "false"}, {"key": "m.srcKey", "value": "id"}]
        }, {
          "tag": 2,
          "name": "driverAndCarId",
          "optional": false,
          "dataType": {"kind": "INTEGER"},
          "doc": "",
          "privacy": false,
          "annotations": [{"key": "m.element", "value": "logistics-waybill-add-car"}, {
            "key": "m.required",
            "value": "true"
          }, {"key": "m.visible", "value": "true"}, {"key": "m.editable", "value": "true"}]
        }]
      },
      "response": {
        "name": "saveWaybillCar_result",
        "fields": [{
          "tag": 0,
          "name": "success",
          "optional": false,
          "dataType": {"kind": "VOID"},
          "doc": "\n\n  ### 换车\n\n  #### 业务描述\n  1. 添加或提货运单司机与车辆信息\n\n  #### 输入参数\n  1. 运单id\n  2. 拿卡人id\n  3. 车辆司机关联信息\n\n  #### 接口依赖\n  1.\n\n\n  #### 边界异常说明\n  1. 无\n\n\n  #### 前置检查\n  1. 运单状态为待出车、待提货、待签收\n\n  #### 权限检查\n  1. 无\n\n\n  #### 逻辑处理\n  1. 保存车辆信息与司机信息\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n  1. 无\n\n  #### 输出\n  1. 无\n",
          "privacy": false
        }]
      },
      "annotations": [{"key": "m.form.url", "value": "/mall/kuaisuorderlogistics/saveWaybillCar.do"}, {
        "key": "m.id",
        "value": "ADD_CAR"
      }, {"key": "m.operType", "value": "2"}, {"key": "m.type", "value": "entity-action"}, {
        "key": "m.form.title",
        "value": "新增车辆"
      }, {"key": "m.name", "value": "新增车辆"}],
      "isSoaTransactionProcess": false
    }, {
      "name": "sendWaybillCar",
      "doc": "\n\n  ### 出车\n\n  #### 业务描述\n  1. 承运商出车前往仓库\n\n  #### 输入参数\n  1. 运单id\n  2. 出车时间\n\n  #### 接口依赖\n  1.\n\n\n  #### 边界异常说明\n  1. 无\n\n\n  #### 前置检查\n  1. 运单状态为待出车\n\n  #### 权限检查\n  1. 无\n\n\n  #### 逻辑处理\n  1. 修改为待提货状态\n  2. 保存出车时间与出车人\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n  1. 无\n\n  #### 输出\n  1. 无\n",
      "request": {
        "name": "sendWaybillCar_args",
        "fields": [{
          "tag": 1,
          "name": "request",
          "optional": false,
          "dataType": {"kind": "STRUCT", "qualifiedName": "com.isuwang.soa.order.domain.TSendWaybillCarRequeset"},
          "doc": "",
          "privacy": false
        }]
      },
      "response": {
        "name": "sendWaybillCar_result",
        "fields": [{
          "tag": 0,
          "name": "success",
          "optional": false,
          "dataType": {"kind": "VOID"},
          "doc": "\n\n  ### 出车\n\n  #### 业务描述\n  1. 承运商出车前往仓库\n\n  #### 输入参数\n  1. 运单id\n  2. 出车时间\n\n  #### 接口依赖\n  1.\n\n\n  #### 边界异常说明\n  1. 无\n\n\n  #### 前置检查\n  1. 运单状态为待出车\n\n  #### 权限检查\n  1. 无\n\n\n  #### 逻辑处理\n  1. 修改为待提货状态\n  2. 保存出车时间与出车人\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n  1. 无\n\n  #### 输出\n  1. 无\n",
          "privacy": false
        }]
      },
      "annotations": [{"key": "m.form.url", "value": "/mall/kuaisuorderlogistics/sendWaybillCar.do"}, {
        "key": "m.id",
        "value": "SEND_CAR"
      }, {"key": "m.operType", "value": "2"}, {"key": "m.type", "value": "entity-action"}, {
        "key": "m.form.title",
        "value": "出车"
      }, {"key": "m.name", "value": "出车"}],
      "isSoaTransactionProcess": false
    }, {
      "name": "pickWaybill",
      "doc": "\n\n  ### 提货\n\n  #### 业务描述\n  1. 承运商提货\n,\n  #### 输入参数\n  1. 运单id\n  2. 出车时间\n\n  #### 接口依赖\n  1.\n\n\n  #### 边界异常说明\n  1. 无\n\n\n  #### 前置检查\n  1. 运单状态为待提货\n\n  #### 权限检查\n  1. 无\n\n\n  #### 逻辑处理\n  1. 修改为待签收状态\n  2. 保存提车时间与提车人\n  3. 触发提货事件\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n  1. 出发运单提货事件\n   - 物流领域：如果预约单对应的运单均已提货，且发货单为待提货，则调用提货接口\n\n  #### 输出\n  1. 无\n",
      "request": {
        "name": "pickWaybill_args",
        "fields": [{
          "tag": 1,
          "name": "request",
          "optional": false,
          "dataType": {"kind": "STRUCT", "qualifiedName": "com.isuwang.soa.order.domain.TPickWaybillRequest"},
          "doc": "",
          "privacy": false
        }]
      },
      "response": {
        "name": "pickWaybill_result",
        "fields": [{
          "tag": 0,
          "name": "success",
          "optional": false,
          "dataType": {"kind": "VOID"},
          "doc": "\n\n  ### 提货\n\n  #### 业务描述\n  1. 承运商提货\n,\n  #### 输入参数\n  1. 运单id\n  2. 出车时间\n\n  #### 接口依赖\n  1.\n\n\n  #### 边界异常说明\n  1. 无\n\n\n  #### 前置检查\n  1. 运单状态为待提货\n\n  #### 权限检查\n  1. 无\n\n\n  #### 逻辑处理\n  1. 修改为待签收状态\n  2. 保存提车时间与提车人\n  3. 触发提货事件\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n  1. 出发运单提货事件\n   - 物流领域：如果预约单对应的运单均已提货，且发货单为待提货，则调用提货接口\n\n  #### 输出\n  1. 无\n",
          "privacy": false
        }]
      },
      "annotations": [{"key": "m.form.url", "value": "/mall/kuaisuorderlogistics/pickWaybill.do"}, {
        "key": "m.id",
        "value": "PICK"
      }, {"key": "m.operType", "value": "2"}, {"key": "m.type", "value": "entity-action"}, {
        "key": "m.form.title",
        "value": "提货"
      }, {"key": "m.name", "value": "提货"}],
      "isSoaTransactionProcess": false
    }, {
      "name": "signWaybill",
      "doc": "\n\n  ### 签收\n\n  #### 业务描述\n  1. 承运商签收\n\n  #### 输入参数\n  1. 运单id\n  2. 签收事件\n  3. 签收单据，费用单据\n  4.\n\n  #### 接口依赖\n  1.\n\n\n  #### 边界异常说明\n  1. 无\n\n\n  #### 前置检查\n  1. 运单状态为待签收\n  2. 运单司机车辆信息不为空\n\n  #### 权限检查\n  1. 无\n\n\n  #### 逻辑处理\n  1. 修改为待签收状态\n  2. 保存提车时间与提车人\n  3. 触发签收事件\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n  1. 出发运单签收事件\n   - 物流领域：如果预约单对应的运单均已签收，且发货单为待收货，则调用收货接口\n\n  #### 输出\n  1. 无\n",
      "request": {
        "name": "signWaybill_args",
        "fields": [{
          "tag": 1,
          "name": "request",
          "optional": false,
          "dataType": {"kind": "STRUCT", "qualifiedName": "com.isuwang.soa.order.domain.TSignWaybillRequeset"},
          "doc": "",
          "privacy": false
        }]
      },
      "response": {
        "name": "signWaybill_result",
        "fields": [{
          "tag": 0,
          "name": "success",
          "optional": false,
          "dataType": {"kind": "VOID"},
          "doc": "\n\n  ### 签收\n\n  #### 业务描述\n  1. 承运商签收\n\n  #### 输入参数\n  1. 运单id\n  2. 签收事件\n  3. 签收单据，费用单据\n  4.\n\n  #### 接口依赖\n  1.\n\n\n  #### 边界异常说明\n  1. 无\n\n\n  #### 前置检查\n  1. 运单状态为待签收\n  2. 运单司机车辆信息不为空\n\n  #### 权限检查\n  1. 无\n\n\n  #### 逻辑处理\n  1. 修改为待签收状态\n  2. 保存提车时间与提车人\n  3. 触发签收事件\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n  1. 出发运单签收事件\n   - 物流领域：如果预约单对应的运单均已签收，且发货单为待收货，则调用收货接口\n\n  #### 输出\n  1. 无\n",
          "privacy": false
        }]
      },
      "annotations": [{"key": "m.form.url", "value": "/mall/kuaisuorderlogistics/signWaybill.do"}, {
        "key": "m.id",
        "value": "SIGN"
      }, {"key": "m.operType", "value": "2"}, {"key": "m.type", "value": "entity-action"}, {
        "key": "m.form.title",
        "value": "签收"
      }, {"key": "m.name", "value": "签收"}],
      "isSoaTransactionProcess": false
    }, {
      "name": "onCancelDeliveryId",
      "doc": "\n\n  ### 预约单取消\n\n  #### 业务描述\n  1. 预约单取消时，运单相关处理\n\n  #### 输入参数\n  1. deliveryId\n  2. 出车时间\n\n  #### 接口依赖\n  1.\n\n\n  #### 边界异常说明\n  1. 无\n\n\n  #### 前置检查\n  1.\n\n  #### 权限检查\n  1. 无\n\n\n  #### 逻辑处理\n  1. 运单状态为待签收、已签收时，只取消预约单，保留运单，运单不做操作\n  2. 待确认、待创建运单、待约车时，取消预约单时，同步取消对应的运单\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n  1. 无\n\n  #### 输出\n  1. 无\n",
      "request": {
        "name": "onCancelDeliveryId_args",
        "fields": [{
          "tag": 1,
          "name": "deliveryId",
          "optional": false,
          "dataType": {"kind": "INTEGER"},
          "doc": "",
          "privacy": false
        }, {
          "tag": 2,
          "name": "isForceNotConnect",
          "optional": false,
          "dataType": {"kind": "BOOLEAN"},
          "doc": "",
          "privacy": false
        }]
      },
      "response": {
        "name": "onCancelDeliveryId_result",
        "fields": [{
          "tag": 0,
          "name": "success",
          "optional": false,
          "dataType": {"kind": "BOOLEAN"},
          "doc": "\n\n  ### 预约单取消\n\n  #### 业务描述\n  1. 预约单取消时，运单相关处理\n\n  #### 输入参数\n  1. deliveryId\n  2. 出车时间\n\n  #### 接口依赖\n  1.\n\n\n  #### 边界异常说明\n  1. 无\n\n\n  #### 前置检查\n  1.\n\n  #### 权限检查\n  1. 无\n\n\n  #### 逻辑处理\n  1. 运单状态为待签收、已签收时，只取消预约单，保留运单，运单不做操作\n  2. 待确认、待创建运单、待约车时，取消预约单时，同步取消对应的运单\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n  1. 无\n\n  #### 输出\n  1. 无\n",
          "privacy": false
        }]
      },
      "isSoaTransactionProcess": false
    }, {
      "name": "uploadContractorFee",
      "doc": "\n\n  ### 上报承运商费用\n\n  #### 业务描述\n  1. 承运商进行上报费用操作\n\n  #### 输入参数\n  1. waybillId\n  2. 承运商费用\n  3. 货损货差记录\n  4. 沟通日志\n\n  #### 接口依赖\n  1.\n\n\n  #### 边界异常说明\n  1. 无\n\n\n  #### 前置检查\n  1.\n\n  #### 权限检查\n  1. 无\n\n\n  #### 逻辑处理\n  1. 保存承运险相关成本费用，修改承运商成本费用同时记录承运商成本日志\n  2. 保存沟通日志和货损货差备注信息\n  3. 修改运单对账状态为待确认\n  4. 修改子单货损信息\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n  1. 无\n\n  #### 输出\n  1. 无\n",
      "request": {
        "name": "uploadContractorFee_args",
        "fields": [{
          "tag": 1,
          "name": "request",
          "optional": false,
          "dataType": {"kind": "STRUCT", "qualifiedName": "com.isuwang.soa.order.domain.TUploadContractorFeeRequest"},
          "doc": "",
          "privacy": false
        }]
      },
      "response": {
        "name": "uploadContractorFee_result",
        "fields": [{
          "tag": 0,
          "name": "success",
          "optional": false,
          "dataType": {"kind": "VOID"},
          "doc": "\n\n  ### 上报承运商费用\n\n  #### 业务描述\n  1. 承运商进行上报费用操作\n\n  #### 输入参数\n  1. waybillId\n  2. 承运商费用\n  3. 货损货差记录\n  4. 沟通日志\n\n  #### 接口依赖\n  1.\n\n\n  #### 边界异常说明\n  1. 无\n\n\n  #### 前置检查\n  1.\n\n  #### 权限检查\n  1. 无\n\n\n  #### 逻辑处理\n  1. 保存承运险相关成本费用，修改承运商成本费用同时记录承运商成本日志\n  2. 保存沟通日志和货损货差备注信息\n  3. 修改运单对账状态为待确认\n  4. 修改子单货损信息\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n  1. 无\n\n  #### 输出\n  1. 无\n",
          "privacy": false
        }]
      },
      "isSoaTransactionProcess": false
    }, {
      "name": "confirmSettleFlag",
      "doc": "\n\n  ### 调度员确认费用\n\n  #### 业务描述\n  1. 承运商进行上报费用操作\n\n  #### 输入参数\n  1. waybillId\n  2. 沟通日志\n  3. 确认结果 true 审核通过 false 驳回\n\n  #### 接口依赖\n  1.\n\n\n  #### 边界异常说明\n  1. 无\n\n\n  #### 前置检查\n  1.\n\n  #### 权限检查\n  1. 无\n\n\n  #### 逻辑处理\n  1. 记录确认结果\n   - if(确认通过) 修改对账状态为对账确认\n   - else 修改对账状态为驳回待上传\n  2. 记录沟通日志\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n  1. 无\n\n  #### 输出\n  1. 无\n",
      "request": {
        "name": "confirmSettleFlag_args",
        "fields": [{
          "tag": 1,
          "name": "request",
          "optional": false,
          "dataType": {"kind": "STRUCT", "qualifiedName": "com.isuwang.soa.order.domain.TConfirmSettleFlagRequest"},
          "doc": "",
          "privacy": false
        }]
      },
      "response": {
        "name": "confirmSettleFlag_result",
        "fields": [{
          "tag": 0,
          "name": "success",
          "optional": false,
          "dataType": {"kind": "VOID"},
          "doc": "\n\n  ### 调度员确认费用\n\n  #### 业务描述\n  1. 承运商进行上报费用操作\n\n  #### 输入参数\n  1. waybillId\n  2. 沟通日志\n  3. 确认结果 true 审核通过 false 驳回\n\n  #### 接口依赖\n  1.\n\n\n  #### 边界异常说明\n  1. 无\n\n\n  #### 前置检查\n  1.\n\n  #### 权限检查\n  1. 无\n\n\n  #### 逻辑处理\n  1. 记录确认结果\n   - if(确认通过) 修改对账状态为对账确认\n   - else 修改对账状态为驳回待上传\n  2. 记录沟通日志\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n  1. 无\n\n  #### 输出\n  1. 无\n",
          "privacy": false
        }]
      },
      "isSoaTransactionProcess": false
    }, {
      "name": "onRevokeDeliveryStart",
      "doc": "\n\n  ### 商务撤回发货\n\n  #### 业务描述\n  1. 商务撤回发货通知\n\n  #### 输入参数\n  1. deliveryId\n\n  #### 接口依赖\n  1.\n\n\n  #### 边界异常说明\n  1. 无\n\n\n  #### 前置检查\n  1.\n\n  #### 权限检查\n  1. 无\n\n\n  #### 逻辑处理\n  1. 对应运单如果处于待出车，则将状态修改为待出车通知\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n  1. 无\n\n  #### 输出\n  1. 无\n",
      "request": {
        "name": "onRevokeDeliveryStart_args",
        "fields": [{
          "tag": 1,
          "name": "deliveryId",
          "optional": false,
          "dataType": {"kind": "INTEGER"},
          "doc": "",
          "privacy": false
        }]
      },
      "response": {
        "name": "onRevokeDeliveryStart_result",
        "fields": [{
          "tag": 0,
          "name": "success",
          "optional": false,
          "dataType": {"kind": "VOID"},
          "doc": "\n\n  ### 商务撤回发货\n\n  #### 业务描述\n  1. 商务撤回发货通知\n\n  #### 输入参数\n  1. deliveryId\n\n  #### 接口依赖\n  1.\n\n\n  #### 边界异常说明\n  1. 无\n\n\n  #### 前置检查\n  1.\n\n  #### 权限检查\n  1. 无\n\n\n  #### 逻辑处理\n  1. 对应运单如果处于待出车，则将状态修改为待出车通知\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n  1. 无\n\n  #### 输出\n  1. 无\n",
          "privacy": false
        }]
      },
      "isSoaTransactionProcess": false
    }, {
      "name": "confirmContractorMonth",
      "doc": "\n\n  ### 财务进行对账确认\n\n  #### 业务描述\n  1. 财务对承运商月记账进行财务结算\n\n  #### 输入参数\n  1. monthStr 确认月份\n  2. contractorId 承运商id\n\n  #### 接口依赖\n  1. 无\n\n\n  #### 边界异常说明\n  1. 无\n\n\n  #### 前置检查\n  1. 相应月相应承运商所有运单已完成对账确认\n  2.\n\n  #### 权限检查\n  1. 拥有结算确认权限\n\n\n  #### 逻辑处理\n  1. 保存相关月份与承运商信息，标记为已结算\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n  1. 无\n\n  #### 输出\n  1. 无\n",
      "request": {
        "name": "confirmContractorMonth_args",
        "fields": [{
          "tag": 1,
          "name": "request",
          "optional": false,
          "dataType": {
            "kind": "STRUCT",
            "qualifiedName": "com.isuwang.soa.order.domain.TFindWaybillStatisticsInfoRequest"
          },
          "doc": "",
          "privacy": false
        }]
      },
      "response": {
        "name": "confirmContractorMonth_result",
        "fields": [{
          "tag": 0,
          "name": "success",
          "optional": false,
          "dataType": {"kind": "VOID"},
          "doc": "\n\n  ### 财务进行对账确认\n\n  #### 业务描述\n  1. 财务对承运商月记账进行财务结算\n\n  #### 输入参数\n  1. monthStr 确认月份\n  2. contractorId 承运商id\n\n  #### 接口依赖\n  1. 无\n\n\n  #### 边界异常说明\n  1. 无\n\n\n  #### 前置检查\n  1. 相应月相应承运商所有运单已完成对账确认\n  2.\n\n  #### 权限检查\n  1. 拥有结算确认权限\n\n\n  #### 逻辑处理\n  1. 保存相关月份与承运商信息，标记为已结算\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n  1. 无\n\n  #### 输出\n  1. 无\n",
          "privacy": false
        }]
      },
      "annotations": [{
        "key": "m.form.url",
        "value": "/mall/kuaisuorderlogistics/confirmContractorMonth.do"
      }, {"key": "m.id", "value": "canConfirmed"}, {"key": "m.operType", "value": "1"}, {
        "key": "m.type",
        "value": "entity-action"
      }, {"key": "m.form.title", "value": "确认"}, {"key": "m.hideSubmitBtn", "value": "true"}, {
        "key": "m.name",
        "value": "确认"
      }],
      "isSoaTransactionProcess": false
    }, {
      "name": "settleContractorMonthSettle",
      "doc": "\n\n  ### 财务进行结算确认\n\n  #### 业务描述\n  1. 财务对承运商月记账进行财务结算\n\n  #### 输入参数\n  1. monthStr 确认月份\n  2. contractorId 承运商id\n\n  #### 接口依赖\n  1. 无\n\n\n  #### 边界异常说明\n  1. 无\n\n\n  #### 前置检查\n  1. 相应月相应承运商所有运单已完成对账确认\n  2.\n\n  #### 权限检查\n  1. 拥有结算确认权限\n\n\n  #### 逻辑处理\n  1. 保存相关月份与承运商信息，标记为已结算\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n  1. 无\n\n  #### 输出\n  1. 无\n",
      "request": {
        "name": "settleContractorMonthSettle_args",
        "fields": [{
          "tag": 1,
          "name": "request",
          "optional": false,
          "dataType": {
            "kind": "STRUCT",
            "qualifiedName": "com.isuwang.soa.order.domain.TFindWaybillStatisticsInfoRequest"
          },
          "doc": "",
          "privacy": false
        }]
      },
      "response": {
        "name": "settleContractorMonthSettle_result",
        "fields": [{
          "tag": 0,
          "name": "success",
          "optional": false,
          "dataType": {"kind": "VOID"},
          "doc": "\n\n  ### 财务进行结算确认\n\n  #### 业务描述\n  1. 财务对承运商月记账进行财务结算\n\n  #### 输入参数\n  1. monthStr 确认月份\n  2. contractorId 承运商id\n\n  #### 接口依赖\n  1. 无\n\n\n  #### 边界异常说明\n  1. 无\n\n\n  #### 前置检查\n  1. 相应月相应承运商所有运单已完成对账确认\n  2.\n\n  #### 权限检查\n  1. 拥有结算确认权限\n\n\n  #### 逻辑处理\n  1. 保存相关月份与承运商信息，标记为已结算\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n  1. 无\n\n  #### 输出\n  1. 无\n",
          "privacy": false
        }]
      },
      "annotations": [{
        "key": "m.form.url",
        "value": "/mall/kuaisuorderlogistics/settleContractorMonthSettle.do"
      }, {"key": "m.id", "value": "canSettled"}, {"key": "m.operType", "value": "1"}, {
        "key": "m.type",
        "value": "entity-action"
      }, {"key": "m.form.hideSubmitBtn", "value": "true"}, {
        "key": "m.form.title",
        "value": "结算"
      }, {"key": "m.form.confirm", "value": "确定进行结算？"}, {"key": "m.name", "value": "结算"}],
      "isSoaTransactionProcess": false
    }, {
      "name": "findWayBillPrint",
      "doc": "\n\n  ###\n\n  #### 业务描述\n  1. 打印货物运输委托单\n\n  #### 输入参数\n  1. deliveryId 物流订单ID\n  2. orderNo 销售或采购订单号\n\n  #### 接口依赖\n  1. 无\n\n\n  #### 边界异常说明\n  1. 无\n\n\n  #### 前置检查\n\n  #### 权限检查\n\n\n  #### 逻辑处理\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n  1. 无\n\n  #### 输出\n  1. 无\n",
      "request": {
        "name": "findWayBillPrint_args",
        "fields": [{
          "tag": 1,
          "name": "wayBillId",
          "optional": false,
          "dataType": {"kind": "INTEGER"},
          "doc": "",
          "privacy": false
        }, {
          "tag": 2,
          "name": "orderNo",
          "optional": false,
          "dataType": {"kind": "STRING"},
          "doc": "",
          "privacy": false
        }]
      },
      "response": {
        "name": "findWayBillPrint_result",
        "fields": [{
          "tag": 0,
          "name": "success",
          "optional": false,
          "dataType": {"kind": "STRUCT", "qualifiedName": "com.isuwang.soa.order.domain.TWayBillPrintResponse"},
          "doc": "\n\n  ###\n\n  #### 业务描述\n  1. 打印货物运输委托单\n\n  #### 输入参数\n  1. deliveryId 物流订单ID\n  2. orderNo 销售或采购订单号\n\n  #### 接口依赖\n  1. 无\n\n\n  #### 边界异常说明\n  1. 无\n\n\n  #### 前置检查\n\n  #### 权限检查\n\n\n  #### 逻辑处理\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n  1. 无\n\n  #### 输出\n  1. 无\n",
          "privacy": false
        }]
      },
      "isSoaTransactionProcess": false
    }, {
      "name": "revokeConfirmSettleFlag",
      "doc": "\n\n  ### 账单撤销确认\n\n  #### 业务描述\n  1. 更改运单对账状态为待确认；\n\n  #### 输入参数\n  1. 运单id\n\n  #### 接口依赖\n  1. 无\n\n  #### 边界异常说明\n  1. 无\n\n  #### 前置检查\n  1. 运单对账状态为已确认\n\n  #### 权限检查\n  1. 无\n\n  #### 逻辑处理\n  1. 更改运单对账状态为待确认；\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n  1. 点击“撤销确认”按钮，系统弹出确认框；\n  2. 点击“确认”，该运单状态更新为待确认状态。\n\n  #### 输出\n  1. 无\n",
      "request": {
        "name": "revokeConfirmSettleFlag_args",
        "fields": [{
          "tag": 1,
          "name": "waybillId",
          "optional": false,
          "dataType": {"kind": "INTEGER"},
          "doc": "",
          "privacy": false,
          "annotations": [{"key": "m.srcKey", "value": "id"}]
        }]
      },
      "response": {
        "name": "revokeConfirmSettleFlag_result",
        "fields": [{
          "tag": 0,
          "name": "success",
          "optional": false,
          "dataType": {"kind": "VOID"},
          "doc": "\n\n  ### 账单撤销确认\n\n  #### 业务描述\n  1. 更改运单对账状态为待确认；\n\n  #### 输入参数\n  1. 运单id\n\n  #### 接口依赖\n  1. 无\n\n  #### 边界异常说明\n  1. 无\n\n  #### 前置检查\n  1. 运单对账状态为已确认\n\n  #### 权限检查\n  1. 无\n\n  #### 逻辑处理\n  1. 更改运单对账状态为待确认；\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n  1. 点击“撤销确认”按钮，系统弹出确认框；\n  2. 点击“确认”，该运单状态更新为待确认状态。\n\n  #### 输出\n  1. 无\n",
          "privacy": false
        }]
      },
      "annotations": [{
        "key": "m.form.url",
        "value": "/mall/kuaisuorderlogistics/revokeConfirmSettleFlag.do"
      }, {"key": "m.id", "value": "REVOKE_SETTLE"}, {"key": "m.operType", "value": "1"}, {
        "key": "m.type",
        "value": "entity-action"
      }, {"key": "m.form.title", "value": "撤销确认"}, {"key": "m.form.confirm", "value": "确认撤销确认？"}, {
        "key": "m.name",
        "value": "撤销确认"
      }],
      "isSoaTransactionProcess": false
    }, {
      "name": "revokeAssignWaybillCar",
      "doc": "\n\n  ### 撤回派车\n\n  #### 业务描述\n  1. 运单状态更新为待派车，可重新进行派车；\n\n  #### 输入参数\n  1. 运单id\n\n  #### 接口依赖\n  1.\n\n\n  #### 边界异常说明\n  1. 无\n\n\n  #### 前置检查\n  1. 运单状态为待通知出车、待出车\n\n  #### 权限检查\n  1. 无\n\n\n  #### 逻辑处理\n  1.运单状态为待通知出车时，显示撤销派车按钮；\n  2.点击撤销派车，弹出确认框；\n  3.点击确认，该运单状态更新为待派车，可重新进行派车；\n  4.派车后，运单状态更新为待通知出车；\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n\n\n  #### 输出\n  1. 无\n",
      "request": {
        "name": "revokeAssignWaybillCar_args",
        "fields": [{
          "tag": 1,
          "name": "waybillId",
          "optional": false,
          "dataType": {"kind": "INTEGER"},
          "doc": "",
          "privacy": false,
          "annotations": [{"key": "m.srcKey", "value": "id"}]
        }]
      },
      "response": {
        "name": "revokeAssignWaybillCar_result",
        "fields": [{
          "tag": 0,
          "name": "success",
          "optional": false,
          "dataType": {"kind": "VOID"},
          "doc": "\n\n  ### 撤回派车\n\n  #### 业务描述\n  1. 运单状态更新为待派车，可重新进行派车；\n\n  #### 输入参数\n  1. 运单id\n\n  #### 接口依赖\n  1.\n\n\n  #### 边界异常说明\n  1. 无\n\n\n  #### 前置检查\n  1. 运单状态为待通知出车、待出车\n\n  #### 权限检查\n  1. 无\n\n\n  #### 逻辑处理\n  1.运单状态为待通知出车时，显示撤销派车按钮；\n  2.点击撤销派车，弹出确认框；\n  3.点击确认，该运单状态更新为待派车，可重新进行派车；\n  4.派车后，运单状态更新为待通知出车；\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n\n\n  #### 输出\n  1. 无\n",
          "privacy": false
        }]
      },
      "annotations": [{
        "key": "m.form.url",
        "value": "/mall/kuaisuorderlogistics/revokeAssignWaybillCar.do"
      }, {"key": "m.id", "value": "REVOKE_ASSIGN"}, {"key": "m.operType", "value": "1"}, {
        "key": "m.type",
        "value": "entity-action"
      }, {"key": "m.form.title", "value": "撤回派车"}, {"key": "m.form.confirm", "value": "确认撤回派车？"}, {
        "key": "m.name",
        "value": "撤回派车"
      }],
      "isSoaTransactionProcess": false
    }, {
      "name": "updateWaybillAttachments",
      "doc": "\n\n  ###\n\n  #### 业务描述\n  1. 更新运单附件\n\n  #### 输入参数\n  1. waybill_attachments表ID\n\n  #### 接口依赖\n  1. 无\n\n\n  #### 边界异常说明\n  1. 无\n\n\n  #### 前置检查\n\n  #### 权限检查\n\n\n  #### 逻辑处理\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n  1. 无\n\n  #### 输出\n  1. 无\n",
      "request": {
        "name": "updateWaybillAttachments_args",
        "fields": [{
          "tag": 1,
          "name": "waybillId",
          "optional": false,
          "dataType": {"kind": "INTEGER"},
          "doc": "",
          "privacy": false
        }, {
          "tag": 2,
          "name": "attachmentType",
          "optional": false,
          "dataType": {"kind": "ENUM", "qualifiedName": "com.isuwang.soa.order.enums.WaybillAttachmentType"},
          "doc": "",
          "privacy": false
        }, {
          "tag": 3,
          "name": "attachmentId",
          "optional": false,
          "dataType": {"kind": "STRING"},
          "doc": "",
          "privacy": false
        }]
      },
      "response": {
        "name": "updateWaybillAttachments_result",
        "fields": [{
          "tag": 0,
          "name": "success",
          "optional": false,
          "dataType": {"kind": "VOID"},
          "doc": "\n\n  ###\n\n  #### 业务描述\n  1. 更新运单附件\n\n  #### 输入参数\n  1. waybill_attachments表ID\n\n  #### 接口依赖\n  1. 无\n\n\n  #### 边界异常说明\n  1. 无\n\n\n  #### 前置检查\n\n  #### 权限检查\n\n\n  #### 逻辑处理\n\n  #### 事务处理\n  1. 无\n\n  #### 事件处理\n  1. 无\n\n  #### 输出\n  1. 无\n",
          "privacy": false
        }]
      },
      "isSoaTransactionProcess": false
    }],
    "structDefinitions": [{
      "namespace": "com.isuwang.soa.order.domain",
      "name": "TFindWaybillRequest",
      "fields": [{
        "tag": 1,
        "name": "pageRequest",
        "optional": false,
        "dataType": {"kind": "STRUCT", "qualifiedName": "com.isuwang.soa.common.util.TPageRequest"},
        "privacy": false
      }, {
        "tag": 2,
        "name": "orderNo",
        "optional": true,
        "dataType": {"kind": "STRING"},
        "doc": "\n\n 订单编号\n",
        "privacy": false
      }, {
        "tag": 3,
        "name": "waybillNo",
        "optional": true,
        "dataType": {"kind": "STRING"},
        "doc": "\n\n 运单b编号\n",
        "privacy": false
      }, {
        "tag": 4,
        "name": "dispatchBy",
        "optional": true,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n 调度员id\n",
        "privacy": false
      }, {
        "tag": 5,
        "name": "logisticsContractorId",
        "optional": true,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n 承运商id\n",
        "privacy": false
      }, {
        "tag": 6,
        "name": "warehouseId",
        "optional": true,
        "dataType": {"kind": "INTEGER"},
        "doc": "*仓库id",
        "privacy": false
      }, {
        "tag": 7,
        "name": "createAtStart",
        "optional": true,
        "dataType": {"kind": "LONG"},
        "doc": "*创建日期起始时间",
        "privacy": false
      }, {
        "tag": 8,
        "name": "createAtEnd",
        "optional": true,
        "dataType": {"kind": "LONG"},
        "doc": "*创建日期结束时间",
        "privacy": false
      }, {
        "tag": 9,
        "name": "paymentType",
        "optional": true,
        "dataType": {"kind": "INTEGER"},
        "doc": "*付款方式",
        "privacy": false
      }, {
        "tag": 10,
        "name": "status",
        "optional": true,
        "dataType": {"kind": "INTEGER"},
        "doc": "运单状态",
        "privacy": false
      }, {
        "tag": 11,
        "name": "monthStr",
        "optional": true,
        "dataType": {"kind": "STRING"},
        "doc": "月份",
        "privacy": false
      }, {
        "tag": 12,
        "name": "statuses",
        "optional": false,
        "dataType": {"kind": "LIST", "valueType": {"kind": "INTEGER"}},
        "doc": "运单状态",
        "privacy": false
      }, {
        "tag": 13,
        "name": "driverId",
        "optional": true,
        "dataType": {"kind": "INTEGER"},
        "doc": "司机id",
        "privacy": false
      }, {
        "tag": 14,
        "name": "carId",
        "optional": true,
        "dataType": {"kind": "INTEGER"},
        "doc": "*车辆id",
        "privacy": false
      }, {
        "tag": 15,
        "name": "signAtStart",
        "optional": true,
        "dataType": {"kind": "LONG"},
        "doc": "开始签收事件",
        "privacy": false
      }, {
        "tag": 16,
        "name": "singAtEnd",
        "optional": true,
        "dataType": {"kind": "LONG"},
        "doc": "结束签收时间",
        "privacy": false
      }, {
        "tag": 17,
        "name": "contractorSettleFlags",
        "optional": false,
        "dataType": {"kind": "LIST", "valueType": {"kind": "INTEGER"}},
        "doc": "对账状态",
        "privacy": false
      }, {
        "tag": 18,
        "name": "deliveryId",
        "optional": true,
        "dataType": {"kind": "INTEGER"},
        "doc": "*发货单id",
        "privacy": false
      }, {
        "tag": 19,
        "name": "contractorSettleFlag",
        "optional": true,
        "dataType": {"kind": "INTEGER"},
        "doc": "对账状态",
        "privacy": false
      }, {
        "tag": 20,
        "name": "deliveyDueDateStart",
        "optional": true,
        "dataType": {"kind": "LONG"},
        "doc": " 发货日期起始时间 ",
        "privacy": false
      }, {
        "tag": 21,
        "name": "deliveyDueDateEnd",
        "optional": true,
        "dataType": {"kind": "LONG"},
        "doc": " 发货日期结束时间",
        "privacy": false
      }],
      "annotations": [{"key": "m.ref", "value": "waybill.TFindWaybillRequest"}]
    }, {
      "namespace": "com.isuwang.soa.order.domain",
      "name": "TWaybillItemCreateRequest",
      "fields": [{
        "tag": 4,
        "name": "deliveryItemId",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n 发货子单id\n",
        "privacy": false
      }, {
        "tag": 7,
        "name": "weight",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 重量/吨\n",
        "privacy": false
      }, {
        "tag": 9,
        "name": "remark",
        "optional": true,
        "dataType": {"kind": "STRING"},
        "doc": "\n\n 备注\n",
        "privacy": false
      }]
    }, {
      "namespace": "com.isuwang.soa.order.domain",
      "name": "TUploadContractorFeeRequest",
      "fields": [{
        "tag": 1,
        "name": "waybillId",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "privacy": false
      }, {
        "tag": 28,
        "name": "logisticsContractorAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 运费承运商成本报价\n",
        "privacy": false
      }, {
        "tag": 29,
        "name": "storageContractorAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 仓储费承运商成本报价\n",
        "privacy": false
      }, {
        "tag": 30,
        "name": "loadingContractorAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 装卸费承运商成本报价\n",
        "privacy": false
      }, {
        "tag": 31,
        "name": "customsContractorAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 报关费承运商成本报价\n",
        "privacy": false
      }, {
        "tag": 32,
        "name": "extrasContractorAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 杂费承运商成本报价\n",
        "privacy": false
      }, {
        "tag": 33,
        "name": "commucateLog",
        "optional": true,
        "dataType": {"kind": "STRING"},
        "doc": "沟通日志",
        "privacy": false
      }, {
        "tag": 34,
        "name": "wastageRemark",
        "optional": true,
        "dataType": {"kind": "STRING"},
        "doc": "货损备注",
        "privacy": false
      }, {
        "tag": 4,
        "name": "signAttachment",
        "optional": false,
        "dataType": {"kind": "LIST", "valueType": {"kind": "STRING"}},
        "doc": "签收单据",
        "privacy": false
      }, {
        "tag": 5,
        "name": "load",
        "optional": true,
        "dataType": {"kind": "STRING"},
        "doc": "装车费用",
        "privacy": false
      }, {
        "tag": 6,
        "name": "unload",
        "optional": true,
        "dataType": {"kind": "STRING"},
        "doc": "卸车费用",
        "privacy": false
      }, {
        "tag": 7,
        "name": "extras",
        "optional": true,
        "dataType": {"kind": "STRING"},
        "doc": "杂费",
        "privacy": false
      }, {"tag": 8, "name": "other", "optional": true, "dataType": {"kind": "STRING"}, "doc": "其他费用", "privacy": false}]
    }, {
      "namespace": "com.isuwang.soa.order.domain",
      "name": "TDispatchWaybillRequeset",
      "fields": [{
        "tag": 1,
        "name": "waybillId",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "运单id",
        "privacy": false
      }, {
        "tag": 2,
        "name": "contractorId",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "派车时间",
        "privacy": false
      }, {
        "tag": 23,
        "name": "logisticsDispatchAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 运费调度成本报价\n",
        "privacy": false
      }, {
        "tag": 24,
        "name": "storageDispatchAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 仓储费调度成本报价\n",
        "privacy": false
      }, {
        "tag": 25,
        "name": "loadingDispatchAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 装卸费调度成本报价\n",
        "privacy": false
      }, {
        "tag": 26,
        "name": "customsDispatchAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 报关费调度成本报价\n",
        "privacy": false
      }, {
        "tag": 27,
        "name": "extrasDispatchAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 杂费调度成本报价\n",
        "privacy": false
      }, {
        "tag": 28,
        "name": "dispatchAdjustRemark",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "privacy": false
      }],
      "annotations": [{"key": "m.ref", "value": "waybill.TDispatchWaybillRequeset"}]
    }, {
      "namespace": "com.isuwang.soa.order.domain",
      "name": "TPickWaybillRequest",
      "fields": [{
        "tag": 1,
        "name": "waybillId",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "运单id",
        "privacy": false
      }, {
        "tag": 2,
        "name": "pickTime",
        "optional": false,
        "dataType": {"kind": "LONG"},
        "doc": "派车时间",
        "privacy": false
      }],
      "annotations": [{"key": "m.ref", "value": "waybill.TPickWaybillRequest"}]
    }, {
      "namespace": "com.isuwang.soa.order.domain",
      "name": "TConfirmSettleFlagRequest",
      "fields": [{
        "tag": 1,
        "name": "waybillId",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "privacy": false
      }, {"tag": 2, "name": "result", "optional": false, "dataType": {"kind": "BOOLEAN"}, "privacy": false}, {
        "tag": 3,
        "name": "wastageAmount",
        "optional": true,
        "dataType": {"kind": "DOUBLE"},
        "doc": "货损货差赔偿金额",
        "privacy": false
      }, {"tag": 4, "name": "remark", "optional": true, "dataType": {"kind": "STRING"}, "privacy": false}]
    }, {
      "namespace": "com.isuwang.soa.order.domain",
      "name": "TCreateWayBillFromDeliveryRequest",
      "fields": [{
        "tag": 3,
        "name": "orderNo",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "doc": "\n\n 合同号，对应预约单是销售端时为销售合同号，对应预约单是采购端时是采购合同号\n",
        "privacy": false
      }, {
        "tag": 4,
        "name": "deliveryId",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n 发货单id\n",
        "privacy": false
      }, {
        "tag": 8,
        "name": "waybills",
        "optional": false,
        "dataType": {
          "kind": "LIST",
          "valueType": {"kind": "STRUCT", "qualifiedName": "com.isuwang.soa.order.domain.TWaybillCreateRequest"}
        },
        "privacy": false
      }]
    }, {
      "namespace": "com.isuwang.soa.order.domain",
      "name": "TWayBillPrintResponse",
      "fields": [{
        "tag": 1,
        "name": "kuaisuTitleId",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n 卖方抬头,0:广州快塑电子商务有限公司(guangzhou);1:上海快塑电子科技有限公司(shanghai);2:赛聚(saiju)\n",
        "privacy": false
      }, {
        "tag": 2,
        "name": "customerCompany",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "doc": "客户公司",
        "privacy": false
      }, {
        "tag": 3,
        "name": "orderNo",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "doc": "订单号",
        "privacy": false
      }, {
        "tag": 4,
        "name": "items",
        "optional": false,
        "dataType": {
          "kind": "LIST",
          "valueType": {"kind": "STRUCT", "qualifiedName": "com.isuwang.soa.delivery.domain.TOrderDeliveryItem"}
        },
        "doc": "物流子单",
        "privacy": false
      }, {
        "tag": 5,
        "name": "totalQuantity",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "子单的 packageAccount 总和",
        "privacy": false
      }, {
        "tag": 6,
        "name": "totalWeight",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "子单的 weight 总和",
        "privacy": false
      }, {
        "tag": 7,
        "name": "customerAddress",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "doc": "客户地址",
        "privacy": false
      }, {
        "tag": 8,
        "name": "customerPhone",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "doc": "客户联系电话",
        "privacy": false
      }, {
        "tag": 9,
        "name": "orderPaymentType",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "付款方式",
        "privacy": false
      }, {
        "tag": 10,
        "name": "fax",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "doc": "传真",
        "privacy": false
      }, {
        "tag": 11,
        "name": "deliveryAddress",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "doc": "提货地址",
        "privacy": false
      }, {
        "tag": 12,
        "name": "delliveryDueDate",
        "optional": false,
        "dataType": {"kind": "LONG"},
        "privacy": false
      }, {
        "tag": 13,
        "name": "warehouseContract",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "privacy": false
      }, {
        "tag": 14,
        "name": "warehousePhone",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "privacy": false
      }, {
        "tag": 15,
        "name": "logisticisDeliveyDate",
        "optional": false,
        "dataType": {"kind": "LONG"},
        "privacy": false
      }, {
        "tag": 16,
        "name": "logisticsSettleFreight",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "privacy": false
      }, {
        "tag": 17,
        "name": "logisticsSettleLoading",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "privacy": false
      }, {
        "tag": 18,
        "name": "logisticsRemark",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "privacy": false
      }, {"tag": 19, "name": "status", "optional": false, "dataType": {"kind": "INTEGER"}, "privacy": false}, {
        "tag": 20,
        "name": "driverName",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "privacy": false
      }, {
        "tag": 21,
        "name": "driverIdentifyNo",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "privacy": false
      }, {
        "tag": 22,
        "name": "driverPhone",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "privacy": false
      }, {
        "tag": 23,
        "name": "vehicleNo",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "privacy": false
      }, {
        "tag": 24,
        "name": "logisticsName",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "privacy": false
      }, {"tag": 25, "name": "customerName", "optional": false, "dataType": {"kind": "STRING"}, "privacy": false}],
      "annotations": [{"key": "m.ref", "value": "waybill.TFindWaybillStatisticsInfoRequest"}]
    }, {
      "namespace": "com.isuwang.soa.order.domain",
      "name": "TFindWaybillResoponse",
      "fields": [{
        "tag": 1,
        "name": "pageResponse",
        "optional": false,
        "dataType": {"kind": "STRUCT", "qualifiedName": "com.isuwang.soa.common.util.TPageResponse"},
        "privacy": false
      }, {
        "tag": 2,
        "name": "rows",
        "optional": false,
        "dataType": {
          "kind": "LIST",
          "valueType": {"kind": "STRUCT", "qualifiedName": "com.isuwang.soa.order.domain.TWaybillEx"}
        },
        "privacy": false
      }, {
        "tag": 3,
        "name": "statusCount",
        "optional": false,
        "dataType": {"kind": "MAP", "keyType": {"kind": "STRING"}, "valueType": {"kind": "STRING"}},
        "doc": "运单状态",
        "privacy": false
      }, {
        "tag": 4,
        "name": "settleStatusCount",
        "optional": false,
        "dataType": {"kind": "MAP", "keyType": {"kind": "STRING"}, "valueType": {"kind": "STRING"}},
        "doc": "对账状态",
        "privacy": false
      }]
    }, {
      "namespace": "com.isuwang.soa.order.domain",
      "name": "TFindWaybillStatisticsRequest",
      "fields": [{
        "tag": 1,
        "name": "pageRequest",
        "optional": false,
        "dataType": {"kind": "STRUCT", "qualifiedName": "com.isuwang.soa.common.util.TPageRequest"},
        "privacy": false
      }, {"tag": 2, "name": "monthStr", "optional": true, "dataType": {"kind": "STRING"}, "privacy": false}, {
        "tag": 3,
        "name": "contractorId",
        "optional": true,
        "dataType": {"kind": "INTEGER"},
        "privacy": false
      }, {
        "tag": 4,
        "name": "status",
        "optional": true,
        "dataType": {"kind": "INTEGER"},
        "doc": "*对账状态 1:待确认(toBeConfirm);2:待结算(confirmed) 3:已结算",
        "privacy": false
      }],
      "annotations": [{"key": "m.ref", "value": "waybill.TFindWaybillStatisticsRequest"}]
    }, {
      "namespace": "com.isuwang.soa.delivery.domain",
      "name": "TOrderDeliveryItem",
      "doc": "\n\n 发货子单数据库对应实体\n",
      "fields": [{
        "tag": 1,
        "name": "id",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n 发货子单ID\n",
        "privacy": false
      }, {
        "tag": 2,
        "name": "stockId",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n新库存的发货单才有该字段值\n",
        "privacy": false
      }, {
        "tag": 3,
        "name": "orderDeliveryId",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n 发货单Id\n",
        "privacy": false
      }, {
        "tag": 4,
        "name": "orderId",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n 销售订单Id\n",
        "privacy": false
      }, {
        "tag": 5,
        "name": "orderItemId",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n 销售子单id\n",
        "privacy": false
      }, {
        "tag": 6,
        "name": "purchaseOrderItemId",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n 采购子单id\n",
        "privacy": false
      }, {
        "tag": 7,
        "name": "weight",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 发货数量\n",
        "privacy": false
      }, {
        "tag": 8,
        "name": "freightPrice",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n\n",
        "privacy": false
      }, {
        "tag": 9,
        "name": "cargoPrice",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n\n",
        "privacy": false
      }, {
        "tag": 10,
        "name": "freightAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n\n",
        "privacy": false
      }, {
        "tag": 11,
        "name": "cargoAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n\n",
        "privacy": false
      }, {
        "tag": 12,
        "name": "actualWeight",
        "optional": true,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 实际签收吨数\n",
        "privacy": false
      }, {
        "tag": 13,
        "name": "createdAt",
        "optional": false,
        "dataType": {"kind": "LONG"},
        "doc": "\n\n\n",
        "privacy": false
      }, {
        "tag": 14,
        "name": "updatedAt",
        "optional": false,
        "dataType": {"kind": "LONG"},
        "doc": "\n\n\n",
        "privacy": false
      }, {
        "tag": 15,
        "name": "createdBy",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n\n",
        "privacy": false
      }, {
        "tag": 16,
        "name": "updatedBy",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n\n",
        "privacy": false
      }, {
        "tag": 17,
        "name": "weightPerPackage",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n 规格：每包重量KG/包\n",
        "privacy": false
      }, {
        "tag": 18,
        "name": "packageAccount",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n 包数\n",
        "privacy": false
      }, {
        "tag": 19,
        "name": "containerAccount",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n 柜量\n",
        "privacy": false
      }, {
        "tag": 20,
        "name": "category",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "doc": "\n\n 产品分类\n",
        "privacy": false
      }, {
        "tag": 21,
        "name": "designation",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "doc": "\n\n 产品牌号\n",
        "privacy": false
      }, {
        "tag": 22,
        "name": "remark",
        "optional": true,
        "dataType": {"kind": "STRING"},
        "doc": "\n\n 备注\n",
        "privacy": false
      }, {
        "tag": 23,
        "name": "weightUnitType",
        "optional": true,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n 单位类型\n",
        "privacy": false
      }, {
        "tag": 24,
        "name": "weightUnit",
        "optional": true,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 单位重量（吨）， 如：每托吨数，每柜吨数\n",
        "privacy": false
      }, {
        "tag": 25,
        "name": "manufactuerName",
        "optional": true,
        "dataType": {"kind": "STRING"},
        "doc": "\n\n 生产商名字\n",
        "privacy": false
      }]
    }, {
      "namespace": "com.isuwang.soa.order.domain",
      "name": "TWaybillEx",
      "fields": [{
        "tag": 1,
        "name": "id",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n\n",
        "privacy": false
      }, {
        "tag": 3,
        "name": "orderNo",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "doc": "\n\n 合同号，对应预约单是销售端时为销售合同号，对应预约单是采购端时是采购合同号\n",
        "privacy": false
      }, {
        "tag": 2,
        "name": "logisticsNo",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "doc": "\n\n 运单号\n",
        "privacy": false
      }, {
        "tag": 4,
        "name": "deliveryId",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n 发货单id\n",
        "privacy": false
      }, {
        "tag": 5,
        "name": "deliveryConnectFlag",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n 取消预约单关联标记,1:已关联(connected),2:取消关联(notConnected)\n",
        "privacy": false
      }, {
        "tag": 6,
        "name": "warehouseId",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n 发货仓库id\n",
        "privacy": false
      }, {
        "tag": 7,
        "name": "warehouseName",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "doc": "\n\n 发货仓库名称\n",
        "privacy": false
      }, {
        "tag": 8,
        "name": "destinationCode",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "doc": "\n\n 目的地编码\n",
        "privacy": false
      }, {
        "tag": 9,
        "name": "destination",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "doc": "\n\n 目的地区域\n",
        "privacy": false
      }, {
        "tag": 10,
        "name": "logisticsContractorId",
        "optional": true,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n 承运商id\n",
        "privacy": false
      }, {
        "tag": 11,
        "name": "logisticsContractorName",
        "optional": true,
        "dataType": {"kind": "STRING"},
        "doc": "\n\n 承运商名称\n",
        "privacy": false
      }, {
        "tag": 12,
        "name": "paymentType",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n 付款方式,1:款到发货(cashOnDelivery);2:卸货前付款(paymentBeforeDischarging);3:赊销(chargeSales);4:当天回款(dayReturnedMoney);\n",
        "privacy": false
      }, {
        "tag": 13,
        "name": "status",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n 运单状态,1:待派单(toBeDispatcher);2:待派车(toBeAssign);3:待通知出车(toBeSendNotice);4:待出车(toBeSend);5:待提货(toBePick);6:待签收(tobeSign);7:已签收(signed);99:取消(canceled)\n",
        "privacy": false
      }, {
        "tag": 14,
        "name": "contractorSettleFlag",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n 对账状态,1:未上报(toBeReport);2:待确认(toBedConfirm);3:需重新上报(toBeRemake);4:已确认(confirmed)\n",
        "privacy": false
      }, {
        "tag": 15,
        "name": "logisticsListAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 运费对内报价\n",
        "privacy": false
      }, {
        "tag": 16,
        "name": "storageListAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 仓储费对内报价\n",
        "privacy": false
      }, {
        "tag": 17,
        "name": "loadingListAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 装卸费对内报价\n",
        "privacy": false
      }, {
        "tag": 18,
        "name": "customsListAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 报关费对内报价\n",
        "privacy": false
      }, {
        "tag": 19,
        "name": "extrasListAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 杂费对内报价\n",
        "privacy": false
      }, {
        "tag": 20,
        "name": "logisticsSettleAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 运费标准成本报价\n",
        "privacy": false
      }, {
        "tag": 21,
        "name": "storageSettleAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 仓储费标准成本报价\n",
        "privacy": false
      }, {
        "tag": 22,
        "name": "loadingSettleAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 装卸费标准成本报价\n",
        "privacy": false
      }, {
        "tag": 23,
        "name": "customsSettleAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 报关费标准成本报价\n",
        "privacy": false
      }, {
        "tag": 24,
        "name": "extrasSettleAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 杂费标准成本报价\n",
        "privacy": false
      }, {
        "tag": 25,
        "name": "logisticsDispatchAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 运费调度成本报价\n",
        "privacy": false
      }, {
        "tag": 26,
        "name": "storageDispatchAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 仓储费调度成本报价\n",
        "privacy": false
      }, {
        "tag": 27,
        "name": "loadingDispatchAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 装卸费调度成本报价\n",
        "privacy": false
      }, {
        "tag": 28,
        "name": "customsDispatchAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 报关费调度成本报价\n",
        "privacy": false
      }, {
        "tag": 29,
        "name": "extrasDispatchAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 杂费调度成本报价\n",
        "privacy": false
      }, {
        "tag": 30,
        "name": "logisticsContractorAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 运费承运商成本报价\n",
        "privacy": false
      }, {
        "tag": 31,
        "name": "storageContractorAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 仓储费承运商成本报价\n",
        "privacy": false
      }, {
        "tag": 32,
        "name": "loadingContractorAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 装卸费承运商成本报价\n",
        "privacy": false
      }, {
        "tag": 33,
        "name": "customsContractorAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 报关费承运商成本报价\n",
        "privacy": false
      }, {
        "tag": 34,
        "name": "extrasContractorAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 杂费承运商成本报价\n",
        "privacy": false
      }, {
        "tag": 35,
        "name": "wastageAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 货损货差赔偿金额\n",
        "privacy": false
      }, {
        "tag": 36,
        "name": "wastageRemark",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "doc": "\n\n 货损货差备注信息\n",
        "privacy": false
      }, {
        "tag": 37,
        "name": "dispatchAdjustRemark",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "doc": "\n\n 调度成本调整原因\n",
        "privacy": false
      }, {
        "tag": 38,
        "name": "dispatchBy",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n 调度员id\n",
        "privacy": false
      }, {
        "tag": 39,
        "name": "assignAt",
        "optional": true,
        "dataType": {"kind": "LONG"},
        "doc": "\n\n 派车时间\n",
        "privacy": false
      }, {
        "tag": 40,
        "name": "pickerId",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n 拿卡人\n",
        "privacy": false
      }, {
        "tag": 41,
        "name": "pickerName",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "doc": "\n\n 拿卡人姓名\n",
        "privacy": false
      }, {
        "tag": 42,
        "name": "pickerContactPhone",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "doc": "\n\n 拿卡人电话\n",
        "privacy": false
      }, {
        "tag": 43,
        "name": "pickerIdCardNo",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "doc": "\n\n 拿卡人身份证\n",
        "privacy": false
      }, {
        "tag": 44,
        "name": "driverId",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n 司机\n",
        "privacy": false
      }, {
        "tag": 45,
        "name": "driverName",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "doc": "\n\n 司机姓名\n",
        "privacy": false
      }, {
        "tag": 46,
        "name": "driverContactPhone",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "doc": "\n\n 司机电话\n",
        "privacy": false
      }, {
        "tag": 47,
        "name": "driverIdCardNo",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "doc": "\n\n 司机身份证\n",
        "privacy": false
      }, {
        "tag": 48,
        "name": "carId",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n 出车车辆\n",
        "privacy": false
      }, {
        "tag": 49,
        "name": "carCardNo",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "doc": "\n\n 车牌号\n",
        "privacy": false
      }, {
        "tag": 50,
        "name": "carType",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n 车辆类型\n",
        "privacy": false
      }, {
        "tag": 51,
        "name": "sendAt",
        "optional": true,
        "dataType": {"kind": "LONG"},
        "doc": "\n\n 出车时间\n",
        "privacy": false
      }, {
        "tag": 52,
        "name": "pickAt",
        "optional": true,
        "dataType": {"kind": "LONG"},
        "doc": "\n\n 提货时间\n",
        "privacy": false
      }, {
        "tag": 53,
        "name": "signAt",
        "optional": true,
        "dataType": {"kind": "LONG"},
        "doc": "\n\n 签收时间\n",
        "privacy": false
      }, {
        "tag": 54,
        "name": "settleAdjustmentLog",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "doc": "\n\n 费用调整日志\n",
        "privacy": false
      }, {
        "tag": 55,
        "name": "settleCommunicateLog",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "doc": "\n\n 对账沟通日志\n",
        "privacy": false
      }, {
        "tag": 56,
        "name": "remark",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "doc": "\n\n 备注\n",
        "privacy": false
      }, {
        "tag": 90,
        "name": "createByName",
        "optional": true,
        "dataType": {"kind": "STRING"},
        "doc": "创建人",
        "privacy": false
      }, {
        "tag": 91,
        "name": "dispatchByName",
        "optional": true,
        "dataType": {"kind": "STRING"},
        "doc": "调度人人",
        "privacy": false
      }, {
        "tag": 93,
        "name": "waybillItems",
        "optional": false,
        "dataType": {
          "kind": "LIST",
          "valueType": {"kind": "STRUCT", "qualifiedName": "com.isuwang.soa.order.domain.TWaybillItem"}
        },
        "privacy": false
      }, {
        "tag": 94,
        "name": "waybillAttachments",
        "optional": false,
        "dataType": {
          "kind": "LIST",
          "valueType": {"kind": "STRUCT", "qualifiedName": "com.isuwang.soa.order.domain.TWaybillAttachment"}
        },
        "privacy": false
      }, {
        "tag": 95,
        "name": "totalListAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "物流收入总费用",
        "privacy": false
      }, {
        "tag": 96,
        "name": "totalDispatchAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "调度总费用",
        "privacy": false
      }, {
        "tag": 97,
        "name": "totalContractorAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "承运商总费用 除货损货差",
        "privacy": false
      }, {
        "tag": 98,
        "name": "receiptCustomerCompany",
        "optional": true,
        "dataType": {"kind": "STRING"},
        "doc": "客户公司",
        "privacy": false
      }, {
        "tag": 99,
        "name": "receiptCustomerName",
        "optional": true,
        "dataType": {"kind": "STRING"},
        "doc": "客户收货人",
        "privacy": false
      }, {
        "tag": 100,
        "name": "receiptCustomerPhone",
        "optional": true,
        "dataType": {"kind": "STRING"},
        "doc": "客户收货电话",
        "privacy": false
      }, {
        "tag": 101,
        "name": "totalWeight",
        "optional": true,
        "dataType": {"kind": "DOUBLE"},
        "doc": "总重量",
        "privacy": false
      }, {
        "tag": 102,
        "name": "otherFee",
        "optional": true,
        "dataType": {"kind": "DOUBLE"},
        "doc": "其他费用\u003d仓储费+报关费+杂费+承运商装卸费-货损货差补偿",
        "privacy": false
      }, {
        "tag": 103,
        "name": "totalFee",
        "optional": true,
        "dataType": {"kind": "DOUBLE"},
        "doc": "总费用 \u003d 实际运费+装卸费+其他费用",
        "privacy": false
      }, {
        "tag": 104,
        "name": "wastageTotalWeignt",
        "optional": true,
        "dataType": {"kind": "DOUBLE"},
        "doc": "货损总重量",
        "privacy": false
      }, {
        "tag": 105,
        "name": "totalSettleAmount",
        "optional": true,
        "dataType": {"kind": "DOUBLE"},
        "doc": "标准成本总金额",
        "privacy": false
      }, {
        "tag": 106,
        "name": "dispatcherPhone",
        "optional": true,
        "dataType": {"kind": "STRING"},
        "doc": "调度员手机号",
        "privacy": false
      }, {
        "tag": 107,
        "name": "logisticsDeliveyDate",
        "optional": true,
        "dataType": {"kind": "LONG"},
        "doc": "预计送达时间",
        "privacy": false
      }, {
        "tag": 57,
        "name": "createdAt",
        "optional": false,
        "dataType": {"kind": "LONG"},
        "doc": "\n\n\n",
        "privacy": false
      }, {
        "tag": 58,
        "name": "createdBy",
        "optional": true,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n\n",
        "privacy": false
      }, {
        "tag": 59,
        "name": "updatedAt",
        "optional": false,
        "dataType": {"kind": "LONG"},
        "doc": "\n\n\n",
        "privacy": false
      }, {
        "tag": 60,
        "name": "updatedBy",
        "optional": true,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n\n",
        "privacy": false
      }, {"tag": 61, "name": "salesBy", "optional": true, "dataType": {"kind": "INTEGER"}, "privacy": false}, {
        "tag": 62,
        "name": "salesByName",
        "optional": true,
        "dataType": {"kind": "STRING"},
        "privacy": false
      }, {
        "tag": 63,
        "name": "deliveyDueDate",
        "optional": false,
        "dataType": {"kind": "LONG"},
        "doc": " 发货日期 ",
        "privacy": false
      }, {
        "tag": 64,
        "name": "logisticsServicesFee",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 物流售后费用总和\n\n",
        "privacy": false
      }, {
        "tag": 65,
        "name": "dispatchAt",
        "optional": true,
        "dataType": {"kind": "LONG"},
        "doc": " 派单时间 ",
        "privacy": false
      }, {
        "tag": 92,
        "name": "actions",
        "optional": false,
        "dataType": {"kind": "MAP", "keyType": {"kind": "STRING"}, "valueType": {"kind": "BOOLEAN"}},
        "doc": "\n\n 权限列表\n //派单 -\u003e \"DISPATCHER\"\n //撤回派单 -\u003e \"REVOKE_DISPATCHER\"\n //派车 -\u003e \"ASSIGN\"\n //出车 -\u003e \"SEND_CAR\"\n //提货 -\u003e \"PICK\"\n //签收 -\u003e \"SIGN\"\n //换车 -\u003e \"SAVE_CAR\n\n",
        "privacy": false
      }],
      "annotations": [{"key": "m.ref", "value": "waybill.TWaybillEx"}]
    }, {
      "namespace": "com.isuwang.soa.order.domain",
      "name": "TAssignWaybillCarRequeset",
      "fields": [{
        "tag": 1,
        "name": "waybillId",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "运单id",
        "privacy": false
      }, {
        "tag": 3,
        "name": "pickerId",
        "optional": true,
        "dataType": {"kind": "INTEGER"},
        "doc": "拿卡人",
        "privacy": false
      }, {
        "tag": 4,
        "name": "driverAndCarId",
        "optional": true,
        "dataType": {"kind": "INTEGER"},
        "doc": "车辆人员信息",
        "privacy": false
      }],
      "annotations": [{"key": "m.ref", "value": "waybill.TAssignWaybillCarRequeset"}]
    }, {
      "namespace": "com.isuwang.soa.order.domain",
      "name": "TWaybillAttachment",
      "fields": [{
        "tag": 1,
        "name": "type",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "privacy": false
      }, {"tag": 2, "name": "attachmentId", "optional": false, "dataType": {"kind": "STRING"}, "privacy": false}]
    }, {
      "namespace": "com.isuwang.soa.order.domain",
      "name": "TSignWaybillRequeset",
      "fields": [{
        "tag": 1,
        "name": "waybillId",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "运单id",
        "privacy": false
      }, {
        "tag": 2,
        "name": "signTime",
        "optional": false,
        "dataType": {"kind": "LONG"},
        "doc": "签收事件",
        "privacy": false
      }, {
        "tag": 3,
        "name": "signWaybillItems",
        "optional": false,
        "dataType": {
          "kind": "LIST",
          "valueType": {"kind": "STRUCT", "qualifiedName": "com.isuwang.soa.order.domain.TSignWaybillitem"}
        },
        "doc": "货损情况",
        "privacy": false
      }, {
        "tag": 4,
        "name": "signAttachment",
        "optional": false,
        "dataType": {"kind": "LIST", "valueType": {"kind": "STRING"}},
        "doc": "签收单据",
        "privacy": false
      }, {
        "tag": 5,
        "name": "load",
        "optional": true,
        "dataType": {"kind": "STRING"},
        "doc": "装车费用",
        "privacy": false
      }, {
        "tag": 6,
        "name": "unload",
        "optional": true,
        "dataType": {"kind": "STRING"},
        "doc": "卸车费用",
        "privacy": false
      }, {
        "tag": 7,
        "name": "extras",
        "optional": true,
        "dataType": {"kind": "STRING"},
        "doc": "杂费",
        "privacy": false
      }, {"tag": 8, "name": "other", "optional": true, "dataType": {"kind": "STRING"}, "doc": "其他费用", "privacy": false}]
    }, {
      "namespace": "com.isuwang.soa.order.domain",
      "name": "TSignWaybillitem",
      "fields": [{
        "tag": 1,
        "name": "waybillItemId",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "privacy": false
      }, {"tag": 2, "name": "wastageWeight", "optional": false, "dataType": {"kind": "DOUBLE"}, "privacy": false}],
      "annotations": [{"key": "m.ref", "value": "waybill.TSignWaybillitem"}]
    }, {
      "namespace": "com.isuwang.soa.order.domain",
      "name": "TWaybillStatisticsInfo",
      "fields": [{
        "tag": 1,
        "name": "monthStr",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "privacy": false
      }, {
        "tag": 2,
        "name": "contractorId",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "privacy": false
      }, {
        "tag": 3,
        "name": "contractorName",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "privacy": false
      }, {
        "tag": 4,
        "name": "waybillNum",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "privacy": false
      }, {
        "tag": 5,
        "name": "confirmedNum",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "privacy": false
      }, {
        "tag": 6,
        "name": "unconfirmedNum",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "privacy": false
      }, {
        "tag": 7,
        "name": "confirmAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "privacy": false
      }, {
        "tag": 29,
        "name": "logisticsContractorAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 运费承运商成本报价\n",
        "privacy": false
      }, {
        "tag": 30,
        "name": "storageContractorAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 仓储费承运商成本报价\n",
        "privacy": false
      }, {
        "tag": 31,
        "name": "loadingContractorAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 装卸费承运商成本报价\n",
        "privacy": false
      }, {
        "tag": 32,
        "name": "customsContractorAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 报关费承运商成本报价\n",
        "privacy": false
      }, {
        "tag": 33,
        "name": "extrasContractorAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 杂费承运商成本报价\n",
        "privacy": false
      }, {"tag": 34, "name": "totalAmount", "optional": false, "dataType": {"kind": "DOUBLE"}, "privacy": false}],
      "annotations": [{"key": "m.ref", "value": "waybill.TWaybillStatisticsInfo"}]
    }, {
      "namespace": "com.isuwang.soa.order.domain",
      "name": "TWaybillItem",
      "fields": [{
        "tag": 1,
        "name": "id",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n\n",
        "privacy": false
      }, {
        "tag": 2,
        "name": "waybillId",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n 运单id\n",
        "privacy": false
      }, {
        "tag": 3,
        "name": "deliveryId",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n 发货单id\n",
        "privacy": false
      }, {
        "tag": 4,
        "name": "deliveryItemId",
        "optional": true,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n 发货子单id\n",
        "privacy": false
      }, {
        "tag": 5,
        "name": "category",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "doc": "\n\n 品种\n",
        "privacy": false
      }, {
        "tag": 6,
        "name": "designation",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "doc": "\n\n 牌号\n",
        "privacy": false
      }, {
        "tag": 7,
        "name": "weight",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 重量/吨\n",
        "privacy": false
      }, {
        "tag": 8,
        "name": "wastageWeight",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 货损重量/吨\n",
        "privacy": false
      }, {
        "tag": 9,
        "name": "remark",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "doc": "\n\n 备注\n",
        "privacy": false
      }, {
        "tag": 10,
        "name": "createdAt",
        "optional": false,
        "dataType": {"kind": "LONG"},
        "doc": "\n\n\n",
        "privacy": false
      }, {
        "tag": 11,
        "name": "createdBy",
        "optional": true,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n\n",
        "privacy": false
      }, {
        "tag": 12,
        "name": "updatedAt",
        "optional": false,
        "dataType": {"kind": "LONG"},
        "doc": "\n\n\n",
        "privacy": false
      }, {
        "tag": 13,
        "name": "updatedBy",
        "optional": true,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n\n",
        "privacy": false
      }]
    }, {
      "namespace": "com.isuwang.soa.order.domain",
      "name": "TFindWaybillStatisticsInfoRequest",
      "fields": [{
        "tag": 1,
        "name": "monthStr",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "privacy": false
      }, {"tag": 2, "name": "contractorId", "optional": false, "dataType": {"kind": "INTEGER"}, "privacy": false}]
    }, {
      "namespace": "com.isuwang.soa.order.domain",
      "name": "TWaybillCreateRequest",
      "fields": [{
        "tag": 13,
        "name": "logisticsListAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 运费对内报价\n",
        "privacy": false
      }, {
        "tag": 14,
        "name": "storageListAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 仓储费对内报价\n",
        "privacy": false
      }, {
        "tag": 15,
        "name": "loadingListAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 装卸费对内报价\n",
        "privacy": false
      }, {
        "tag": 16,
        "name": "customsListAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 报关费对内报价\n",
        "privacy": false
      }, {
        "tag": 17,
        "name": "extrasListAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 杂费对内报价\n",
        "privacy": false
      }, {
        "tag": 42,
        "name": "remark",
        "optional": true,
        "dataType": {"kind": "STRING"},
        "doc": "\n\n 备注\n",
        "privacy": false
      }, {
        "tag": 60,
        "name": "waybillItems",
        "optional": false,
        "dataType": {
          "kind": "LIST",
          "valueType": {"kind": "STRUCT", "qualifiedName": "com.isuwang.soa.order.domain.TWaybillItemCreateRequest"}
        },
        "privacy": false
      }]
    }, {
      "namespace": "com.isuwang.soa.order.domain",
      "name": "TWaybillStatisticsItem",
      "fields": [{
        "tag": 1,
        "name": "monthStr",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "doc": "月份",
        "privacy": false
      }, {
        "tag": 2,
        "name": "contractorId",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "承运商id",
        "privacy": false
      }, {
        "tag": 3,
        "name": "contractorName",
        "optional": false,
        "dataType": {"kind": "STRING"},
        "doc": "*承运商名称",
        "privacy": false
      }, {
        "tag": 4,
        "name": "waybillNum",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "中运单数",
        "privacy": false
      }, {
        "tag": 5,
        "name": "reportedLogisticsNum",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "已上报运单数",
        "privacy": false
      }, {
        "tag": 6,
        "name": "confirmedNum",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "*确认运单数",
        "privacy": false
      }, {
        "tag": 7,
        "name": "totalAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "已对账总金额",
        "privacy": false
      }, {
        "tag": 8,
        "name": "totalWeight",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "已对账总吨数",
        "privacy": false
      }, {
        "tag": 29,
        "name": "logisticsContractorAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 已对账运费承运商成本报价\n",
        "privacy": false
      }, {
        "tag": 30,
        "name": "storageContractorAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 已对账仓储费承运商成本报价\n",
        "privacy": false
      }, {
        "tag": 31,
        "name": "loadingContractorAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 已对账装卸费承运商成本报价\n",
        "privacy": false
      }, {
        "tag": 32,
        "name": "customsContractorAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 已对账报关费承运商成本报价\n",
        "privacy": false
      }, {
        "tag": 33,
        "name": "extrasContractorAmount",
        "optional": false,
        "dataType": {"kind": "DOUBLE"},
        "doc": "\n\n 已对账杂费承运商成本报价\n",
        "privacy": false
      }, {
        "tag": 34,
        "name": "status",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "*对账状态 1:待确认(toBeConfirm);2:待结算(confirmed) 3:已结算",
        "privacy": false
      }, {
        "tag": 35,
        "name": "actions",
        "optional": false,
        "dataType": {"kind": "MAP", "keyType": {"kind": "STRING"}, "valueType": {"kind": "BOOLEAN"}},
        "doc": "* 能否进行结算：canSettled -\u003e true/false  能否进行确认 canConfirmed -\u003e true/false ",
        "privacy": false
      }],
      "annotations": [{"key": "m.ref", "value": "waybill.TWaybillStatisticsItem"}]
    }, {
      "namespace": "com.isuwang.soa.order.domain",
      "name": "TSendWaybillCarRequeset",
      "fields": [{
        "tag": 1,
        "name": "waybillId",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "运单id",
        "privacy": false
      }, {
        "tag": 2,
        "name": "sendTime",
        "optional": false,
        "dataType": {"kind": "LONG"},
        "doc": "派车时间",
        "privacy": false
      }],
      "annotations": [{"key": "m.ref", "value": "waybill.TSendWaybillCarRequeset"}]
    }, {
      "namespace": "com.isuwang.soa.order.domain",
      "name": "TFindWaybillStatisticsResponse",
      "fields": [{
        "tag": 1,
        "name": "pageResponse",
        "optional": false,
        "dataType": {"kind": "STRUCT", "qualifiedName": "com.isuwang.soa.common.util.TPageResponse"},
        "privacy": false
      }, {
        "tag": 2,
        "name": "rows",
        "optional": false,
        "dataType": {
          "kind": "LIST",
          "valueType": {"kind": "STRUCT", "qualifiedName": "com.isuwang.soa.order.domain.TWaybillStatisticsItem"}
        },
        "privacy": false
      }, {
        "tag": 3,
        "name": "statusCount",
        "optional": false,
        "dataType": {"kind": "MAP", "keyType": {"kind": "STRING"}, "valueType": {"kind": "STRING"}},
        "privacy": false
      }],
      "annotations": [{"key": "m.ref", "value": "waybill.TFindWaybillStatisticsResponse"}]
    }, {
      "namespace": "com.isuwang.soa.common.util",
      "name": "TPageRequest",
      "doc": "\n\n 分页查询请求包\n",
      "fields": [{
        "tag": 1,
        "name": "start",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n 查询的开始序号（序号从零开始）\n",
        "privacy": false
      }, {
        "tag": 2,
        "name": "limit",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n 返回记录数\n",
        "privacy": false
      }, {
        "tag": 3,
        "name": "sortFields",
        "optional": true,
        "dataType": {"kind": "STRING"},
        "doc": "\n\n 排序的字段\n",
        "privacy": false
      }]
    }, {
      "namespace": "com.isuwang.soa.common.util",
      "name": "TPageResponse",
      "fields": [{
        "tag": 1,
        "name": "start",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n 查询的开始序号（序号从零开始）\n",
        "privacy": false
      }, {
        "tag": 2,
        "name": "limit",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n 最大返回的记录数\n",
        "privacy": false
      }, {
        "tag": 3,
        "name": "results",
        "optional": false,
        "dataType": {"kind": "INTEGER"},
        "doc": "\n\n 结果记录数\n",
        "privacy": false
      }]
    }],
    "enumDefinitions": [{
      "namespace": "com.isuwang.soa.order.enums",
      "name": "WaybillAttachmentType",
      "enumItems": [{"label": "SIGN", "value": 1, "doc": "*签收"}, {
        "label": "LOAD",
        "value": 2,
        "doc": "*装车费用单"
      }, {"label": "UNLOAD", "value": 3, "doc": "*卸车费用单"}, {
        "label": "EXTRAS",
        "value": 4,
        "doc": "*杂费费用单"
      }, {"label": "OTHER", "value": 5, "doc": "*其他费用单"}]
    }]
  },
  "fieldsInStruct": {
    "com.isuwang.soa.order.domain.TSignWaybillitem": [{
      "structName": "com.isuwang.soa.order.domain.TSignWaybillitem",
      "name": "waybillItemId",
      "label": "waybillItemId",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TSignWaybillitem",
      "name": "wastageWeight",
      "label": "wastageWeight",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }],
    "com.isuwang.soa.order.domain.TFindWaybillRequest": [{
      "structName": "com.isuwang.soa.order.domain.TFindWaybillRequest",
      "name": "orderNo",
      "label": "订单编号",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TFindWaybillRequest",
      "name": "waybillNo",
      "label": "运单编号",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TFindWaybillRequest",
      "name": "dispatchBy",
      "label": "调度员",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TFindWaybillRequest",
      "name": "logisticsContractorId",
      "label": "承运商",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TFindWaybillRequest",
      "name": "warehouseId",
      "label": "仓库",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TFindWaybillRequest",
      "name": "createAtStart",
      "label": "创建日期起始时间",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TFindWaybillRequest",
      "name": "createAtEnd",
      "label": "创建日期结束时间",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TFindWaybillRequest",
      "element": "m2-select-list",
      "name": "paymentType",
      "label": "付款方式",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "candidates": "[{\"label\":\"无\",\"value\":\"1\"},{\"label\":\"当天回款\",\"value\":\"2\"},{\"label\":\"卸货前付款\",\"value\":3},{\"label\":\"赊销\",\"value\":4}]",
      "candidateLabel": "label",
      "candidateValue": "value",
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TFindWaybillRequest",
      "name": "status",
      "label": "status",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TFindWaybillRequest",
      "name": "monthStr",
      "label": "monthStr",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TFindWaybillRequest",
      "name": "statuses",
      "label": "statuses",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TFindWaybillRequest",
      "name": "driverId",
      "label": "driverId",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TFindWaybillRequest",
      "name": "carId",
      "label": "carId",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TFindWaybillRequest",
      "name": "signAtStart",
      "label": "signAtStart",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TFindWaybillRequest",
      "name": "singAtEnd",
      "label": "singAtEnd",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TFindWaybillRequest",
      "name": "contractorSettleFlags",
      "label": "contractorSettleFlags",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TFindWaybillRequest",
      "name": "deliveryId",
      "label": "deliveryId",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TFindWaybillRequest",
      "name": "contractorSettleFlag",
      "label": "contractorSettleFlag",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TFindWaybillRequest",
      "element": "h2-date",
      "name": "deliveyDueDateStart",
      "label": "发货日期起始时间",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TFindWaybillRequest",
      "element": "h2-date",
      "name": "deliveyDueDateEnd",
      "label": "发货日期结束时间",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }],
    "com.isuwang.soa.order.domain.TAssignWaybillCarRequeset": [{
      "structName": "com.isuwang.soa.order.domain.TAssignWaybillCarRequeset",
      "name": "waybillId",
      "label": "waybillId",
      "required": true,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "srcKey": "id",
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TAssignWaybillCarRequeset",
      "name": "pickerId",
      "label": "pickerId",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TAssignWaybillCarRequeset",
      "name": "driverAndCarId",
      "label": "driverAndCarId",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }],
    "com.isuwang.soa.order.domain.TFindWaybillStatisticsRequest": [{
      "structName": "com.isuwang.soa.order.domain.TFindWaybillStatisticsRequest",
      "element": "h2-month",
      "name": "monthStr",
      "label": "运单月份",
      "required": false,
      "multi": false,
      "format": "yyyy年MM月",
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TFindWaybillStatisticsRequest",
      "element": "o-contractor-picker",
      "name": "contractorId",
      "label": "承运商",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TFindWaybillStatisticsRequest",
      "name": "status",
      "label": "status",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TFindWaybillStatisticsRequest",
      "name": "pageRequest",
      "label": "pageRequest",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }],
    "com.isuwang.soa.order.domain.TFindWaybillStatisticsInfoRequest": [{
      "structName": "com.isuwang.soa.order.domain.TFindWaybillStatisticsInfoRequest",
      "name": "monthStr",
      "label": "monthStr",
      "required": true,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TFindWaybillStatisticsInfoRequest",
      "name": "contractorId",
      "label": "contractorId",
      "required": true,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }],
    "com.isuwang.soa.order.domain.TPickWaybillRequest": [{
      "structName": "com.isuwang.soa.order.domain.TPickWaybillRequest",
      "name": "waybillId",
      "label": "waybillId",
      "required": true,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "srcKey": "id",
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TPickWaybillRequest",
      "element": "h2-date",
      "name": "pickTime",
      "label": "pickTime",
      "required": true,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }],
    "com.isuwang.soa.order.domain.TSendWaybillCarRequeset": [{
      "structName": "com.isuwang.soa.order.domain.TSendWaybillCarRequeset",
      "name": "waybillId",
      "label": "waybillId",
      "required": true,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "srcKey": "id",
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TSendWaybillCarRequeset",
      "element": "h2-date",
      "name": "sendTime",
      "label": "sendTime",
      "required": true,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }],
    "com.isuwang.soa.order.domain.TWaybillStatisticsItem": [{
      "structName": "com.isuwang.soa.order.domain.TWaybillStatisticsItem",
      "element": "",
      "name": "totalWeight",
      "label": "已对账总吨数",
      "required": false,
      "multi": false,
      "format": "",
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "regexp": "",
      "prompt": "",
      "min": 0,
      "max": 0,
      "placeholder": "",
      "candidates": "",
      "candidateLabel": "",
      "candidateValue": "",
      "srcKey": "",
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillStatisticsItem",
      "name": "monthStr",
      "label": "月份",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillStatisticsItem",
      "name": "contractorId",
      "label": "承运商id",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillStatisticsItem",
      "name": "contractorName",
      "label": "承运商",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillStatisticsItem",
      "name": "waybillNum",
      "label": "总运单数",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillStatisticsItem",
      "name": "confirmedNum",
      "label": "已对账数",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillStatisticsItem",
      "name": "unconfirmedNum",
      "label": "未对账数",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillStatisticsItem",
      "name": "totalAmount",
      "label": "已对账总金额",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillStatisticsItem",
      "name": "logisticsContractorAmount",
      "label": "已对账运费承运商成本报价",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillStatisticsItem",
      "name": "storageContractorAmount",
      "label": "已对账仓储费承运商成本报价",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillStatisticsItem",
      "name": "loadingContractorAmount",
      "label": "已对账装卸费承运商成本报价",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillStatisticsItem",
      "name": "customsContractorAmount",
      "label": "已对账报关费承运商成本报价",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillStatisticsItem",
      "name": "extrasContractorAmount",
      "label": "已对账杂费承运商成本报价",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillStatisticsItem",
      "name": "status",
      "label": "状态",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillStatisticsItem",
      "name": "actions",
      "label": "操作",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillStatisticsItem",
      "name": "reportedLogisticsNum",
      "label": "已上报数",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }],
    "com.isuwang.soa.order.domain.TDispatchWaybillRequeset": [{
      "structName": "com.isuwang.soa.order.domain.TDispatchWaybillRequeset",
      "name": "waybillId",
      "label": "waybillId",
      "required": true,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "srcKey": "id",
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TDispatchWaybillRequeset",
      "element": "o-contractor-picker",
      "name": "contractorId",
      "label": "选择承运商",
      "required": true,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "srcKey": "logisticsContractorId",
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TDispatchWaybillRequeset",
      "name": "logisticsDispatchAmount",
      "label": "logisticsDispatchAmount",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TDispatchWaybillRequeset",
      "name": "storageDispatchAmount",
      "label": "storageDispatchAmount",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TDispatchWaybillRequeset",
      "name": "loadingDispatchAmount",
      "label": "loadingDispatchAmount",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TDispatchWaybillRequeset",
      "name": "customsDispatchAmount",
      "label": "customsDispatchAmount",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TDispatchWaybillRequeset",
      "name": "extrasDispatchAmount",
      "label": "extrasDispatchAmount",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TDispatchWaybillRequeset",
      "name": "dispatchAdjustRemark",
      "label": "调整原因",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }],
    "com.isuwang.soa.order.domain.TWaybillEx": [{
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "id",
      "label": "id",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "logisticsNo",
      "label": "运单号",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "orderNo",
      "label": "订单号",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "deliveryId",
      "label": "deliveryId",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "deliveryConnectFlag",
      "label": "deliveryConnectFlag",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "warehouseId",
      "label": "warehouseId",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "destinationCode",
      "label": "destinationCode",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "logisticsContractorId",
      "label": "logisticsContractorId",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "status",
      "label": "状态",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "storageListAmount",
      "label": "storageListAmount",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "loadingListAmount",
      "label": "loadingListAmount",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "customsListAmount",
      "label": "customsListAmount",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "extrasListAmount",
      "label": "extrasListAmount",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "storageSettleAmount",
      "label": "storageSettleAmount",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "loadingSettleAmount",
      "label": "loadingSettleAmount",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "customsSettleAmount",
      "label": "customsSettleAmount",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "extrasSettleAmount",
      "label": "extrasSettleAmount",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "storageDispatchAmount",
      "label": "storageDispatchAmount",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "customsDispatchAmount",
      "label": "customsDispatchAmount",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "extrasDispatchAmount",
      "label": "extrasDispatchAmount",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "logisticsContractorAmount",
      "label": "实际运费",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "storageContractorAmount",
      "label": "storageContractorAmount",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "loadingContractorAmount",
      "label": "装卸费",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "customsContractorAmount",
      "label": "customsContractorAmount",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "extrasContractorAmount",
      "label": "extrasContractorAmount",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "wastageRemark",
      "label": "wastageRemark",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "dispatchAdjustRemark",
      "label": "dispatchAdjustRemark",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "dispatchBy",
      "label": "dispatchBy",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "assignAt",
      "label": "assignAt",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "pickerId",
      "label": "pickerId",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "pickerName",
      "label": "pickerName",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "pickerContactPhone",
      "label": "pickerContactPhone",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "pickerIdCardNo",
      "label": "pickerIdCardNo",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "driverId",
      "label": "driverId",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "driverName",
      "label": "driverName",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "driverContactPhone",
      "label": "driverContactPhone",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "driverIdCardNo",
      "label": "driverIdCardNo",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "carId",
      "label": "carId",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "carCardNo",
      "label": "carCardNo",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "carType",
      "label": "carType",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "sendAt",
      "label": "sendAt",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "pickAt",
      "label": "pickAt",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "signAt",
      "label": "signAt",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "settleAdjustmentLog",
      "label": "settleAdjustmentLog",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "settleCommunicateLog",
      "label": "settleCommunicateLog",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "remark",
      "label": "remark",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "createdAt",
      "label": "创建时间",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "createdBy",
      "label": "createdBy",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "updatedAt",
      "label": "updatedAt",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "updatedBy",
      "label": "updatedBy",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "createByName",
      "label": "创建人",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "dispatchByName",
      "label": "调度人",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "waybillItems",
      "label": "waybillItems",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "waybillAttachments",
      "label": "waybillAttachments",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "totalListAmount",
      "label": "totalListAmount",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "totalDispatchAmount",
      "label": "totalDispatchAmount",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "totalContractorAmount",
      "label": "totalContractorAmount",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "receiptCustomerCompany",
      "label": "receiptCustomerCompany",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "receiptCustomerName",
      "label": "receiptCustomerName",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "receiptCustomerPhone",
      "label": "receiptCustomerPhone",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "wastageTotalWeignt",
      "label": "wastageTotalWeignt",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "totalSettleAmount",
      "label": "totalSettleAmount",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "dispatcherPhone",
      "label": "dispatcherPhone",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "logisticsDeliveyDate",
      "label": "logisticsDeliveyDate",
      "required": false,
      "multi": false,
      "editable": true,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "paymentType",
      "label": "付款方式",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "warehouseName",
      "label": "提货仓库",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "destination",
      "label": "目的地",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "logisticsContractorName",
      "label": "承运商",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "contractorSettleFlag",
      "label": "对账状态",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "logisticsSettleAmount",
      "label": "标准运费",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "logisticsDispatchAmount",
      "label": "成本运费",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "loadingDispatchAmount",
      "label": "装卸费",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": false,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "wastageAmount",
      "label": "差异",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "totalWeight",
      "label": "重量",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "otherFee",
      "label": "其他费用",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "totalFee",
      "label": "总费用",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "actions",
      "label": "操作",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }, {
      "structName": "com.isuwang.soa.order.domain.TWaybillEx",
      "name": "deliveyDueDate",
      "label": "发货日期",
      "required": false,
      "multi": false,
      "editable": false,
      "validate": false,
      "length": 0,
      "maxLength": 0,
      "minLength": 0,
      "min": 0,
      "max": 0,
      "visible": true,
      "disabled": false
    }]
  }
};
export {metadata}