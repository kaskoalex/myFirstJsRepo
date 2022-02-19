"use strict";

const DomElement = function (selector, height, width, bg, fontSize, textalign) {

  this.selector = selector
  this.height = height + 'px'
  this.width = width + 'px'
  this.bg = bg
  this.fontSize = fontSize + 'px'
  this.textalign = textalign


}

DomElement.prototype.createElement = function () {
  let div
  if (this.selector[0] === '.') {
    div = document.createElement('div')
    div.classList.add(this.selector.slice(1))
  }
  if (this.selector[0] === '#') {
    div = document.createElement('p')
    div.id = this.selector.slice(1)
  }
  div.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};text-align: ${this.textalign}`
  div.textContent = 'Lesson - 15'
  document.body.append(div)
  return div

}


const divNew = new DomElement('.block', 50, 200, 'green', 25,'center')

divNew.createElement()

