import './Overlay.css';

function Overlay(children, overlayclick) {
  return (
    <div className="Overlay" onClick={() => overlayclick()}>
      {children}
    </div>
  );
}

export default Overlay;
