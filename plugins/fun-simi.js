import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `${mg}πππΎπππ½πΌ ππ πππππ ππΌππΌ ππΌπ½ππΌπ πΎππππππ\n\nπππππππ\n*${usedPrefix + command} Hola Asuna Bot*`
let res = await fetch(`https://api-sv2.simsimi.net/v2/?text=${text}&lc=es`)
let json = await res.json()
let tes = json.success.replace('simsimi', 'simsimi').replace('Simsimi', 'Simsimi').replace('sim simi', 'sim simi')
//m.reply(`${tes}`) 
conn.sendHydrated(m.chat, `${tes}`, m)
}
handler.help = ['asuna']
handler.tags = ['fun']
handler.command = ['bot', 'simi', 'simsimi', 'alexa', 'bixby', 'cortana', 'siri', 'okgoogle']
export default handler
