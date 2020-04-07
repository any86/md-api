# 系统管理
## 校区
### [GET] 校区.编辑按钮
{{host}}/termType/findById?type_id=0bfc511116e7495bb393f902fdea01


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|campus_id|string|校区id|0bfc511116e7495bb393f902fdea01|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|object|数据||{campus_id:'0bfc511116e7495bb393f902fdea01',campus_name:'新中新',graphy_x:'123456',graphy_y:'123456'}|
|data[0]|campus_id|string|id|
|data[0]|campus_name|string|名称|
|data[0]|graphy_x|string|经度|
|data[0]|graphy_y|string|纬度|
### [POST] 校区.编辑
{{host}}/campus/edit


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|campus_id|string|校区id|0bfc511116e7495bb393f902fdea01|
|campus_name|string|校区名称|test|
|graphy_x|string|经度|123789|
|graphy_y|string|纬度|123789|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
### [POST] 校区.删除
{{host}}/campus/delete


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|campus_id|string|校区id|0bfc511116e7495bb393f902fdea01|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
### [GET] 校区.下拉框
{{host}}/campus/getListIdAndName


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|array|数据|[{campus_id:'0bfc511116e7495bb393f902fdea01',campus_name:'新中新'}]|
|data[0]|campus_id|string|id|
|data[0]|campus_name|string|名称|

### [GET] 校区.列表
{{host}}/campus/list?page=1&pageSize=10


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|page|string|页码|1|
|pageSize|string|每页显示条数|10|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|array|数据|[{campus_id:'0bfc511116e7495bb393f902fdea01',campus_name:'新中新',graphy_x:'123456',graphy_y:'123456'}]|
|data[0]|campus_id|string|id|
|data[0]|campus_name|string|名称|
|data[0]|graphy_x|string|经度|
|data[0]|graphy_y|string|纬度|

### [POST] 校区.添加
{{host}}/campus/add


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|campus_name|string|校区名称|test|
|graphy_x|string|经度|123789|
|graphy_y|string|纬度|123789|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
## 地理位置
### [GET] 地理位置.列表
{{host}}/area/list?page=1&pageSize=10


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|page|string|页码|1|
|pageSize|string|每页显示条数|10|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|dataCount|string|数据总数|10
|data|array|数据|[{area_id:'f94eb3a7e92a41dd9af1a8ae0b6ad376',area_name:'新中新1',campus_id:'0bfc511116e7495bb393f902fdea01',campus_name:'新中新',graphy_x:'12345678',graphy_y:'123455678'}]|
|data[0]|area_id|string|id|
|data[0]|area_name|string|名称|
|data[0]|campus_id||string校区id|
|data[0]|campus_name|string|校区名称|
|data[0]|graphy_x|string|经度|
|data[0]|graphy_y|string|纬度|
### [GET] 地理位置.编辑按钮
{{host}}/area/findById?area_id=0bfc511116e7495bb393f902fdea01b1


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|area_id|string|地理位置id|0bfc511116e7495bb393f902fdea01|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|object|数据|{area_id:'f94eb3a7e92a41dd9af1a8ae0b6ad376',area_name:'新中新1',campus_id:'0bfc511116e7495bb393f902fdea01',campus_name:'新中新',graphy_x:'12345678',graphy_y:'123455678'}|
|data[0]|area_id|string|id|
|data[0]|area_name|string|名称|
|data[0]|campus_id|string|校区id|
|data[0]|campus_name|string|校区名称|
|data[0]|graphy_x|string|经度|
|data[0]|graphy_y|string|纬度|
### [POST] 地理位置.添加
{{host}}/area/add


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|area_name|string|名称|test|
|campus_id|string|经度|0bfc511116e7495bb393f902fdea01|
|graphy_x|string|纬度|test
|graphy_y|string|纬度|0451-12345678|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
### [POST] 地理位置.编辑
{{host}}/area/edit


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|area_id|string|id|f94eb3a7e92a41dd9af1a8ae0b6ad376|
|area_name|string|名称|test|
|campus_id|string|经度|0bfc511116e7495bb393f902fdea01|
|graphy_x|string|纬度|test
|graphy_y|string|纬度|0451-12345678|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
### [POST] 地理位置.删除
{{host}}/area/delete


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|area_id|string|id|f94eb3a7e92a41dd9af1a8ae0b6ad376|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
### [GET] 地理位置.下拉框
{{host}}/user/getListIdAndName


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|array|数据|[{area_id:'123456789',area_name:'新中新'}]|
|data[0]|area_id|string|id|
|data[0]|area_name|string|名称|
## 经营单位
### [GET] 经营单位.列表
{{host}}/unit/list?page=1&pageSize=10


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|page|string|页码|1|
|pageSize|string|每页显示条数|10|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|dataCount|string|数据总数|10
|data|array|数据|[{unit_id:'4d11d5fd98e6492890df56d4f76306fc',unit_name:'新中新1',campus_id:'0bfc511116e7495bb393f902fdea01',campus_name:'新中新',unit_contact:'负责人',unit_phone:'0451-12345678',unit_mobile:'12345678901'}]|
|data[0]|unit_id|string|id|
|data[0]|unit_name|string|名称|
|data[0]|campus_id|string|校区id|
|data[0]|campus_name|string|校区名称|
|data[0]|unit_contact|string|负责人|
|data[0]|unit_phone|string|电话|
|data[0]|unit_mobile|string|手机号|
### [GET] 经营单位.编辑按钮
{{host}}/unit/findById?unit_id=0bfc511116e7495bb393f902fdea01b1


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|campus_id|string|校区id|0bfc511116e7495bb393f902fdea01|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|object|数据|{unit_id:'4d11d5fd98e6492890df56d4f76306fc',unit_name:'新中新1',campus_id:'0bfc511116e7495bb393f902fdea01',campus_name:'新中新',unit_contact:'负责人',unit_phone:'0451-12345678',unit_mobile:'12345678901'}|
|data[0]|unit_id|string|id|
|data[0]|unit_name|string|名称|
|data[0]|campus_id|string|校区id|
|data[0]|campus_name|string|校区名称|
|data[0]|unit_contact|string|负责人|
|data[0]|unit_phone|string|电话|
|data[0]|unit_mobile|string|手机号|

### [POST] 经营单位.添加
{{host}}/unit/add


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|unit_name|string|单位名称|test|
|campus_id|string|校区|0bfc511116e7495bb393f902fdea01|
|unit_contact|string|负责人|test
|unit_phone|string|电话|0451-12345678|
|unit_mobile|string|手机|12345678901|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
### [POST] 经营单位.编辑
{{host}}/unit/edit


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|unit_id|string|单位id|4d11d5fd98e6492890df56d4f76306fc|
|unit_name|string|单位名称|test|
|campus_id|string|校区|0bfc511116e7495bb393f902fdea01|
|unit_contact|string|负责人|test
|unit_phone|string|电话|0451-12345678|
|unit_mobile|string|手机|12345678901|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
### [POST] 经营单位.删除
{{host}}/unit/delete


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|unit_id|string|单位id|0bfc511116e7495bb393f902fdea01|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
### [GET] 经营单位.下拉框
{{host}}/unit/getListIdAndName


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|array|数据|[{unit_id:'123456',unit_name:'单位名称'}]|
|data[0]|unit_id|string|id|
|data[0]|unit_name|string|名称|
## 用户
### [GET] 用户.列表
{{host}}/user/list?page=1&pageSize=10


### [GET] 用户.编辑按钮
{{host}}/user/findById?user_id=aseds34dhgjskhs45d6e21wsfde1


### [POST] 用户.添加
{{host}}/user/add


### [POST] 用户.编辑
{{host}}/user/edit


### [POST] 用户.删除
{{host}}/user/delete


### [POST] 用户.修改密码
{{host}}/user/editPassword


### [POST] 用户.重置密码
{{host}}/user/resetPassword


### [GET] 用户.用户下拉框
{{host}}/user/getListIdAndName


## 角色
### [GET] 角色.列表
{{host}}/role/list?page=1&pageSize=10


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|page|string|页码|1|
|pageSize|string|每页显示条数|10|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|dataCount|string|数据总数|10
|data|array|数据|[{role_id:'0bfc511116e7495bb393f902fdea01',role_name:'系统管理员',role_level:'1'}]|
|data[0]|role_id|string|id|
|data[0]|role_name|string|名称|
|data[0]|role_level|string|角色等级|
### [GET] 角色.编辑按钮
{{host}}/role/findById?role_id=1001


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|role_id|string|id|0bfc511116e7495bb393f902fdea01|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|object|数据||{role_id:'0bfc511116e7495bb393f902fdea01',role_name:'系统管理员',role_level:'1'}|
|data[0]|role_id|string|id|
|data[0]|role_name|string|名称|
|data[0]|role_level|string|角色等级|
### [POST] 角色.添加
{{host}}/role/add


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|role_name|string|名称|test|
|role_level|string|等级|2|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
### [POST] 角色.编辑
{{host}}/role/edit


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|role_id|string|id|0bfc511116e7495bb393f902fdea01|
|role_name|string|名称|系统管理员|
|role_level|string|等级|1|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
### [POST] 角色.删除
{{host}}/role/delete


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|role_id|string|id|0bfc511116e7495bb393f902fdea01|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
### [GET] 角色.下拉框
{{host}}/role/getListIdAndName


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|array|数据|[{role_id:'0bfc511116e7495bb393f902fdea01',role_name:'系统管理员'}]|
|data[0]|role_id|string|id|
|data[0]|role_name|string|名称|

### [GET] 角色.列表-权限设置按钮
{{host}}/roleAuthority/listForMenu?role_id=1001


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|role_id|string|角色id|1001|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|dataCount|string|数据总数|10
|data|array|数据|[{menu_id:'1001',menu_name:'测试1-3',parent_id:'1001',menu_type:'',menu_value:'',menu_state:'',menu_order:'103',menu_url:'',menu_icon:'',role_ids:'',target:'',hasMenu:'false',subMenu:'[]',memo:''}]|
|data[0]|menu_idstring||id|
|data[0]|menu_name|string|名称|
|data[0]|parent_id|string|上级菜单|
|data[0]|menu_type|string|类型|
|data[0]|menu_value|string|英文名称|
|data[0]|menu_state|string|状态|
|data[0]|menu_order|string|顺序|
|data[0]|menu_url|string|连接|
|data[0]|menu_icon|string|图标|
|data[0]|role_ids|string|角色ids|
|data[0]|target|string|菜单树标识|
|data[0]|hasMenu|boolean|是否有该菜单|
|data[0]|subMenu|array|下级菜单|
|data[0]|memo|string|备注|
### [POST] 角色.权限设置-提交
{{host}}/roleAuthority/add


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|role_id|string|角色id|1002|
|menu_ids|array|菜单id|['1001','100101']|


#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
## 菜单
### [GET] 菜单.列表
{{host}}/menu/list?page=1&pageSize=10


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|page|string|页码|1|
|pageSize|string|每页显示条数|10|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|dataCount|string|数据总数|10
|data|array|数据|[{menu_id:'100101',menu_name:'测试1-1',menu_value:'',menu_order:'101',menu_state:'1',menu_type:'',menu_url:'',parent_id:'1001',parent_name:'测试1',menu_icon:''}]|
|data[0]|menu_id|string|id|
|data[0]|menu_name|string|名称|
|data[0]|menu_value|string|英文名称|
|data[0]|menu_order|int|顺序|
|data[0]|menu_state|int|状态|
|data[0]|menu_type|string|类型|
|data[0]|menu_url|string|连接|
|data[0]|parent_id|string|上级菜单id|
|data[0]|parent_name|string|上级菜单名称|
|data[0]|menu_icon|string|图标|
### [GET] 菜单.编辑按钮
{{host}}/menu/findById?menu_id=1001


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|menu_id|string|id|100101|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|object|数据|{menu_id:'100101',menu_name:'测试1-1',menu_value:'',menu_order:'101',menu_state:'1',menu_type:'',menu_url:'',parent_id:'1001',parent_name:'测试1',menu_icon:''}|
|data[0]|menu_id|string|id|
|data[0]|menu_name|string|名称|
|data[0]|menu_value|string|英文名称|
|data[0]|menu_order|int|顺序|
|data[0]|menu_state|int|状态|
|data[0]|menu_type|string|类型|
|data[0]|menu_url|string|连接|
|data[0]|parent_id|string|上级菜单id|
|data[0]|parent_name|string|上级菜单名称|
|data[0]|menu_icon|string|图标|

### [POST] 菜单.添加
{{host}}/menu/add


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|menu_name|string|名称|test|
|menu_value|string|英文名称||
|menu_order|string|顺序|1|
|menu_state|string|状态|1|
|menu_type|string|类型||
|menu_url|string|连接||
|parent_id|string|上级菜单||
|menu_icon|string|图标||

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
### [POST] 菜单.编辑
{{host}}/menu/edit


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|menu_id|string|id|1001|
|menu_name|string|名称|test|
|menu_value|string|英文名称||
|menu_order|int|顺序|1|
|menu_state|int|状态|1|
|menu_type|string|类型||
|menu_url|string|连接||
|parent_id|string|上级菜单||
|menu_icon|string|图标||

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
### [POST] 菜单.删除
{{host}}/menu/delete


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|menu_id|string|id|1021201|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
### [GET] 菜单.一级菜单下拉框
{{host}}/menu/getListSubIdAndName?menu_id=1001


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|array|数据|[{menu_id:'1001',menu_name:'测试1'}]|
|data[0]|menu_id|string|id|
|data[0]|menu_name|string|名称|
### [GET] 菜单.登录左侧菜单列表
{{host}}/menu/listForMenu


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|array|数据|[{menu_id:'100101',menu_name:'测试1-1',menu_value:'',menu_order:'101',menu_state:'1',menu_type:'',menu_url:'',parent_id:'1001',parent_name:'测试1',menu_icon:'',role_id:'1001，1002'}]|
|data[0]|menu_id|string|id|
|data[0]|menu_name|string|名称|
|data[0]|menu_value|string|英文名称|
|data[0]|menu_order|int|顺序|
|data[0]|menu_state|int|状态|
|data[0]|menu_type|string|类型|
|data[0]|menu_url|string|连接|
|data[0]|parent_id|string|上级菜单id|
|data[0]|parent_name|上级菜单名称|
|data[0]|menu_icon|string|图标|
|data[0]|role_id|string|菜单授权角色|
### [GET] 菜单.子菜单下拉框
{{host}}/menu/getListParentIdAndName


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|menu_id|string|id|如果需要获取指定的菜单下的子集需要传递menu_id

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|array|数据|[{menu_id:'1001',menu_name:'测试1'}]|
|data[0]|menu_id|string|id|
|data[0]|menu_name|string|名称|
### [GET] 菜单.菜单树
{{host}}/menu/listForMenuTree


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|array|数据|[{menu_id:'100101',menu_name:'测试1-1',menu_value:'',menu_order:'101',menu_state:'1',menu_type:'',menu_url:'',parent_id:'1001',parent_name:'测试1',menu_icon:'',role_id:'1001，1002'}]|
|data[0]|menu_id|string|id|
|data[0]|menu_name|string|名称|
|data[0]|menu_value|string|英文名称|
|data[0]|menu_order|int|顺序|
|data[0]|menu_state|int|状态|
|data[0]|menu_type|string|类型|
|data[0]|menu_url|string|连接|
|data[0]|parent_id|string|上级菜单id|
|data[0]|parent_name|上级菜单名称|
|data[0]|menu_icon|string|图标|
|data[0]|role_id|string|菜单授权角色|
## 校园地图
### [POST] 校园地图.上传
{{host}}/campusMap/uploadMap?fileFolder=campusMap


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|fileFolder|string|目录名|campusMap|
|file|file|文件|test.txt|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|object|数据|{map_id:'34e10c2ec532452f86cb46666b053b34',map_name:'哈工大.jfif',creator:'5af0f0f8245e47d3afdc2bd5696fa0c9',create_date:'2020-02-12 13:25:01',map_path:'/uploadFiles/file/campusMap/73be8060e7174478a55b64a0698538c0.jfif'}|
|data[0]|map_id|id|
|data[0]|map_name|名称|
|data[0]|creator|创建人|
|data[0]|create_date|创建时间|
|data[0]|map_path|路径|


### [GET] 校园地图.获取地图
{{host}}/campusMap/findLastInfo


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|object|数据|{map_id:'34e10c2ec532452f86cb46666b053b34',map_name:'哈工大.jfif',creator:'5af0f0f8245e47d3afdc2bd5696fa0c9',create_date:'2020-02-12 13:25:01',map_path:'/uploadFiles/file/campusMap/73be8060e7174478a55b64a0698538c0.jfif'}|
|data[0]|map_id|string|id|
|data[0]|map_name|string|名称|
|data[0]|creator|string|创建人|
|data[0]|create_date|string|创建时间|
|data[0]|map_path|string|路径|
### [POST] 校园地图.删除
{{host}}/campusMap/delete


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|map_id|string|id|0bfc511116e7495bb393f902fdea01|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
## 终端类型
### [GET] 终端类型.列表
{{host}}/termType/list?page=1&pageSize=10


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|page|string|页码|1|
|pageSize|string|每页显示条数|10|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|dataCount|string|数据总数|10
|data|array|数据|[{type_id:'1001',type_name:'主机',parent_id:'1002',parent_name:'示例'}]|
|data[0]|type_id|string|id|
|data[0]|type_name|string|名称|
|data[0]|parent_id|string|上级id|
|data[0]|parent_name|string|上级名称|
### [GET] 终端类型.下拉框
{{host}}/termType/getListIdAndName


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|array|数据|[{type_id:'1001',type_name:'主机'}]|
|data[0]|type_id|string|id|
|data[0]|type_name|string|名称|
### [POST] 终端类型.删除
{{host}}/termType/delete


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|type_id|string|id|0bfc511116e7495bb393f902fdea01|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
### [POST] 终端类型.添加
{{host}}/termType/add


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|type_name|string|名称|test|
|parent_id|string|上级||


#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
### [POST] 终端类型.编辑
{{host}}/termType/edit


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|type_id|string|id|45hgfh45dhhehd4562|
|type_name|string|名称|test|
|parent_id|string|上级||


#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
### [GET] 终端类型.编辑按钮
{{host}}/termType/findById?type_id=1001


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|type_id|string|id|1001|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|object|数据||{type_id:'1001',type_name:'主机',parent_id:'',parent_name:'',monitor_items:'',monitor_remotes:''}|
|data[0]|type_id|string|id|
|data[0]|type_name|string|名称|
|data[0]|parent_id|string|一级分类id|
|data[0]|parent_name|string|一级分类名称|
|data[0]|monitor_items|string|监控项|
|data[0]|monitor_remotes|string|远程控制项|
### [GET] 终端类型.二级下拉框
{{host}}/termType/getListISubIdAndName


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|array|数据|[{type_id:'1001',type_name:'主机'}]|
|data[0]|type_id|string|id|
|data[0]|type_name|string|名称|
### [GET] 终端类型.一级下拉框
{{host}}/termType/getListIParentIdAndName


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|array|数据|[{type_id:'1001',type_name:'主机'}]|
|data[0]|type_id|string|id|
|data[0]|type_name|string|名称|
### [GET] 终端类型.终端类型下拉框-新
{{host}}/termType/getListIdAndNameByTypeId


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|array|数据|[{type_id:'1001',type_name:'主机'}]|
|data[0]|type_id|string|id|
|data[0]|type_name|string|名称|
## 终端型号
### [GET] 终端型号.列表
{{host}}/termModel/list?page=1&pageSize=10


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|page|string|页码|1|
|pageSize|string|每页显示条数|10|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|dataCount|string|数据总数|10
|data|array|数据|[{model_id:'1001',model_name:'',type_id:'',type_name:'',parent_type_id:'',parent_type_name:'',model:'',memo:''}]|
|data[0]|model_id|string|id|
|data[0]|model_name|string|名称|
|data[0]|type_id|string|二级分类id|
|data[0]|type_name|string|二级分类名称|
|data[0]|parent_type_id|string|一级分类id|
|data[0]|parent_type_name|string|一级分类名称|
|data[0]|model|string|型号|
|data[0]|memo|string|备注|
### [GET] 终端型号.下拉框
{{host}}/termModel/getListIdAndName


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|array|数据|[{model_id:'1001',model_name:'12323'}]|
|data[0]|model_id|string|id|
|data[0]|model_name|string|名称|
### [POST] 终端型号.删除
{{host}}/termModel/delete


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|model_id|string|id|0bfc511116e7495bb393f902fdea01|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
### [POST] 终端型号.添加
{{host}}/termModel/add


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|model_name|string|名称|test|
|parent_type_id|string|一级分类||
|type_id|string|二级分类||
|model|string|型号||


#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
### [POST] 终端型号.编辑
{{host}}/termModel/edit


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|model_id|string|id||
|model_name|string|名称|test|
|parent_type_id|string|一级分类||
|type_id|string|二级分类||
|model|string|型号||


#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
### [GET] 终端型号.编辑按钮
{{host}}/termModel/findById?model_id=0bfc511116e7495bb393f902fdea01


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|model_id|string|id|0bfc511116e7495bb393f902fdea01|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|object|数据||{model_id:'1001',model_name:'',type_id:'',type_name:'',parent_type_id:'',parent_type_name:'',model:'',memo:''}|
|data[0]|model_id|string|id|
|data[0]|model_name|string|名称|
|data[0]|type_id|string|二级分类id|
|data[0]|type_name|string|二级分类名称|
|data[0]|parent_type_id|string|一级分类id|
|data[0]|parent_type_name|string|一级分类名称|
|data[0]|model|string|型号|
|data[0]|memo|string|备注|
## 终端版本
### [GET] 终端版本.列表
{{host}}/termVersion/list?page=1&pageSize=10


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|page|string|页码|1|
|pageSize|string|每页显示条数|10|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|dataCount|string|数据总数|10
|data|array|数据|[{version_id:'1001',version_name:'',type_id:'',type_name:'',parent_type_id:'',parent_type_name:'',update_date:'',memo:''model_id:'[\"7ba2b98f4640420d97f1a7e4d6791e79\", \"7ba2b98f4640420d97f1a7e4d6791e78\"]',model_name:'测试2,测试1'}]|
|data[0]|version_id|string|id|
|data[0]|version_name|string|名称|
|data[0]|type_id|string|二级分类id|
|data[0]|type_name|string|二级分类名称|
|data[0]|parent_type_id|string|一级分类id|
|data[0]|parent_type_name|string|一级分类名称|
|data[0]|update_date|string|更新时间|
|data[0]|model_id|string|型号id|
|data[0]|model_name|string|型号名称|
|data[0]|memo|string|更新说明|
### [GET] 终端版本.下拉框
{{host}}/termVersion/getListIdAndName


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|array|数据|[{version_id:'1001',version_name:'12323'}]|
|data[0]|version_id|string|id|
|data[0]|version_name|string|名称|
### [POST] 终端版本.删除
{{host}}/termModel/delete


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|version_id|string|id|0bfc511116e7495bb393f902fdea01|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
### [POST] 终端版本.添加
{{host}}/termVersion/add


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|version_name|string|名称|test|
|parent_type_id|string|一级分类||
|type_id|string|二级分类||
|model_id|array|型号|["1","2"]|
|memo|string|更新说明||


#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
### [POST] 终端版本.编辑
{{host}}/termVersion/edit


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|version_id|string|id||
|version_name|string|名称|test|
|parent_type_id|string|一级分类||
|type_id|string|二级分类||
|model_id|array|型号|["1","2"]|
|memo|string|更新说明||


#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
### [GET] 终端版本.编辑按钮
{{host}}/termVersion/findById?version_id=1001


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|version_id|string|id|0bfc511116e7495bb393f902fdea01|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|object|数据||{version_id:'1001',version_name:'',type_id:'',type_name:'',parent_type_id:'',parent_type_name:'',version:'',memo:''}|
|data[0]|version_id|string|id|
|data[0]|version_name|string|名称|
|data[0]|type_id|string|二级分类id|
|data[0]|type_name|string|二级分类名称|
|data[0]|parent_type_id|string|一级分类id|
|data[0]|parent_type_name|string|一级分类名称|
|data[0]|model_id|string|型号id|
|data[0]|memo|string|更新说明|
## 终端信息
### [GET] 终端信息.列表
{{host}}/terminal/list?page=1&pageSize=10


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|page|string|页码|1|
|pageSize|string|每页显示条数|10|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|dataCount|string|数据总数|10
|data|array|数据|[{term_id:'1001',term_name:'',type_id:'',type_name:'',parent_type_id:'',parent_type_name:'',model_id:'',model_name:'',version_id:'',version_name:'',memo:''}]|
|data[0]|term_id|int|id|
|data[0]|term_name|string|名称|
|data[0]|type_id|string|二级分类id|
|data[0]|type_name|string|二级分类名称|
|data[0]|parent_type_id|string|一级分类id|
|data[0]|parent_type_name|string|一级分类名称|
|data[0]|model_id|string|型号id|
|data[0]|model_name|string|型号|
|data[0]|version_id|string|版本id|
|data[0]|version_name|string|版本|
|data[0]|memo|string|备注|
### [GET] 终端信息.上级终端下拉框(弃用)
{{host}}/terminal/getListParentIdAndName


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|array|数据|[{term_id:'1001',term_name:'12323'}]|
|data[0]|term_id|string|id|
|data[0]|term_name|string|名称|
### [POST] 终端信息.删除
{{host}}/terminal/delete


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|term_id|int|id|10012|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
### [POST] 终端信息.添加
{{host}}/terminal/add


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|term_name|string|名称|test|
|parent_type_id|string|一级分类||
|type_id|string|二级分类||
|parent_id|int|上级终端|示例如果上级终端是两级的1，2则为2|
|device_code|string|设备编号||
|model_id|string|型号||
|version_id|string|版本||
|term_osinfo|string|操作系统||
|term_dbinfo|string|数据库||
|term_ip|string|IP||
|term_port|string|端口||
|area_id|string|位置||
|graphy_x|string|经度||
|graphy_y|string|纬度||
|campus_graphy_x|string|校园地图经度||
|campus_graphy_y|string|校园地图纬度||
|asset_code|string|资产编号||
|production_date|string|出厂日期||
|warranty_date|string|三包日期||
|unit_id|string|责任单位||
|psam_code|string|psam卡||
|service_platform|string|服务平台||
|parent_ids|array|上级终端层级|[1,2]|
|parent_names|array|上级终端名称|["一级","二级"]|


#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
### [POST] 终端信息.编辑
{{host}}/terminal/edit


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|term_id|int|id||
|term_name|string|名称|test|
|parent_type_id|string|一级分类||
|type_id|string|二级分类||
|parent_id|int|上级终端|示例如果上级终端是两级的1，2则为2|
|device_code|string|设备编号||
|model_id|string|型号||
|version_id|string|版本||
|term_osinfo|string|操作系统||
|term_dbinfo|string|数据库||
|term_ip|string|IP||
|term_port|string|端口||
|area_id|string|位置||
|graphy_x|string|经度||
|graphy_y|string|纬度||
|campus_graphy_x|string|校园地图经度||
|campus_graphy_y|string|校园地图纬度||
|asset_code|string|资产编号||
|production_date|string|出厂日期||
|warranty_date|string|三包日期||
|unit_id|string|责任单位||
|psam_code|string|psam卡||
|service_platform|string|服务平台||
|parent_ids|array|上级终端层级|[1,2]|
|parent_names|array|上级终端名称|["一级","二级"]|


#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
### [GET] 终端信息.编辑按钮
{{host}}/terminal/findById?term_id=101101


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|version_id|string|id|0bfc511116e7495bb393f902fdea01|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|object|数据||{}|

|data[0]|term_id|int|id||
|data[0]|term_name|string|名称|test|
|data[0]|parent_type_id|string|一级分类||
|data[0]|parent_type_name|string|一级分类名称||
|data[0]|type_id|string|二级分类||
|data[0]|type_name|string|二级分类名称||
|data[0]|parent_id|int|上级终端||
|data[0]|device_code|string|设备编号||
|data[0]|model_id|string|型号||
|data[0]|version_id|string|版本||
|data[0]|term_osinfo|string|操作系统||
|data[0]|term_dbinfo|string|数据库||
|data[0]|term_ip|string|IP||
|data[0]|term_port|string|端口||
|data[0]|area_id|string|位置||
|data[0]|area_name|string|位置名称||
|data[0]|graphy_x|string|经度||
|data[0]|graphy_y|string|纬度||
|data[0]|campus_graphy_x|string|校园地图经度||
|data[0]|campus_graphy_y|string|校园地图纬度||
|data[0]|asset_code|string|资产编号||
|data[0]|production_date|string|出厂日期||
|data[0]|warranty_date|string|三包日期||
|data[0]|unit_id|string|责任单位||
|data[0]|unit_name|string|责任单位名称||
|data[0]|psam_code|string|psam卡||
|data[0]|service_platform|string|服务平台||
|data[0]|run_status|string|运行状态||
|data[0]|is_online|string|是否在线||
|data[0]|update_date|string|更新时间||
|data[0]|status_update_date|string|状态更新时间||
|data[0]|memo|string|备注|
### [GET] 终端信息.上级终端下拉框
{{host}}/terminal/getListSubIdAndName?term_id=101112


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|term_id|int|终端id|1001|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|array|数据|[{term_id:'1001',term_name:'12323'}]|
|data[0]|term_id|string|id|
|data[0]|term_name|string|名称|
# 数据中心
## 免责声明
### [GET] 免责声明.列表
{{host}}/declare/findById?declare_id=1002


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|declare_id|string|id|1001|


#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|object|数据|{declare_id:'1001',declare_content:'等等等',declare_value:'true',declare_date:'2020-02-10 09:07:28'}|
|data[0]|declare_id|string|id|
|data[0]|declare_content|string|内容|
|data[0]|declare_value|boolean|是否同意声明|
|data[0]|declare_date|string|变更日期|
### [POST] 免责声明.保存
{{ip}}/api/datacenter/declare/edit?declare_id=1001&declare_value=true


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|declare_id|string|id|1001|
|declare_value|string|是否同意条款|true|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
## 协议条款
### [GET] 协议条款.列表
{{host}}/declare/findById?declare_id=1002


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|declare_id|string|id|1002|


#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|object|数据|{declare_id:'1002',declare_content:'等等等',declare_value:'true',declare_date:'2020-02-10 09:07:28'}|
|data[0]|declare_id|string|id|
|data[0]|declare_content|string|内容|
|data[0]|declare_value|boolean|是否同意协议条款|
|data[0]|declare_date|string|变更日期|
### [POST] 协议条款.保存
{{host}}/declare/edit


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|declare_id|string|id|1002|
|declare_value|string|是否同意条款|true|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
## 信息项设置
### [GET] 信息项设置.列表
{{host}}/information/list


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|


#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|array|数据|[{information_id:'1001',information_name:'位置信息',information_value:'true',information_date:''}]|
|data[0]|information_id|string|id|
|data[0]|information_name|string|名称|
|data[0]|information_value|boolean|是否同意|
|data[0]|information_date|string|修改日期|


### [POST] 信息项设置.保存
{{host}}/information/edit


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|data|array|数据|[{information_id:'1001',information_name:'位置信息',information_value:'true'}]|
|data[0]|information_id|string|id|
|data[0]|information_name|string|名称|
|data[0]|information_value|boolean|是否同意|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
## 操作记录
### [GET] 操作记录.列表
{{host}}/operation/list?page=1&pageSize=10


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|page|string|页码|1|
|pageSize|string|每页显示条数|10|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|dataCount|string|数据总数|10
|data|array|数据|[{operation_id:'048ad1939998453da01e2b555f74f8f9',operator:'5af0f0f8245e47d3afdc2bd5696fa0c9',operator_name:'admin',operation_date:'2020-02-10 09:49:21',memo:'同意授权：位置信息，性能信息  取消授权：状态信息，体检信息，业务信息'}]|
|data[0]|operation_id|String|id|
|data[0]|operator|String|操作人id|
|data[0]|operator_name|String|操作人名称|
|data[0]|operation_date|String|操作日期|
|data[0]|memo|String|操作内容|
## 请求记录
### [GET] 请求记录.列表
{{host}}/request/list?page=1&pageSize=10


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|page|string|页码|1|
|pageSize|string|每页显示条数|10|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|dataCount|string|数据总数|10
|data|array|数据|[{request_id:'',duration:'',result:'',description:'',result_description:'',request_date:'2020-02-10 09:49:21',memo:''}]|
|data[0]|request_id|String|id|
|data[0]|duration|String|请求时长|
|data[0]|request_date|String|请求日期|
|data[0]|result|boolean|请求结果----不用展示|
|data[0]|description|String|描述----不用展示|
|data[0]|result_description|String|请求结果|
|data[0]|memo|String|请求内容|
# 首页信息
## 登录信息
## 快捷入口信息
## 运行状态统计
## 七天异常状态统计
## 当前告警
## 按天查看异常数量
## 快捷项目显示接口
# 监控中心
## 监控记录
### [GET] 监控记录.列表
{{host}}/monitorLog/list?page=1&pageSize=10


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|page|string|页码|1|
|pageSize|string|每页显示条数|10|
|create_date|string|检索条件：创建时间|2020-01-01|
|parent_type_id|string|检索条件：上级分类||
|type_id|string|检索条件终端分类||
|keywords|string|检索条件：终端编号/终端名称||



#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|array|数据|[{
"monlogid": "b9ebb552d115494692cb15ab9094e14c",
"termid": "101151",
"term_name": "物联网-test16",
"event_id": "9020",
"event_name": "内存使用率过高",
"oldrunstate": "6",
"oldrunstate_name": "严重异常",
"nowrunstate": "1",
"nowrunstate_name": "正常",
"infocode": "c4c33d44508348948c99bf04ef559a99",
"statusupdatetime": "2020-04-01 15:30:37",
"memo": "主机视图"
}]|
|data[0]|monlogid|string|id----不用展示|
|data[0]|statusupdatetime|string|创建时间|
|data[0]|termid|string|终端编号|
|data[0]|term_name|string|终端名称|
|data[0]|term_name|string|终端名称|
|data[0]|type_name|string|终端分类|
|data[0]|parent_type_name|string|上级分类|
|data[0]|oldrunstate_name|string|原状态|
|data[0]|nowrunstate_name|string|现状态|
|data[0]|event_id|string|事件编号|
|data[0]|event_name|string|事件名称|
|data[0]|event_log_status|string|事件状态|
|data[0]|memo|string|备注|

## 拓扑图状态
## 拓扑图三级列表
## 拓扑展示内容
## 设备视图列表
## 设备列表按类型筛选
# 告警中心
## 告警视图-列表视图
### [GET] 告警视图-列表视图.列表
{{host}}/alarmCenter/listAlarming?page=1&pageSize=10&start_date=2020-04-03&end_date=2020-04-03


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|page|string|页码|1|
|pageSize|string|每页显示条数|10|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|array|数据|[{
"type_name": "主机",
"term_name": "测试",
"alarm_content": "告警测试1",
"type_id": "1001",
"alarm_date": "2020-02-28 15:25:34",
"alarm_type_name": "短信，邮箱，微信",
"term_id": 101101,
"alarm_id": "7a9cb08843bf417f874f8748eccfb3c6",
"alarm_center_id": "1001"
}]|
|data[0]|alarm_center_id|string|id|
|data[0]|term_id|int|终端id|
|data[0]|term_name|string|终端名称|
|data[0]|term_id|int|终端类型id|
|data[0]|type_name|string|终端类型名称|
|data[0]|alarm_id|string|规则id|
|data[0]|alarm_content|string|告警内容|
|data[0]|alarm_type_name|string|告警方式|
|data[0]|alarm_date|string|告警日期|
### [GET] 告警视图-列表视图.查看-基本信息
{{host}}/alarmCenter/findById?alarm_center_id=1001


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|alarm_center_id|string|id|1001|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|object|数据|{
"alarm_name": "告警测试1",
"contact_name": "zhang,test",
"alarm_date": "2020-02-28 15:25:34",
"alarm_type_name": "短信，邮箱，微信",
"term_id": 101101,
"contact_id": "[\"1\", \"2\"]",
"alarm_upgrade": true,
"term_name": "测试",
"event_id": "1009",
"alarm_content": "告警测试1",
"upgrade_contact_name": "zhang",
"alarm_status": 1,
"upgrade_contact_id": "[\"1\"]",
"alarm_id": "7a9cb08843bf417f874f8748eccfb3c6",
"alarm_current_count": 1,
"alarm_center_id": "1001",
"alarm_relieve": 0
}|
|data[0]|alarm_center_id|string|id|
|data[0]|term_id|int|终端id|
|data[0]|term_name|string|终端名称
|data[0]|area_name|string|位置|
|data[0]|event_id|string|事件id|
|data[0]|alarm_id|string|告警规则id|
|data[0]|alarm_name|string|告警规则名称|
|data[0]|alarm_date|string|告警日期|
|data[0]|alarm_duration|int|告警持续时间|
|data[0]|alarm_notice_count|int|通知次数|
|data[0]|alarm_content|string|告警内容|
|data[0]|alarm_type_name|string|告警方式|
|data[0]|contact_name|string|通知接收人|
|data[0]|alarm_upgrade|boolean|是否升级|
|data[0]|upgrade_contact_name|string|升级通知接收人|
|data[0]|alarm_end_date|string|告警解除日期|
### [GET] 告警视图-列表视图.通知记录
{{host}}/alarmLog/listAll?alarm_center_id=1001


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|alarm_center_id|string|告警中心id|1001|


#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|array|数据|[{"log_id": "100101",
"alarm_date": "2020-02-28 15:28:51",
"alarm_content": "告警测试",
"alarm_type": "mobile",
"alarm_type_name": "短信",
"alarm_upgrade": false,
"alarm_result": "已通知",
"alarm_contact": "测试1，测试2",
"alarm_upgrade_contact": "",
"alarm_center_id": "1001"
}]|
|data[0]|log_id|string|id|
|data[0]|alarm_date|string|通知时间|
|data[0]|alarm_content|string|通知内容|
|data[0]|alarm_type|string|通知方式英文|
|data[0]|alarm_type_name|string|通知方式名称|
|data[0]|alarm_upgrade|boolean|是否升级：是true  否false|
|data[0]|alarm_result|string|通知结果|
|data[0]|alarm_contact|string|通知接收人|
|data[0]|alarm_upgrade_contact|string|升级通知接收人|
## 告警规则
### [GET] 告警规则.编辑按钮
{{host}}/alarm/findById?alarm_id=7a9cb08843bf417f874f8748eccfb3c6


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|alarm_id|string|id|7a9cb08843bf417f874f8748eccfb3c6|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|object|数据|{alarm_id:'0bfc511116e7495bb393f902fdea01',alarm_name:'一般警告',contact_id:["1", "2"],alarm_by_mobile:'true',alarm_by_email:'false',alarm_by_wechat:'false',alarm_count:'1',alarm_minterval:'5',alarm_relieved:'true',alarm_upgrade:'0',upgrade_contact_id:["1", "2"],update_date:'',operator:'',memo:''}|
|data[0]|alarm_id|string|id|
|data[0]|alarm_name|string|名称|
|data[0]|contact_id|array|联系人|
|data[0]|alarm_by_mobile|boolean|是否短信告警：是true，否false|
|data[0]|alarm_by_email|boolean|是否邮箱告警：是true，否false|
|data[0]|alarm_by_wechat|boolean|是否微信告警：是true，否false|
|data[0]|alarm_count|int|告警数量|
|data[0]|alarm_minterval|int|告警间隔（以小时为单位）|
|data[0]|alarm_relieved|boolean|是否允许手动解除|
|data[0]|alarm_upgrade|boolean|是否升级|
|data[0]|upgrade_contact_id|array|升级联系人|
|data[0]|update_date|string|操作时间|
|data[0]|operator|string|操作员|
|data[0]|memo|string|备注|
### [POST] 告警规则.编辑
{{host}}/alarm/edit


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|alarm_id|string|id||
|alarm_name|string|名称||
|contact_id|array|联系人id|["",""]|
|contact_name|array|联系人名称|["",""]|
|alarm_by_mobile|boolean|是否短信告警|true|
|alarm_by_email|boolean|是否邮箱告警|false|
|alarm_by_wechat|boolean|是否微信告警|false|
|alarm_count|int|告警数|2|
|alarm_minterval|int|告警间隔|5|
|alarm_relieved|boolean|允许手动解除：false不允许true允许|true|
|alarm_upgrade|boolean|是否升级|false|
|upgrade_contact_id|array|升级联系人id|["",""]|
|upgrade_contact_name|array|升级联系人名称|["",""]|
|memo|string|备注||

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
### [POST] 告警规则.删除
{{host}}/alarm/delete


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|alarm_id|string|id|0bfc511116e7495bb393f902fdea01|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
### [GET] 告警规则.下拉框
{{host}}/alarm/getListIdAndName


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|array|数据|[{alarm_id:'0bfc511116e7495bb393f902fdea01',alarm_name:'一般告警'}]|
|data[0]|alarm_id|string|id|
|data[0]|alarm_name|string|名称|

### [GET] 告警规则.列表
{{host}}/alarm/list?page=1&pageSize=10


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|page|string|页码|1|
|pageSize|string|每页显示条数|10|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|array|数据|[{alarm_id:'0bfc511116e7495bb393f902fdea01',alarm_name:'一般警告',alarm_count:'1',alarm_status:'true',alarm_minterval:'5',alarm_type_name:'短信，微信'memo:''}]|
|data[0]|alarm_id|string|id|
|data[0]|alarm_name|string|名称|
|data[0]|alarm_type_name|string|告警方式|
|data[0]|alarm_count|ing|告警数量|
|data[0]|alarm_minterval|int|告警间隔（以小时为单位）|
|data[0]|alarm_status|boolean|告警规则数状态true已启用false已停用|
|data[0]|memo|string|备注|
### [POST] 告警规则.添加
{{host}}/alarm/add


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|alarm_name|string|名称||
|contact_id|array|联系人id|["",""]|
|contact_name|array|联系人名称|["",""]|
|alarm_by_mobile|boolean|是否短信告警|true|
|alarm_by_email|boolean|是否邮箱告警|false|
|alarm_by_wechat|boolean|是否微信告警|false|
|alarm_count|int|告警数|2|
|alarm_minterval|int|告警间隔|5|
|alarm_relieved|boolean|允许手动解除：false不允许true允许|true|
|alarm_upgrade|boolean|是否升级|false|
|upgrade_contact_id|array|升级联系人id|["",""]|
|upgrade_contact_name|array|升级联系人名称|["",""]|
|memo|string|备注||

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
### [GET] 告警规则.关联事件-未关联
{{host}}/event/listForAlarm?page=1&pageSize=10&event_set=unsettled&alarm_id=be3345846c4541dfb860ae7d56e7ca7b


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|page|string|页码|1|
|pageSize|string|每页显示条数|10|
|alarm_id|string|id|be3345846c4541dfb860ae7d56e7ca7b|
|event_set|string|未关联事件type|unsettled|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|array|数据|[{event_id:'1001',event_name:'事件',classify:'',term_type:'',term_type_name:'',description:'',event_level:'1',event_level_name:'',status_id:'',status_name:'0',alarm_id:'',alarm_name:''}]|
|data[0]|event_id|string|id|
|data[0]|event_name|string|名称|
|data[0]|classify|string|类别|
|data[0]|term_type|string|终端类型|
|data[0]|term_type_name|string|终端类型名称|
|data[0]|description|string|描述|
|data[0]|event_level|string|事件等级|
|data[0]|status_id|string|状态|
|data[0]|status_name|string|状态名称|
|data[0]|alarm_id|string|告警id|
|data[0]|alarm_name|string|告警名称|
### [GET] 告警规则.关联事件-已关联事件
{{host}}/event/listForAlarm?page=1&pageSize=10&alarm_id=be3345846c4541dfb860ae7d56e7ca7b&event_set=settled


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|page|string|页码|1|
|pageSize|string|每页显示条数|10|
|alarm_id|string|id|be3345846c4541dfb860ae7d56e7ca7b|
|event_set|string|未关联事件type|settled|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|array|数据|[{event_id:'1001',event_name:'事件',classify:'',term_type:'',term_type_name:'',description:'',event_level:'1',event_level_name:'',status_id:'',status_name:'0',alarm_id:'',alarm_name:''}]|
|data[0]|event_id|string|id|
|data[0]|event_name|string|名称|
|data[0]|classify|string|类别|
|data[0]|term_type|string|终端类型|
|data[0]|term_type_name|string|终端类型名称|
|data[0]|description|string|描述|
|data[0]|event_level|string|事件等级|
|data[0]|status_id|string|状态|
|data[0]|status_name|string|状态名称|
|data[0]|alarm_id|string|告警id|
|data[0]|alarm_name|string|告警名称|
### [GET] 告警规则.关联事件-已关联事件-查询按钮
{{host}}/event/listForAlarm?page=1&pageSize=10&alarm_id=be3345846c4541dfb860ae7d56e7ca7b&classify=1&term_type=1&keywords=1001&event_set=settled


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|page|string|页码|1|
|pageSize|string|每页显示条数|10|
|alarm_id|string|告警id|be3345846c4541dfb860ae7d56e7ca7b|
|classify|string|事件分类|1|
|term_type|string|终端类型|1|
|keywords|string|事件名称或代码||
|event_set|string|未关联事件type|settled|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|array|数据|[{event_id:'1001',event_name:'事件',classify:'',term_type:'',term_type_name:'',description:'',event_level:'1',event_level_name:'',status_id:'',status_name:'0',alarm_id:'',alarm_name:''}]|
|data[0]|event_id|string|id|
|data[0]|event_name|string|名称|
|data[0]|classify|string|类别|
|data[0]|term_type|string|终端类型|
|data[0]|term_type_name|string|终端类型名称|
|data[0]|description|string|描述|
|data[0]|event_level|string|事件等级|
|data[0]|status_id|string|状态|
|data[0]|status_name|string|状态名称|
|data[0]|alarm_id|string|告警id|
|data[0]|alarm_name|string|告警名称|
### [GET] 告警规则.关联事件-未关联-查询按钮
{{host}}/event/listForAlarm?page=1&pageSize=10&classify=1&term_type=1&keywords=1001&event_set=unsettled&alarm_id=be3345846c4541dfb860ae7d56e7ca7b


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|page|string|页码|1|
|pageSize|string|每页显示条数|10|
|classify|string|事件分类|1|
|term_type|string|终端类型|1|
|keywords|string|事件名称或代码||
|alarm_id|string|id|be3345846c4541dfb860ae7d56e7ca7b|
|event_set|string|未关联事件type|unsettled|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|array|数据|[{event_id:'1001',event_name:'事件',classify:'',term_type:'',term_type_name:'',description:'',event_level:'1',event_level_name:'',status_id:'',status_name:'0',alarm_id:'',alarm_name:''}]|
|data[0]|event_id|string|id|
|data[0]|event_name|string|名称|
|data[0]|classify|string|类别|
|data[0]|term_type|string|终端类型|
|data[0]|term_type_name|string|终端类型名称|
|data[0]|description|string|描述|
|data[0]|event_level|string|事件等级|
|data[0]|status_id|string|状态|
|data[0]|status_name|string|状态名称|
|data[0]|alarm_id|string|告警id|
|data[0]|alarm_name|string|告警名称|
### [POST] 告警规则.关联事件-确定
{{host}}/event/editAlarm


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|alarm_id|string|id|a44bebe02eb4c2d7ff26aed93a2|
|event_ids|array|事件id集合|["1001","1002","1003"]|


#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
### [POST] 告警规则.启用，停用
{{host}}/alarm/editStatus


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|alarm_id|string|id||
|alarm_status|boolean|状态|true|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
## 告警视图-电子地图
### [GET] 告警视图-电子地图.查看-基本信息
{{host}}/alarmCenter/findByMapId?term_id=101101


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|alarm_center_id|string|id|1001|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|object|数据|{
"area_name": "新中新1",
"alarm_label": "告警",
"term_name": "测试",
"term_id": "101101",
"alarm_data": [{
        "type_id": "1001",
        "alarm_last_date": "2020-03-10 13:30:14",
        "alarm_by_email": true,
        "alarm_date": "2020-02-28 15:25:34",
        "alarm_type_name": "短信，邮箱，微信",
        "term_id": 101101,
        "alarm_notice_count": 1,
        "alarm_by_mobile": true,
        "alarm_relieved": 0,
        "term_name": "测试",
        "event_id": "1009",
        "alarm_by_wechat": true,
        "alarm_content": "告警测试1",
        "alarm_status": 1,
        "alarm_id": "7a9cb08843bf417f874f8748eccfb3c6",
        "alarm_center_id": "1001"}]
}|
|data[0]|term_id|int|终端id|
|data[0]|term_name|string|终端名称
|data[0]|area_name|string|位置|
|data[0]|run_status|string|状态|
|data[0]|alarm_label|string|告警|

|alarm_data[0]|term_id|int|终端id|
|alarm_data[0]|term_name|string|终端名称
|alarm_data[0]|type_id|string|类型|
|alarm_data[0]|type_name|string|终端类型名称|
|alarm_data[0]|event_id|string|事件id|
|alarm_data[0]|alarm_id|string|告警规则id|
|alarm_data[0]|alarm_name|string|告警规则名称|
|alarm_data[0]|alarm_date|string|告警日期|
|alarm_data[0]|alarm_duration|int|告警持续时间|
|alarm_data[0]|alarm_current_count|int|告警次数|
|alarm_data[0]|alarm_content|string|告警内容|
|alarm_data[0]|alarm_type_name|string|告警方式|
|alarm_data[0]|contact_name|string|通知接收人|
|alarm_data[0]|alarm_upgrade|boolean|是否升级|
|alarm_data[0]|upgrade_contact_name|string|升级通知接收人|
### [POST] 告警视图-电子地图.解除告警
{{host}}/alarmCenter/editStatus


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|alarm_center_id|string|id||

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
### [GET] 告警视图-电子地图.通知记录
{{host}}/alarmLog/listAll?alarm_center_id=1001


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|alarm_center_id|string|告警中心id|1001|


#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|array|数据|[{"log_id": "100101",
"alarm_date": "2020-02-28 15:28:51",
"alarm_content": "告警测试",
"alarm_type": "mobile",
"alarm_type_name": "短信",
"alarm_upgrade": false,
"alarm_result": "已通知",
"alarm_contact": "测试1，测试2",
"alarm_upgrade_contact": "",
"alarm_center_id": "1001"
}]|
|data[0]|log_id|string|id|
|data[0]|alarm_date|string|通知时间|
|data[0]|alarm_content|string|通知内容|
|data[0]|alarm_type|string|通知方式英文|
|data[0]|alarm_type_name|string|通知方式名称|
|data[0]|alarm_upgrade|boolean|是否升级：是true  否false|
|data[0]|alarm_result|string|通知结果|
|data[0]|alarm_contact|string|通知接收人|
|data[0]|alarm_upgrade_contact|string|升级通知接收人|
### [GET] 告警视图-电子地图.终端列表-告警中
{{host}}/terminal/listAlarmingTerminal?campus_id=1001


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|campus_id|string|校区id|1|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|array|数据|[{
"term_id": "100101",
"term_name": "测试1",
"campus_graphy_x": "123456789",
"campus_graphy_y": "123456789",
"update_date": ""
}]|
|data[0]|term_id|string|id|
|data[0]|term_name|string|终端名称|
|data[0]|campus_graphy_x|string|x坐标|
|data[0]|campus_graphy_y|string|y坐标|
|data[0]|update_date|string|操作日期|
## 告警记录
### [GET] 告警记录.列表
{{host}}/alarmCenter/listAlarmed?page=1&pageSize=10&start_date=2020-04-03&end_date=2020-04-03


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|page|string|页码|1|
|pageSize|string|每页显示条数|10|
|start_date|string|开始时间||
|end_date|string|结束时间|10|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|array|数据|[{
"alarm_name": "告警测试1",
"type_name": "主机",
"term_name": "测试",
"type_id": "1001",
"alarm_date": "2020-02-28 15:25:34",
"alarm_type_name": "短信，邮箱，微信",
"term_id": 101101,
"alarm_id": "7a9cb08843bf417f874f8748eccfb3c6",
"alarm_center_id": "1003"
}]|
|data[0]|alarm_center_id|string|id|
|data[0]|term_id|int|终端id|
|data[0]|term_name|string|终端名称|
|data[0]|alarm_id|string|规则id|
|data[0]|alarm_name|string|规则名称|
|data[0]|alarm_type_name|string|通知方式|
|data[0]|alarm_date|string|告警日期|
### [GET] 告警记录.查看-基本信息
{{host}}/alarmCenter/findById?alarm_center_id=1001


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|alarm_center_id|string|id|1001|

#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|object|数据|{
"alarm_name": "告警测试1",
"contact_name": "zhang,test",
"alarm_date": "2020-02-28 15:25:34",
"alarm_type_name": "短信，邮箱，微信",
"term_id": 101101,
"contact_id": "[\"1\", \"2\"]",
"alarm_upgrade": true,
"term_name": "测试",
"event_id": "1009",
"alarm_content": "告警测试1",
"upgrade_contact_name": "zhang",
"alarm_status": 1,
"upgrade_contact_id": "[\"1\"]",
"alarm_id": "7a9cb08843bf417f874f8748eccfb3c6",
"alarm_current_count": 1,
"alarm_center_id": "1001",
"alarm_relieve": 0
}|
|data[0]|alarm_center_id|string|id|
|data[0]|term_id|int|终端id|
|data[0]|term_name|string|终端名称
|data[0]|area_name|string|位置|
|data[0]|event_id|string|事件id|
|data[0]|alarm_id|string|告警规则id|
|data[0]|alarm_name|string|告警规则名称|
|data[0]|alarm_date|string|告警日期|
|data[0]|alarm_duration|int|告警持续时间|
|data[0]|alarm_current_count|int|告警次数|
|data[0]|alarm_content|string|告警内容|
|data[0]|alarm_type_name|string|告警方式|
|data[0]|contact_name|string|通知接收人|
|data[0]|alarm_upgrade|boolean|是否升级|
|data[0]|upgrade_contact_name|string|升级通知接收人|
|data[0]|alarm_end_date|string|告警解除日期|
### [GET] 告警记录.通知记录
{{host}}/alarmLog/listAll?alarm_center_id=1001


#### 参数
|键值|类型|说明|例子|
|---|---|---|---|
|alarm_center_id|string|告警中心id|1001|


#### 返回
|键值|类型|说明|例子|
|---|---|---|---|
|code|string|0:失败,1:成功|0|
|msg|string|提示文字|成功
|data|array|数据|[{"log_id": "100101",
"alarm_date": "2020-02-28 15:28:51",
"alarm_content": "告警测试",
"alarm_type": "mobile",
"alarm_type_name": "短信",
"alarm_upgrade": false,
"alarm_result": "已通知",
"alarm_contact": "测试1，测试2",
"alarm_upgrade_contact": "",
"alarm_center_id": "1001"
}]|
|data[0]|log_id|string|id|
|data[0]|alarm_date|string|通知时间|
|data[0]|alarm_content|string|通知内容|
|data[0]|alarm_type|string|通知方式英文|
|data[0]|alarm_type_name|string|通知方式名称|
|data[0]|alarm_upgrade|boolean|是否升级：是true  否false|
|data[0]|alarm_result|string|通知结果|
|data[0]|alarm_contact|string|通知接收人|
|data[0]|alarm_upgrade_contact|string|升级通知接收人|
# 统计中心
## 终端设备状态列表
## 告警统计
## 按天数获取账户信息
## 近三十日业务办理趋势
# login_login
# event/list
# prom/showhost
# 测试
# 测试2
# 测试3