import { ReceiveType, ReflectionKind, Type, typeOf } from '@deepkit/type'

export function mapOf<T extends Object>(args: any[] = [], p?: ReceiveType<T>) {
	const type = typeOf(args, p)

	return getMapData(type)
}

const getMapData = (type: Type): any => {
	if (type.kind === ReflectionKind.objectLiteral) {
		return type.types.reduce((total: any, item) => {
			if (item.kind === ReflectionKind.propertySignature) {
				total[item.name] = getMapData(item.type)
			}

			return total
		}, {})
	}

	if (type.kind === ReflectionKind.literal) return type.literal

	if (type.kind === ReflectionKind.union) {
		return type.types.map((item) => {
			if (item.kind === ReflectionKind.literal) return item.literal

			return item
		})
	}

	if (type.kind === ReflectionKind.array) {
		const map = new Map()

		map.set('value', getMapData(type.type))

		return map
	}

	return ReflectionKind[type.kind]
}
