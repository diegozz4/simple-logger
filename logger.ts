import path from "path"

const ruteAvailable = false
const space = 42

// Public functions
const clearLog = () => { process.stdout.write('\u001b[3J\u001b[2J\u001b[1J'); console.clear() }

const testLog = (message: any, ...data: any) => console.debug(log(91, '🧪'), location(false), ...msg(message), ...data)
const errorLog = (message: any, ...data: any) => console.debug(log(91, '💀'), location(), ...msg(message), ...data)
const warningLog = (message: any, ...data: any) => console.debug(log(93, '🔥'), location(), ...msg(message), ...data)
const successLog = (message: any, ...data: any) => console.debug(log(92, '👍'), location(), ...msg(message), ...data)
const infoLog = (message: any, ...data: any) => console.debug(log(95, '👌'), location(), ...msg(message), ...data)

// Internal functions
const log = (color: number, symbol: string) => `\x1b[91m${symbol}\x1b[0m ${new Date().toTimeString().slice(0, 8)}\x1b[${color}m`

const msg = (_msg: any): any[] => ['\x1b[96m', _msg, '\x1b[96m']

const location = (rute: boolean = true) => {
	const _err = new Error
	if (!_err) return

	let outrute = ''
	const _call = _err.stack?.split('\n').splice(1).find(p => !p.includes(path.basename(__filename)))?.trim().slice(3)
	const _callFrag = _call?.split(' ')

	if (!_callFrag) return

	const _0 = _callFrag.length > 2 ? '🔧 ' : '⚙️  '
	const _path = _callFrag.slice(-1)[0].replace('(', '').replace(')', '')

	const _absRoute: any = process?.env?.PWD?.split(/[\\/]/g) || {}
	const _entryPath = _path.split(/[\\/]/g)

	Object.keys(_absRoute) && _entryPath.forEach((_, __) => (_absRoute[__] !== _) ? outrute += `\/${_}` : null)
	const fileSource = outrute.split('/').slice(-1)[0].split(':').slice(0, -1).join(':')

	const _rute = rute ? ruteAvailable ? `[ ${_0}: ${outrute} ]: ` : `[ ${_0}:${fileSource} ]: ` : ''
	const _space = rute ? space : 20
	return _rute.padEnd(_callFrag.length > 2 ? _space - 1 : _space, '·')
}

export { clearLog, errorLog, infoLog, successLog, testLog, warningLog }