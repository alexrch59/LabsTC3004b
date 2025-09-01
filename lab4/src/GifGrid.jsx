import { useEffect, useState } from 'react';
import { useFetchGifs } from './useFetchGifs';

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  const [selected, setSelected] = useState(null);

  // Cerrar modal con tecla ESC
  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selected]);

  return (
    <>
      <h3>{category}</h3>

      {isLoading && (<h2>Cargando...</h2>)}

      <div className="card-grid">
        {images.map(({ id, title, url }) => (
          <button
            key={id}
            className="card gif-button"
            onClick={() => setSelected({ id, title, url })}
            aria-label={`Ver ${title} en grande`}
          >
            <img src={url} alt={title} />
            <p>{title}</p>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`Vista ampliada de ${selected.title}`}
          onClick={() => setSelected(null)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h4 className="modal-title">{selected.title}</h4>
              <button
                className="modal-close"
                onClick={() => setSelected(null)}
                aria-label="Cerrar"
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <img src={selected.url} alt={selected.title} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};