import React, { useState } from "react"
import "./App.css"


// import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import CKEditor from "@ckeditor/ckeditor5-react"
// import FontColorEditing from '@solomoto/ckeditor5-font-color/src/fontcolorediting';
// import Bold from 'ckeditor5-custom-build/src/';
// import Italic from '@ckeditor/ckeditor5-basic-styles/src/lin';
// import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
// import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
/*
const fontColorConfig = {
  colors: [
    {
      color: 'hsl(0, 0%, 0%)',
      label: 'Black'
    },
    {
      color: 'hsl(0, 0%, 30%)',
      label: 'Dim grey'
    },
    {
      color: 'hsl(0, 0%, 60%)',
      label: 'Grey'
    },
    {
      color: 'hsl(0, 0%, 90%)',
      label: 'Light grey'
    },
    {
      color: 'hsl(0, 0%, 100%)',
      label: 'White',
      hasBorder: true
    },
    {
      color: 'hsl(0, 75%, 60%)',
      label: 'Red'
    },
    {
      color: 'hsl(30, 75%, 60%)',
      label: 'Orange'
    },
    {
      color: 'hsl(60, 75%, 60%)',
      label: 'Yellow'
    },
    {
      color: 'hsl(90, 75%, 60%)',
      label: 'Light green'
    },
    {
      color: 'hsl(120, 75%, 60%)',
      label: 'Green'
    },
    {
      color: 'hsl(150, 75%, 60%)',
      label: 'Aquamarine'
    },
    {
      color: 'hsl(180, 75%, 60%)',
      label: 'Turquoise'
    },
    {
      color: 'hsl(210, 75%, 60%)',
      label: 'Light blue'
    },
    {
      color: 'hsl(240, 75%, 60%)',
      label: 'Blue'
    },
    {
      color: 'hsl(270, 75%, 60%)',
      label: 'Purple'
    }
  ]
};
const htmlSupportConfig = {
  allow: [
    {
      name: 'span',
    },
    {
      name: 'p',
    }
  ],
  disallow: [
    {
      name: /[\s\S]+/,    // For every HTML feature,
      attributes: {
        key: /^on.*$/ // disable 'on*' attributes, like 'onClick', 'onError' etc.
      }
    }
  ]
};
*/

const linkConfig = {
  decorators: {
    isExternal: {
      mode: 'manual',
      label: 'Open in a new tab',
      attributes: {
        target: '_blank'
      }
    }
  }
}
function App() {
  const [text, setText] = useState('<p style="text-align:center;"><span style="color:#cccccc;"><strong>I. POSTANOWIENIA OGÓLNE</strong></span></p><ol><li>Sklep Internetowy prowadzony pod adresem internetowym <a href="https://www.jezuswdomu.pl"><strong>www.jezuswdomu.pl</strong></a><strong> </strong>prowadzony jest przez podmiot gospodarczy pod firmą Dare You Studio Andrzej Pietroczuka wpisanym do Centralnej Ewidencji i Informacji o Działalności Gospodarczej Rzeczypospolitej Polskiej prowadzonej przez ministra właściwego do spraw gospodarki, posiadającą: <strong>NIP 6030017913, REGON 200852777, </strong>adres poczty elektronicznej: <a href="mailto:biuro@jezuwdomu.pl">biuro@jezuswdomu.pl</a>, numer telefonu:&nbsp; <strong>+48 881 575 207, </strong>KONTO BANKOWE: 25 1020 5558 0000 8702 3372 3439</li></ol>');
  return (
    <div className="App">
      <div style={{ width: '100%', margin: 20 }}>
        <div className="editor">
          <CKEditor
            editor={Editor}
            config={{
              link: {
                decorators: [
                  {
                    mode: 'manual',
                    label: 'Otwórz w nowym oknie',
                    attributes: {
                      target: '_blank',
                    }
                  },
                  {
                    mode: 'manual',
                    label: 'Nofollow',
                    attributes: {
                      rel: 'nofollow',
                    }
                  }
                ]
              },
              toolbar: [
                'undo', 'redo', '|',
                'heading', '|',
                'bold', 'italic', 'underline', 'strikethrough', '|',
                'subscript', 'superscript', '|',
                'fontcolor', 'link', 'Alignment', '|',
                'bulletedList', 'numberedList', '|',
                'findAndReplace', '|',
                'removeformat', 'sourceEditing',
              ],
              heading: {
                options: [
                  { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                  { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                  { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
                  { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
                  { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
                  { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
                  { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
                ]
              }
            }}
            data={text}
            onChange={(event, editor) => {
              const data = editor.getData()
              setText(data)
            }}
          />
        </div>

      </div>
      <div>
        <h2>JSON</h2>
        <div>{
          jsonFromHtml(text, true)
        }
        </div>
      </div>

      <div>
        {/* {Editor.builtinPlugins.map(plugin => <p>{plugin.pluginName}</p>)} */}
        <h2>Json HTML 🥳</h2>
        <div>{renderHtmlFromJson(jsonFromHtml(text))}</div>
      </div>

      <div>
        {/* {Editor.builtinPlugins.map(plugin => <p>{plugin.pluginName}</p>)} */}
        <h2>HTML Source 🗃</h2>
        <div>{text}</div>
      </div>
    </div>
  )
}
const jsonFromHtml = (htmlTags, view = false) => {
  const htmlArray = htmlTags.match(/(<.*?>|[^<]+)\s*/g);
  // console.log(htmlArray);
  const jsonArray = [];
  if (!htmlArray) {
    return
  }
  // -- go!
  let pointerArray = [];
  htmlArray.forEach(element => {
    const tagEnd = element.match(/<\/.*?>/g);
    if (tagEnd) {
      // we got a End tag!
      if (pointerArray.length > 1) {
        const endElement = pointerArray.pop();
        // if(endElement.tag) {
        const arrEndElement = pointerArray[pointerArray.length - 1];
        // text array only contains text without attributes
        if (endElement.text.length === 1 && !endElement.text[0].tag) {
          endElement.text = endElement.text[0].text;
        }
        arrEndElement.text.push(endElement);
      } else {
        jsonArray.push(pointerArray.pop());
      }
    } else {
      const tagStart = element.match(/<.*?>/g);//.join().trim()

      if (tagStart) {
        // we got a Start tag!
        const reg = /\s*[^=\s+]+\s*=\s*([^=>]+)?(?=(\s+|>))/g;
        const tagChar = element.replace(reg, "").replaceAll('<', '').replaceAll('>', '');
        const attribTags = element.match(reg);

        let hrefLink = '';
        let textAlign = '';
        let textColor = '';
        let linkRel = '';
        let linkTarget = '';

        attribTags && attribTags.forEach(attr => {
          // attr = attr.replaceAll(' ','');
          let styleTag = attr.match(/ style="([^"]*)"/);
          const hrefTag = attr.match(/ href="([^"]*)"/);
          const relTag = attr.match(/ rel="([^"]*)"/);
          const targetTag = attr.match(/ target="([^"]*)"/);
          if (hrefTag) {
            hrefLink = hrefTag[1];
          }
          if (relTag) {
            linkRel = relTag[1];
          }
          if (targetTag) {
            linkTarget = targetTag[1];
          }
          if (styleTag) {
            styleTag = styleTag[1].replaceAll(' ', '').split(';');
            styleTag.forEach(st => {
              st = st.split(':');
              if (st.length > 1) {
                if (st[0] === 'text-align' &&
                  (st[1] === 'left' || st[1] === 'right' || st[1] === 'center' || st[1] === 'justify')
                ) {
                  textAlign = st[1];
                }
                if (st[0] === 'color') {
                  if (st[1].search('hsl') != -1) {
                    // hsl colors
                    const hslColors = st[1].replaceAll(' ', '').replaceAll('%', '').replaceAll('hsl(', '').replaceAll(')', '').split(',');
                    if (hslColors.length > 2) {
                      textColor = hslToHex(hslColors[0], hslColors[1], hslColors[2]);
                    }
                  } else {
                    if (/^#[0-9A-F]{6}$/i.test(st[1])) {
                      textColor = st[1];
                    }
                  }
                }
              }
            })
          }
          // console.log('style', styleTag);
        })
        const newTag = {
          tag: tagChar,
          text: []
        }
        if (tagChar === 'a') {
          if (hrefLink.trim() !== '') {
            newTag.href = hrefLink;
          }
          if (linkRel.trim() !== '') {
            newTag.rel = linkRel;
          }
          if (linkTarget.trim() !== '') {
            newTag.target = linkTarget;
          }
        }
        if (textAlign.trim() !== '') {
          newTag.align = textAlign;
        }
        if (textColor.trim() !== '') {
          newTag.color = textColor;
        }

        pointerArray.push(newTag);

      } else {
        // we got a Text
        pointerArray[pointerArray.length - 1].text.push({ text: element });
      }
    }
  })
  // console.log('json', jsonArray);
  if (view) {
    return JSON.stringify(jsonArray);
  } else {
    return jsonArray;
  }
}

// const getTagAttribute = (tag, attribute) => {
//   var regKey = '(?:' + attribute + ')([\\s=\'"./]+)([\\w-./?=\\#"]+)(([\'#\\&?=/".\\w\\d]+|[\\w)(\'-."\\s]+)[\'"]|)'
//   var regExp = new RegExp(regKey, 'g');
//   var regResult = regExp.exec(tag);
//   if (regResult && regResult.length > 0) {
//     var splitKey = '(?:(' + attribute + ')+(|\\s)+([=])+(|\\s|[\'"])+)|(?:([\\s\'"]+)$)'
//     return regResult[0].replace(new RegExp(splitKey, 'g'), '');
//   } else {
//     return '';
//   }
// }

const hslToHex = (h, s, l) => {
  console.log('colors', h, s, l);
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

export const renderHtmlFromJson = json => {
  return json ? json.map((text_object, index) => {
    const textAlign = text_object.align === 'left' || text_object.align === 'right' ||
      text_object.align === 'center' || text_object.align === 'justify'
      ? text_object.align : 'left';

    const color = /^#[0-9A-F]{6}$/i.test(text_object.color) ? text_object.color : 'inherit';

    const href = text_object.href ? text_object.href : '#';
    const target = text_object.target === "_blank" ? text_object.target : "_self";
    // const title = text_object.title ? text_object.title : "";
    const rel = text_object.rel === "nofollow" ? text_object.rel : "follow";

    const styleObject = {
      textAlign: textAlign,
      color: color,
      // fontWeight: fontWeight,
    }
    const childText = Array.isArray(text_object.text) ? renderHtmlFromJson(text_object.text, true) : text_object.text;
    switch (text_object.tag) {
      case 'p': return <p key={index} style={styleObject}>{childText}</p>;
      case 'span': return <span key={index} style={styleObject}>{childText}</span>;
      case 'h1': return <h1 key={index} style={styleObject}>{childText}</h1>;
      case 'h2': return <h2 key={index} style={styleObject}>{childText}</h2>;
      case 'h3': return <h3 key={index} style={styleObject}>{childText}</h3>;
      case 'h4': return <h4 key={index} style={styleObject}>{childText}</h4>;
      case 'h5': return <h5 key={index} style={styleObject}>{childText}</h5>;
      case 'h6': return <h6 key={index} style={styleObject}>{childText}</h6>;
      case 'ul': return <ul key={index} style={styleObject}>{childText}</ul>;
      case 'ol': return <ol key={index} style={styleObject}>{childText}</ol>;
      case 'li': return <li key={index} style={styleObject}>{childText}</li>;
      case 'sup': return <sup key={index} style={styleObject}>{childText}</sup>;
      case 'sub': return <sub key={index} style={styleObject}>{childText}</sub>;
      case 'strong': return <strong key={index} style={styleObject}>{childText}</strong>;
      case 'u': return <u key={index} style={styleObject}>{childText}</u>;
      case 'i': return <i key={index} style={styleObject}>{childText}</i>;
      case 's': return <s key={index} style={styleObject}>{childText}</s>;
      case 'a': return <a href={href} target={target} rel={rel} key={index} style={styleObject}>{childText}</a>;
      default:
        return childText; //<span key={index} style={styleObject}>{childText}</span>;
    }
  }) : '';
}

/*

const getArrayTagsHtmlString = str => {
  let htmlSplit = str.split(">")
  let arrayElements = []
  let nodeElement = ""
  htmlSplit.forEach((element) => {
    if (element.includes("<")) {
      nodeElement = element + ">"
    } else {
      nodeElement = element
    }
    arrayElements.push(nodeElement)
  })
  return arrayElements
}
*/

export default App
