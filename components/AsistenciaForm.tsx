'use client';

function AsistenciaForm() {
  return (
    <div className="w-full flex flex-col gap-4">
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Nombre completo:</span>
        </div>
        <input type="text" placeholder="Nombre y Apellidos" className="input input-bordered w-full" />
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Acompañantes:</span>
        </div>
        <input type="number" placeholder="1" className="input input-bordered w-full" />
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Teléfono:</span>
        </div>
        <input type="text" placeholder="Introduce tu teléfono" className="input input-bordered w-full" />
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Opción <b>especial</b> de menú:</span>
        </div>
        <select className="select select-bordered">
          <option disabled selected>Elige una si la necesitas</option>
          <option>Vegetariano</option>
          <option>Vegano</option>
          <option>Celíaco</option>
          <option>Alergico</option>
          <option>Embarazada</option>
        </select>
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Necesitas transporte para ir a la finca:</span>
        </div>
        <select className="select select-bordered">
          <option selected>Sí</option>
          <option>No</option>
        </select>
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Canción que no puede faltar:</span>
        </div>
        <input type="text" placeholder="Amaral - Son mis amigos" className="input input-bordered w-full" />
      </label>
      <div className="flex flex-col gap-4">
        <p>Hemos decidido que nuestra Luna de miel la vamos a disfrutar en Madagascar e Islas Mauricio.  Como sabéis, son dos lugares que siempre nos han llamado la atención desde que empezamos a mirar destinos y qué mejor momento que ahora para poder cumplir este sueño.</p>
        <p>Sin lugar a dudas, vuestra compañía en nuestro dia mas especial es el mejor regalo, pero si además queréis contribuir de alguna otra forma, podéis hacer aquí:</p>
        <div className="flex flex-col gap-4 mt-2">
          <p>Banco: Openbank.</p>
          <p>Beneficiarios: María y Adrián.</p>
          <p>Concepto: Boda MA.</p>
          <button className="btn" onClick={() => {
            navigator.clipboard.writeText('ES3800730100570821271177');
          }}>
            IBAN: ES3800730100570821271177
          </button>
        </div>
      </div>
    </div>
  )
}

export default AsistenciaForm