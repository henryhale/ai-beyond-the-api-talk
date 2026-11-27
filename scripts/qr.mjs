import QRCode from 'qrcode'

const links = {
  'qr-kintu': 'https://kintu-demo-kq5xakecfjqwi2jdxco6kq.streamlit.app/',
  'qr-voice': 'https://henryhale.github.io/tiny-voca-lg/',
  'qr-hf': 'https://huggingface.co/henryhale',
}

for (const [name, url] of Object.entries(links)) {
  await QRCode.toFile(`public/${name}.svg`, url, { 
  	type: 'svg', 
  	margin: 1, 
  	color: { 
  		dark: '#160c4dff', 
  		light: '#ffffffff'
  	}
  })
}
