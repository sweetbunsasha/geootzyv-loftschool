(()=>{var e={398:(e,o,n)=>{const t=n(624);let a,r=localStorage;function s(){a=new ymaps.Map("map",{center:[61.78900090727265,34.375410146877094],zoom:15}),a.events.add("click",(e=>{const o=e.get("coords");(function(e){return new Promise((o=>{o(a.balloon.open(e,{content:t}))}))})(o).then((()=>{const n=document.querySelector("#add-btn"),t=(e.get(""),document.querySelector(".author")),s=document.querySelector(".place"),l=document.querySelector(".review");n.addEventListener("click",(e=>{e.preventDefault(),console.log(t.value,s.value,l.value,"dfvf"),r.data=JSON.stringify({authorName:t.value,place:s.value,review:l.value}),a.geoObjects.add(new ymaps.Placemark(o,{balloonContent:"fix: Сюда тоже добавить форму"},{preset:"islands#dotIcon",iconColor:"#E8AA4DFF"})),a.balloon.close()}))}))}))}console.log(r,"storage"),ymaps.ready(s),e.exports=s},624:e=>{e.exports='\n\n<form id="add-form" class="form">\n  <div class="location">Location</div>\n\n  <div class="form-row">\n    <h4 class="existing-reviews">no reviews for this place</h4>\n  </div>\n  <div class="form-row">\n    <h3 class="form-title">Leave your feedback</h3>\n  </div>\n\n  <div class="form-row">\n    <input type="text" placeholder="Your name" name="author" class="form-input author">\n  </div>\n  <div class="form-row">\n    <input type="text" placeholder="Place" name="place" class="form-input place">\n  </div>\n  <div class="form-row">\n    <textarea placeholder="Your feedback" name="review" class="form-input form-input--textarea review"></textarea>\n  </div>\n\n  <div class="btn-footer">\n    <button id="add-btn" class="btn">Add</button>\n  </div>\n\n</form>\n'}},o={};function n(t){var a=o[t];if(void 0!==a)return a.exports;var r=o[t]={exports:{}};return e[t](r,r.exports,n),r.exports}(()=>{"use strict";n(398),n(624)})()})();