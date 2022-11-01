import { IComments } from '@/utils'

type ObjectType = {
	value: PureType
	comments: IComments
	default: string | number | boolean | Array<string | number>
}

export type PureType =
	| 'string'
	| 'number'
	| 'boolean'
	| 'array'
	| 'any'
	| Array<string | number>
	| Map<string, PureType>
	| ObjectType
	| {
			[key: string]: ObjectType
	  }
