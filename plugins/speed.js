let handler = async m => {
 let old = performance.now()
 let neww = performance.now()
 let speed = neww - old
 let txt = `*_COMENZANDO PRUEBA DE VELOCIDAD..._*`.trim()
  m.reply(txt)

await m.reply('ð')
await m.reply('ðð')
await m.reply('ððð')
await m.reply(`â°âąââą *ðððððððžðŋð | ðððððð* âąââąâŪ`)
 
let veloz = 
`ð *VELOCIDAD:*\n *${speed}* *Milisegundos*\n\nð *SPEED:*\n *${speed}* *Milliseconds*`

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: 'ðžðĻðŠðĢð ððĪðĐ', url: 'https://github.com/Axel-bytu/Asuna'}},
{index: 2, urlButton: {displayText: 'ððĢðĻðĐððð§ððĒ', url: 'https://instagram.com/asunabot'}},
{index: 3, quickReplyButton: {displayText: 'ððĐð§ð ðŦððŊ', id: '#ping'}},
{index: 4, quickReplyButton: {displayText: 'ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ', id: '#menu'}},
]
let tm = {
text: veloz,
footer: global.wm,
templateButtons: templateButtonsReplyMessage
}
conn.sendMessage(m.chat, tm, m)
}
// let veloz = `${rg}*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`.trim() 
//conn.sendButton(m.chat, `${rg}*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`, wm, veloz, [['Vista', /${command}]], m)
                                               
//m.reply(`${rg}*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`)

 

handler.help = ['ping']
handler.tags = ['info']
handler.command = /^(ping|speed|velocidad|rapidez|velocity)$/i
export default handler
