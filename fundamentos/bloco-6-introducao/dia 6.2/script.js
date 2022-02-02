const moment = require("moment");

const estados = ['', 'Acre', 'Alagoas', 'mapá', 'Amazonas', 'Bahia', 'Ceará,Distrito Federal', 'Espírito Santo, Goiás', 'Maranhão, Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará, Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo, Sergipe', 'Tocantins']
let novaOpcao = ''
function createOpcion() {
     for (let i = 0; i < estados.length; i++) {
          novaOpcao = '<option value="' + estados[i] + '">' + estados[i] + '</option>';
          document.getElementById('dropdow-box').insertAdjacentHTML('beforeend', novaOpcao); console.log(novaOpcao)
     }
}
window.onload = createOpcion;
let moment = require("moment");
