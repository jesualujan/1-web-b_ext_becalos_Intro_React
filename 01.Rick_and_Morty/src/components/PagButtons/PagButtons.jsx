const PagButtons = ({ info, onPrevious, onNext }) => {
  return (
    <div className="d-flex justify-content-center gap-3 mb-4">
      <button
        className="btn btn-outline-primary"
        onClick={onPrevious}
        disabled={!info.prev}
      >
        ← Anterior
      </button>
      <button className="btn btn-outline-primary" onClick={onNext}>
        Siguiente →
      </button>
    </div>
  );
};

export default PagButtons;
