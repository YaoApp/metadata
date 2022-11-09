import { Decimal, Length } from '@/model/common'
import { Type } from '@/utils'

export interface FieldType {
	string: Type<
		Length,
		{
			'zh-CN': '字符串'
			'en-US': 'string'
		},
		null,
		{ mysql: 'VARCHAR(length)' }
	>
	char: Type<
		Length,
		{
			'zh-CN': '字符'
			'en-US': 'character'
		},
		null,
		{ mysql: 'CHAR(length)' }
	>
	text: Type<
		null,
		{
			'zh-CN': '文本'
			'en-US': 'text'
		},
		null,
		{ mysql: 'TEXT' }
	>
	mediumText: Type<
		null,
		{
			'zh-CN': '中文本'
			'en-US': 'medium text'
		},
		null,
		{ mysql: 'MEDIUMTEXT' }
	>
	longText: Type<
		null,
		{
			'zh-CN': '长文本'
			'en-US': 'long text'
		},
		null,
		{ mysql: 'LONGTEXT' }
	>
	binary: Type<
		null,
		{
			'zh-CN': '二进制数据'
			'en-US': 'binary data'
		},
		null,
		{ mysql: 'VARBINARY' }
	>
	date: Type<
		null,
		{
			'zh-CN': '日期'
			'en-US': 'date'
		},
		null,
		{ mysql: 'DATE' }
	>
	datetime: Type<
		Length,
		{
			'zh-CN': '日期时间'
			'en-US': 'datetime'
		},
		null,
		{ mysql: 'DATETIME' }
	>
	datetimeTz: Type<
		Length,
		{
			'zh-CN': '带时区的日期时间'
			'en-US': 'datetime with timezone'
		},
		null,
		{ mysql: 'DATETIME' }
	>
	time: Type<
		Length,
		{
			'zh-CN': '时间'
			'en-US': 'time'
		},
		null,
		{ mysql: 'TIME' }
	>
	timeTz: Type<
		Length,
		{
			'zh-CN': '带时区的时间'
			'en-US': 'time with timezone'
		},
		null,
		{ mysql: 'TIME' }
	>
	timestamp: Type<
		Length,
		{
			'zh-CN': '时间戳'
			'en-US': 'timestamp'
		},
		null,
		{ mysql: 'TIMESTAMP' }
	>
	timestampTz: Type<
		Length,
		{
			'zh-CN': '带时区的时间戳'
			'en-US': 'timestamp with timezone'
		},
		null,
		{ mysql: 'TIMESTAMP' }
	>
	tinyInteger: Type<
		null,
		{
			'zh-CN': '微整型'
			'en-US': 'tiny integer'
		},
		null,
		{ mysql: 'TINYINT' }
	>
	tinyIncrements: Type<
		null,
		{
			'zh-CN': '无符号微整型+自增'
			'en-US': 'unsigned micro integer + auto increment'
		},
		null,
		{ mysql: 'TINYINT UNSIGNED AUTO_INCREMENT' }
	>
	unsignedTinyInteger: Type<
		null,
		{
			'zh-CN': '无符号微整型'
			'en-US': 'unsigned micro integer'
		},
		null,
		{ mysql: 'TINYINT UNSIGNED' }
	>
	smallInteger: Type<
		null,
		{
			'zh-CN': '小整型'
			'en-US': 'unsigned micro integer'
		},
		null,
		{ mysql: 'SMALLINT' }
	>
	smallIncrements: Type<
		null,
		{
			'zh-CN': '无符号小整型+自增'
			'en-US': 'unsigned small integer + auto increment'
		},
		null,
		{ mysql: 'SMALLINT UNSIGNED AUTO_INCREMENT' }
	>
	unsignedSmallInteger: Type<
		null,
		{
			'zh-CN': '无符号小整型'
			'en-US': 'unsigned small integer'
		},
		null,
		{ mysql: 'SMALLINT UNSIGNED' }
	>
	integer: Type<
		null,
		{
			'zh-CN': '整型'
			'en-US': 'integer'
		},
		null,
		{ mysql: 'INT' }
	>
	increments: Type<
		null,
		{
			'zh-CN': '无符号整型+自增'
			'en-US': 'unsigned integer + auto increment'
		},
		null,
		{ mysql: 'INT UNSIGNED AUTO_INCREMENT' }
	>
	unsignedInteger: Type<
		null,
		{
			'zh-CN': '无符号整型'
			'en-US': 'unsigned integer'
		},
		null,
		{ mysql: 'INT UNSIGNED' }
	>
	bigInteger: Type<
		null,
		{
			'zh-CN': '长整型'
			'en-US': 'big integer'
		},
		null,
		{ mysql: 'BIGINT' }
	>
	bigIncrements: Type<
		null,
		{
			'zh-CN': '无符号长整型+自增'
			'en-US': 'unsigned long + auto increment'
		},
		null,
		{ mysql: 'BIGINT UNSIGNED AUTO_INCREMENT' }
	>
	unsignedBigInteger: Type<
		null,
		{
			'zh-CN': '无符号长整型'
			'en-US': 'unsigned long'
		},
		null,
		{ mysql: 'BIGINT UNSIGNED' }
	>
	id: Type<
		null,
		{
			'zh-CN': '长整型+自增'
			'en-US': 'long + auto increment'
		},
		null,
		{ mysql: 'BIGINT UNSIGNED AUTO_INCREMENT' }
	>
	ID: Type<
		null,
		{
			'zh-CN': '长整型+自增(同 id)'
			'en-US': 'long + auto increment same as id'
		},
		null,
		{ mysql: 'BIGINT UNSIGNED AUTO_INCREMENT' }
	>
	decimal: Type<
		Decimal,
		{
			'zh-CN': '小数(一般用于存储货币)'
			'en-US': 'decimal (usually used to store currency)'
		},
		null,
		{ mysql: 'DECIMAL(precision,scale)' }
	>
	unsignedDecimal: Type<
		Decimal,
		{
			'zh-CN': '无符号小数 (一般用于存储货币)'
			'en-US': 'unsigned decimal (usually used to store currency)'
		},
		null,
		{ mysql: 'DECIMAL(precision,scale) UNSIGNED' }
	>
	float: Type<
		Decimal,
		{
			'zh-CN': '浮点数'
			'en-US': 'floating point number'
		},
		null,
		{ mysql: 'FLOAT(precision,scale)' }
	>
	unsignedFloat: Type<
		Decimal,
		{
			'zh-CN': '无符号浮点数'
			'en-US': 'unsigned floating point number'
		},
		null,
		{ mysql: 'FLOAT(precision,scale) UNSIGNED' }
	>
	double: Type<
		Decimal,
		{
			'zh-CN': '双精度小数'
			'en-US': 'double precision decimal'
		},
		null,
		{ mysql: 'DOUBLE(precision,scale)' }
	>
	unsignedDouble: Type<
		Decimal,
		{
			'zh-CN': '无符号双精度小数'
			'en-US': 'unsigned double precision decimal'
		},
		null,
		{ mysql: 'DOUBLE(precision,scale) UNSIGNED' }
	>
	boolean: Type<
		null,
		{
			'zh-CN': '布尔型'
			'en-US': 'boolean'
		},
		null,
		{ mysql: 'BOOLEAN' }
	>
	enum: Type<
		string[],
		{
			'zh-CN': '枚举'
			'en-US': 'enumerate'
		},
		null,
		{ mysql: 'ENUM(option...)' }
	>
	json: Type<
		null,
		{
			'zh-CN': 'JSON文本'
			'en-US': 'json string'
		},
		null,
		{ mysql: 'JSON' }
	>
	JSON: Type<
		null,
		{
			'zh-CN': 'JSON文本(同 json)'
			'en-US': 'json string same as json'
		},
		null,
		{ mysql: 'JSON' }
	>
	jsonb: Type<
		null,
		{
			'zh-CN': 'JSON (二进制格式存储)'
			'en-US': 'json binary'
		},
		null,
		{ mysql: 'JSON' }
	>
	JSONB: Type<
		null,
		{
			'zh-CN': 'JSON (二进制格式存储 同 jsonb)'
			'en-US': 'json binary same as jsonb'
		},
		null,
		{ mysql: 'JSON' }
	>
	uuid: Type<
		null,
		{
			'zh-CN': 'UUID 格式字符串'
			'en-US': 'UUID string'
		},
		null,
		{ mysql: 'VARCHAR(36)' }
	>
	ipAddress: Type<
		null,
		{
			'zh-CN': 'IP 地址'
			'en-US': 'ip address'
		},
		null,
		{ mysql: 'INT' }
	>
	macAddress: Type<
		null,
		{
			'zh-CN': 'MAC 地址'
			'en-US': 'mac address'
		},
		null,
		{ mysql: 'BIGINT' }
	>
	year: Type<
		null,
		{
			'zh-CN': '年份'
			'en-US': 'year'
		},
		null,
		{ mysql: 'SMALLINT' }
	>
}
