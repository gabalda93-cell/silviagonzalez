/* ALÈ · FICHA DE CLIENTE · Sílvia · Mesociclo 1 · v2.7 */
window.ALE_CLIENT = {
  "schemaVersion": 2,
  "id": "silvia",
  "client": "Sílvia",
  "etiqueta": "Mesociclo 1",
  "versio": "2.7",
  "inici": "24/08/2026",
  "idioma": "es",
  "clauLegacy": [],
  "resum": "4 semanas para construir reserva de fuerza y músculo, preservar potencia y capacidad funcional y compatibilizarlo con el voleibol y el pádel.",
  "ordre": [
    "A",
    "B"
  ],
  "cardioPerBloc": 0,
  "totalCardio": 0,
  "llindars": {
    "sessions": 8,
    "cardio": 0,
    "registre": 90
  },
  "cardioModes": [],
  "senseCarrega": [
    "B1",
    "B6"
  ],
  "senseRir": [
    "B1",
    "B6"
  ],
  "pesCorporal": [
    "B1",
    "B6"
  ],
  "blocs": [
    {
      "n": 1,
      "name": "Calibración",
      "sets": 0,
      "rirMain": "4",
      "rirAcc": "4",
      "goal": "Aprender los movimientos, encontrar las cargas adecuadas y terminar con margen suficiente para recuperar bien."
    },
    {
      "n": 2,
      "name": "Consolidación",
      "sets": 0,
      "rirMain": "3",
      "rirAcc": "3",
      "goal": "Repetir patrones, consolidar la técnica y progresar sin necesidad de llegar al límite."
    },
    {
      "n": 3,
      "name": "Construcción",
      "sets": 1,
      "rirMain": "2-3",
      "rirAcc": "3",
      "goal": "Añadir algo de volumen a los patrones principales si el voleibol, el sueño y las articulaciones lo permiten."
    },
    {
      "n": 4,
      "name": "Descarga y revisión",
      "sets": 0,
      "deload": true,
      "rirMain": "3-4",
      "rirAcc": "3-4",
      "goal": "Reducir aproximadamente un tercio del volumen, recuperar y comparar el final con el inicio sin hacer pruebas máximas."
    }
  ],
  "escalfament": [
    {
      "id": "W1",
      "name": "Marcha en el sitio",
      "dose": "45-60 segundos suaves",
      "why": "Preparamos tobillos, caderas y equilibrio sin añadir fatiga antes del trabajo de fuerza.",
      "anim": "suitcasemarch",
      "secs": 60,
      "video": "https://www.youtube.com/watch?v=WNthYRB9QX4"
    },
    {
      "id": "W2",
      "name": "Deslizamiento de brazos en pared",
      "dose": "8 repeticiones lentas",
      "why": "Preparamos hombros y escápulas antes de los empujes y tirones del tren superior.",
      "anim": "wallslide",
      "secs": 45,
      "video": "https://www.youtube.com/watch?v=Cw-cgyYtz1k"
    },
    {
      "id": "W3",
      "name": "Aperturas con banda elástica",
      "dose": "10-12 repeticiones suaves",
      "why": "Activamos la parte alta de la espalda y los hombros sin fatigarlos antes de las series de trabajo.",
      "anim": "pullapart",
      "secs": 45,
      "video": "https://www.youtube.com/watch?v=R9GHzQapAL0"
    }
  ],
  "aproximacions": {
    "exercicis": [
      "A1",
      "A2",
      "B2",
      "B3"
    ],
    "series": [
      {
        "percent": 50,
        "reps": 8
      },
      {
        "percent": 75,
        "reps": 4
      }
    ],
    "rest": 60,
    "rounding": "nearest"
  },
  "sessions": {
    "A": {
      "key": "A",
      "title": "Sesión A",
      "sub": "Fuerza base: piernas, tirón, empuje y tronco",
      "pairs": "Sin superseries: descanso suficiente y ejecución tranquila.",
      "ex": [
        {
          "per": false,
          "pair": "—",
          "id": "A1",
          "name": "Prensa de piernas",
          "region": "lower",
          "muscles": "Cuádriceps, glúteos y aductores.",
          "sets": [
            2,
            3
          ],
          "reps": [
            8,
            10
          ],
          "rest": 120,
          "tempo": [
            3,
            0,
            1,
            0
          ],
          "anim": "legpress",
          "step": 5,
          "cue": "Por qué este ejercicio: permite entrenar mucha fuerza de piernas con una trayectoria estable y fácil de graduar. Cómo: coloca los pies cómodos, baja solo hasta el rango que la rodilla tolere bien y empuja sin bloquear bruscamente las rodillas.",
          "err": [
            "Buscar más profundidad aunque aumente la molestia",
            "Dejar que las rodillas se metan hacia dentro",
            "Rebotar al final de la bajada"
          ],
          "alt": "Si la rodilla molesta más de lo habitual, reduce el recorrido y la carga. Si la molestia sigue aumentando, detén el ejercicio y regístralo.",
          "video": "https://www.youtube.com/watch?v=WvLsUYH8v5g"
        },
        {
          "per": false,
          "pair": "—",
          "id": "A2",
          "name": "Remo sentado en máquina/polea",
          "region": "upper",
          "muscles": "Dorsal ancho, romboides, trapecio medio y bíceps.",
          "sets": [
            2,
            3
          ],
          "reps": [
            8,
            12
          ],
          "rest": 105,
          "tempo": [
            2,
            0,
            1,
            1
          ],
          "anim": "seatedrow",
          "step": 2.5,
          "cue": "Por qué este ejercicio: conserva fuerza de tirón y musculatura de la espalda con mucha estabilidad. Cómo: tronco quieto, hombros lejos de las orejas y codos hacia atrás.",
          "err": [
            "Balancear el tronco para mover más peso",
            "Encoger los hombros",
            "Dejar volver la carga de golpe"
          ],
          "alt": "Si esa máquina concreta te resulta incómoda, ajusta el asiento o usa una polea sentada con la misma trayectoria.",
          "video": "https://www.youtube.com/watch?v=JtTusrYzAos"
        },
        {
          "per": false,
          "pair": "—",
          "id": "A3",
          "name": "Empuje de pecho en máquina",
          "region": "upper",
          "muscles": "Pectoral, tríceps y deltoide anterior.",
          "sets": [
            2,
            3
          ],
          "reps": [
            8,
            12
          ],
          "rest": 105,
          "tempo": [
            3,
            0,
            1,
            0
          ],
          "anim": "chestpress_machine",
          "step": 2.5,
          "cue": "Por qué este ejercicio: entrena el empuje del tren superior sin exigirte estabilizar dos pesos independientes. Cómo: espalda apoyada, muñecas neutras y recorrido cómodo.",
          "err": [
            "Separar la espalda del apoyo",
            "Bajar más de lo que el hombro tolera",
            "Acelerar las últimas repeticiones para terminar"
          ],
          "alt": "Ajusta la altura del asiento para que las asas queden aproximadamente a la altura media del pecho.",
          "video": "https://www.youtube.com/watch?v=d-gwsl5BlMQ"
        },
        {
          "per": false,
          "pair": "—",
          "id": "A4",
          "name": "Flexión de rodilla en máquina",
          "region": "lower",
          "muscles": "Isquiotibiales.",
          "sets": [
            2,
            3
          ],
          "reps": [
            10,
            12
          ],
          "rest": 90,
          "tempo": [
            2,
            0,
            1,
            1
          ],
          "anim": "hamcurl",
          "step": 2.5,
          "cue": "Por qué este ejercicio: da trabajo directo a los isquiotibiales con una carga muy fácil de regular. Cómo: mueve solo la rodilla, mantén la cadera estable y controla la vuelta.",
          "err": [
            "Impulsarte con la cadera",
            "Devolver el peso sin control",
            "Forzar un rango que aumente la molestia de los isquiotibiales"
          ],
          "alt": "Si los isquiotibiales están más sensibles de lo normal, reduce carga y recorrido; si la molestia aumenta, detente.",
          "video": "https://www.youtube.com/watch?v=CBCPBnMzsMI"
        },
        {
          "per": false,
          "pair": "—",
          "id": "A5",
          "name": "Elevación de gemelos",
          "region": "lower",
          "muscles": "Gastrocnemio y sóleo.",
          "sets": [
            2,
            2
          ],
          "reps": [
            10,
            15
          ],
          "rest": 75,
          "tempo": [
            3,
            0,
            1,
            1
          ],
          "anim": "calf",
          "step": 2.5,
          "cue": "Por qué este ejercicio: los gemelos contribuyen a caminar, estabilizarte e impulsarte. Cómo: sube de forma controlada, haz una pausa y baja sin rebotar.",
          "err": [
            "Hacer rebotes rápidos",
            "Perder el equilibrio por querer usar demasiado peso",
            "Recortar el recorrido cuando todavía puedes controlarlo"
          ],
          "alt": "Hazlo con un apoyo estable o en máquina si te resulta más cómodo.",
          "video": "https://www.youtube.com/watch?v=XvHhG4E4tDo"
        },
        {
          "per": true,
          "pair": "—",
          "id": "A6",
          "name": "Antirrotación Pallof",
          "region": "core",
          "muscles": "Musculatura profunda del tronco y oblicuos en función antirrotación.",
          "sets": [
            2,
            2
          ],
          "reps": [
            8,
            10
          ],
          "rest": 60,
          "tempo": [
            2,
            1,
            2,
            0
          ],
          "anim": "pallof",
          "step": 1.25,
          "cue": "Por qué este ejercicio: entrena el tronco para resistir giros y transferir fuerza entre piernas y brazos. Cómo: pelvis quieta, brazos al frente y vuelve sin girarte.",
          "err": [
            "Girarte hacia la polea",
            "Subir los hombros",
            "Usar tanta carga que pierdes la postura"
          ],
          "alt": "Acércate a la polea o reduce la carga si no puedes mantener el tronco quieto.",
          "video": "https://www.youtube.com/watch?v=lCeRh2n0hTw"
        }
      ]
    },
    "B": {
      "key": "B",
      "title": "Sesión B",
      "sub": "Función y fuerza: levantarse, piernas, tirón y cadera",
      "pairs": "Sin superseries: priorizamos calidad y recuperación.",
      "ex": [
        {
          "per": false,
          "pair": "—",
          "id": "B1",
          "name": "Sentarse y levantarse desde banco alto",
          "region": "lower",
          "muscles": "Cuádriceps, glúteos y musculatura estabilizadora de cadera.",
          "sets": [
            2,
            2
          ],
          "reps": [
            5,
            5
          ],
          "rest": 75,
          "tempo": [
            2,
            0,
            1,
            0
          ],
          "anim": "sitstand",
          "step": 0,
          "qualitativeProgress": true,
          "progressHint": "Mantén el peso corporal. Desde la semana 2, si la rodilla responde bien, progresa haciendo la subida con más intención de velocidad, no añadiendo carga.",
          "cue": "Por qué este ejercicio: levantarse de una silla es una habilidad directamente relacionada con la autonomía. Semana 1: movimiento cómodo y controlado. Desde la semana 2, si la rodilla responde bien, levántate con intención de hacerlo rápido pero siéntate de forma controlada.",
          "err": [
            "Dejarte caer sobre el banco",
            "Ayudarte con las manos si no es necesario",
            "Buscar velocidad si aparece dolor o pierdes el control"
          ],
          "alt": "Aumenta la altura del banco o usa un apoyo ligero con las manos si eso te permite una ejecución segura.",
          "video": "https://www.youtube.com/watch?v=HbezV0pMQyA"
        },
        {
          "per": false,
          "pair": "—",
          "id": "B2",
          "name": "Prensa de piernas",
          "region": "lower",
          "muscles": "Cuádriceps, glúteos y aductores.",
          "sets": [
            2,
            3
          ],
          "reps": [
            10,
            12
          ],
          "rest": 120,
          "tempo": [
            3,
            0,
            1,
            0
          ],
          "anim": "legpress",
          "step": 5,
          "cue": "Por qué la repetimos: dos exposiciones semanales nos permiten construir fuerza de piernas sin tener que aprender un segundo patrón complejo. Cómo: usa el mismo rango cómodo y la misma colocación que te funcionan en la sesión A.",
          "err": [
            "Cambiar la posición solo para mover más peso",
            "Forzar profundidad",
            "Hacer las últimas repeticiones con rebote"
          ],
          "alt": "Si hoy vienes con las piernas cargadas del voleibol, esta es una de las series que la app puede reducir.",
          "video": "https://www.youtube.com/watch?v=WvLsUYH8v5g"
        },
        {
          "per": false,
          "pair": "—",
          "id": "B3",
          "name": "Jalón al pecho",
          "region": "upper",
          "muscles": "Dorsal ancho, bíceps y musculatura escapular.",
          "sets": [
            2,
            3
          ],
          "reps": [
            8,
            12
          ],
          "rest": 105,
          "tempo": [
            2,
            0,
            1,
            1
          ],
          "anim": "pulldown",
          "step": 2.5,
          "cue": "Por qué este ejercicio: completa el trabajo de espalda con un tirón vertical estable. Cómo: pecho alto, codos hacia abajo y tronco sin balanceo.",
          "err": [
            "Echar el cuerpo hacia atrás",
            "Encoger los hombros",
            "Hacer cada repetición más corta"
          ],
          "alt": "Reduce la carga si necesitas mover el tronco para completar las repeticiones.",
          "video": "https://www.youtube.com/watch?v=_BHmgCgPWFk"
        },
        {
          "per": false,
          "pair": "—",
          "id": "B4",
          "name": "Empuje de cadera en máquina",
          "region": "lower",
          "muscles": "Glúteo mayor y extensores de cadera.",
          "sets": [
            2,
            3
          ],
          "reps": [
            8,
            12
          ],
          "rest": 105,
          "tempo": [
            2,
            0,
            1,
            1
          ],
          "anim": "hipthrust_machine",
          "step": 5,
          "cue": "Por qué este ejercicio: refuerza los extensores de cadera, importantes para caminar, subir escaleras y producir fuerza, con poca demanda técnica. Cómo: sube con los glúteos y evita arquear la zona lumbar.",
          "err": [
            "Arquear la espalda para subir más",
            "Empujar solo con la punta de los pies",
            "Dejarte caer en la bajada"
          ],
          "alt": "Si no hay una máquina específica, usa la variante guiada disponible en el gimnasio antes de pasar a una barra libre.",
          "video": "https://www.youtube.com/watch?v=9XkmT9J83So"
        },
        {
          "per": false,
          "pair": "—",
          "id": "B5",
          "name": "Empuje de pecho en máquina",
          "region": "upper",
          "muscles": "Pectoral, tríceps y deltoide anterior.",
          "sets": [
            2,
            2
          ],
          "reps": [
            10,
            12
          ],
          "rest": 90,
          "tempo": [
            3,
            0,
            1,
            0
          ],
          "anim": "chestpress_machine",
          "step": 2.5,
          "cue": "Por qué lo repetimos: una segunda dosis pequeña de empuje ayuda a conservar fuerza y masa muscular del tren superior sin complicar la técnica. Cómo: mantén exactamente los mismos puntos de apoyo que en la sesión A.",
          "err": [
            "Subir la carga antes de dominar el rango",
            "Separar hombros o espalda del apoyo",
            "Bloquear los codos bruscamente"
          ],
          "alt": "Mantén la carga de la sesión A si hoy no llegas al rango con el RIR indicado.",
          "video": "https://www.youtube.com/watch?v=d-gwsl5BlMQ"
        },
        {
          "per": true,
          "pair": "—",
          "id": "B6",
          "name": "Extensión alterna de brazo y pierna tumbada",
          "region": "core",
          "muscles": "Abdominales y estabilizadores profundos del tronco.",
          "sets": [
            2,
            2
          ],
          "reps": [
            6,
            8
          ],
          "rest": 60,
          "tempo": [
            2,
            0,
            2,
            0
          ],
          "anim": "deadbug",
          "step": 0,
          "qualitativeProgress": true,
          "progressHint": "Mantén el peso corporal y progresa repeticiones o recorrido solo si puedes conservar el tronco estable y respirar con normalidad.",
          "cue": "Por qué este ejercicio: trabaja el control del tronco mientras mueves brazos y piernas, sin necesidad de fatigar la columna. Cómo: zona lumbar estable y movimiento lento, alternando lados.",
          "err": [
            "Arquear la zona lumbar",
            "Moverte demasiado rápido",
            "Alargar tanto la pierna que pierdes el control"
          ],
          "alt": "Reduce el recorrido de la pierna o mueve solo brazos o piernas por separado hasta que puedas mantener el tronco estable.",
          "video": "https://www.youtube.com/watch?v=jdiE9CQDebo"
        }
      ]
    }
  },
  "cardio": [],
  "microcicles": [
    {
      "n": 1,
      "name": "Calibración",
      "head": "Estas dos sesiones buscan la carga adecuada, no tu máximo.",
      "what": [
        "2 series por ejercicio",
        "RIR 4 en los ejercicios de fuerza",
        "Sin cardio extra programado en este primer bloque"
      ],
      "why": "Estás al comienzo del entrenamiento de fuerza. RIR 4 NO significa entrenar flojo: permite aprender el movimiento, encontrar cargas y acumular estímulo con poca fatiga.",
      "notice": "Debes terminar pensando «podría haber hecho más». Esa sensación es intencionada.",
      "avoid": "Añadir peso solo para terminar cansada. El cansancio no es la medida de si la sesión ha funcionado."
    },
    {
      "n": 2,
      "name": "Consolidación",
      "head": "Ya conoces los ejercicios: ahora la serie es un poco más exigente.",
      "what": [
        "2 series por ejercicio",
        "RIR 3",
        "Progresa primero repeticiones; después, el menor incremento disponible"
      ],
      "why": "Seguimos sin llegar al límite porque queremos repetir una buena técnica y conservar recuperación para el voleibol y la vida diaria.",
      "notice": "Si llegas al máximo de repeticiones con un RIR 3 real, en la próxima exposición puedes subir un poco la carga.",
      "avoid": "Cambiar ejercicios porque ya no son nuevos. Repetirlos nos permite saber si realmente mejoras."
    },
    {
      "n": 3,
      "name": "Construcción",
      "head": "Añadimos volumen solo si puedes recuperarlo.",
      "what": [
        "3 series en los cuatro primeros ejercicios; 2 en los accesorios",
        "RIR 2-3 en los principales; RIR 3 en los accesorios",
        "La carga de voleibol puede reducir solo el tren inferior"
      ],
      "why": "Ahora ya tienes dos semanas de práctica. Añadimos una tercera serie donde más retorno puede aportar, pero no en todo.",
      "notice": "Dormir peor de lo habitual o una semana de voleibol exigente son motivos para mantener o adaptar, no para compensar.",
      "avoid": "Pensar que más series siempre es mejor."
    },
    {
      "n": 4,
      "name": "Descarga y revisión",
      "head": "Quitamos volumen y recuperamos margen antes del siguiente bloque.",
      "what": [
        "Volvemos a 2 series por ejercicio: aproximadamente un tercio menos de volumen en los principales",
        "RIR 3-4",
        "Revisamos cargas, rodilla/isquiotibiales, sentarse y levantarse desde banco alto y sensaciones en el voleibol"
      ],
      "why": "La semana más fácil no es tiempo perdido. Reducir temporalmente el volumen y la proximidad al fallo ayuda a bajar la fatiga y nos permite ver qué se ha consolidado.",
      "notice": "Compara con la semana 1 a un esfuerzo parecido; no hacemos ninguna prueba máxima.",
      "avoid": "Intentar «compensar» la descarga añadiendo series o entrenando al límite."
    }
  ],
  "onboarding": [
    {
      "eyebrow": "Bienvenida",
      "title": "Por qué este plan está hecho así",
      "body": [
        "El objetivo principal no es cansarte ni perseguir un cambio estético rápido. Es construir una reserva de fuerza y masa muscular que te ayude a seguir haciendo las cosas que haces hoy —trabajar, moverte, jugar a voleibol y pádel— con el máximo margen posible a medida que pasen los años.",
        "Por eso el programa prioriza fuerza de piernas y cadera, tirones, empujes, capacidad de transportar carga y control del tronco."
      ],
      "list": [
        "1 · Conservar y aumentar fuerza",
        "2 · Proteger masa muscular",
        "3 · Mantener capacidad para levantarte, caminar, subir escaleras y cargar cosas",
        "4 · Seguir haciendo deporte sin que el gimnasio te reste recuperación",
        "5 · Aprender a medir el esfuerzo en lugar de valorar el entrenamiento solo por el cansancio"
      ],
      "foot": "El éxito del bloque es ser más capaz, no salir más destrozada de cada sesión."
    },
    {
      "eyebrow": "La frecuencia",
      "title": "Por qué solo dos sesiones de fuerza",
      "body": [
        "Dos sesiones de cuerpo completo permiten entrenar los grandes grupos musculares dos veces por semana y encajan con el compromiso real que has indicado.",
        "Además, el voleibol y el pádel también cargan las piernas y consumen recuperación. Añadir más días de fuerza no sería automáticamente mejor si después no puedes asimilarlos."
      ],
      "list": [
        "Sesión A y sesión B, siempre en orden",
        "Idealmente deja al menos un día sin fuerza entre ellas",
        "No recuperes una sesión perdida haciendo dos seguidas"
      ],
      "foot": "La constancia durante meses es mucho más importante que hacer una semana perfecta y abandonar las dos siguientes."
    },
    {
      "eyebrow": "El mesociclo",
      "title": "Cuatro semanas, cuatro trabajos diferentes",
      "kind": "weeks",
      "body": [
        "No todas las semanas deben parecer igual de duras. Cada bloque tiene una función concreta y la carga solo sube cuando ya tenemos información para hacerlo."
      ],
      "foot": "Si una semana el voleibol es especialmente exigente, mantener las cargas también puede ser progresar: significa que el gimnasio no está compitiendo con el resto de tu vida."
    },
    {
      "eyebrow": "El RIR",
      "title": "RIR 4 no significa que no hayas entrenado",
      "body": [
        "RIR es el número aproximado de repeticiones que todavía podrías hacer con buena técnica cuando terminas una serie. RIR 4 significa parar cuando calculas que todavía podrías hacer unas cuatro.",
        "Al principio esto puede dejarte la sensación de que «todavía podía hacer más». Es intencionado. No usamos el cansancio como prueba de calidad: usamos carga, repeticiones, técnica y evolución entre sesiones."
      ],
      "list": [
        "Semana 1 · RIR 4",
        "Semana 2 · RIR 3",
        "Semana 3 · RIR 2-3 en los principales",
        "Semana 4 · RIR 3-4 y menos volumen"
      ],
      "foot": "Hoy el objetivo no es demostrar la fuerza que tienes. Es construir la fuerza que tendrás."
    },
    {
      "eyebrow": "La progresión",
      "title": "Cuándo subimos el peso y cuándo no",
      "body": [
        "Trabajaremos con rangos de repeticiones. Primero intentas hacer más repeticiones con la misma carga y el RIR indicado. Cuando llegas al máximo del rango manteniendo ese margen, entonces subimos un poco el peso.",
        "Si has dormido peor, vienes de un voleibol exigente o la rodilla está más sensible, no tienes ninguna obligación de progresar ese día."
      ],
      "list": [
        "Ejemplo: 8-10 reps · hoy 8 y 8 → mantén",
        "9 y 9 → mantén",
        "10 y 10 con el RIR correcto → pequeño aumento la próxima vez"
      ],
      "foot": "No hay premio por subir peso antes de tiempo. La progresión útil es la que puedes repetir."
    },
    {
      "eyebrow": "El voleibol y el pádel",
      "title": "El deporte también cuenta como carga",
      "body": [
        "El voleibol incluye saltos, frenadas y cambios de dirección; el pádel también añade desplazamientos y fatiga. Esa carga sí modifica lo que hacemos en el gimnasio.",
        "En este primer mesociclo no añadimos cardio estructurado porque primero queremos cuantificar bien la carga deportiva real y priorizar la adaptación a la fuerza. Si el voleibol desaparece o la carga aeróbica resulta insuficiente, lo revisaremos en el siguiente bloque."
      ],
      "list": [
        "Partido o voleibol exigente en las próximas 24 h → menos volumen de piernas",
        "Piernas especialmente cargadas → mantenemos el tren superior y adaptamos el tren inferior",
        "La reducción por voleibol no significa que la sesión «cuente menos»"
      ],
      "foot": "Hacer menos un día para poder rendir y recuperar mejor es ajustar la carga, no saltarse el programa."
    },
    {
      "eyebrow": "Las rodillas",
      "title": "El rango cómodo forma parte del programa",
      "body": [
        "Has explicado que correr y hacer sentadillas puede acabar molestándote un poco las rodillas. Por eso no hay ninguna profundidad obligatoria ni ninguna repetición que deba completarse con dolor creciente.",
        "La carga se gana manteniendo un movimiento tolerable y repetible. Si el dolor sube claramente respecto a lo habitual, no intentamos «pasar por encima»."
      ],
      "list": [
        "Dolor 0-2/10 y estable: continúa con control",
        "Dolor 3/10: día amarillo, menos carga y más margen",
        "Dolor 4/10 o más, o empeoramiento claro: no hacemos la sesión de fuerza y se revisa"
      ],
      "foot": "El dolor no es una medalla ni una prueba de que el músculo esté trabajando mejor."
    },
    {
      "eyebrow": "La recuperación",
      "title": "Dormir poco cambia la sesión, no el objetivo",
      "body": [
        "Has indicado que habitualmente duermes menos de cinco horas. Por eso no te compararemos cada día con un umbral genérico de 7-8 horas.",
        "El check-in busca sobre todo si has dormido claramente peor de lo habitual, cómo está la energía, el dolor y la carga deportiva."
      ],
      "lights": true,
      "foot": "Un día amarillo no es una sesión fallida. Es una forma de mantener el hábito y seguir sumando sin exigir al cuerpo lo que hoy no puede recuperar."
    },
    {
      "eyebrow": "Antes de empezar",
      "title": "Una confirmación de salud pendiente",
      "body": [
        "En el cuestionario consta una litotricia percutánea renal reciente. El plan presupone que ya tienes el alta para hacer ejercicio y que no existe ninguna restricción vigente de esfuerzo o carga.",
        "Si todavía tienes alguna limitación indicada por un profesional sanitario, no inicies el mesociclo hasta que esa información esté aclarada."
      ],
      "foot": "La app no sustituye una valoración sanitaria ni modifica indicaciones médicas."
    },
    {
      "eyebrow": "Potencia funcional",
      "title": "No solo importa tener fuerza: también poder aplicarla rápido",
      "body": [
        "A partir de la semana 2, si la rodilla lo tolera, el ejercicio de sentarse y levantarse desde banco alto se hace con intención de levantarte rápido y sentarte con control.",
        "No es un salto ni un ejercicio explosivo al límite. Es una dosis pequeña para conservar la capacidad de producir fuerza rápidamente, útil para reaccionar, levantarte y moverte con solvencia."
      ],
      "foot": "La velocidad solo se busca si la técnica y la rodilla siguen estables."
    },
    {
      "eyebrow": "El final",
      "title": "Cómo sabremos si ha funcionado",
      "kind": "success",
      "body": [
        "Después de 8 sesiones no buscaremos un récord. Compararemos capacidad, cargas y sensaciones con el inicio del bloque."
      ],
      "foot": "El objetivo es terminar con una base que nos permita construir un segundo mesociclo algo más exigente, no haber agotado todas las opciones en cuatro semanas."
    }
  ],
  "exit": [
    {
      "k": "Adherencia",
      "v": "Completar 8 sesiones de fuerza en orden A → B, adaptando el tren inferior cuando la carga de voleibol lo requiera."
    },
    {
      "k": "Registro",
      "v": "Carga, repeticiones y RIR en al menos el 90% de las series en las que corresponda."
    },
    {
      "k": "Fuerza",
      "v": "Mejorar repeticiones o carga a un RIR similar en al menos 3 patrones principales, sin test de 1RM."
    },
    {
      "k": "Función",
      "v": "Hacer 5 repeticiones de sentarse y levantarse desde banco alto con más control o velocidad percibida en el mismo banco, sin aumentar molestias."
    },
    {
      "k": "Tolerancia",
      "v": "No aumentar de forma sostenida las molestias de rodilla/isquiotibiales ni empeorar la recuperación del voleibol."
    }
  ],
  "semafor": {
    "green": {
      "t": "VERDE",
      "c": "var(--ok)",
      "txt": "Sesión prevista. No hace falta añadir nada aunque hoy te sientas con mucha energía."
    },
    "yellow": {
      "t": "AMARILLO",
      "c": "var(--warn)",
      "txt": "La recuperación general hoy es peor. Reducimos un poco la dosis y dejamos más margen para que sigas sumando sin acumular fatiga."
    },
    "sport": {
      "t": "AMARILLO · CARGA DEPORTIVA",
      "c": "var(--warn)",
      "txt": "El voleibol/pádel ya ha cargado las piernas. Mantendremos el tren superior y reduciremos solo el volumen del tren inferior."
    },
    "red": {
      "t": "ROJO",
      "c": "var(--bad)",
      "txt": "Hoy no toca forzar una sesión. Detente y prioriza recuperar o aclarar el síntoma/restricción antes de continuar."
    }
  },
  "notes": {
    "order": "Dos sesiones de cuerpo completo en orden A → B. Idealmente deja al menos un día sin fuerza entre ellas. El voleibol y el pádel pueden modificar el volumen de piernas, pero no obligan a recortar el tren superior.",
    "noFail": "Ninguna serie a 0 RIR en este mesociclo. El objetivo es construir fuerza y músculo con una dosis que puedas repetir y recuperar, no demostrar esfuerzo terminando cada serie al límite.",
    "noDeadlift": "No hay peso muerto, sentadilla con barra ni presses con mancuernas en este primer bloque. Priorizamos máquinas y patrones estables para que la carga sea fácil de aprender, graduar y repetir.",
    "reduced": "Versión corta: la usamos solo si hoy tienes poco tiempo. Mantiene el calentamiento y los cuatro primeros ejercicios; no es la respuesta a una mala recuperación, porque esa ya la gestiona el semáforo.",
    "postural": "El rango de los ejercicios de piernas se adapta a la rodilla. Un dolor creciente o claramente superior a lo habitual no se compensa con más esfuerzo.",
    "cardioGoal": "En este mesociclo no programamos cardio adicional. Primero cuantificaremos la carga real de voleibol/pádel y priorizaremos la fuerza. En el siguiente bloque decidiremos si conviene añadir trabajo cardiorrespiratorio específico."
  },
  "passos": {
    "W1": [
      "Quédate de pie con un apoyo cerca si lo necesitas.",
      "Marcha en el sitio con pasos pequeños y cómodos.",
      "Mantén el tronco vertical y respira con normalidad.",
      "No busques cansarte: solo activarte."
    ],
    "W2": [
      "Apoya espalda y brazos en la pared tanto como puedas sin forzar.",
      "Desliza lentamente los brazos hacia arriba manteniendo el cuello relajado.",
      "Vuelve hacia abajo con control.",
      "Detente si el hombro pinza o molesta."
    ],
    "W3": [
      "Sujeta la banda con las dos manos a la altura del pecho.",
      "Abre los brazos sin subir los hombros.",
      "Haz una pausa breve cuando la banda se acerque al pecho.",
      "Vuelve lentamente; no buscamos fatiga."
    ],
    "A1": [
      "Ajusta el asiento para poder empezar con las rodillas flexionadas sin que la pelvis se redondee.",
      "Coloca los pies a una anchura cómoda.",
      "Baja la plataforma durante unos 3 segundos hasta el rango que la rodilla tolere bien.",
      "Empuja con todo el pie y mantén las rodillas alineadas.",
      "Termina sin bloquear las rodillas bruscamente."
    ],
    "A2": [
      "Ajusta el asiento para que las asas queden cómodas.",
      "Mantén el tronco estable y los hombros bajos.",
      "Lleva los codos hacia atrás sin balancearte.",
      "Haz una pausa breve al final.",
      "Vuelve lentamente hasta estirar los brazos."
    ],
    "A3": [
      "Ajusta el asiento para que las asas queden a la altura media del pecho.",
      "Apoya espalda y pies.",
      "Deja volver las asas con control.",
      "Empuja sin separar la espalda del apoyo.",
      "Detente en el RIR indicado aunque sientas que podrías continuar."
    ],
    "A4": [
      "Ajusta el rodillo para que quede cómodo sobre la pierna.",
      "Fija la cadera al apoyo.",
      "Flexiona las rodillas sin impulsarte.",
      "Haz una pausa breve.",
      "Vuelve con control hasta el rango cómodo."
    ],
    "A5": [
      "Coloca los pies estables y usa un apoyo si hace falta.",
      "Sube los talones de forma controlada.",
      "Haz una pausa arriba.",
      "Baja lentamente.",
      "Evita rebotar."
    ],
    "A6": [
      "Colócate de lado respecto a la polea.",
      "Sujeta el agarre con las dos manos delante del pecho.",
      "Extiende los brazos sin dejar que el tronco gire.",
      "Haz una pausa de un segundo.",
      "Vuelve y repite antes de cambiar de lado."
    ],
    "B1": [
      "Siéntate en un banco lo bastante alto para que el movimiento sea cómodo.",
      "Pies firmes, ligeramente por detrás de las rodillas.",
      "Inclina un poco el tronco y levántate sin impulsarte con las manos.",
      "Semana 1: control. Desde la semana 2: intenta levantarte rápido si la rodilla está bien.",
      "Siéntate siempre con control."
    ],
    "B2": [
      "Repite la misma configuración de la sesión A.",
      "Baja hasta el rango cómodo.",
      "Mantén rodillas y pies alineados.",
      "Empuja con control.",
      "Si vienes cargada del voleibol, sigue exactamente la reducción que muestre la app."
    ],
    "B3": [
      "Ajusta el soporte de los muslos.",
      "Agarra la barra con una anchura cómoda.",
      "Baja los hombros y lleva los codos hacia abajo.",
      "Acerca la barra a la parte alta del pecho sin echar el cuerpo hacia atrás.",
      "Vuelve arriba de forma controlada."
    ],
    "B4": [
      "Ajusta el apoyo de la máquina sobre la cadera.",
      "Pies firmes y costillas controladas.",
      "Eleva la cadera con los glúteos.",
      "Haz una pausa arriba sin arquear la zona lumbar.",
      "Baja de forma controlada."
    ],
    "B5": [
      "Repite el ajuste del press de la sesión A.",
      "Pies y espalda apoyados.",
      "Deja volver las asas con control.",
      "Empuja sin brusquedad.",
      "No es necesario superar la carga de la sesión A."
    ],
    "B6": [
      "Túmbate boca arriba con caderas y rodillas flexionadas.",
      "Mantén la zona lumbar estable.",
      "Alarga lentamente brazo y pierna contrarios.",
      "Vuelve al centro sin perder la posición.",
      "Alterna lados y reduce el recorrido si arqueas la espalda."
    ]
  },
  "respiracio": {
    "A1": "Inspira antes de bajar y suelta el aire mientras empujas la plataforma.",
    "A2": "Suelta el aire mientras llevas las asas hacia ti e inspira en la vuelta.",
    "A3": "Expira mientras empujas e inspira mientras vuelven las asas.",
    "A4": "Expira al flexionar las rodillas e inspira en la vuelta.",
    "A5": "Expira al subir los talones e inspira al bajar. Respiración continua: no retengas el aire.",
    "A6": "Expira lentamente mientras extiendes los brazos e inspira al volver. Mantén la respiración fluida durante toda la serie: no bloquees el aire para sujetar la posición.",
    "B1": "Inspira sentada y expira mientras te levantas. No contengas el aire, tampoco cuando busques velocidad en la subida.",
    "B2": "Inspira antes de bajar y expira durante el empuje.",
    "B3": "Expira al llevar la barra hacia el pecho e inspira mientras vuelve.",
    "B4": "Expira mientras elevas la cadera e inspira mientras bajas.",
    "B5": "Expira mientras empujas y evita contener el aire durante toda la serie.",
    "B6": "Expira lentamente mientras alargas brazo y pierna e inspira al volver al centro. No bloquees el aire: si lo necesitas para sostener la posición, reduce el recorrido."
  },
  "cardioPassos": [],
  "progressio": {
    "principals": 4,
    "reduida": 4,
    "perExercise": true,
    "groc": {
      "min": 4,
      "label": "4"
    },
    "rir": [
      {
        "main": {
          "min": 4,
          "label": "4"
        },
        "acc": {
          "min": 4,
          "label": "4"
        }
      },
      {
        "main": {
          "min": 3,
          "label": "3"
        },
        "acc": {
          "min": 3,
          "label": "3"
        }
      },
      {
        "main": {
          "min": 2,
          "max": 3,
          "label": "2-3"
        },
        "acc": {
          "min": 3,
          "label": "3"
        }
      },
      {
        "main": {
          "min": 3,
          "max": 4,
          "label": "3-4"
        },
        "acc": {
          "min": 3,
          "max": 4,
          "label": "3-4"
        }
      }
    ]
  },
  "preflight": {
    "title": "Antes de activar el mesociclo",
    "body": "En el cuestionario consta una litotricia percutánea renal reciente. Antes de empezar este plan debes tener el alta para hacer ejercicio y no tener ninguna restricción vigente de esfuerzo o carga relacionada con la intervención.",
    "confirm": "Confirmo que tengo el alta para hacer ejercicio y que no tengo ninguna restricción vigente de esfuerzo o carga relacionada con la intervención."
  },
  "checkin": {
    "defaultSleep": 4.5,
    "sleepYellowBelow": 4,
    "sleepHint": "Valor inicial orientativo: 4,5 h porque en el cuestionario indicaste menos de 5 h habituales. Ajústalo a las horas reales de esta noche. Menos de 4 h es una señal de recuperación peor de lo habitual.",
    "extra": [
      {
        "id": "sportload",
        "label": "Vengo con las piernas especialmente cargadas del voleibol/pádel",
        "cap": "La sesión continúa, pero reduciremos solo el volumen del tren inferior.",
        "alarma": false,
        "adapta": "sport"
      },
      {
        "id": "matchsoon",
        "label": "Tengo partido o una sesión exigente de voleibol en las próximas 24 h",
        "cap": "Protegeremos las piernas para que la fuerza no compita con el rendimiento deportivo.",
        "alarma": false,
        "adapta": "sport"
      },
      {
        "id": "sportheavy",
        "label": "Esta semana ya llevo 2 sesiones de voleibol o un partido especialmente exigente",
        "cap": "Tenemos en cuenta esa carga antes de decidir cuántas series de piernas añadimos.",
        "alarma": false,
        "adapta": "sport"
      },
      {
        "id": "kneeworse",
        "label": "La rodilla o los isquiotibiales están claramente peor de lo habitual",
        "cap": "Si el dolor ha cambiado claramente, no intentamos pasar por encima.",
        "alarma": true
      },
      {
        "id": "medical",
        "label": "Tengo una restricción médica vigente o todavía no tengo autorización para hacer esfuerzos",
        "cap": "Incluye cualquier restricción relacionada con la intervención renal reciente. La sesión queda bloqueada.",
        "alarma": true
      }
    ]
  },
  "textos": {
    "final": "Has completado las 8 sesiones. Revisa Progreso y exporta el registro antes del mesociclo 2: queremos saber qué ha mejorado, qué has tolerado y cómo ha encajado con el voleibol.",
    "objectiuAdherencia": "Objetivo del bloque: 8 de 8 sesiones de fuerza con un registro suficientemente completo para poder ajustar el siguiente mesociclo.",
    "arquitectura": "Arquitectura de las 8 sesiones",
    "criteris": "Criterios de éxito al final del bloque",
    "llindarRegistre": "Umbral del plan: 90% de las series realizadas con carga, repeticiones y RIR registrados.",
    "reduida": "Hoy tengo poco tiempo. Activa esta opción solo para hacer una sesión más corta; la recuperación y el voleibol ya se gestionan automáticamente con el semáforo.",
    "reduidaCurt": "Sesión corta por falta de tiempo: calentamiento + 4 primeros ejercicios. No es una penalización ni una descarga.",
    "diaGroc": "Día amarillo por recuperación: una serie menos en los primeros ejercicios y RIR 4. Hoy mantenemos el estímulo sin perseguir fatiga.",
    "entradaTitol": "Calentamiento general · 5 min",
    "entradaDesc": "Bicicleta, elíptica o caminar en cinta a ritmo fácil. El objetivo es entrar en calor sin cansarte.",
    "duradaSessio": " series de trabajo · 45-60 min aprox.",
    "seriesInici": "2 series",
    "seriesDespres": "3 series en los 4 primeros",
    "seriesIniciLlarg": "2 series por ejercicio",
    "seriesDespresLlarg": "3 series en los 4 primeros ejercicios; 2 en los accesorios",
    "sensFalliment": "Ninguna serie al fallo",
    "ordreNota": "Orden A → B. Los días se adaptan al voleibol, pádel y recuperación.",
    "ordreAjustos": ". El orden A → B y el cambio de bloque se calculan automáticamente según las sesiones completadas.",
    "senseRegistre": "Todavía no hay sesiones registradas. Empieza por la sesión A cuando tengas confirmado que no existe ninguna restricción médica vigente.",
    "cardioFacil": "Sin cardio extra",
    "cardioNota": "No hay cardio estructurado en este mesociclo. Primero cuantificamos la carga real de voleibol/pádel y priorizamos la adaptación a la fuerza.",
    "cardioAlt": "En el mesociclo 2 decidiremos si conviene añadir trabajo cardiorrespiratorio específico.",
    "cardioRpe": "La capacidad cardiovascular se valora principalmente por la tolerancia a la actividad y al voleibol durante este bloque.",
    "diaGrocEsport": "Día amarillo por voleibol/pádel: mantenemos el tren superior y reducimos solo las series de piernas. El deporte ya ha aportado carga al tren inferior.",
    "reportDesc": "El informe recoge sesiones de fuerza, cargas, RIR, recuperación, dolor y adaptaciones por voleibol/pádel.",
    "musclesLabel": "Músculos trabajados",
    "reduidaTitol": "Hoy tengo poco tiempo",
    "reviewDesc": "La revisión final compara adherencia, cargas, RIR, tolerancia de rodilla/isquiotibiales, sentarse y levantarse desde banco alto y encaje con el voleibol/pádel. No es una prueba máxima.",
    "dataDesc": "Los datos quedan guardados en el navegador de este dispositivo. Registra la carga que muestra la máquina y, en los ejercicios con peso corporal, solo las repeticiones y el RIR cuando corresponda."
  },
  "fitxa": {
    "restriccions": "Programación conservadora por molestias habituales de rodilla/isquiotibiales: rango de rodilla individualizado, ninguna serie obligatoria al fallo y ajuste del volumen según recuperación y carga deportiva.",
    "material": "Gimnasio comercial con máquinas básicas y pesos libres. En este primer bloque se priorizan máquinas y patrones estables; los pesos libres no son necesarios para progresar.",
    "salut": "Antes de iniciar, hay que confirmar que no existe ninguna restricción médica vigente después del procedimiento reciente declarado. La programación no sustituye una valoración sanitaria.",
    "disponibilitat": "2 días reales de fuerza por semana, 45-60 min, horarios regulares. Actividad habitual de 6.000-8.000 pasos y práctica de voleibol/pádel; el voleibol disminuye en verano.",
    "objectius": "Prioridad del servicio: preservar/aumentar fuerza y masa muscular, mantener capacidad funcional y prolongar independencia. Objetivos declarados adicionales: fuerza para el trabajo y la vida diaria y mejor rendimiento en deportes de equipo.",
    "pendent": "Para el mesociclo 2: revisar rodilla/isquiotibiales, carga real de voleibol/pádel, evolución de sentarse y levantarse desde banco alto, calidad del RIR, progresión de cargas y si conviene añadir trabajo cardiorrespiratorio específico."
  },
  "cooldown": [
    {
      "id": "C1",
      "name": "Respiración y caminata suave",
      "dose": "1-2 min",
      "why": "Bajar progresivamente el ritmo antes de salir del gimnasio."
    },
    {
      "id": "C2",
      "name": "Estiramiento suave de gemelos",
      "dose": "20-30 s por lado",
      "why": "Por preferencia y sensación de movilidad; no hace falta buscar dolor ni forzar el rango.",
      "video": "https://www.youtube.com/watch?v=vif647t0gBA"
    },
    {
      "id": "C3",
      "name": "Estiramiento suave de flexores de cadera",
      "dose": "20-30 s por lado",
      "why": "Movimiento cómodo, sin rebotes.",
      "video": "https://www.youtube.com/watch?v=Bqa96xgfM2E"
    },
    {
      "id": "C4",
      "name": "Apertura de pecho / dorsal",
      "dose": "20-30 s",
      "why": "Vuelta a la calma tranquila. Los estiramientos no son una prueba de flexibilidad.",
      "video": "https://www.youtube.com/watch?v=d0AUfld0vZU"
    }
  ]
};
window.ALE_CLIENT.etiquetaBloc = function (n, bloc) { return 'Semana ' + n + ' de ' + this.blocs.length + ' · ' + bloc.name; };
