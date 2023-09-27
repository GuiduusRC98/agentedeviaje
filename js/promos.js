class Promocion {
    constructor(id, titulo, descripcion, parque, img, linkeo) {
        this.id = id
        this.titulo = titulo
        this.descripcion = descripcion
        this.parque = parque
        this.img = img
        this.linke = linkeo
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
          const resp = await fetch('../ultimasPromos.json')
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
        promoData.descripcion,
        promoData.parque,
        promoData.img,
        promoData.linkeo
    )
    const div = document.createElement("div")
    div.innerHTML = promocion.descripcion_Promocion()
    ultimas_promos.appendChild(div)
})

  }
}

const cp = new PromoController()

cp.cargarProductosDesdeJSON().then(() =>{
    cp.mostrarPromosEnDom()
})