import preguntas from "./preguntas";
import { useState, useEffect } from "react";
import styles from "./global.module.scss";


const Quiz2 = () => {
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [puntuación, setPuntuación] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [tiempoRestante, setTiempoRestante] = useState(10);
    const [areDisabled, setAreDisabled] = useState(false);
    const [answersShown, setAnswersShown] = useState(false);

    const handleAnswerSubmit = (isCorrect, e) => {
        // añadir puntuación
        if (isCorrect) setPuntuación(puntuación + 1);
        // añadir estilos de pregunta
        e.target.classList.add(isCorrect ? "correct" : "incorrect");
        // cambiar a la siguiente pregunta
    
        setTimeout(() => {
          if (preguntaActual === preguntas.length - 1) {
            setIsFinished(true);
          } else {
            setPreguntaActual(preguntaActual + 1);
            setTiempoRestante(10);
          }
        }, 1500);
      };
      useEffect(() => {
        const intervalo = setInterval(() => {
          if (tiempoRestante > 0) setTiempoRestante((prev) => prev - 1);
          if (tiempoRestante === 0) setAreDisabled(true);
        }, 1000);
    
        return () => clearInterval(intervalo);
      }, [tiempoRestante]);
    
      if (isFinished)
        return (
          <div className={`${styles.main}`}>
            <div className="pruebaTerminada">
              <span>
                Obtuviste {puntuación} de {preguntas.length}
              </span>
              <button onClick={() => (window.location.href = "/")}>
                Concluido
              </button>
              <button
                onClick={() => {
                  setIsFinished(false);
                  setAnswersShown(true);
                  setPreguntaActual(0);
                }}
              >
                Ver respuestas
              </button>
            </div>
          </div>
        );
      if (answersShown)
      return (
        <main className={`${styles.main}`}>
          <div className={`${styles.ladoIzquierdo}`}>
            <div className={`${styles.preguntaNumero}`}>
              <span> Pregunta {preguntaActual + 1} de</span> {preguntas.length}
            </div>
            <div className="titulo-pregunta">
              {preguntas[preguntaActual].titulo}
            </div>
            <div>
              {
                preguntas[preguntaActual].opciones.filter(
                  (opcion) => opcion.isCorrect
                )[0].textoRespuesta
              }
            </div>
            <button
              onClick={() => {
                if (preguntaActual === preguntas.length - 1) {
                  window.location.href = "/";
                } else {
                  setPreguntaActual(preguntaActual + 1);
                }
              }}
            >
              {preguntaActual === preguntas.length - 1
                ? "Regresar a home"
                : "Siguiente"}
            </button>
          </div>
        </main>
      );
  return (
    <>
    <main className={`${styles.main}`}>
    <div className={`${styles.ladoIzquierdo}`}>
          <div className={`${styles.preguntaNumero}`}>
            <span> Pregunta {preguntaActual + 1} de</span> {preguntas.length}
          </div>
          <div className="titulo-pregunta" >{preguntas[preguntaActual].titulo}</div>
          <div>
            {!areDisabled ? (
              <span className={`${styles.tiempoRes}`}>
                Tiempo restante: {tiempoRestante}
              </span>
            ) : (
              <button
                onClick={() => {
                  setTiempoRestante(10);
                  setAreDisabled(false);
                  if (preguntaActual === preguntas.length - 1) {
                    setIsFinished(true);
                  } else {
                    setPreguntaActual(preguntaActual + 1);
                  }
                }}
              >
                Continuar
              </button>
            )}
          </div>
        </div>
        <div className={`${styles.ladoDerecho}`}>
        {preguntas[preguntaActual].opciones.map((respuesta) => (
          <button
            disabled={areDisabled}
            key={respuesta.textoRespuesta}
            onClick={(e) => handleAnswerSubmit(respuesta.isCorrect, e)}
          >
            {respuesta.textoRespuesta}
          </button>
        ))}
      </div>
    </main>
    </>
  )
}

export default Quiz2