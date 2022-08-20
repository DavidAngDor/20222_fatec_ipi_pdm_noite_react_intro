import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

const App = () => {
  const estilosBotao = {marginTop: 12, paddingTop: 8, backgroundColor: 'blueviolet', paddingBottom: 8, color: 'white', border: 'none', width: '100%', borderRadius: 8}
  const textoDoRotulo = 'Nome:'
  const obterTextoDoBotao = () => "Enviar"
  return (
    <div style={{ margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8 }}>
      <label className="rotulo" htmlFor="Nome" style={{ display: 'block', marginBottom: 4 }}>{textoDoRotulo}</label>

      <input type="text" id='Nome' style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', width: '100%', borderRadius: 8, outline: 'none'}} />

      <button
      
      onClick={obterTextoDoBotao} 
      style={estilosBotao}>{obterTextoDoBotao()}</button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)