const officegen = require('officegen')
const fs = require('fs')
const path = require('path');

const express = require('express');
const router = express.Router();

const relacionSchema = require('./backend/models/relacionSchema')

function createWord (e) {

console.log("server Office working")
console.log(e.codigo_consecutivo)
console.log("#################")


// Create an empty Word object:
// Create an empty Word object:
let docx = officegen({
    type:'docx',
    author: 'ARYTSG',
    pageMargins: { top: 1800, right: 1440, bottom: 1800, left: 1440 }
})

var table = [
    [{
      val: "Tipo",
      opts: {
      cellColWidth: 1661,
      b:true,
      sz: '48',
      spacingBefor: 120,
      spacingAfter: 120,
      spacingLine: 240,
      spacingLineRule: 'atLeast',
        shd: {
          fill: "92CDDC",
          themeFill: "text1",
          "themeFillTint": "80"
        },
        fontFamily: "Avenir Book"
      }
    },{
      val: "Información",
      opts: {
        b:true,
        cellColWidth: 3861,
        align: "center",
        vAlign: "center",
        shd: {
          fill: "92CDDC",
          themeFill: "text1",
          "themeFillTint": "80"
        }
      }
    },{
      val: "Foto",
      opts: {
        align: "center",
        vAlign: "center",
        cellColWidth: 3861,
        b:true,
        sz: '48',
        shd: {
          fill: "92CDDC",
          themeFill: "text1",
          "themeFillTint": "80"
        }
      }
    }],
    ['Identificación',e.codigo_consecutivo,' '],
    ['Lugar y fecha de nacimiento','there is no harm in putting off a piece of work until another day.',''],
    ['Edad','But when it is a matter of baobabs, that always means a catastrophe.',''],
    ['Teléfonos','You can include CR-LF inline\r\nfor multiple lines.',''],
    ['Estado civil',['Or you can provide lines within', 'a cell in an array'],''],
    ['Dirección y tiempo de estadia','But when it is a matter of baobabs, that always means a catastrophe.',' ']
  ]

var table2 = [
    [{
      val: "Datos del examen",
      opts: {
      cellColWidth: 9361,
      b:true,
      sz: '48',
      spacingBefor: 120,
      spacingAfter: 120,
      spacingLine: 240,
      spacingLineRule: 'atLeast',
        fontFamily: "Avenir Book"
      }
    }]
  ]
  
var table3 = [
    [{
      val: "Fecha",
      opts: {
      cellColWidth: 1661,
      b:true,
      sz: '48',
      spacingBefor: 120,
      spacingAfter: 120,
      spacingLine: 240,
      spacingLineRule: 'atLeast',
        shd: {
          fill: "92CDDC",
          themeFill: "text1",
          "themeFillTint": "80"
        },
        fontFamily: "Avenir Book"
      }
    },{
      val: "Fecha",
      opts: {
        b:true,
        cellColWidth: 3861,
        align: "center",
        vAlign: "center",
      }
    }],
    ['Empresa',e.codigo_consecutivo],
    ['Cargo','there is no harm in putting off a piece of work until another day.'],
    ['Ciudad','But when it is a matter of baobabs, that always means a catastrophe.'],
    ['Objetivo','You can include CR-LF inline\r\nfor multiple lines.']
  ]


  var tableStyle = {
    tableSize: 14,
    tableColor: "ada",
    tableFontFamily: "Times New Roman",
    spacingBefor: 10, // default is 100
    spacingAfter: 10, // default is 100
    spacingLine: 40, // default is 240
    spacingLineRule: 'atLeast', // default is atLeast
    indent: 0, // table indent, default is 0
    fixedLayout: true, // default is false
    borders: true, // default is false. if true, default border size is 4
    borderSize: 4, // To use this option, the 'borders' must set as true, default is 4
  }
  docx.createTable (table, tableStyle);
  docx.createTable (table2, tableStyle);
  docx.createTable (table3, tableStyle);

// Let's generate the Word document into a file:

let out = fs.createWriteStream(`C:/Users/KairosWindows/Documents/${e.codigo_consecutivo}.docx`)


out.on('error', function(err) {
  console.log(err)
})

// Async call to generate the output file:
docx.generate(out)



officegen.setVerboseMode(true)

}

module.exports = createWord;
//module.exports.createWord = createWord;