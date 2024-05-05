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
    </div>
  )
}

export default AsistenciaForm