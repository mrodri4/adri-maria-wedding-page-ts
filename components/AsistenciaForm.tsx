'use client';

import { FormEvent, useMemo, useState } from "react";
import { toast } from "react-hot-toast";

function AsistenciaForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState({
    companions: 0,
    transport: 'Sí',
    name: '',
    phone: '',
    menu: 'Estándar',
    song: ''
  });

  const isDisabled = useMemo(() => {
    return !value.name || !value.phone || !value.menu || !value.song;
  }, [value]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    console.log(value);
    // setIsLoading(true);
    // try {
    //   await apiClient.post("/lead", { email });

    //   toast.success("Thanks for joining the waitlist!");

    //   // just remove the focus on the input
    //   inputRef.current.blur();
    //   setEmail("");
    //   setIsDisabled(true);
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <form
      className="w-full flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Nombre completo:</span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full"
          value={value.name}
          onChange={(e) => setValue((p) => ({
            ...p,
            name: e.target.value
          }))}
        />
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Acompañantes:</span>
        </div>
        <input
          type="number"
          className="input input-bordered w-full"
          value={value.companions}
          onChange={(e) => setValue((p) => ({
            ...p,
            companions: parseInt(e.target.value)
          }))}
        />
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Teléfono:</span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full"
          value={value.phone}
          onChange={(e) => setValue((p) => ({
            ...p,
            phone: e.target.value
          }))}
        />
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Opción de menú:</span>
        </div>
        <select
          className="select select-bordered"
          value={value.menu}
          onChange={(e) => setValue((p) => ({
            ...p,
            menu: e.target.value
          }))}
        >
          <option disabled>Elige una si la necesitas</option>
          <option>Estándar</option>
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
        <select
          className="select select-bordered"
          value={value.transport}
          onChange={(e) => setValue((p) => ({
            ...p,
            transport: e.target.value
          }))}
        >
          <option>Sí</option>
          <option>No</option>
        </select>
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Canción que no puede faltar:</span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full"
          value={value.song}
          onChange={(e) => setValue((p) => ({
            ...p,
            song: e.target.value
          }))}
        />
      </label>
      <div className="flex flex-col gap-4 my-4">
        <p>Hemos decidido que nuestra Luna de miel la vamos a disfrutar en Madagascar e Islas Mauricio.  Como sabéis, son dos lugares que siempre nos han llamado la atención desde que empezamos a mirar destinos y qué mejor momento que ahora para poder cumplir este sueño.</p>
        <p>Sin lugar a dudas, vuestra compañía en nuestro dia mas especial es el mejor regalo, pero si además queréis contribuir de alguna otra forma, podéis hacer aquí:</p>
        <div className="flex flex-col gap-4 mt-2">
          <p>Banco: Openbank.</p>
          <p>Beneficiarios: María y Adrián.</p>
          <p>Concepto: Boda MA.</p>
          <button className="btn mt-4" onClick={() => {
            navigator.clipboard.writeText('ES3800730100570821271177');
            toast.success('IBAN copiado al portapapeles');
          }}>
            IBAN: ES3800730100570821271177
          </button>
        </div>
      </div>
      <button
        className="btn btn-primary btn-block"
        disabled={isDisabled}
        type="submit"
      >
        Confirmar asistencia
        {isLoading ? (
          <span className="loading loading-spinner loading-xs" />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    </form>
  )
}

export default AsistenciaForm