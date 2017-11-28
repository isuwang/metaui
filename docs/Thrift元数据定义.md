# Thrift元数据定义

标签（空格分隔）： 工作

---

## 方法 （Method）
- Thrift demo

```java

  DemoService {

    QueryResponse query(QueryRequest request , pageRequest: PageRequest)
    (m.form.url="/query.do")


    list<TDemo> queryDemos(TRequest request)
    (m.form.url="/queryDemos.do")


    // 此处参数的元数据会默认：m.required="true" m.editable="true"
    void delete(i32 id (m.element="xxx-ele"))
    (m.type="entity-action", m.id="demo-delete", m.name="删除", m.operType="1")


    void add(request: DemoRequest)
    (m.type="domain-action", m.id="demo-add", m.name="添加", m.operType="2" )

  }
```
- 元数据字典：

|注释key|对应元数据字段|取值|描述
|:----|:----|:---|:----|
|m.type||domain-action, entity-action|domain-action：domain作用域的操作，比如添加记录，entity-action：实体作用域的操作，比如删除或修改一个记录|
| m.id |ActionMeta.actionId|默认值：方法名称|操作id，建议跟权限名相同
| m.name |ActionMeta.actionName||操作名称
|m.operType|ActionMeta.operType|"1"：直接表单提交，"2"：弹窗|
|m.modelSrc|ActionMeta.modelSrc||
|m.group|ActionMeta.group||操作分组


|注释key|对应元数据字段|取值|描述
|:----|:----|:---|:----|
|m.form.confirm|FormMeta.confirm||表单提交前的确认提示|
| m.form.title |FormMeta.title||表单页面的标题|
| m.form.url |FormMeta.url||表单提交的url，与前端controller对应|
|m.form.hideSubmitBtn|Form.hideSubmitBtn|"true" or "false"，缺省值："false"|表单中是否隐藏默认的保存按钮


## 实体 (Struct)

- Thrift demo
  ```java
  struct QueryRequest {
        1: i32 field1
        2: optional string field2
  }

  struct TWaybillEx {
    // ...
  }

  struct QueryResponse {
        1: base_model.TPageResponse pageResponse
        2: list<TWaybillEx> rows
        /**运单状态*/
        3: optional map<string,string> statusCount = {}
        /**对账状态*/
        4: optional map<string,string> settleStatusCount = {}
  }


  ```
  
- 元数据字典

|注释key|对应元数据字段|取值|描述|
|:----|:----|:-----|:---|
|m.name|FieldMeta.name|应与实体字段名相同|字段名，如“orderNo”
|m.label|FieldMeta.label||字段名，如“订单号”
|m.required|FieldMeta.required||是否必填
|m.multi|FieldMeta.multi||是否多选
|m.editable|FieldMeta.editable| | 是否可编辑
|m.validate|FieldMeta.validate|| 是否需要校验
|m.visible|FieldMeta.visible|| 界面是否可见，仅对表单中的字段有效
|m.element|FieldMeta.element||ui元素，缺省时，提供默认ui：h2-text
|m.format|FieldMeta.format|| 显示格式，用于日期显示，如“yyyy-MM-dd”
|m.length|FieldMeta.length| | 字符长度
|m.maxLength|FieldMeta.maxLength|| string允许的最大长度
|m.minLength|FieldMeta.minLength| | string允许的最小长度
|m.regexp|FieldMeta.regexp||正则匹配
|m.prompt|FieldMeta.prompt||校验失败时的提示语，如“请输入备注”
|m.min|FieldMeta.min||数字最小值
|m.max|FieldMeta.max||数字最大值
|m.placeholder|FieldMeta.placeholder|| placeholder
|m.candidates|FieldMeta.candidates|| 候选值，下拉选项中的值，json串，如 "[{value: 1,label: '男'}, {value: 2,label: '女'}]"
|m.candidateLabel|FieldMeta.candidateLabel||组件显示字段名，针对下拉组件、radio-group组件等，“label”
|m.candidateValue|FieldMeta.candidateValue|| 组件值字段名，针对下拉组件、radio-group组件等，“value”
|m.srcKey|FieldMeta.srcKey||取值字段名

## 数据库定义
```mysql
CREATE TABLE `metadb`.`fields` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `struct_name` varchar(200) NOT NULL COMMENT '实体名',
  `name` varchar(50) NOT NULL COMMENT '字段名，如"orderNo"',
  `element` varchar(50) DEFAULT NULL COMMENT '替换元素，如 "paper-input" ',
  `label` varchar(50) NOT NULL COMMENT '字段名，如"订单号"',
  `required` smallint(1) NOT NULL DEFAULT '0' COMMENT '是否必填 1: 是 0：否',
  `multi` smallint(1) NOT NULL DEFAULT '0' COMMENT '多否多选  1: 是 0：否',
  `format` varchar(50) DEFAULT NULL COMMENT '显示格式，用于日期显示，如“yyyy-MM-dd”',
  `editable` smallint(1) NOT NULL DEFAULT '0' COMMENT '是否可编辑  1: 是 0：否',
  `validate` smallint(1) NOT NULL DEFAULT '0' COMMENT '前是否需要校验， 1: 是 0：否',
  `length` int(11) DEFAULT NULL COMMENT '字符允许长度',
  `max_length` int(11) DEFAULT NULL COMMENT '允许最大长度',
  `min_length` int(11) DEFAULT NULL COMMENT '允许最小长度',
  `regexp` varchar(50) DEFAULT NULL COMMENT '正则匹配',
  `prompt` varchar(50) DEFAULT NULL COMMENT '校验失败时的提示语，如“请输入备注”',
  `min` int(11) DEFAULT NULL COMMENT '数字最小值',
  `max` int(11) DEFAULT NULL COMMENT '数字最大值',
  `candidates` varchar(1000) DEFAULT NULL COMMENT '下拉选项中的值，json串，如 [{value:1,label:"男"},{value:2,label:"女"}]',
  `candidate_label` varchar(50) DEFAULT NULL COMMENT '组件显示字段名，针对下拉组件、radio-group组件等，“label”',
  `candidate_value` varchar(50) DEFAULT NULL COMMENT '组件值字段名，针对下拉组件、radio-group组件等，“value”',
  `placeholder` varchar(50) DEFAULT NULL COMMENT 'placeholder',
  `src_key` varchar(50) DEFAULT NULL COMMENT '源字段名',
  `visible` smallint(1) NOT NULL DEFAULT '1' COMMENT '界面是否可见 1: 是 0：否',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` int(11) DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` int(11) DEFAULT NULL,
  `disabled` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `field_unique` (`struct_name`,`name`)
) ENGINE=InnoDB AUTO_INCREMENT=477 DEFAULT CHARSET=utf8 COMMENT='字段元数据';
```
