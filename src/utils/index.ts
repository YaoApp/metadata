export type Path = string

export type Port = number

export type Host = string

export interface IComments {
	'zh-CN': string
	'en-US': string
}

export type Type<Value, Comments extends IComments, Default = null, Options = null> = {
	value: Value
	comments: Comments
	default: Default
	options: Options
}

export type getType<T> = T extends Type<infer Value, infer Comments extends IComments, infer Default>
	? Value extends Object
		? Pure<Value>
		: Value
	: T extends Object
	? Pure<T>
	: T

export type Pure<Object> = {
	[Key in keyof Object]: getType<Object[Key]>
}
