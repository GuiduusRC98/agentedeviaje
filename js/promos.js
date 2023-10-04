class Promocion {
    constructor(id, titulo, substitulo, descripcion, parque, img, linkeo, color, tag, tag2) {
        this.id = id
        this.titulo = titulo
        this.descripcion = descripcion
        this.substitulo = substitulo
        this.parque = parque
        this.img = img
        this.linkeo = linkeo
        this.color = color
        this.tag = tag
        this.tag = tag2
    }

    
    promoParques() {
      return `
      <div class="projcard projcard-${this.color}">
      <div class="projcard-innerbox">
        <img class="projcard-img"
          src="${this.img}" />
        <div class="projcard-textbox">
          <div class="projcard-title ">${this.titulo}</div>
          <div class="projcard-subtitle">${this.substitulo}</div>
          <div class="projcard-bar"></div>
          <div class="projcard-description">${this.descripcion}</div>
          <div class="projcard-tagbox">
            <span class="projcard-tag">${this.tag}</span>
            <span class="projcard-tag">${this.tag2}</span>
            <a href="${this.linkeo}"
              target="_blank" class="btn btn-pink">Cotizar promo</a>
          </div>
        </div>
      </div>
    </div>`;
  }

    descripcion_Promocion() {
        return `
        <div class="col-xl-4">
        <a class="read-more" href="${this.linkeo}" target="_blank">
          <div class="three-box">
            <figure>
              <img src="${this.img}" alt="img" />
            </figure>
            <div class="promo">
              <i
                ><img
                  src="${this.parque}"
                  alt="img"
                  width="50px"
                  height="50px"
              /></i>
              <h3>${this.titulo}</h3>
              <p>
              ${this.descripcion}
              </p>
            </div>
          </div>
        </a>
      </div>`;
    }
}

class PromoController {
  constructor() {
      this.ultimasPromos = [];
  }

  agregar(promocion) {
      this.ultimasPromos.push(promocion)
  }

  async cargarProductosDesdeJSON() {
      try{
          const resp = await fetch('ultimasPromos.json')
          if(!resp.ok){
              throw new Error('No se pudo cargar el archivo JSON')
          }
          const data = await resp.json()

          this.ultimasPromos = data

          console.log(this.ultimasPromos)
      }catch (error) {
          console.error('Error al cargar los productor:', error)
      }
  }

  mostrarPromosEnDom() {
  let ultimas_promos = document.getElementById("ultimas_promos")
  ultimas_promos.innerHTML = ""

  this.ultimasPromos.forEach(promoData => {
    const promocion = new Promocion( 
        promoData.id,
        promoData.titulo,
        promoData.substitulo,
        promoData.descripcion,
        promoData.parque,
        promoData.img,
        promoData.linkeo,
        promoData.color,
        promoData.tag,
        promoData.tag2,
    )
    const div = document.createElement("div")
    div.innerHTML = promocion.descripcion_Promocion()
    ultimas_promos.appendChild(div)
})

  }
}

class promosDisney {
  constructor() {
      this.promoDisney = [];
  }

  agregar(promocion) {
      this.promoDisney.push(promocion)
  }

  async PromoDisneyJson() {
      try{
          const resp = await fetch('promoDisney.json')
          if(!resp.ok){
              throw new Error('No se pudo cargar el archivo JSON')
          }
          const data = await resp.json()

          this.promoDisney = data

          console.log(this.promoDisney)
      }catch (error) {
          console.error('Error al cargar los productor:', error)
      }
  }

  mostrarPromosDisneyEnDom() {
  let promosDisney = document.getElementById("promosDisney")
  promosDisney.innerHTML = ""

  this.promoDisney.forEach(promoDataDisney => {
    const promodisney = new Promocion(
      promoDataDisney.id,
      promoDataDisney.titulo,
      promoDataDisney.substitulo,
      promoDataDisney.descripcion,
      promoDataDisney.parque,
      promoDataDisney.img,
      promoDataDisney.linkeo,
      promoDataDisney.color,
      promoDataDisney.tag,
      promoDataDisney.tag2,
    )
    const div = document.createElement("div")
    div.innerHTML = promodisney.promoParques()
    promosDisney.appendChild(div)

})

  }
}

const pc = new PromoController()
const pd = new promosDisney()

pc.cargarProductosDesdeJSON().then(() =>{
  pc.mostrarPromosEnDom()
})

pd.PromoDisneyJson().then(() =>{
  pd.mostrarPromosDisneyEnDom()
})